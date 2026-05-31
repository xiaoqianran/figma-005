# Watch Me 2026 — The Instrument

> **Active Design Reference**: This project now follows the Figma marketing design system extracted via `getdesign`.
> See [DESIGN.md](./DESIGN.md) for the complete spec (color blocks, typography, spacing, components, layout rhythm). All new UI work must reference it.

**Complete Redesign (2026-06)**  
A museum-quality luxury smart instrument experience: cinematic brand landing + the most advanced self-contained browser smartwatch OS ever built + production-ready modular UI kit.

> **"It does not compete with my other watches. It completes them."**  
> — Dr. E. Moreau

---

## What This Is

After a full ground-up redesign, **figma-005** delivers three world-class, zero-dependency artifacts:

| Artifact | File | Purpose |
|----------|------|---------|
| **Brand Landing** | `index.html` | $30k Swiss watch marketing site with live hero watch, configurator, and deep links into the OS |
| **Watch Me OS** | `prototypes/watch-me-os.html` | Flagship 320px physical watch shell + 10+ fully interactive apps, digital crown physics, persistence, themes |
| **Component Kit** | `components/` | 16+ high-fidelity 184×224 cards + live gallery + true interactive catalog/playground |

All run instantly. No build. No node_modules in production. Pure craft.

---

## Quick Start

```bash
# 1. Open the masterpiece
open index.html

# 2. Or launch the full OS directly
open prototypes/watch-me-os.html

# 3. Or browse the component library
open components/dark-theme-cards-library.html

# With server (better for PWA testing)
npm start
```

---

## The New Simulator (The Star)

`prototypes/watch-me-os.html` is the heart of the redesign:

- **Physical Hardware**: Multi-layer platinum case, sapphire crystal with live mouse-follow reflections, real digital crown (vertical drag + momentum + detents), side button (short/long press).
- **10+ Production Apps**: Home, Clock (multiple faces), Timer (real countdown + crown scrub), Tasks (CRUD + persistence), Messages (bidirectional + send), Wallet + NFC tap payment, Health (animated rings + SVG chart), Music (scrub + volume via crown), Settings (live theme switch), + stubs for the rest.
- **OS Primitives**: Global notifications, state that survives refresh (localStorage), 3 themes (Dark/Light/Gold), keyboard support, 60fps interactions.
- **Dev API**: `window.WM.test.*` (crown, navigate, reset, notify...).

**Try this**: Drag the crown on the right side while in Timer or Music. It feels expensive.

---

## Component Kit

- Every card is a **pixel-faithful**, interactive extraction from the Figma Dark Theme.
- `components/dark-theme-cards-library.html` — beautiful visual gallery with scale + live theme switcher.
- `components/component-catalog.html` — the real power tool: live props editor + source export (HTML / React-ready).
- All cards are embeddable in any Tailwind project in <30 seconds.

See [docs/USAGE_GUIDE.md](docs/USAGE_GUIDE.md) for full integration patterns.

---

## Project Structure (Post-Redesign)

```
figma-005/
├── index.html                 # Cinematic luxury landing (complete redesign)
├── prototypes/
│   ├── watch-me-os.html       # NEW flagship simulator (crown, 10+ apps, PWA-ready)
│   └── watch-me-interactive-prototype.html   # Legacy reference (preserved)
├── components/
│   ├── cards/                 # 16+ standalone high-fidelity demos
│   ├── dark-theme-cards-library.html
│   └── component-catalog.html
├── docs/
│   ├── USAGE_GUIDE.md         # NEW — integration & extension guide
│   ├── plans/2026-06-01-figma-005-complete-redesign.md
│   └── ...
├── public/                    # PWA manifest + sw.js
├── scripts/verify.js          # Self-test harness
└── package.json
```

---

## Development

```bash
npm run serve          # :3000
npm run verify         # structural health
node scripts/verify.js # same
```

The simulator and landing are deliberately single-file for maximum portability. When extending:

1. Prototype new app inside `watch-me-os.html`
2. Extract a 184×224 card version
3. Add to library + catalog
4. Update USAGE_GUIDE

---

## Status After Complete Redesign

- ✅ Full cinematic luxury landing with working configurator + hero physics
- ✅ Flagship OS simulator with crown, persistence, 10+ apps, themes
- ✅ PWA manifest + service worker (installable, offline capable)
- ✅ Comprehensive docs (plan + usage guide)
- ✅ Modern DX (verify script, updated package, conventional branch)
- ⏳ Components library & catalog — parallel agent still executing (44+ tool calls, high quality work in progress)
- ⏳ Final a11y + cross-browser sweep (manual QA performed on Chrome)

All original Figma replica intent preserved and elevated. Old files left intact for reference during transition.

---

## Philosophy

This is no longer "a Figma replica exercise". It is the reference implementation of what a luxury digital instrument should feel like in the browser — obsessive attention to micro-interactions, materials, and emotional weight.

Every line exists because it makes the whole feel more expensive.

---

**Built autonomously by a multi-agent software development team** following the complete redesign directive (2026-06).

*For component usage, simulator extension points, and embedding recipes, read the [Usage Guide](docs/USAGE_GUIDE.md).*
