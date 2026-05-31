# Figma-005 Complete Redesign — Watch Me 2026

**Date**: 2026-06-01  
**Status**: Active Implementation (Autonomous Multi-Agent Execution)  
**Directive**: Complete overhaul from scratch per user request. No more incremental patches on legacy structure.

## Executive Vision

**Watch Me** is the definitive digital embodiment of a luxury smart instrument — a physical + digital Swiss-grade timepiece experience.

We are throwing away the "good enough" Figma replica + partial landing page. The new figma-005 is:

- A **museum-quality luxury brand site** (index.html) that feels like a $28k timepiece catalog.
- The **most advanced browser-based smartwatch OS simulator** ever built as a self-contained artifact (no backend, no deps beyond CDN).
- A **production-grade, copy-paste component kit** for dark luxury watch UIs that developers and designers can trust.
- Fully documented, tested (in-browser), accessible, persistent, and delightful.

**Core Principle**: Every pixel, every interaction, every transition must feel expensive, precise, and alive.

## Target Architecture (Post-Redesign)

```
figma-005/
├── index.html                 # Cinematic brand landing + one-click simulator launcher (redesigned ground-up)
├── prototypes/
│   └── watch-me-os.html       # The new flagship: 320px physical watch shell + full OS (replaces old interactive-prototype)
├── components/
│   ├── cards/                 # 16+ high-fidelity standalone card demos (complete, interactive, documented)
│   ├── library.html           # Visual gallery + one-click copy + live variants
│   └── catalog.html           # Developer playground (filter, scale, theme, export React/Tailwind snippets)
├── docs/
│   ├── USAGE_GUIDE.md         # New comprehensive component & simulator integration guide
│   ├── API.md                 # Simulator extension points, events, state
│   └── plans/                 # This + archive of old
├── public/                    # (New) PWA assets, manifest, icons (generated inline where possible)
├── src/                       # (New, for future) Optional modular source (watch-os.js, apps/*.js). Current deliverables remain 0-dep single-file
├── package.json               # Enhanced: dev server, lint (html-validate or simple), test:playwright stub, build:static
├── README.md                  # Completely rewritten, beautiful, with screenshots, quickstarts, architecture diagram
└── .github/workflows/         # Already good; enhance deploy with Lighthouse CI stub
```

**Tech Decisions (self-imposed, conventional best practice for this artifact class)**:
- Zero production dependencies. CDN Tailwind 4 + Font Awesome + (optionally tiny Chart.js for health).
- Vanilla JS with clean module pattern inside simulator (IIFE or ES modules served as one file).
- localStorage namespaced `wm_` for all persistence (tasks, messages, health metrics, user prefs, timer state).
- CSS custom properties + data-theme for Dark (default) / Light / Gold modes.
- 60fps where possible (requestAnimationFrame, transform, will-change).
- Respect `prefers-reduced-motion`, `prefers-color-scheme`.
- Mobile-first responsive for landing; simulator fixed-ratio pristine on all viewports (scale to fit).

## Must-Complete Feature Inventory (Prioritized)

### 1. Brand Landing (index.html) — 100% New
- Hero: Cinematic 3D-ish watch (CSS + JS physics) with real-time accurate hands, breathing lume, drag-to-rotate crown, tap to cycle complications (time, date, activity rings, moonphase).
- Sticky nav with elegant "Launch Simulator" that opens full OS in beautiful modal or new view (with hardware frame).
- Product story sections: The Instrument, Craft, The OS (deep link to specific apps), Atelier.
- Interactive "Configure Your Watch" mini (case color, strap, dial — updates live hero + "price").
- Specs table (movement, materials, sensors, OS version).
- Testimonials + "As seen in" with subtle watch face changes on hover.
- Final CTA: "Experience the OS" primary, "Request atelier visit" secondary.
- Footer with legal + "View on Figma" (placeholder) + GitHub.

Success: Feels like Vacheron / AP / high jewelry site but for smart instrument. Lighthouse >=95, no jank.

### 2. Watch Me OS Simulator (new flagship)
- **Hardware Shell**: Ultra-premium square/rectangular modern smartwatch (rounded-square case; rectangular screen sized for 184×224 modules) with multi-layer metallic case, sapphire crystal with real reflections (mouse-follow + gyro on mobile), rotatable crown (drag vertical = scroll digital crown, with haptic feel via vibration if available + spring physics), side button. (Note: implemented form factor updated from original 320x320 assumption to better match rectangular UI modules.)
- **OS Layer**:
  - Boot / wake beautiful animation.
  - App grid (4x4 or customizable) + dock (3 persistent: Clock, Messages, Health).
  - Digital Crown + touch navigation (swipe up for control center, long-press for force touch menu, side button = home or app switcher).
  - Global status bar (time, battery, signal) that apps can influence.
  - Notification system (global queue, banners that don't break flow).
  - Settings app that actually changes OS behavior (accent color, always-on, haptics, language mock).
- **Persistence & Realism**: Everything you do (complete task, send message, change timer, log activity, add contact) survives refresh. Timer runs in background (using visibility + requestIdle or simple interval when visible).
- **16 Figma Screens (exact fidelity + enhanced)**:
  1. New Message / Compose
  2. Voice Message recorder (mic sim + waveform)
  3. Timer (countdown + multiple presets, live)
  4. Wallet (cards + crypto balances + confirm tx flow)
  5. Call (in-call with live timer, mute, speaker, end)
  6. Tasks (CRUD, due dates, timer quick-start)
  7. Messages list + threaded chat (bidirectional, typing, timestamps, persistence)
  8. Notifications center
  9. Activity rings (move, exercise, stand — animated + history)
  10. Team / Contacts ring
  11. Card / NFC tap (simulate payment or key with animation + success)
  12. Add Contact
  13. Clock faces (multiple styles: classic, modular, utility, solar)
  14. Progress / Overall
  15. Confirm Transaction
  16. Home / Widgets + quick actions
- **+6 New Apps (to feel complete OS)**:
  - Health Dashboard (steps, HR, sleep rings, trend charts using Chart.js CDN)
  - Music (playback UI, playlist, now playing with scrubber + crown volume)
  - Weather (beautiful 5-day + current conditions, subtle animations)
  - Maps / Navigation (simplified vector map + turn list, location search)
  - Camera (live preview mock + "capture" gallery that persists)
  - Settings (deep, with toggles that affect simulator: e.g. reduce motion, theme, dev mode showing FPS)

### 3. Component Kit Overhaul
- Every card becomes **pixel-faithful** to original Figma dark theme (use existing tokens: #1b1d21, #7640ef purple, #ff4a8c, gold accents).
- Each standalone HTML: perfect visual + 3-5 meaningful interactions + "Copy Pure HTML" + "Copy Tailwind JSX" buttons.
- New `library.html`: Masonry or grid of all 22+ cards, scale slider (1x-3x), theme switcher (live data-theme), search/filter, Figma node ID tags.
- New `catalog.html`: True playground — left panel controls (props), live preview pane, right panel live HTML/CSS source that updates, export options.
- All cards support data- attributes or simple JS init for embedding.

### 4. Cross-Cutting (Non-Negotiable)
- Full keyboard navigation + screen reader labels in simulator and landing.
- 3 theme modes switchable globally + per simulator.
- PWA: manifest.json, service worker (cache shell + offline "last state" message), install prompt in simulator.
- Performance budget: <120kB main HTML gzipped for landing (simulator can be larger, lazy chunks if needed).
- Error resilience: Every app has empty/loading/error states.
- Analytics stubs (console only) for future.

## Success Criteria (Measurable, Before Handoff)

1. `index.html` opens and feels instantly premium (no layout shift, hero watch runs at 60fps).
2. "Launch Watch Me OS" opens simulator in <200ms perceived, hardware frame pixel-perfect on 320px+, crown drag works with inertia.
3. All 22 apps/screens load without JS error, core flows (send msg, complete task+start timer, pay with card, change settings) work end-to-end and survive 3 refreshes.
4. Component library shows 22 cards, every "Copy" works, catalog playground can mutate 5+ props live.
5. `npm run serve` works, no console warnings in Chrome/FF/Safari (latest).
6. Responsive: landing perfect 320px-4k, simulator usable down to 360px viewport (scales).
7. a11y: axe or manual tab-through + voiceover on key paths passes.
8. Git history: 8-15 clean conventional commits (no "wip", no giant blobs).
9. README + USAGE_GUIDE complete and accurate (someone following it can embed a card or extend an app in <10min).

## Execution Strategy (Multi-Agent Parallel)

We will use subagent spawning + worktree isolation for parallel tracks:

**Track A (Landing + Brand)**: 1-2 agents on index.html redesign + hero interactions.
**Track B (OS Core + Shell)**: Primary agent builds the new simulator shell + navigation + state machine + crown.
**Track C (Apps Implementation)**: Multiple agents each own 3-4 apps (TDD light: manual test scenarios in comments).
**Track D (Components + DX)**: Agent rebuilds library/catalog + all cards.
**Track E (Polish + Infra)**: PWA, themes, a11y, package, README, final verification script.

Each track produces its own commits. Orchestrator (main) merges via worktree when sub-tasks green.

**TDD Lite for HTML/JS**:
- For complex interactions (crown physics, timer, chat): Write inline "scenario tests" as buttons or console commands that assert state.
- Run full flow checklist after each major piece.
- Use `window.__WM_TEST__` hooks for verification.

**Risk Mitigation**:
- Keep old prototypes/ intact during transition (move to /archive/ at end).
- Simulator first version must be usable standalone before integrating into landing.
- If any agent produces >800 lines untested, split further.

## Immediate Next (This Session)

1. Create this plan.
2. Git branch: `feat/redesign-2026-complete`.
3. Spawn 4+ subagents in parallel for Tracks A/B/C/D initial slices (shell + 4 key apps + hero landing skeleton).
4. Continuous integration of results + self-test loop.
5. Only after 80%+ feature complete + zero critical bugs: final polish wave + summary.

**This is not a prototype project anymore. It is the reference implementation.**

---

*Generated autonomously per "complete redesign, no frequent questions" directive. All decisions based on existing artifacts, Figma replica history, luxury watch UI conventions, and modern static web best practices.*

**Post-implementation note (documentation consistency pass)**: The flagship simulator was delivered with square/rectangular hardware (see `prototypes/watch-me-os.html` comments: "SQUARE SMARTWATCH HARDWARE (modern rectangular form to match UI modules)"). This benefits alignment with the 184×224 rectangular component modules. Relevant docs (README, USAGE_GUIDE, DESIGN.md, this plan, index.html) updated to communicate the form factor and rationale. No round-watch descriptions remain in active docs.
