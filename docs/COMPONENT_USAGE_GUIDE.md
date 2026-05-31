# Watch Me Component Usage Guide

> Practical guide for extracting, customizing, and integrating the high-fidelity dark theme components from this Figma replication project.

## Design Tokens (Core)

All components and prototypes are built on these exact tokens extracted from Figma via MCP:

| Token       | Value     | Usage                              |
|-------------|-----------|------------------------------------|
| `--bg`      | `#1b1d21` | Primary card / screen background   |
| `--text`    | `#ffffff` | Primary text                       |
| `--gray`    | `#808389` | Secondary / muted text             |
| `--accent`  | `#7640ef` | Primary action (purple)            |
| `--accent2` | `#ff4a8c` | Secondary action / highlights      |
| Radius      | `12px`–`48px` (watch) | Cards, screens, icons     |
| Font        | Montserrat + system-ui | Consistent across all     |

**Recommendation**: In real projects, promote these to CSS custom properties or Tailwind config.

```css
:root {
  --wm-bg: #1b1d21;
  --wm-text: #ffffff;
  --wm-gray: #808389;
  --wm-purple: #7640ef;
  --wm-pink: #ff4a8c;
}
```

## Using the Modular Cards (Recommended)

**Location**: `components/cards/`

There are currently **13** production-ready single-card files (named after Figma node order where possible):

- `01-new-message.html`
- `02-voice-message.html`
- `03-timer.html`
- `04-wallet.html`
- `08-call.html`
- `09-tasks.html`
- `10-message.html`
- `11-notifications.html`
- `12-activity.html`
- `13-team.html`
- `14-card.html`
- `15-messages.html`
- `16-add-contact.html`

### How to Extract a Card for Your Project

1. Open the desired `.html` file.
2. Copy the inner markup inside the `.watch-card` or phone screen (everything except the outer phone-mock wrapper + Tailwind script if you already have Tailwind).
3. Paste into your page. The markup is self-contained and uses inline styles + Tailwind utility classes (via CDN in demos).
4. For production:
   - Remove the `phone-mock` container.
   - Keep only the 184×224 (or your target size) card root.
   - Replace CDN Tailwind with your project's build.

Each card file includes a "复制 HTML" button in its demo for convenience.

### Example Integration (Vanilla / Any Framework)

```html
<div class="watch-card" style="width:184px; height:224px; background:#1b1d21; border-radius:12px; overflow:hidden; box-shadow:0 10px 30px rgba(0,0,0,.35);">
  <!-- paste exact inner content from any card file here -->
</div>
```

Cards are **completely independent** — no shared JS required unless you want interactions (see interactive prototype for reference behaviors).

## Full Library View

Use `components/dark-theme-cards-library.html` when you need:

- Side-by-side visual comparison of all 16 cards
- One-click copy of any card's HTML
- Quick reference for spacing, typography, icon usage

## Interactive Prototype as Living Documentation

`prototypes/watch-me-interactive-prototype.html` demonstrates:

- How multiple cards are composed into full app screens
- Real state management patterns (tasks array, timer intervals, messages)
- Screen-to-screen navigation and context (e.g. Tasks → Timer, New Msg → Messages)
- Micro-interactions and feedback (toasts, active states)

**Tip**: Use the prototype as a spec when implementing the same flows in production code (React, Vue, Svelte, Web Components, etc.).

## Adding Interactions

The prototype uses vanilla JS + inline `onclick`. For production:

- Timer / Call duration → use `requestAnimationFrame` or proper `setInterval` cleanup + React hooks / state machines.
- Task toggles / messages → connect to your app state or backend.
- The data models in the prototype (`tasks`, `messages`, `timerSeconds`) are excellent starting points for your domain models.

## Light Theme Considerations (See Also README)

Current components are **Dark-only**. When implementing Light support:

1. **Centralize colors** with CSS variables immediately (do not hardcode `#1b1d21` everywhere).
2. Provide a `data-theme="light"` (or class) strategy on a root container.
3. Re-evaluate accent colors for sufficient contrast on light backgrounds (purple/pink often need desaturation or borders).
4. Wallet card (white foreground) will need a light-specific variant or inversion.
5. Test all icon colors and subtle borders.
6. Consider separate `--wm-shadow` values per theme.

Example toggle (prototype-ready):

```js
function toggleTheme() {
  const root = document.documentElement;
  root.setAttribute('data-theme', 
    root.getAttribute('data-theme') === 'light' ? 'dark' : 'light'
  );
}
```

## Production Hardening Tips

- **Remove Tailwind CDN** — compile your used classes or switch to native CSS / your design system.
- **Accessibility**: Add `aria-label`s on icon-only buttons, ensure 4.5:1 contrast, focus states on interactive cards.
- **Performance**: The prototype uses many inline styles and full re-renders on every action. In production prefer targeted DOM updates or a framework.
- **Assets**: Replace Font Awesome CDN with SVG sprites or your icon system for smaller bundle.
- **Responsive**: Watch cards are fixed-size by design. For phone mockups use the larger prototypes as reference.

## File Naming & Maintenance

- Keep the `components/cards/` folder as the single source of truth for individual cards.
- When Figma updates (via new MCP queries), update both the individual card + the full library + the interactive prototype.
- Update `docs/WATCH-ME-DARK-THEME-CARDS-STATUS.md` after each batch of changes.

## Related Files Quick Reference

- `prototypes/watch-me-interactive-prototype.html` — best for behavior & composition examples
- `components/dark-theme-cards-library.html` — best for visual QA and copying
- `components/cards/*.html` — best for actual reuse in other pages/apps
- `prototypes/watch-me-dark-perfect.html` — reference for phone-scale compositions and token exports

---

Maintained as part of the Figma 101 Lesson 005 replication workflow. Contributions and theme extensions welcome following the commit guidelines in `docs/COMMIT_MESSAGE_GUIDELINES.md`.