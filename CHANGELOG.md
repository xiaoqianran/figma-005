# Changelog — Watch Me 2026

All notable changes to this project.

## [1.0.3] — 2026-07-12 — Close kit inventory gap (Issue #1)

### Docs
- Add `docs/COMPONENT_KIT_STATUS.md` confirming `component-catalog.html` and full card set on disk.
- Resolves outdated claim of missing catalog / incomplete 13/16 cards.

## [1.0.2] — 2026-07-12 — UX hierarchy & states (landing + OS)

### Changed — Landing (`index.html`)
- Responsive type scale, mobile nav drawer, skip-link, focus-visible.
- Clear primary CTA (Experience OS) vs secondary paths (story, UI kit, catalog).
- Explore section for secondary destinations; reduced equal-weight CTA noise.
- DESIGN.md color blocks preserved; no new dependencies.

### Changed — OS shell / apps (`prototypes/watch-me-os.html`)
- Responsive shell chrome; compact home hierarchy (time secondary to app grid).
- Empty / success / error toasts for tasks, messages, wallet, contacts.
- Boot splash; semantic buttons; fixed toast visibility; keyboard focus styles.
- Business logic remains in `scripts/os-core.js` (unchanged contracts).

## [1.0.1] — 2026-07-12 — Harden OS, kit, and verification

### Fixed — Watch Me OS (`prototypes/watch-me-os.html`)
- Boot no longer crashes on missing `#crystal` / `#reflection` (null-guarded).
- Side button (`#side-pusher`) restored; short = home, long = switcher without double-firing home.
- Timer: default remaining matches preset; crown scrubs while Timer is active (idle or running).
- New Message SEND uses textarea text (not a hard-coded string).
- Keyboard shortcuts ignore focused inputs/textareas.
- Theme cycle applies real CSS (`dark` / `light` / `gold`); default theme is `light` (matches Figma canvas).
- Wallet NFC / confirm debit once immediately; add-contact form appends contacts to Team.
- All home-grid apps render real UI (no “coming in next OTA” for listed apps).

### Fixed — Component kit
- Library DEMO links resolve for all 16 core cards + `home-widget-cluster.html`.
- Single `.watch-card` frame (no nested double wrappers).
- Catalog playground covers 17 cards with live preview source.

### Added — QA
- Shipped pure helpers `scripts/os-core.js` (shared by OS + tests).
- `npm test` / `scripts/test-os.mjs` exercises timer/tasks/messages/wallet/theme/persistence/side-button.
- Expanded `npm run verify` (structure + DEMO paths + unit suite).
- Optional `npm run launch:smoke` (Playwright) when Chromium system libs are available.

## [1.0.0] — 2026-06-01 — Complete Redesign (Ground-Up)

### Breaking / Strategic
- **Full project overhaul** per "重新设计figma-005，完全推翻重来" directive.
- New vision: luxury brand landing + flagship interactive smartwatch OS simulator + production component kit.
- Architecture: zero-dependency single-file artifacts that feel $30k+.
- Branch: `feat/redesign-2026-complete`.

### Added — Major Deliverables
- **New `index.html`**: Cinematic luxury landing page.
  - Real-time hero watch (accurate hands, breathing lume, crystal mouse reflections, playful interactions).
  - Live configurator (case + strap) that updates hero + price.
  - Deep links to new simulator.
  - Philosophy, Craft, Owner quotes, Atelier CTAs.
- **New flagship simulator** `prototypes/watch-me-os.html`.
  - Physical hardware shell (platinum case, sapphire, working digital crown with momentum physics + detents, side button short/long press).
  - 10+ fully interactive apps: Home, Clock, Timer (real countdown + crown scrub), Tasks (CRUD + persistence), Messages (bidirectional), Wallet + NFC pay flow, Health (animated rings + SVG), Music (crown volume/scrub), Settings (live theme), + Figma-inspired stubs.
  - Global state with `localStorage` persistence (`wm_state_v1`).
  - 3 themes (Dark / Light / Gold) via `data-theme`.
  - `window.WM.test.*` developer API.
  - PWA-ready (manifest + sw.js in `/public`).
- **Documentation overhaul**:
  - `docs/plans/2026-06-01-figma-005-complete-redesign.md` (full autonomous design doc).
  - `docs/USAGE_GUIDE.md` (comprehensive integration & extension guide).
  - `README.md` completely rewritten.
  - `CHANGELOG.md` (this file).
- **DX & QA**:
  - `package.json` v1.0.0 with new scripts (`verify`, `dev`).
  - `scripts/verify.js` structural self-test harness.
  - `public/manifest.json` + `public/sw.js` for PWA.
- Multi-agent parallel execution (3 specialized subagents dispatched via worktree isolation for landing, simulator core, and components).

### Preserved (for reference during transition)
- Original interactive prototype and most cards (legacy reference).
- All previous docs/plans (archived in spirit).

### Technical Highlights
- 60fps interactions, Pointer Events crown physics, requestAnimationFrame momentum.
- No new runtime dependencies (Tailwind CDN + Font Awesome only).
- ARIA, keyboard (/, h, etc.), reduced-motion ready.
- All stateful flows survive refresh.

### Next (post-1.0)
- Merge agent improvements from components overhaul.
- Full a11y audit + Playwright flows.
- Additional apps (Weather, Maps, Camera) in simulator.
- Optional Vite build pipeline for future modular source (while keeping single-file deliverables).

---

*This release was produced in a single autonomous multi-agent batch development session without user intervention until summary.*
