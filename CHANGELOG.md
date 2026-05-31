# Changelog

All notable changes to the Watch Me Figma 101-005 replication project.

Format follows [Keep a Changelog](https://keepachangelog.com/) and Conventional Commits spirit.

## [Unreleased]

### Added
- Full 16-screen coverage in interactive prototype (`prototypes/watch-me-interactive-prototype.html`):
  - Implemented missing screens: Clock, Progress, Card, New Msg, Msg Detail, Confirm Tx, Add Contact
  - All launcher icons now resolve to functional UIs
- Cross-screen navigation and logical flows (Tasks → Timer, New Msg → Messages, Confirm → Home, etc.)
- Toast notification system for action feedback
- Improved Messages screen: sent vs received bubble styling, timestamps, better UX
- Tasks screen now includes direct "Start Timer" action link
- `showToast()` helper + persistent call/timer state restoration on screen re-entry
- Global call timer state (`callSeconds`) + `updateCallDisplay()` (fixed major scoping bug)
- Timer display now correctly syncs when re-visiting the screen while running/paused

### Changed
- Interactive prototype significantly polished: no more "Screen not found", all advertised functionality works
- README.md completely overhauled with accurate deliverables, detailed "How to use interactive prototype", expanded Light Theme considerations section, and links to new docs
- Created comprehensive `docs/COMPONENT_USAGE_GUIDE.md` (practical extraction, integration, theming, and production advice)
- Project structure documentation updated (now reflects 13 modular cards in `components/cards/`)
- Minor state reset improvements in `resetToHome()`

### Fixed
- Timer countdown would show stale "12:31" on screen return (now immediately calls `updateTimerDisplay()` post-render)
- Call timer used function-scoped `let seconds` variable that did not persist correctly across navigation (refactored to module-level `callSeconds` + dedicated updater)
- Broken/missing screen implementations in launcher despite UI claims of "all 16 screens"

## [0.2.0] - 2026-05-29

### Added
- Professional project reorganization: `prototypes/`, `components/cards/`, `index.html` gallery entrypoint
- 13 modular standalone card components under `components/cards/`
- `package.json` with convenient preview scripts (`npm start`, `serve`, `preview`)
- Expanded interactive prototype with additional launcher targets and prepared bottom-nav CSS
- Updated card status tracking in `docs/WATCH-ME-DARK-THEME-CARDS-STATUS.md`

### Changed
- Moved legacy monolithic files into `prototypes/` (interactive, dark-perfect, replica)
- README modernized with current deliverables and future plans list
- Full 16/16 cards achieved in the cards library view

## [0.1.0] - Earlier iterations (pre-reorg)

- Initial high-fidelity replication of core Dark Theme cards (New Message, Voice, Timer, Wallet, Call, Tasks, Messages, etc.) using figma-mcp-go node data
- Early versions of replica.html and interactive watch simulator
- Basic task toggling, timer countdown, and messaging in prototype
- Established commit guidelines and Figma-to-HTML workflow

---

**Notes**:
- All work prioritizes pixel-perfect fidelity to the source Figma Dark Theme page while maximizing standalone usability of outputs.
- Future releases will track Light Theme implementation, framework exports, and deeper screen linkages.
- See `docs/COMMIT_MESSAGE_GUIDELINES.md` for how changes are recorded in git history.