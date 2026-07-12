#!/usr/bin/env node
/**
 * Watch Me OS — unit tests against shipped scripts/os-core.js
 * Run: node scripts/test-os.mjs
 */
import { createRequire } from 'module';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import assert from 'assert';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);
const Core = require('./os-core.js');

let passed = 0;
let failed = 0;

function test(name, fn) {
  try {
    fn();
    console.log(`  ✅ ${name}`);
    passed++;
  } catch (e) {
    console.log(`  ❌ ${name}`);
    console.log(`     ${e.message}`);
    failed++;
  }
}

console.log('🧪 Watch Me OS — shipped core logic tests\n');

// ---- formatTime / timer display ----
test('formatTime pads minutes and seconds', () => {
  assert.strictEqual(Core.formatTime(0), '00:00');
  assert.strictEqual(Core.formatTime(65), '01:05');
  assert.strictEqual(Core.formatTime(300), '05:00');
  assert.strictEqual(Core.formatTime(599), '09:59');
});

test('timerDisplaySeconds uses preset when idle remaining is 0', () => {
  const t = { remaining: 0, running: false, preset: 300 };
  assert.strictEqual(Core.timerDisplaySeconds(t), 300);
});

test('timerDisplaySeconds uses remaining when set idle', () => {
  const t = { remaining: 120, running: false, preset: 300 };
  assert.strictEqual(Core.timerDisplaySeconds(t), 120);
});

test('timerDisplaySeconds uses remaining when running', () => {
  const t = { remaining: 42, running: true, preset: 300 };
  assert.strictEqual(Core.timerDisplaySeconds(t), 42);
});

// ---- timer mutations ----
test('setTimerPreset sets remaining=preset and stops', () => {
  const s = Core.createDefaultState();
  Core.setTimerPreset(s, 180);
  assert.strictEqual(s.timer.preset, 180);
  assert.strictEqual(s.timer.remaining, 180);
  assert.strictEqual(s.timer.running, false);
});

test('toggleTimer start seeds remaining from preset when 0', () => {
  const s = Core.createDefaultState();
  s.timer = { remaining: 0, running: false, preset: 300 };
  Core.toggleTimer(s);
  assert.strictEqual(s.timer.running, true);
  assert.strictEqual(s.timer.remaining, 300);
});

test('toggleTimer pause keeps remaining', () => {
  const s = Core.createDefaultState();
  s.timer = { remaining: 200, running: true, preset: 300 };
  Core.toggleTimer(s);
  assert.strictEqual(s.timer.running, false);
  assert.strictEqual(s.timer.remaining, 200);
});

test('resetTimer restores preset and stops', () => {
  const s = Core.createDefaultState();
  s.timer = { remaining: 11, running: true, preset: 180 };
  Core.resetTimer(s);
  assert.strictEqual(s.timer.running, false);
  assert.strictEqual(s.timer.remaining, 180);
});

test('tickTimer decrements and stops at zero', () => {
  const s = Core.createDefaultState();
  s.timer = { remaining: 2, running: true, preset: 60 };
  assert.strictEqual(Core.tickTimer(s), true);
  assert.strictEqual(s.timer.remaining, 1);
  assert.strictEqual(Core.tickTimer(s), false);
  assert.strictEqual(s.timer.remaining, 0);
  assert.strictEqual(s.timer.running, false);
});

test('scrubTimer works while idle (seeds preset)', () => {
  const s = Core.createDefaultState();
  s.timer = { remaining: 0, running: false, preset: 300 };
  const next = Core.scrubTimer(s, 10);
  assert.ok(next >= 300);
  assert.strictEqual(s.timer.remaining, next);
});

test('scrubTimer works while running', () => {
  const s = Core.createDefaultState();
  s.timer = { remaining: 100, running: true, preset: 300 };
  Core.scrubTimer(s, 5);
  assert.strictEqual(s.timer.remaining, 105);
  Core.scrubTimer(s, -20);
  assert.strictEqual(s.timer.remaining, 85);
});

// ---- tasks ----
test('addTask rejects empty and prepends valid', () => {
  const s = Core.createDefaultState();
  const n0 = s.tasks.length;
  assert.strictEqual(Core.addTask(s, '   '), null);
  const t = Core.addTask(s, 'Buy milk');
  assert.ok(t);
  assert.strictEqual(t.text, 'Buy milk');
  assert.strictEqual(t.done, false);
  assert.strictEqual(s.tasks.length, n0 + 1);
  assert.strictEqual(s.tasks[0].text, 'Buy milk');
});

test('toggleTask flips done', () => {
  const s = Core.createDefaultState();
  const id = s.tasks[0].id;
  const before = s.tasks[0].done;
  const t = Core.toggleTask(s, id);
  assert.strictEqual(t.done, !before);
  Core.toggleTask(s, id);
  assert.strictEqual(s.tasks[0].done, before);
});

// ---- messages ----
test('sendMessage uses user text (not hard-coded)', () => {
  const s = Core.createDefaultState();
  const n0 = s.messages.length;
  assert.strictEqual(Core.sendMessage(s, ''), null);
  const m = Core.sendMessage(s, 'Hello atelier');
  assert.ok(m);
  assert.strictEqual(m.text, 'Hello atelier');
  assert.strictEqual(m.from, 'You');
  assert.strictEqual(m.me, true);
  assert.strictEqual(s.messages.length, n0 + 1);
  assert.strictEqual(s.messages[s.messages.length - 1].text, 'Hello atelier');
});

// ---- wallet ----
test('nfcPay debits NFC_AMOUNT once', () => {
  const s = Core.createDefaultState();
  const before = s.wallet.balance;
  const after = Core.nfcPay(s);
  assert.strictEqual(after, Math.round((before - Core.NFC_AMOUNT) * 100) / 100);
  assert.strictEqual(s.wallet.balance, after);
});

test('confirmTransaction debits CONFIRM_TX_AMOUNT once', () => {
  const s = Core.createDefaultState();
  const before = s.wallet.balance;
  const after = Core.confirmTransaction(s);
  assert.strictEqual(after, Math.round((before - Core.CONFIRM_TX_AMOUNT) * 100) / 100);
});

// ---- theme ----
test('cycleTheme rotates dark → light → gold → dark', () => {
  const s = Core.createDefaultState();
  s.theme = 'dark';
  assert.strictEqual(Core.cycleTheme(s), 'light');
  assert.strictEqual(Core.cycleTheme(s), 'gold');
  assert.strictEqual(Core.cycleTheme(s), 'dark');
});

// ---- contacts ----
test('addContact appends named contact', () => {
  const s = Core.createDefaultState();
  assert.strictEqual(Core.addContact(s, ''), null);
  const c = Core.addContact(s, 'Kira Valakas');
  assert.strictEqual(c.name, 'Kira Valakas');
  assert.strictEqual(s.contacts.length, 1);
});

// ---- persistence ----
test('serialize/parse round-trips wm_state_v1 shape', () => {
  const s = Core.createDefaultState();
  Core.addTask(s, 'Persist me');
  Core.sendMessage(s, 'Round trip msg');
  Core.nfcPay(s);
  Core.cycleTheme(s);
  const json = Core.serializeState(s);
  const loaded = Core.parseStoredState(json, Core.createDefaultState());
  assert.strictEqual(loaded.tasks[0].text, 'Persist me');
  assert.strictEqual(loaded.messages[loaded.messages.length - 1].text, 'Round trip msg');
  assert.strictEqual(loaded.wallet.balance, s.wallet.balance);
  assert.strictEqual(loaded.theme, s.theme);
});

test('parseStoredState seeds idle zero remaining from preset', () => {
  const defaults = Core.createDefaultState();
  const loaded = Core.parseStoredState(
    JSON.stringify({ timer: { remaining: 0, running: false, preset: 600 }, theme: 'gold' }),
    defaults
  );
  assert.strictEqual(loaded.timer.remaining, 600);
  assert.strictEqual(loaded.theme, 'gold');
});

// ---- home registry ----
test('every HOME_PAGES name is in REGISTERED_APPS', () => {
  const flat = Core.HOME_PAGES.flat();
  for (const name of flat) {
    assert.ok(Core.REGISTERED_APPS.includes(name), `missing registration for home app: ${name}`);
  }
});

// ---- side button state machine ----
test('side button short press fires only onShortPress', () => {
  let short = 0;
  let long = 0;
  const ctrl = Core.createSideButtonController({
    longMs: 50,
    onShortPress: () => { short++; },
    onLongPress: () => { long++; }
  });
  ctrl.pointerDown();
  ctrl.pointerUp();
  assert.strictEqual(short, 1);
  assert.strictEqual(long, 0);
});

test('side button long press does not also fire short press', async () => {
  let short = 0;
  let long = 0;
  const ctrl = Core.createSideButtonController({
    longMs: 40,
    onShortPress: () => { short++; },
    onLongPress: () => { long++; }
  });
  ctrl.pointerDown();
  await new Promise((r) => setTimeout(r, 80));
  assert.strictEqual(long, 1);
  ctrl.pointerUp();
  assert.strictEqual(short, 0, 'long press must not trigger short press on release');
});

// ---- keyboard typing guard ----
test('isTypingTarget detects INPUT/TEXTAREA', () => {
  assert.strictEqual(Core.isTypingTarget({ tagName: 'INPUT' }), true);
  assert.strictEqual(Core.isTypingTarget({ tagName: 'TEXTAREA' }), true);
  assert.strictEqual(Core.isTypingTarget({ tagName: 'BODY' }), false);
  assert.strictEqual(Core.isTypingTarget({ tagName: 'DIV', isContentEditable: true }), true);
});

// ---- default state timer ----
test('default state timer remaining equals preset (not zero)', () => {
  const s = Core.createDefaultState();
  assert.ok(s.timer.remaining > 0);
  assert.strictEqual(s.timer.remaining, s.timer.preset);
  assert.strictEqual(s.theme, 'light');
});

console.log(`\n${passed} passed, ${failed} failed`);
process.exit(failed ? 1 : 0);
