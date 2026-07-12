# Component Kit Status

> Closes tracking for incomplete kit inventory (Issue #1).

## Catalog entry points

| Path | Status |
|------|--------|
| `components/component-catalog.html` | Present — live playground (17 cards) |
| `components/catalog.html` | Redirect → `component-catalog.html` |
| `components/dark-theme-cards-library.html` | Present — visual gallery + DEMO links |
| `components/library.html` | Redirect → library |

## Cards under `components/cards/` (disk inventory)

| File | Role |
|------|------|
| `01-new-message.html` … `16-add-contact.html` | Core 16 Figma cards (plus alternate `05-clock` / `06-progress` variants) |
| `home-widget-cluster.html` | Home widgets composite |

Landing (`index.html`) links to OS simulator, UI kit, and catalog use these real paths.

## Verification

```bash
npm test
npm run verify
```

Last verified: 2026-07-12 — both commands exit 0.
