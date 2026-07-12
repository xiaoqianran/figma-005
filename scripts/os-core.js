/**
 * Watch Me OS — pure state helpers (shipped logic).
 * Used by prototypes/watch-me-os.html and scripts/test-os.mjs / verify.js.
 * Zero DOM; callers wire UI and persistence.
 */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.WMCore = factory();
  }
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  'use strict';

  const THEMES = ['dark', 'light', 'gold'];
  const NFC_AMOUNT = 42;
  const CONFIRM_TX_AMOUNT = 180;

  function createDefaultState() {
    return {
      currentApp: 'home',
      theme: 'light',
      battery: 87,
      time: { h: 9, m: 41 },
      notifications: [],
      tasks: [
        { id: 1, text: 'Drink 2 liters of water', done: false, due: 'Today' },
        { id: 2, text: 'Call grandma at 8 AM', done: true, due: 'Today' },
        { id: 3, text: 'Finish quarterly report', done: false, due: 'Tomorrow' }
      ],
      messages: [
        { id: 1, from: 'Sarah Chen', text: 'Dinner at 7?', time: '09:12', me: false },
        { id: 2, from: 'You', text: 'Perfect, see you then', time: '09:14', me: true }
      ],
      contacts: [],
      timer: { remaining: 300, running: false, preset: 300 },
      health: { steps: 7420, move: 68, exercise: 41, stand: 12 },
      music: { playing: false, track: 'Nocturne in C#', progress: 42, volume: 70 },
      wallet: { balance: 2847.5, cards: 2 },
      prefs: { haptics: true, reduceMotion: false }
    };
  }

  function formatTime(sec) {
    const s = Math.max(0, Math.floor(Number(sec) || 0));
    const m = Math.floor(s / 60);
    const r = s % 60;
    return `${String(m).padStart(2, '0')}:${String(r).padStart(2, '0')}`;
  }

  /** Display seconds while idle (remaining if set, else preset). */
  function timerDisplaySeconds(timer) {
    if (!timer) return 0;
    if (timer.running) return Math.max(0, timer.remaining | 0);
    const rem = timer.remaining | 0;
    if (rem > 0) return rem;
    return Math.max(0, timer.preset | 0);
  }

  function setTimerPreset(state, sec) {
    const s = Math.max(0, Math.floor(Number(sec) || 0));
    state.timer = { remaining: s, running: false, preset: s };
    return state.timer;
  }

  function toggleTimer(state) {
    const t = state.timer;
    t.running = !t.running;
    if (t.running && (!t.remaining || t.remaining === 0)) {
      t.remaining = t.preset;
    }
    return t;
  }

  function resetTimer(state) {
    state.timer.running = false;
    state.timer.remaining = state.timer.preset;
    return state.timer;
  }

  /** Tick one second; returns true if still running. */
  function tickTimer(state) {
    const t = state.timer;
    if (!t.running) return false;
    t.remaining = Math.max(0, (t.remaining | 0) - 1);
    if (t.remaining <= 0) {
      t.running = false;
      t.remaining = 0;
      return false;
    }
    return true;
  }

  /**
   * Crown scrub on timer — works while Timer app is active (running or idle).
   * When idle with remaining 0, seeds from preset first.
   */
  function scrubTimer(state, delta) {
    const t = state.timer;
    if ((!t.remaining || t.remaining === 0) && !t.running) {
      t.remaining = t.preset | 0;
    }
    t.remaining = Math.max(0, (t.remaining | 0) + Math.round(Number(delta) || 0));
    return t.remaining;
  }

  function addTask(state, text) {
    const value = String(text || '').trim();
    if (!value) return null;
    const task = { id: Date.now(), text: value, done: false, due: 'Today' };
    if (!Array.isArray(state.tasks)) state.tasks = [];
    state.tasks.unshift(task);
    return task;
  }

  function toggleTask(state, id) {
    const t = (state.tasks || []).find((x) => x.id === id);
    if (!t) return null;
    t.done = !t.done;
    return t;
  }

  function sendMessage(state, text, from) {
    const value = String(text || '').trim();
    if (!value) return null;
    const msg = {
      id: Date.now(),
      from: from || 'You',
      text: value,
      time: 'now',
      me: from ? from === 'You' : true
    };
    if (!Array.isArray(state.messages)) state.messages = [];
    state.messages.push(msg);
    return msg;
  }

  /** Debit wallet once for NFC tap. Returns new balance or null if skipped. */
  function nfcPay(state, amount) {
    const amt = amount == null ? NFC_AMOUNT : Number(amount);
    if (!state.wallet) state.wallet = { balance: 0, cards: 0 };
    if (!(amt > 0)) return null;
    state.wallet.balance = Math.round((state.wallet.balance - amt) * 100) / 100;
    return state.wallet.balance;
  }

  /** Debit wallet once for confirm-tx flow. */
  function confirmTransaction(state, amount) {
    const amt = amount == null ? CONFIRM_TX_AMOUNT : Number(amount);
    if (!state.wallet) state.wallet = { balance: 0, cards: 0 };
    if (!(amt > 0)) return null;
    state.wallet.balance = Math.round((state.wallet.balance - amt) * 100) / 100;
    return state.wallet.balance;
  }

  function cycleTheme(state) {
    const idx = (THEMES.indexOf(state.theme) + 1) % THEMES.length;
    state.theme = THEMES[idx];
    if (!state.prefs) state.prefs = { haptics: true, reduceMotion: false };
    return state.theme;
  }

  function addContact(state, name) {
    const value = String(name || '').trim();
    if (!value) return null;
    if (!Array.isArray(state.contacts)) state.contacts = [];
    const contact = { id: Date.now(), name: value };
    state.contacts.push(contact);
    return contact;
  }

  const STORAGE_KEY = 'wm_state_v1';

  function serializeState(state) {
    return JSON.stringify(state);
  }

  function mergeLoadedState(defaults, parsed) {
    const next = Object.assign({}, defaults, parsed || {});
    // Ensure timer shape after load
    if (!next.timer || typeof next.timer !== 'object') {
      next.timer = { remaining: 300, running: false, preset: 300 };
    } else {
      if (next.timer.preset == null) next.timer.preset = 300;
      if (next.timer.remaining == null || (next.timer.remaining === 0 && !next.timer.running)) {
        // Idle with 0 remaining → use preset for display durability
        if (!next.timer.running) next.timer.remaining = next.timer.preset;
      }
    }
    if (!Array.isArray(next.tasks)) next.tasks = defaults.tasks.slice();
    if (!Array.isArray(next.messages)) next.messages = defaults.messages.slice();
    if (!Array.isArray(next.contacts)) next.contacts = [];
    if (!next.wallet) next.wallet = { balance: 2847.5, cards: 2 };
    if (!next.prefs) next.prefs = { haptics: true, reduceMotion: false };
    if (!THEMES.includes(next.theme)) next.theme = 'light';
    return next;
  }

  function parseStoredState(json, defaults) {
    if (!json) return Object.assign({}, defaults || createDefaultState());
    try {
      const parsed = JSON.parse(json);
      return mergeLoadedState(defaults || createDefaultState(), parsed);
    } catch (_) {
      return Object.assign({}, defaults || createDefaultState());
    }
  }

  /** Registered app names that home grid / switcher must resolve to real UI. */
  const REGISTERED_APPS = [
    'home',
    'clock',
    'timer',
    'health',
    'messages',
    'tasks',
    'wallet',
    'music',
    'activity',
    'notifications',
    'team',
    'add-contact',
    'new-msg',
    'confirm-tx',
    'settings'
  ];

  const HOME_PAGES = [
    ['clock', 'timer', 'health', 'messages', 'tasks', 'wallet', 'music', 'activity'],
    ['notifications', 'team', 'add-contact', 'new-msg', 'confirm-tx', 'settings']
  ];

  /** Side-button press state machine: short → home, long → switcher, no double-fire. */
  function createSideButtonController(handlers) {
    let pressTimer = null;
    let longFired = false;
    const longMs = (handlers && handlers.longMs) || 620;

    return {
      pointerDown() {
        longFired = false;
        if (pressTimer) clearTimeout(pressTimer);
        pressTimer = setTimeout(() => {
          pressTimer = null;
          longFired = true;
          if (handlers && handlers.onLongPress) handlers.onLongPress();
        }, longMs);
      },
      pointerUp() {
        if (pressTimer) {
          clearTimeout(pressTimer);
          pressTimer = null;
          if (!longFired && handlers && handlers.onShortPress) handlers.onShortPress();
        }
        // long-press already handled; do not short-press on same gesture
      },
      pointerLeave() {
        if (pressTimer) {
          clearTimeout(pressTimer);
          pressTimer = null;
        }
        longFired = false;
      },
      /** Test helper */
      _isArmed() {
        return pressTimer != null;
      },
      _didLongFire() {
        return longFired;
      }
    };
  }

  function isTypingTarget(el) {
    if (!el) return false;
    const tag = (el.tagName || '').toUpperCase();
    if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return true;
    if (el.isContentEditable) return true;
    return false;
  }

  return {
    THEMES,
    NFC_AMOUNT,
    CONFIRM_TX_AMOUNT,
    STORAGE_KEY,
    REGISTERED_APPS,
    HOME_PAGES,
    createDefaultState,
    formatTime,
    timerDisplaySeconds,
    setTimerPreset,
    toggleTimer,
    resetTimer,
    tickTimer,
    scrubTimer,
    addTask,
    toggleTask,
    sendMessage,
    nfcPay,
    confirmTransaction,
    cycleTheme,
    addContact,
    serializeState,
    parseStoredState,
    mergeLoadedState,
    createSideButtonController,
    isTypingTarget
  };
});
