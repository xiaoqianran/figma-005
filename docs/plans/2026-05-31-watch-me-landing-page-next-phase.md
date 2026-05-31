# Watch Me Luxury Landing Page — Next Phase Elevations Implementation Plan

> **For Hermes:** Use subagent-driven-development skill to implement this plan task-by-task. Dispatch fresh subagent per task (or logical group of 2-3 related tasks). After each task, perform two-stage review: (1) spec compliance (does it match the exact objective + verification criteria in this plan?), (2) code quality & luxury feel (micro-interactions, accessibility, no regressions to existing sections, elegant code).

**Goal:** Transform the current "very good" Watch Me luxury landing page into an *exceptional professional brand site* by executing four high-leverage, tightly integrated improvements while preserving every byte of the original Figma replica work in `prototypes/` and `components/`.

**Architecture:** 
- 100% of changes are non-destructive edits to the single self-contained `index.html` (Tailwind CDN + vanilla JS + Font Awesome).
- New premium features (advanced hero watch, Experience showcase, mobile nav, storytelling timeline) are additive and respect existing design tokens (`#c5a26f` gold, zinc-950 palette, Playfair Display + Inter).
- All prototype links remain 100% functional and untouched.
- Progressive enhancement + respect for `prefers-reduced-motion`.
- No new external dependencies, no new asset files.

**Tech Stack:** Tailwind via CDN, vanilla ES6 JS (Pointer Events, requestAnimationFrame, IntersectionObserver, matchMedia, dataset + class state machine), existing CSS custom properties, semantic HTML + ARIA.

**Key Analysis Findings (performed 2026-05-31):**
- **Current index.html state**: Elegant dark luxury execution (hero live analog watch with real-time hands + basic spin-on-click, scroll progress bar, 3 collection cards with modals, solid tech/craft sections, minimal Experience CTA card linking to interactive prototype, responsive grids with Tailwind, placeholder mobile menu toggle that only flips nav bg).
- **docs/plans/**: Contains the original creation plan (`2026-05-31-luxury-watch-landing-page.md`) and the first enhancements plan (`2026-05-31-watch-me-landing-page-enhancements.md`). Scroll progress and basic structure delivered; hero watch and Experience section remain at "very good" level (no multi-mode, no drag, sparse showcase).
- **Gaps to exceptional**:
  1. Hero watch feels static and one-note despite being interactive.
  2. Experience section under-sells the 16-screen original prototype masterpiece.
  3. Mobile experience is functional but not polished (no real menu, fixed-size watch, weak touch targets).
  4. Storytelling is textual only — missing a signature interactive brand moment that creates emotional memory.
- **Prioritized 4 improvements** (as specified): Hero watch enhancements, Experience section (prototype showcase), mobile polish, + one premium storytelling element ("The Atelier Legacy Timeline" — scroll-synced interactive craft narrative that drives the hero watch visuals for magical cohesion).
- Constraints: Zero changes to `prototypes/`, `components/`, or any Figma replica files. Only `index.html` + this new plan file.

**Success Criteria (measurable):**
- Hero watch supports ≥4 modes + pointer drag-to-set-time with spring physics feel + gyro tilt (desktop/mobile) + breathing lume.
- Experience section contains rich visual grid + 3+ direct prototype entry points + "OS in every timepiece" storytelling copy.
- Mobile: real hamburger → full accessible slide-in nav, hero watch scales gracefully (<320px), all CTAs ≥44px touch, no horizontal scroll, tested on 375px viewport.
- New storytelling timeline exists, is elegant, and clicking milestones visibly transforms the hero watch (or dedicated preview) in a premium way.
- Page still loads instantly, feels $50k+ Swiss luxury brand, all original links work, no JS errors in console.
- Lighthouse (or manual): a11y score ≥95, no regressions in existing sections.

---

## Pillar 1: Hero Watch Enhancements (Most Impactful Visual & Interaction Upgrade)

### Task 1: Add CSS foundation for multi-mode watch (modes, digital overlay, drag states, breathing lume)

**Objective:** Extend the existing `.watch-face` and `.hand` rules with classes and new elements for mode switching, digital display, drag affordances, and premium micro-details without breaking current real-time clock.

**Files:**
- Modify: `/root/Desktop/pro/001/figma-005/index.html` (inside the `<style>` block, after the last `.watch-tick` rule, before `</style>`)

**Step 1: Establish baseline (current behavior is the "failing" state for new capabilities)**

Run: `cd /root/Desktop/pro/001/figma-005 && npm start` (or open the file directly in Chrome/Safari).  
In DevTools console after load:  
`const w = document.getElementById('hero-watch'); console.log('Modes attr:', w.dataset.mode, 'Has digital child:', !!w.querySelector('.digital-display'));`  
Expected output / observation: `Modes attr: undefined`, no `.digital-display` element, only the basic spin animation on click. Watch face does not change appearance on repeated clicks beyond the one-time spin.

**Step 2: Insert the new CSS rules (copy-paste exactly)**

Locate the end of the watch-related CSS (search for `.watch-tick` block) and append the following **before the closing `</style>`**:

```css
    /* === Next-Phase Hero Watch Enhancements (Pillar 1) === */
    .watch-face {
      transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), 
                  box-shadow 0.6s cubic-bezier(0.23, 1, 0.32, 1),
                  filter 0.4s ease;
      cursor: grab;
      user-select: none;
      -webkit-user-select: none;
    }
    .watch-face:active { cursor: grabbing; }
    .watch-face.mode-digital .analog-hands { display: none; }
    .watch-face.mode-digital .digital-display { display: block; }
    .watch-face.mode-analog .digital-display { display: none; }
    .watch-face.mode-analog .analog-hands { display: block; }

    .watch-face.dragging {
      box-shadow: 0 0 0 16px #1a1a1a, 0 0 0 28px #111111, 0 50px 120px -15px rgb(0 0 0 / 0.9);
      filter: brightness(1.05);
    }

    .digital-display {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-family: 'Inter', system-ui, sans-serif;
      font-size: 28px;
      font-weight: 500;
      letter-spacing: 0.05em;
      color: #e5e7eb;
      text-align: center;
      z-index: 40;
      text-shadow: 0 2px 8px rgb(0 0 0 / 0.6);
      display: none;
      pointer-events: none;
    }
    .digital-display .time { font-variant-numeric: tabular-nums; }
    .digital-display .date { font-size: 10px; letter-spacing: 0.1em; opacity: 0.6; margin-top: -2px; }

    .analog-hands { transition: transform 0.08s cubic-bezier(0.4, 0, 0.2, 1); }

    .watch-face .lume-glow {
      position: absolute;
      inset: 18px;
      border-radius: 9999px;
      background: radial-gradient(circle at 50% 40%, rgba(197,162,111,0.15) 0%, transparent 70%);
      opacity: 0;
      transition: opacity 800ms ease;
      z-index: 5;
      pointer-events: none;
    }
    .watch-face.breathing .lume-glow { opacity: 0.7; animation: watchLumeBreath 4s ease-in-out infinite; }

    @keyframes watchLumeBreath {
      0%, 100% { opacity: 0.35; }
      50% { opacity: 0.85; }
    }

    .watch-face .complication {
      position: absolute;
      z-index: 25;
      font-size: 9px;
      color: #c5a26f;
      font-family: 'Inter', sans-serif;
      letter-spacing: 0.5px;
      text-transform: uppercase;
    }

    .mode-indicator {
      position: absolute;
      bottom: 22px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 8px;
      letter-spacing: 1.5px;
      color: #c5a26f;
      opacity: 0.6;
      z-index: 50;
      pointer-events: none;
      font-family: 'Inter', system-ui, sans-serif;
    }
```

**Step 3: Verify CSS injection (no functional change yet)**

Refresh the page. In DevTools Elements panel inspect `#hero-watch` and confirm the new rules appear in the stylesheet.  
Quick visual check: the watch should look *exactly* the same as before (no new elements visible yet).

**Step 4: Commit checkpoint**

```bash
git add index.html docs/plans/2026-05-31-watch-me-landing-page-next-phase.md
git commit -m "docs: add next-phase plan + CSS foundation for hero watch modes (Pillar 1 Task 1)"
```

---

### Task 2: Add required DOM elements inside the hero watch (digital display, mode indicator, lume layer, hands wrapper)

**Objective:** Inject the minimal new markup inside `#hero-watch` so that mode classes can control visibility. Keep the existing ticks + three hand divs.

**Files:**
- Modify: `/root/Desktop/pro/001/figma-005/index.html` (the hero watch div, around lines 257-278)

**Step 1: Baseline verification**

Open page. Right-click hero watch → Inspect. Confirm current children: `#watch-ticks`, three `.hand` divs, `.watch-center`, two absolute rings. No `.digital-display`, no `.lume-glow`.

**Step 2: Update the hero watch markup (exact replacement)**

Replace the entire inner content of the `#hero-watch` div (keep the outer div attributes) with the enhanced version:

```html
          <div id="hero-watch" 
               class="watch-face cursor-pointer shadow-2xl breathing"
               onclick="cycleWatchMode(event)"
               role="button"
               aria-label="Interactive luxury watch face. Click or drag to interact. Currently in analog mode."
               data-mode="analog"
               aria-pressed="false">
            <!-- Watch ticks -->
            <div id="watch-ticks"></div>
            
            <!-- Hands container (for easy hiding in digital mode) -->
            <div class="analog-hands">
              <!-- Hands -->
              <div id="hour-hand" class="hand hour-hand" style="transform: rotate(0deg);"></div>
              <div id="minute-hand" class="hand minute-hand" style="transform: rotate(0deg);"></div>
              <div id="second-hand" class="hand second-hand" style="transform: rotate(0deg);"></div>
            </div>

            <div class="watch-center"></div>
            
            <!-- Premium additions -->
            <div class="lume-glow"></div>
            
            <!-- Digital overlay (hidden by default) -->
            <div class="digital-display">
              <div class="time" id="digital-time">09:41</div>
              <div class="date" id="digital-date">31 MAY</div>
            </div>

            <!-- Subtle inner rings (existing) -->
            <div class="absolute inset-[38px] border border-white/10 rounded-full"></div>
            <div class="absolute inset-[52px] border border-white/5 rounded-full"></div>
            
            <div class="mode-indicator" id="mode-indicator">ANALOG</div>
          </div>
```

**Step 3: Verify markup + no breakage**

Reload. The watch should still show the three hands and ticks exactly as before. The new elements exist in DOM but `.digital-display` is `display:none` via the CSS we added. Console should be clean.

**Step 4: Commit**

```bash
git commit -m "feat: add digital display, lume layer and mode indicator DOM to hero watch (Pillar 1 Task 2)"
```

---

### Task 3: Implement core watch state machine + mode cycling + digital time sync (vanilla JS)

**Objective:** Create a clean `watchState` object and `cycleWatchMode()` / `updateDigitalTime()` functions. Replace the old `animateWatchFace()` onclick with the new cycle behavior while keeping real-time clock running underneath.

**Files:**
- Modify: `/root/Desktop/pro/001/figma-005/index.html` (the script section — replace the old animateWatchFace and add new functions after createWatchTicks)

**Step 1: Baseline — confirm old behavior**

In console: `animateWatchFace()` still exists and triggers the spin. `document.getElementById('hero-watch').onclick` points to it.

**Step 2: Add the state machine and helper functions (insert after `createWatchTicks()` function, before the real-time clock comment)**

```js
    // === Pillar 1: Advanced Watch State Machine ===
    let watchState = {
      mode: 'analog',           // 'analog' | 'digital' | 'chrono' | 'world'
      isDragging: false,
      dragStartAngle: 0,
      lastAngle: 0,
      chronoStart: null,
      chronoOffset: 0
    };

    const MODE_LABELS = {
      analog: 'ANALOG',
      digital: 'DIGITAL',
      chrono: 'CHRONO',
      world: 'WORLD'
    };

    function updateModeIndicator() {
      const el = document.getElementById('mode-indicator');
      const watch = document.getElementById('hero-watch');
      if (!el || !watch) return;
      el.textContent = MODE_LABELS[watchState.mode] || 'ANALOG';
      watch.dataset.mode = watchState.mode;
      watch.setAttribute('aria-label', `Interactive luxury watch face. Current mode: ${watchState.mode}. Click to cycle, drag hands to set time.`);
    }

    function cycleWatchMode(e) {
      // Prevent drag click from also cycling
      if (watchState.isDragging) return;
      
      const watch = document.getElementById('hero-watch');
      if (!watch) return;

      const modes = ['analog', 'digital', 'chrono', 'world'];
      let idx = modes.indexOf(watchState.mode);
      watchState.mode = modes[(idx + 1) % modes.length];

      // Update classes for CSS visibility
      watch.classList.remove('mode-analog', 'mode-digital', 'mode-chrono', 'mode-world');
      watch.classList.add(`mode-${watchState.mode}`);

      updateModeIndicator();

      // Special handling per mode
      if (watchState.mode === 'chrono') {
        watchState.chronoStart = Date.now();
        watchState.chronoOffset = 0;
      }
      if (watchState.mode === 'digital' || watchState.mode === 'world') {
        updateDigitalTime();
      }
      // Subtle haptic-like flash on mode change (visual only)
      watch.style.transitionDuration = '60ms';
      setTimeout(() => { if (watch) watch.style.transitionDuration = '0.6s'; }, 120);
    }

    function updateDigitalTime() {
      const timeEl = document.getElementById('digital-time');
      const dateEl = document.getElementById('digital-date');
      if (!timeEl) return;

      const now = new Date();
      let hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12 || 12;

      timeEl.textContent = `${hours}:${minutes.toString().padStart(2, '0')} ${ampm}`;

      if (dateEl) {
        const month = now.toLocaleString('en', { month: 'short' }).toUpperCase();
        dateEl.textContent = `${now.getDate()} ${month}`;
      }
    }
```

**Step 3: Run verification that new functions exist but old onclick still works temporarily**

Reload. In console run:
```js
console.log('cycleWatchMode defined:', typeof cycleWatchMode === 'function');
console.log('watchState:', watchState);
```
Expected: functions exist. Clicking watch still triggers the *old* spin (we will rewire in next task).

**Step 4: Commit**

---

### Task 4: Rewire hero watch interactions — replace onclick, add drag-to-set-time with spring physics, attach listeners

**Objective:** Make the hero watch support pointer drag (mouse + touch) to rotate the minute hand (with hour sync), add proper event listeners (pointer events for unified mouse/touch), implement spring-back on release, and finally remove/replace the old `onclick="animateWatchFace()"` attribute.

**Files:**
- Modify: `/root/Desktop/pro/001/figma-005/index.html` (hero div attributes + new JS drag functions + call in init)

**Step 1: Baseline drag test (should do nothing special today)**

Attempt to drag the watch face in browser. Expected: only the old click-spin fires, no continuous hand movement following cursor.

**Step 2: Add drag implementation functions (insert after the new cycle functions from Task 3)**

```js
    // === Drag to Set Time (Pointer Events — works for mouse + touch) ===
    function getAngleFromCenter(clientX, clientY) {
      const watch = document.getElementById('hero-watch');
      if (!watch) return 0;
      const rect = watch.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      let angle = Math.atan2(clientY - cy, clientX - cx) * (180 / Math.PI) + 90;
      return (angle + 360) % 360;
    }

    function applyDragAngle(angle) {
      const minuteHand = document.getElementById('minute-hand');
      const hourHand = document.getElementById('hour-hand');
      if (!minuteHand || !hourHand) return;

      // Minute hand follows drag directly
      minuteHand.style.transitionDuration = '0ms';
      minuteHand.style.transform = `rotate(${angle}deg)`;

      // Hour hand moves proportionally (30° per 60 min = 0.5° per minute)
      const hourAngle = (angle / 12) % 360;
      hourHand.style.transitionDuration = '0ms';
      hourHand.style.transform = `rotate(${hourAngle}deg)`;

      watchState.lastAngle = angle;
    }

    function onPointerDown(e) {
      const watch = document.getElementById('hero-watch');
      if (!watch || watchState.mode === 'digital') return;

      watchState.isDragging = true;
      watch.classList.add('dragging');
      watchState.dragStartAngle = getAngleFromCenter(e.clientX, e.clientY);

      // Pause real-time clock updates during drag
      if (clockInterval) {
        clearInterval(clockInterval);
        clockInterval = null;
      }
    }

    function onPointerMove(e) {
      if (!watchState.isDragging) return;
      const angle = getAngleFromCenter(e.clientX, e.clientY);
      applyDragAngle(angle);
    }

    function onPointerUp(e) {
      const watch = document.getElementById('hero-watch');
      if (!watch || !watchState.isDragging) return;

      watchState.isDragging = false;
      watch.classList.remove('dragging');

      // Spring animation back to real time after short delay
      setTimeout(() => {
        const minuteHand = document.getElementById('minute-hand');
        const hourHand = document.getElementById('hour-hand');
        if (minuteHand) minuteHand.style.transitionDuration = '420ms cubic-bezier(0.23,1,0.32,1)';
        if (hourHand) hourHand.style.transitionDuration = '520ms cubic-bezier(0.23,1,0.32,1)';
        updateClock(); // snap back to real time
        startClock();  // resume live clock
      }, 650);
    }

    function attachWatchDragListeners() {
      const watch = document.getElementById('hero-watch');
      if (!watch) return;

      // Remove old inline onclick to avoid double-firing
      watch.removeAttribute('onclick');
      watch.onclick = null;

      // New unified interactions
      watch.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
      window.addEventListener('pointercancel', onPointerUp);

      // Keep keyboard support (now cycles mode)
      watch.setAttribute('tabindex', '0');
      watch.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          cycleWatchMode(e);
        }
      });

      // Bonus: double-click resets to real time + analog mode
      watch.addEventListener('dblclick', () => {
        watchState.mode = 'analog';
        watch.classList.remove('mode-digital', 'mode-chrono', 'mode-world');
        watch.classList.add('mode-analog');
        updateModeIndicator();
        updateClock();
        startClock();
      });
    }
```

**Step 3: Update the init() call site to wire the new listeners**

Find the `init()` function (near end of script) and add the call:

After `createWatchTicks();` and `startClock();` insert:
```js
      attachWatchDragListeners();
      updateModeIndicator(); // ensure initial label
```

Also update the old `initKeyboardSupport()` if it conflicts (it can stay for modals but watch keyboard is now in attach...).

**Step 4: Full verification**

1. Reload page.
2. Click hero watch several times → should now cycle through ANALOG → DIGITAL → CHRONO → WORLD (label updates, digital overlay appears in digital mode, hands hide/show appropriately).
3. In analog mode: press and drag mouse/finger around the watch perimeter → minute (and hour) hand follows smoothly.
4. Release → after ~650ms the hands spring back to current real time and live clock resumes.
5. Double-click → resets to analog + real time.
6. Console: no errors. Touch works on mobile simulator.

**Step 5: Commit**

```bash
git commit -m "feat: full drag-to-set-time + 4-mode cycling + spring physics on hero watch (Pillar 1 complete core)"
```

---

### Task 5: Enhance real-time clock to support chrono + world modes + add gyro tilt (advanced polish)

**Objective:** Make `updateClock()` mode-aware (chrono counts up, world shows different timezone), add subtle device tilt using `DeviceOrientationEvent` (with permission on iOS), and breathing lume toggle.

**Files:** Modify same `index.html` (updateClock, startClock, new gyro function, call in init)

**Step 1-5:** (abbreviated for plan brevity — implementer must expand with same rigor as Tasks 1-4)

- Add gyro permission button (subtle, appears on first tilt attempt on iOS).
- Update `updateClock()` with if (watchState.mode === 'chrono') { ... calculate elapsed } else if ('world') { use a fixed offset e.g. Geneva time }.
- Add `enableGyroTilt()` using `window.addEventListener('deviceorientation', ...)` that gently rotates the whole watch container (transform rotateZ small amount) for premium "in-hand" feel.
- Respect `prefers-reduced-motion`.
- Verification: chrono mode counts seconds live, tilt works on phone, no jank.

**Verification command:** Use Chrome DevTools device toolbar + sensors emulation for orientation.

Commit after pass.

---

## Pillar 2: Experience Section — Original Prototype Showcase Elevation

### Task 6: Redesign the #experience section with rich visual hierarchy and prototype highlights

**Objective:** Replace the single large CTA card with a premium museum-style showcase: better headline, explanatory paragraph, 2x2 grid of "OS Signature Experiences" cards (using simple CSS recreations of key screens from the prototype), each with "Launch in Prototype →" that deep-links where possible or opens the full prototype, plus prominent "Open Full 16-Screen Simulator" CTA.

**Files:**
- Modify: `/root/Desktop/pro/001/figma-005/index.html` (the entire `#experience` div, ~lines 435-462)

**Step 1:** Baseline — current single card feels thin for the incredible 16-screen work it links to.

**Step 2:** Provide full replacement HTML (detailed in actual implementation — will include Tailwind grid, 4 mini "screen" previews built with divs + text mimicking Messages, Timer, Wallet, Activity from the Figma work, gold accents on hover, micro-interaction lifts, badge "Interactive • 16 screens").

**Step 3:** Ensure all links still point exactly to `prototypes/watch-me-interactive-prototype.html` and the component catalog.

**Step 4:** Add subtle JS for "preview on hover plays a 1.5s loop of that screen concept" (CSS only where possible).

**Verification:** Section now feels like the emotional centerpiece of the brand site. 4 distinct entry points + one hero launch. All original prototype functionality preserved.

---

### Task 7: Wire "Try this screen" buttons to pass state hints (hash or console) to prototype (non-breaking)

(If prototype supports URL params for initial screen — check but do not modify prototype. Otherwise just excellent UX copy + open in new tab with note.)

---

## Pillar 3: Mobile Polish & Touch Excellence

### Task 8: Replace placeholder mobile menu with full premium slide-in drawer

**Objective:** Implement a real accessible mobile navigation drawer (right slide-in, gold accents, all 4 nav links + Shop + Book Viewing, close on link or ESC or outside tap). Use existing Tailwind + minimal new CSS/JS. Make hamburger icon proper.

**Files:** index.html (nav mobile button + new drawer markup + JS functions)

**Verification:** On ≤768px viewport: tap hamburger → smooth drawer slides from right, links work, scroll lock, close works perfectly. No layout shift.

### Task 9: Make hero watch fully responsive + add mobile-specific interactions

- Use `clamp(220px, 48vw, 320px)` for watch size on mobile.
- Increase touch target padding.
- On mobile the drag should feel even more natural (already using pointer events).
- Reduce padding in hero on small screens.

### Task 10: Audit & fix all remaining mobile issues (touch targets, spacing, footer, no horizontal scroll, safe areas)

Run visual + DevTools mobile test. Fix any 44px violations, overlapping, etc.

---

## Pillar 4: Premium Storytelling Element — "The Atelier Legacy Timeline"

### Task 11: Add new "The Atelier" section after Craftsmanship (before Experience) — elegant interactive timeline

**Objective:** Introduce a signature brand moment: a refined vertical (desktop) / horizontal-snap (mobile) timeline of 5 key moments from 1897 to 2026. Each milestone has gold line progress, beautiful typography, short poetic description. Clicking a milestone:
- Smoothly scrolls/animates a "live preview watch" (or re-uses hero watch via class) to show era-appropriate treatment (1897: aged brass, 2026: neural glow).
- Updates a "Master Watchmaker's Note" quote panel with beautiful typography.

This directly ties storytelling to the hero watch, creating the "exceptional" cohesive experience.

**Files:** Only index.html (new section + supporting CSS + JS for timeline + watch theming hooks).

**Step-by-step (each a sub-task in execution):**
- Task 11a: Add section skeleton + static beautiful markup (5 milestones).
- Task 11b: CSS for timeline (gold vertical line, dots, cards with hover lift).
- Task 11c: JS for active state + IntersectionObserver for scroll progress fill + click handlers.
- Task 11d: Watch theming system (add data-era or classes that the hero watch CSS can react to: e.g. `.era-1897 .watch-face { filter: sepia(0.3) ... }`).
- Task 11e: Quote rotator + accessibility (keyboard arrows on timeline, reduced motion).

**Verification:** Timeline feels like a $200k installation piece. Clicking 1897 makes the hero watch look like a vintage pocket watch for 8 seconds then gracefully returns. Feels magical and on-brand. Mobile swipe works.

---

## Final Integration, Polish & Release Tasks

### Task 12: Global polish pass (hover refinements, a11y, performance, console clean)

- Ensure all new interactive elements have proper focus states (gold ring).
- Add `prefers-reduced-motion` media query blocks that disable heavy animations.
- Throttle the random hand jitter when in view.
- Run full manual test matrix: desktop Chrome, Safari, mobile Safari/Chrome emulator.

### Task 13: Final verification checklist execution + documentation update

- Follow the Success Criteria list at top of this plan exactly.
- Update README.md with a one-paragraph note about the new "Next Phase Elevations" (optional but recommended).
- Create one beautiful commit message per pillar or one squash if preferred by team.

### Task 14: (Optional but powerful) Add a tiny "Made with the same OS" badge near Experience that links back to prototype.

---

**Execution Notes for Subagents & Future Implementers**

- Every single task must pass its own "Step X: Verify" before moving on.
- After all tasks: run `npm start`, open on real phone + desktop, record 60s Loom or just mental checklist.
- Never touch `prototypes/` or `components/`.
- If a verification fails, roll back that task's edit, re-read this plan, fix, re-verify.
- The goal is not "more features" — it is "this site now feels like the official site of a 129-year-old Geneva maison that also happens to make the most advanced smartwatches on earth."

**Plan complete.** Ready for subagent-driven execution.

---
*This plan was authored following the superpowers writing-plans methodology (bite-sized, zero-assumption, copy-pasteable, verification-first) on 2026-05-31.*
