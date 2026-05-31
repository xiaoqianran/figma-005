# Watch Me 2026 — Usage & Integration Guide

**Version**: 1.0 (Complete Redesign)  
**Last Updated**: 2026-06-01

This guide covers the three primary ways to use Watch Me deliverables:

1. **Brand Landing Experience** (`index.html`)
2. **Interactive Smartwatch OS Simulator** (`prototypes/watch-me-os.html`)
3. **Modular UI Component Kit** (`components/`)

All artifacts are **zero-dependency**, **self-contained single HTML files**, and run instantly in any modern browser (Chrome 120+, Safari 17+, Firefox 120+). No build step required for production use.

---

## 1. Brand Landing Page (`index.html`)

### Quick Start
```bash
# From project root
open index.html
# or
npm start
```

### Key Features for Users
- **Figma Marketing Style**: Color-block sections (lime, lilac, cream, navy per DESIGN.md) with elegant typography and prominent CTAs.
- **"Launch Simulator" / Deep Links**: Multiple primary CTAs open the full square Watch Me OS simulator (`prototypes/watch-me-os.html` — modern rectangular hardware matching 184×224 modules).
- **The OS Section**: Visual previews of key apps with direct deep links to the square simulator.

### Embedding / Customization
The landing is intentionally a complete marketing page. To embed just the hero watch in your own site:

1. Copy the entire `<style>` block containing `.premium-watch` ... `.lume-glow` rules.
2. Copy the hero `<div id="premium-watch">` markup + the JS that powers `initHeroWatch()` (or equivalent).
3. Adjust sizing via CSS custom properties or container.

**Recommended**: Use the simulator for interactive demos instead of extracting hero alone.

### Theme Notes
Landing is dark-luxury by default. Add `data-theme="light"` on `<html>` for a soft off-white variant (styles included).

---

## 2. Watch Me OS Simulator (`prototypes/watch-me-os.html`)

This is the **star of the project** — the most advanced browser-based luxury **square smartwatch** simulation available (modern rectangular form factor chosen to perfectly frame the 184×224 rectangular UI modules).

### Running
- Double-click the file
- Or from landing page (once wired)
- Recommended: `npm run serve` then visit `/prototypes/watch-me-os.html`

### Hardware Interactions
The simulator renders a modern **square/rectangular** smartwatch hardware shell (not traditional round) with a rectangular screen. This form factor was selected specifically because it aligns with and natively hosts the 184×224 rectangular page modules used in the component kit.

- **Digital Crown**: Click and drag vertically on the right crown area. Momentum + detents included. Controls:
  - Scroll in lists (Tasks, Messages, Settings)
  - Scrub timer / music progress
  - Zoom / navigate maps (future)
- **Side Button** (left or bottom edge): 
  - Short press → Home / wake
  - Long press (600ms) → App switcher or Sleep
- **Touch Screen**: Tap app icons, buttons, toggles, long-press for context menus (selected apps).
- **Status Bar**: Always visible time + battery. Battery drains slowly in demo.

### Persistence
All state (tasks, sent messages, timer remaining, health metrics, settings) is saved to `localStorage` under `wm_` prefix. Use the dev reset button or `WM.reset()` in console to clear.

### Extending the OS (for Developers)
```js
// After load
window.WM.navigate('health');           // switch app
window.WM.postNotification({title: 'HR high', body: '142 bpm'});
window.WM.setAccent('#ff4a8c');         // runtime theme
window.WM.crown(180);                   // program crown position
```

See inline comments in the file for the `WatchOS` class / module boundaries.

### Apps Currently Implemented (v1.0)
(Will be updated live as agents complete)

- Clock (multiple faces)
- Timer / Stopwatch
- Tasks (full CRUD + timer launch)
- Messages + Compose
- Wallet + NFC Pay
- Health (rings + chart)
- Music
- Settings (affects OS)
- ... (full list in simulator header)

---

## 3. Modular Component Kit (`components/`)

### Philosophy
Every card is a **faithful extraction** of a Watch Me OS screen or widget at the exact Figma 184×224 size. They are designed to be dropped into any Tailwind-based project with minimal friction.

### Using a Card
1. Open the individual `components/cards/XX-*.html`
2. Click **Copy Pure HTML** (removes demo wrapper, phone frame, and JS harness)
3. Paste into your markup. Add your own event handlers.

Example (Timer card):
```html
<div class="w-[184px] h-[224px] bg-[#1b1d21] rounded-[12px] overflow-hidden ...">
  <!-- exact content from the copy button -->
</div>
```

### The Library (`components/dark-theme-cards-library.html`)
- Visual overview of all cards at once.
- Scale slider (great for design reviews).
- Live **Dark / Light / Gold** theme switcher (applies to entire gallery).
- Search + tag filters.
- One-click copy on every card.

### The Catalog / Playground (`components/component-catalog.html`)
The most powerful tool for designers & developers:
- Select any card from left.
- Tweak live properties (color, duration, content, state).
- See preview update instantly.
- Copy the **exact generated HTML** or **Tailwind + React** snippet.
- Perfect for creating variants or client handoff specs.

### Theme Support
All cards and the library/catalog support:
```html
<div data-theme="light"> ... </div>
<!-- or -->
<html data-theme="gold">
```
CSS variables are defined per file (easy to promote to your design system).

### Accessibility in Components
- All interactive elements have `role`, `aria-*`, and visible focus.
- Minimum 44×44 tap targets on buttons.
- Text contrast ≥ 4.5:1 on dark (higher on light).

---

## 4. PWA & Offline

Both the landing and simulator support PWA installation:

1. In Chrome/Edge: Address bar → Install icon or menu → "Install Watch Me OS".
2. Once installed, simulator works fully offline (last state restored).
3. Service worker in `/public/sw.js` (register it in your host page if embedding).

To add to your own page:
```html
<link rel="manifest" href="/public/manifest.json">
<script>
if ('serviceWorker' in navigator) navigator.serviceWorker.register('/public/sw.js');
</script>
```

---

## 5. Development & Contribution

### Local Development
```bash
npm install -g http-server   # or use npx
npm run serve                # :3000 with CORS
npm run verify               # structural health check
```

### Recommended Workflow for New Apps / Cards
1. Prototype the screen in Figma or directly in `prototypes/watch-me-os.html` (add to the app registry).
2. Once stable, extract a standalone 184×224 card version into `components/cards/`.
3. Add entry to library.html + catalog.html.
4. Update this guide + simulator help screen.
5. Commit with conventional message per `docs/COMMIT_MESSAGE_GUIDE.md` (legacy but still relevant).

### Performance Budget
- Landing (color-block Figma system): lightweight, no embedded watch simulation (simulator is separate linked artifact).
- Simulator: Prioritize perceived performance (instant app switch, progressive hydration of heavy apps like Health charts).

---

## 6. Browser Support & Known Limitations

**Supported**: Last 2 versions of Chrome, Safari, Firefox, Edge on desktop + modern iOS/Android.

**Not Supported** (by design):
- IE11 or pre-2020 mobile browsers (CSS gradients + Pointer Events).
- Very small viewports without scaling (simulator auto-scales to 320px logical).

**Gyro / DeviceOrientation**: Works on mobile browsers that grant permission (iOS requires user gesture first).

---

## 7. License & Attribution

MIT. The Watch Me design language is inspired by (but not affiliated with) premium Swiss watchmaking and modern wearable OS aesthetics.

If you ship something using these components or the simulator, we'd love to see it — tag @watchme-atelier in your posts.

---

**Questions?** Open an issue or read the source — everything is intentionally transparent and commented.

*This guide is auto-maintained as part of the complete redesign. Last regenerated during multi-agent batch development.*
