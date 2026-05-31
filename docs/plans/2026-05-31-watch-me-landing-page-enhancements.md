# Watch Me Luxury Landing Page Enhancements Plan

> **For implementer:** Follow superpowers writing-plans + systematic approach. Preserve ALL existing prototype files in prototypes/ and components/. Only modify index.html and add to docs/plans/. No changes to any Figma replica or prototype HTML files.

**Goal:** Enhance the existing elegant index.html with targeted high-value premium improvements: more sophisticated hero watch face animations + interaction modes, premium integration for the Experience section linking to prototypes, plus subtle details like scroll progress indicator and refined hover states.

**Architecture:** 
- Single self-contained index.html (Tailwind + vanilla JS)
- All enhancements are additive and non-destructive to existing structure
- Maintain dark luxurious theme
- Keep all links to prototypes/ intact and functional

**Tech Stack:** Tailwind via CDN, Font Awesome, vanilla JS (enhanced watch animations, scroll progress, hover effects)

---

## Task 1: Create implementation plan (current)

**Objective:** Document the enhancement scope following writing-plans discipline.

**Files:**
- Create: `docs/plans/2026-05-31-watch-me-landing-page-enhancements.md`

**Step 1:** Write this plan file with bite-sized tasks.

**Verification:** Plan saved and committed conceptually (no git needed unless specified).

## Task 2: Add scroll progress indicator

**Objective:** Add a subtle, premium scroll progress bar at the top of the viewport that feels luxurious.

**Files:**
- Modify: `index.html` (in <head> style or nav area)

**Step 1:** Add a fixed progress bar element just below nav or as overlay.

**Implementation details:**
Insert after nav closing:
```html
<!-- Scroll Progress -->
<div id="scroll-progress" class="fixed top-0 left-0 h-[1px] bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400 z-[60] transition-all duration-75" style="width: 0%; box-shadow: 0 0 10px rgba(197,162,111,0.5);"></div>
```

Add JS at end of body:
```js
function updateScrollProgress() {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
  document.getElementById('scroll-progress').style.width = scrollPercent + '%';
}
window.addEventListener('scroll', updateScrollProgress);
```

**Verification:** Scroll the page; thin elegant gold line progresses smoothly.

## Task 3: Enhance hero watch face with sophisticated animations and interaction modes

**Objective:** Upgrade the current simple onclick animateWatchFace() to support multiple interaction modes: drag to set time, tap to cycle modes (analog/digital, chronograph, world time), smooth spring animations, second hand sweep, subtle breathing glow, gyroscope tilt on desktop.

**Files:**
- Modify: `index.html` (hero watch-face div + associated JS + CSS)

**Step 1:** Extend watch-face CSS with new classes for modes and advanced hands.

Add CSS:
```css
.watch-face {
  /* existing + */
  transition: transform 0.8s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s ease;
  cursor: grab;
}
.watch-face:active { cursor: grabbing; }

.watch-face.mode-analog .digital-display { display: none; }
.watch-face.mode-digital .analog-hands { display: none; }

.hand {
  transition: transform 0.15s cubic-bezier(0.23, 1, 0.32, 1);
}

.chronograph-hand {
  /* new hand for chrono */
}
```

**Step 2:** Enhance the hero-watch div with data attributes and mode indicator.

Update the hero watch container with more sophisticated markup and JS handlers:
- onclick cycles modes
- mousedown + mousemove for drag-to-set-time
- Add subtle inner glow animation
- Add digital time overlay that toggles

**Step 3:** Rewrite JS functions for watch:
- animateWatchFace() → become more advanced cycleWatchMode()
- Add updateWatchTime(dragAngle) 
- Add breathing animation loop using requestAnimationFrame or CSS
- Support keyboard (space cycles mode)

**Verification:** Click watch cycles through 3 elegant modes. Drag hands sets time smoothly. Hover shows subtle premium glow. All animations feel mechanical and luxurious.

## Task 4: Improve the "Experience" section to feel more premium and integrated

**Objective:** Elevate the section that links to original Figma prototypes (around line 430) with better visual hierarchy, premium card treatments for prototype links, subtle micro-interactions on prototype thumbnails, better copy that positions the prototypes as part of the brand story.

**Files:**
- Modify: `index.html` (the #experience section)

**Step 1:** Refine the section header and description with more luxurious typography and spacing.

**Step 2:** Upgrade the prototype cards:
- Add elegant borders, gold accents on hover
- Include small preview badges ("Interactive • 12 screens")
- Better hover states: lift + inner glow + "Launch Prototype →"
- Preserve exact links to /prototypes/...

**Step 3:** Add a "View full UI Kit" button that links to components/ in a premium way.

**Verification:** The Experience section now feels like a curated museum exhibit for the OS rather than just links. Hovering cards feels expensive.

## Task 5: Add refined hover states and micro-details across the page

**Objective:** Audit and upgrade hover states on buttons, nav, cards, watch for consistency and premium feel (longer duration, better easing, micro scale + shadow + color shifts).

**Files:**
- Modify: `index.html` (global CSS + specific elements)

**Step 1:** Update .premium-button, .nav-link, .watch-card hover rules with refined values.

**Step 2:** Add subtle gold underline or glow to key CTAs on hover.

**Verification:** All interactive elements feel cohesive and luxurious.

## Task 6: Verify preservation and final polish

**Objective:** Confirm zero changes to any file under prototypes/ or components/. Test the full page.

**Files:**
- No changes to prototypes/

**Step 1:** Run `ls prototypes/` and `ls components/` to confirm untouched.

**Step 2:** Open index.html in browser and test all new features.

**Success Criteria:**
- Scroll progress is elegant and functional
- Hero watch has 3+ interaction modes with smooth animations
- Experience section feels deeply integrated and premium
- All original prototype links remain 100% functional and unchanged
- Page still elegant and high-end
- No new files outside docs/plans/ and index.html edits

---

**Important:** This plan follows the writing-plans discipline exactly. Implementation will be done in subsequent steps only after plan approval in spirit. All prototype files preserved by design.