<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="Watch Me • The Instrument. A $28,800+ Swiss-grade physical and digital luxury timepiece. The definitive smart instrument.">
  <title>Watch Me • The Instrument — Luxury Swiss Instrument</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
  <link rel="manifest" href="public/manifest.json">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;family=Space+Grotesk:wght@500;600&amp;family=Playfair+Display:wght@700&amp;display=swap');

    :root {
      --gold: #c5a26f;
      --gold-dark: #a37e4f;
      --bg: #08090a;
      --bg-elev: #111214;
      --zinc: #c8c9cd;
    }

    body {
      font-family: 'Inter', system_ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: #08090a;
      color: #f5f5f5;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .display-font {
      font-family: 'Space Grotesk', system_ui, -apple-system, sans-serif;
      font-weight: 600;
      letter-spacing: -0.045em;
    }

    .serif-display {
      font-family: 'Playfair Display', Georgia, serif;
      font-weight: 700;
      letter-spacing: -0.02em;
    }

    .luxury-text {
      font-feature-settings: "tnum" "ss01";
    }

    /* ========== ULTRA-PREMIUM WATCH SYSTEM ========== */
    .premium-watch {
      width: 420px;
      height: 420px;
      position: relative;
      filter: drop-shadow(0 100px 160px rgba(0,0,0,0.92));
      transition: transform 420ms cubic-bezier(0.23, 1, 0.32, 1), filter 420ms ease;
      will-change: transform;
    }
    .premium-watch:hover {
      filter: drop-shadow(0 110px 180px rgba(0,0,0,0.95));
    }

    /* Straps — layered luxury */
    .watch-strap {
      position: absolute;
      left: 50%;
      width: 74px;
      background: #1f2126;
      z-index: 5;
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.06), 0 30px 60px rgba(0,0,0,0.6);
      transition: background 280ms ease, box-shadow 280ms ease;
    }
    .watch-strap-top {
      top: -92px;
      height: 118px;
      border-radius: 18px 18px 4px 4px;
      transform: translateX(-50%);
    }
    .watch-strap-bottom {
      bottom: -92px;
      height: 118px;
      border-radius: 4px 4px 18px 18px;
      transform: translateX(-50%);
    }

    /* Strap variants via data attr on parent */
    .premium-watch[data-strap="alligator"] .watch-strap {
      background: linear-gradient(#1c1f24, #15171b 40%, #1c1f24);
      box-shadow: inset 0 0 0 1px rgba(255,255,255,0.04), inset 0 18px 24px rgba(0,0,0,0.5);
    }
    .premium-watch[data-strap="alligator"] .watch-strap::before {
      content: '';
      position: absolute; inset: 0;
      background: repeating-linear-gradient(90deg, transparent, transparent 3px, rgba(255,255,255,0.035) 3px, rgba(255,255,255,0.035) 5px);
      border-radius: inherit;
      mix-blend-mode: overlay;
    }
    .premium-watch[data-strap="leather"] .watch-strap {
      background: linear-gradient(#3a2f24, #2a211a 55%, #3a2f24);
    }
    .premium-watch[data-strap="milanese"] .watch-strap {
      background: linear-gradient(180deg, #d4af7a 0%, #b8975f 48%, #d4af7a 100%);
      box-shadow: inset 0 0 0 1px #f0d9a8, 0 20px 40px rgba(0,0,0,0.65);
    }
    .premium-watch[data-strap="rubber"] .watch-strap {
      background: #121316;
      box-shadow: inset 0 0 0 1px #2a2d33, inset 0 14px 22px rgba(0,0,0,0.7);
    }
    .premium-watch[data-strap="rubber"] .watch-strap::after {
      content: '';
      position: absolute; inset: 4px 8px;
      background: repeating-linear-gradient(180deg, transparent 0, transparent 7px, rgba(255,255,255,0.07) 7px, rgba(255,255,255,0.07) 8px);
      border-radius: 2px;
    }

    /* Main Case — Multi-layer with configurable finishes */
    .watch-case {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: linear-gradient(145deg, #2f2f2f 0%, #1a1a1a 32%, #0f0f0f 62%, #1f1f1f 100%);
      box-shadow: 
        inset 0 0 0 20px #111,
        inset 80px 80px 130px rgba(0,0,0,0.72),
        inset -48px -48px 110px rgba(255,255,255,0.035),
        0 0 0 1px #3a3a3a,
        0 48px 120px rgba(0,0,0,0.68);
      position: relative;
      overflow: hidden;
      z-index: 10;
      transition: background 320ms cubic-bezier(0.23,1,0.32,1), box-shadow 320ms ease;
    }

    .premium-watch[data-case="rose"] .watch-case {
      background: linear-gradient(142deg, #c9a67f 0%, #a67c52 28%, #8f6643 58%, #b38a5f 100%);
      box-shadow: 
        inset 0 0 0 20px #5c4633,
        inset 70px 70px 110px rgba(0,0,0,0.35),
        inset -42px -42px 90px rgba(255,235,200,0.18),
        0 0 0 1px #d4b48c,
        0 48px 120px rgba(0,0,0,0.65);
    }
    .premium-watch[data-case="dlc"] .watch-case {
      background: linear-gradient(145deg, #0f1114 0%, #090a0c 40%, #050607 70%, #0d0e11 100%);
      box-shadow: 
        inset 0 0 0 20px #030304,
        inset 90px 90px 140px rgba(0,0,0,0.85),
        inset -30px -30px 70px rgba(255,255,255,0.015),
        0 0 0 1px #1f2228,
        0 48px 120px rgba(0,0,0,0.8);
    }

    .watch-case::before {
      content: '';
      position: absolute; inset: 0;
      background: 
        linear-gradient(92deg, transparent 0%, rgba(255,255,255,0.028) 18%, transparent 44%),
        linear-gradient(178deg, transparent 12%, rgba(0,0,0,0.18) 52%, transparent 92%);
      border-radius: 50%;
      z-index: 1;
      pointer-events: none;
    }

    /* Lugs */
    .watch-lug {
      position: absolute;
      width: 26px;
      height: 32px;
      background: inherit;
      z-index: 9;
      box-shadow: inherit;
      left: 50%;
      transform: translateX(-50%);
    }
    .watch-lug-top { top: 14px; border-radius: 6px 6px 2px 2px; }
    .watch-lug-bottom { bottom: 14px; border-radius: 2px 2px 6px 6px; }

    /* Inner Bezel */
    .watch-bezel {
      position: absolute;
      inset: 22px;
      border-radius: 50%;
      background: #161616;
      box-shadow: 
        inset 0 0 0 3px #2a2a2a,
        inset 0 32px 85px rgba(0,0,0,0.92),
        0 0 0 1px #222;
      z-index: 8;
      transition: background 280ms ease;
    }
    .premium-watch[data-case="rose"] .watch-bezel { background: #4a3a2e; }
    .premium-watch[data-case="dlc"] .watch-bezel { background: #0a0b0d; }

    /* Sapphire Crystal — Deep, reflective */
    .watch-crystal {
      position: absolute;
      inset: 38px;
      border-radius: 50%;
      background: #0a0c10;
      box-shadow: 
        inset 0 0 0 2px rgba(255,255,255,0.18),
        inset 0 36px 95px rgba(0,0,0,0.96),
        inset 0 -18px 55px rgba(255,255,255,0.035),
        0 0 0 1px rgba(197,162,111,0.12);
      overflow: hidden;
      z-index: 20;
    }

    .crystal-reflection {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: linear-gradient(135deg, 
        rgba(255,255,255,0.42) 4%, 
        transparent 23%, 
        transparent 54%, 
        rgba(255,255,255,0.09) 76%, 
        transparent 92%);
      mix-blend-mode: screen;
      z-index: 30;
      transition: background 60ms linear;
      pointer-events: none;
    }

    .crystal-edge {
      position: absolute; inset: 0;
      border-radius: 50%;
      box-shadow: inset 0 0 46px rgba(0,0,0,0.75);
      z-index: 25;
      pointer-events: none;
    }

    /* Dial */
    .watch-dial {
      position: absolute;
      inset: 52px;
      border-radius: 50%;
      background: radial-gradient(circle at 38% 32%, #1f2126 0%, #0c0e13 72%);
      box-shadow: 
        inset 0 0 0 1px rgba(0,0,0,0.65),
        0 0 0 1px rgba(255,255,255,0.015);
      z-index: 35;
      overflow: hidden;
    }

    .dial-texture {
      position: absolute; inset: 0;
      background: repeating-radial-gradient(circle at 50% 50%, transparent 0, rgba(0,0,0,0.055) 1px, transparent 2px);
      border-radius: 50%;
      z-index: 36;
    }

    /* Signature 16 markers */
    .marker {
      position: absolute;
      left: 50%; top: 50%;
      width: 4px; height: 17px;
      background: linear-gradient(#d4af7a, #a37e4f);
      transform-origin: 50% 150px;
      border-radius: 1px;
      box-shadow: 0 0 7px rgba(197,162,111,0.45);
      z-index: 40;
    }
    .marker.minor {
      width: 2px; height: 7px;
      background: #484c55;
      box-shadow: none;
      transform-origin: 50% 150px;
    }

    /* Hands — 60fps ready */
    .hand {
      position: absolute;
      left: 50%;
      bottom: 50%;
      transform-origin: 50% 100%;
      border-radius: 9999px;
      z-index: 55;
      box-shadow: 0 5px 14px rgba(0,0,0,0.55);
      will-change: transform;
      transition: transform 80ms linear;
    }
    .hour-hand {
      width: 6px;
      height: 78px;
      background: linear-gradient(#f4f4f4, #b6b6b6);
      margin-left: -3px;
    }
    .minute-hand {
      width: 4.25px;
      height: 116px;
      background: linear-gradient(#c5a26f, #8f6f40);
      margin-left: -2.1px;
    }
    .second-hand {
      width: 1.75px;
      height: 130px;
      background: #c5a26f;
      margin-left: -0.9px;
      box-shadow: 0 0 6px rgba(197,162,111,0.7);
      z-index: 58;
    }
    .premium-watch[data-case="dlc"] .second-hand { background: #9aa0a8; box-shadow: 0 0 5px rgba(154,160,168,0.5); }

    .hand-cap {
      position: absolute;
      left: 50%; top: 50%;
      width: 15px; height: 15px;
      background: #c5a26f;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      z-index: 65;
      box-shadow: 
        0 0 0 5px #0d0f13, 
        0 0 0 8px #222,
        0 3px 7px rgba(0,0,0,0.45);
    }
    .premium-watch[data-case="rose"] .hand-cap { background: #d4af7a; box-shadow: 0 0 0 5px #3f2f22, 0 0 0 8px #5c4633, 0 3px 7px rgba(0,0,0,0.4); }

    /* Breathing Lume — disabled on reduced motion */
    .lume {
      position: absolute;
      inset: 0;
      border-radius: 50%;
      background: radial-gradient(circle at 36% 29%, rgba(197,162,111,0.22) 0%, transparent 58%);
      z-index: 37;
      animation: lumeBreath 6.5s ease-in-out infinite;
      pointer-events: none;
    }
    @keyframes lumeBreath {
      0%, 100% { opacity: 0.38; }
      50% { opacity: 0.78; }
    }
    @media (prefers-reduced-motion: reduce) {
      .lume { animation: none; opacity: 0.55; }
    }

    /* Complications layer */
    .complications {
      position: absolute;
      inset: 0;
      z-index: 45;
      border-radius: 50%;
      pointer-events: none;
    }

    /* Crown — draggable, knurled */
    .watch-crown {
      position: absolute;
      right: -22px;
      top: 50%;
      transform: translateY(-50%);
      width: 26px;
      height: 72px;
      background: linear-gradient(90deg, #2a2c31 0%, #1c1e22 48%, #2a2c31 100%);
      border-radius: 9999px;
      z-index: 70;
      box-shadow: 
        6px 0 14px rgba(0,0,0,0.65),
        inset -1px 0 0 rgba(255,255,255,0.08),
        inset 8px 0 9px rgba(0,0,0,0.5);
      cursor: grab;
      transition: transform 120ms ease, box-shadow 120ms ease;
      touch-action: none;
    }
    .watch-crown:active { cursor: grabbing; transform: translateY(-50%) scale(1.02); }
    .watch-crown::before {
      content: '';
      position: absolute; inset: 6px 0;
      background: repeating-linear-gradient(
        180deg,
        transparent 0, transparent 4px,
        rgba(255,255,255,0.13) 4px, rgba(255,255,255,0.13) 5.5px
      );
      border-radius: 9999px;
    }
    .premium-watch[data-case="rose"] .watch-crown {
      background: linear-gradient(90deg, #c9a67f 0%, #a67c52 48%, #c9a67f 100%);
      box-shadow: 6px 0 14px rgba(0,0,0,0.55), inset -1px 0 0 rgba(255,245,220,0.3);
    }

    .watch-state-label {
      position: absolute;
      bottom: -58px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 10px;
      letter-spacing: 4px;
      color: #c5a26f;
      white-space: nowrap;
      font-family: 'Space Grotesk', monospace;
      font-weight: 500;
      opacity: 0.75;
      z-index: 80;
      transition: opacity 200ms ease;
    }

    /* ========== LUXURY SYSTEM STYLES ========== */
    .section-header {
      letter-spacing: -0.035em;
    }

    .luxury-card {
      transition: transform 420ms cubic-bezier(0.23, 1, 0.32, 1), 
                  box-shadow 420ms cubic-bezier(0.23, 1, 0.32, 1),
                  border-color 280ms ease;
      border: 1px solid rgba(255,255,255,0.08);
    }
    .luxury-card:hover {
      transform: translateY(-3px);
      box-shadow: 0 25px 70px -15px rgb(0 0 0 / 0.4);
      border-color: rgba(197,162,111,0.25);
    }

    .magnetic-btn {
      transition: all 180ms cubic-bezier(0.23, 1, 0.32, 1);
      position: relative;
      overflow: hidden;
    }
    .magnetic-btn::after {
      content: '';
      position: absolute; inset: 0;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transform: translateX(-120%);
      transition: transform 620ms;
    }
    .magnetic-btn:hover {
      transform: translateY(-1px);
      box-shadow: 0 10px 30px -10px rgb(197 162 111 / 0.3);
    }
    .magnetic-btn:hover::after { transform: translateX(220%); }
    .magnetic-btn:active { transform: scale(0.985); }

    .gold-accent { color: #c5a26f; }
    .subtle-zinc { color: #c8c9cd; }

    .nav-link {
      position: relative;
      transition: color 160ms ease;
    }
    .nav-link:after {
      content: '';
      position: absolute; bottom: -2px; left: 0; width: 0;
      height: 1px; background: #c5a26f;
      transition: width 240ms cubic-bezier(0.23,1,0.32,1);
    }
    .nav-link:hover:after { width: 100%; }

    .config-swatch {
      width: 52px; height: 52px;
      border-radius: 9999px;
      border: 1px solid rgba(255,255,255,0.1);
      cursor: pointer;
      transition: all 160ms cubic-bezier(0.23,1,0.32,1);
      position: relative;
    }
    .config-swatch.active {
      border-color: #c5a26f;
      box-shadow: 0 0 0 4px rgba(197,162,111,0.18);
      transform: scale(1.04);
    }
    .config-swatch:hover { transform: scale(1.06); }
    .config-swatch:focus-visible {
      outline: 2px solid #c5a26f;
      outline-offset: 3px;
    }

    .app-preview {
      transition: transform 320ms cubic-bezier(0.23,1,0.32,1), box-shadow 320ms ease;
      border: 1px solid rgba(255,255,255,0.06);
    }
    .app-preview:hover {
      transform: translateY(-6px) scale(1.01);
      box-shadow: 0 30px 70px -20px rgb(0 0 0 / 0.55);
      border-color: rgba(197,162,111,0.2);
    }

    .modal {
      animation: modalEnter 220ms cubic-bezier(0.23,1,0.32,1) backwards;
    }
    @keyframes modalEnter {
      from { opacity: 0; transform: translateY(12px) scale(0.985); }
      to { opacity: 1; transform: translateY(0) scale(1); }
    }

    .scroll-progress {
      position: fixed; top: 0; left: 0; height: 1px;
      background: linear-gradient(to right, #c5a26f, #d4af7a);
      z-index: 100;
      transition: width 80ms linear;
      pointer-events: none;
    }

    .stat { font-feature-settings: "tnum"; }

    @media (max-width: 768px) {
      .premium-watch { width: 300px; height: 300px; }
      .watch-strap-top { top: -66px; height: 86px; }
      .watch-strap-bottom { bottom: -66px; height: 86px; }
    }

    .focus-ring:focus-visible {
      outline: 2px solid #c5a26f;
      outline-offset: 3px;
    }

    .premium-divider {
      height: 1px;
      background: linear-gradient(to right, transparent, rgba(197,162,111,0.15), transparent);
    }
  </style>
</head>
<body class="bg-[#08090a] text-[#f5f5f5] overflow-x-hidden">
  <!-- Skip link -->
  <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] px-4 py-2 bg-[#c5a26f] text-[#08090a] rounded-lg font-medium">Skip to main content</a>

  <!-- Scroll Progress -->
  <div id="scroll-progress" class="scroll-progress" style="width: 0%"></div>

  <!-- NAV -->
  <nav class="fixed top-0 left-0 right-0 z-[90] bg-[#08090a]/95 backdrop-blur-2xl border-b border-white/10" aria-label="Primary navigation">
    <div class="max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-3.5">
        <div class="w-9 h-9 rounded-full bg-gradient-to-br from-[#c5a26f] via-[#c5a26f] to-[#a37e4f] flex items-center justify-center shadow-inner ring-1 ring-white/20">
          <span class="text-[#08090a] font-bold text-[21px] tracking-[-2.2px] leading-none mt-px">WM</span>
        </div>
        <div class="leading-none">
          <div class="font-semibold text-[22px] tracking-[-1.6px]">Watch Me</div>
          <div class="text-[9px] text-white/30 tracking-[3.5px] -mt-0.5">EST 1897 • GENEVA</div>
        </div>
      </div>

      <!-- Desktop Nav -->
      <div class="hidden md:flex items-center gap-x-9 text-sm font-medium tracking-[0.6px]">
        <a href="#philosophy" class="nav-link text-white/80 hover:text-white">Philosophy</a>
        <a href="#the-watch" class="nav-link text-white/80 hover:text-white">The Instrument</a>
        <a href="#the-os" class="nav-link text-white/80 hover:text-white">The OS</a>
        <a href="#craft" class="nav-link text-white/80 hover:text-white">Craft</a>
        <a href="#experience" class="nav-link text-white/80 hover:text-white">Experience</a>
      </div>

      <!-- Desktop CTAs -->
      <div class="hidden md:flex items-center gap-3">
        <button onclick="document.getElementById('the-watch').scrollIntoView({behavior:'smooth', block:'start'})" 
                class="px-5 py-2.5 text-sm font-medium text-white/90 hover:text-white border border-white/15 hover:border-white/30 rounded-xl transition-all focus-ring">
          Configure
        </button>
        <button onclick="launchOSModal()" 
                class="magnetic-btn px-7 py-[13px] text-sm font-semibold bg-white text-[#08090a] hover:bg-[#c5a26f] hover:text-white rounded-2xl tracking-[0.4px] shadow-lg shadow-black/40"
                aria-label="Launch Watch Me OS Simulator">
          Launch the OS
        </button>
      </div>

      <!-- Mobile Hamburger -->
      <button id="mobile-menu-btn"
              class="md:hidden w-11 h-11 flex items-center justify-center text-xl text-white/90 hover:text-white focus-ring rounded-xl border border-white/10"
              aria-label="Open menu" aria-expanded="false">
        <i class="fa-solid fa-bars"></i>
      </button>
    </div>

    <!-- Mobile Menu Overlay -->
    <div id="mobile-menu" class="hidden md:hidden fixed inset-0 z-[95] bg-[#08090a]/98 backdrop-blur-3xl pt-20" aria-hidden="true">
      <div class="px-7 py-8 flex flex-col gap-y-2 text-lg font-medium">
        <a href="#philosophy" class="mobile-nav-link py-4 border-b border-white/10">Philosophy</a>
        <a href="#the-watch" class="mobile-nav-link py-4 border-b border-white/10">The Instrument</a>
        <a href="#the-os" class="mobile-nav-link py-4 border-b border-white/10">The Operating System</a>
        <a href="#craft" class="mobile-nav-link py-4 border-b border-white/10">Craft &amp; Materials</a>
        <a href="#experience" class="mobile-nav-link py-4 border-b border-white/10">Experience</a>
        <div class="pt-6 flex flex-col gap-3">
          <button onclick="document.getElementById('the-watch').scrollIntoView({behavior:'smooth'}); closeMobileMenu()" 
                  class="w-full py-4 text-center border border-white/20 rounded-2xl">Configure Your Watch</button>
          <button onclick="closeMobileMenu(); launchOSModal()" 
                  class="magnetic-btn w-full py-4 bg-white text-[#08090a] font-semibold rounded-2xl">Launch the OS</button>
        </div>
      </div>
    </div>
  </nav>

  <main id="main-content">
    <!-- HERO -->
    <section class="relative pt-20 pb-16 md:pb-24 border-b border-white/5" aria-labelledby="hero-heading">
      <div class="max-w-7xl mx-auto px-6 md:px-8 pt-12 md:pt-16">
        <div class="grid lg:grid-cols-2 gap-x-14 gap-y-14 items-center">
          
          <!-- Hero Copy -->
          <div class="max-w-[560px]">
            <div class="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 text-xs tracking-[2.5px] text-[#c5a26f] mb-6 border border-white/10">
              <span class="w-1.5 h-1.5 rounded-full bg-[#c5a26f] animate-pulse"></span>
              GENEVA • 2026
            </div>

            <h1 id="hero-heading" class="display-font text-[72px] md:text-[86px] leading-[0.88] tracking-[-4.8px] mb-6">
              The Instrument.<br>
              <span class="text-[#c5a26f]">Reborn.</span>
            </h1>

            <p class="text-2xl md:text-[27px] leading-tight text-[#c8c9cd] tracking-[-0.3px] mb-9 max-w-md">
              A physical timepiece of impossible precision.<br>
              A digital operating system that understands you.
            </p>

            <div class="flex flex-wrap items-center gap-4">
              <button onclick="launchOSModal()" 
                      class="magnetic-btn group inline-flex items-center justify-center gap-3 px-10 h-[58px] text-lg font-semibold bg-white text-[#08090a] hover:bg-[#c5a26f] hover:text-white rounded-3xl tracking-[0.3px] shadow-xl shadow-black/50 focus-ring">
                <span>Launch the OS</span>
                <i class="fa-solid fa-arrow-right transition group-hover:translate-x-0.5"></i>
              </button>
              <button onclick="document.getElementById('the-watch').scrollIntoView({behavior:'smooth', block:'center'})" 
                      class="inline-flex items-center justify-center gap-3 px-8 h-[58px] text-lg font-medium border border-white/20 hover:bg-white/5 hover:border-white/40 rounded-3xl transition-all focus-ring">
                Configure Yours
              </button>
            </div>
            <div class="mt-6 flex items-center gap-3 text-sm text-white/50">
              <div class="flex -space-x-1">
                <div class="w-6 h-6 rounded-full bg-[#c5a26f]/90 ring-2 ring-[#08090a]"></div>
                <div class="w-6 h-6 rounded-full bg-zinc-400 ring-2 ring-[#08090a]"></div>
                <div class="w-6 h-6 rounded-full bg-[#a37e4f] ring-2 ring-[#08090a]"></div>
              </div>
              <span>Hand-finished for 214 owners worldwide</span>
            </div>
          </div>

          <!-- HERO WATCH -->
          <div class="flex justify-center lg:justify-end relative">
            <div class="relative">
              <div id="premium-watch" 
                   class="premium-watch mx-auto"
                   data-case="titanium" 
                   data-strap="alligator"
                   role="img" 
                   aria-label="Watch Me luxury instrument — interactive. Drag the crown on the right to set time. Tap the crystal to cycle complications.">

                <!-- Straps -->
                <div class="watch-strap watch-strap-top" id="strap-top"></div>
                <div class="watch-strap watch-strap-bottom" id="strap-bottom"></div>

                <!-- Case -->
                <div class="watch-case" id="watch-case">
                  <!-- Lugs -->
                  <div class="watch-lug watch-lug-top"></div>
                  <div class="watch-lug watch-lug-bottom"></div>

                  <!-- Bezel -->
                  <div class="watch-bezel"></div>

                  <!-- Crystal + Reflection -->
                  <div class="watch-crystal" id="watch-crystal">
                    <div class="crystal-edge"></div>
                    <div id="crystal-reflection" class="crystal-reflection"></div>

                    <!-- Dial -->
                    <div class="watch-dial" id="watch-dial">
                      <div class="dial-texture"></div>

                      <!-- 16 Signature Markers -->
                      <div id="markers"></div>

                      <!-- Hands -->
                      <div id="hour-hand" class="hand hour-hand"></div>
                      <div id="minute-hand" class="hand minute-hand"></div>
                      <div id="second-hand" class="hand second-hand"></div>
                      <div class="hand-cap"></div>

                      <!-- Breathing Lume -->
                      <div class="lume" id="lume"></div>

                      <!-- Dynamic Complications -->
                      <div id="complications" class="complications"></div>
                    </div>
                  </div>
                </div>

                <!-- Crown -->
                <div id="crown" class="watch-crown" role="slider" aria-label="Digital crown — drag vertically to adjust displayed time" tabindex="0" aria-valuemin="0" aria-valuemax="100"></div>
              </div>

              <div class="watch-state-label font-mono tracking-[3px]" id="watch-mode-label">TIME • REAL</div>
            </div>
          </div>

        </div>
      </div>
    </section>

    <!-- PHILOSOPHY -->
    <section id="philosophy" class="max-w-5xl mx-auto px-6 md:px-8 pt-20 pb-16" aria-labelledby="philosophy-heading">
      <div class="text-center mb-12">
        <div class="text-[#c5a26f] text-xs tracking-[4.5px] mb-3">CHAPTER I — PHILOSOPHY</div>
        <h2 id="philosophy-heading" class="display-font text-6xl md:text-7xl tracking-[-2.8px]">Time, composed.</h2>
      </div>

      <div class="grid md:grid-cols-12 gap-x-8 gap-y-12 items-center">
        <div class="md:col-span-7">
          <div class="serif-display text-[34px] md:text-[42px] leading-[1.05] tracking-[-1.1px] text-balance">
            Every second is an act of intention.<br>
            Every gesture, a conversation with legacy.
          </div>
        </div>
        <div class="md:col-span-5 text-[#c8c9cd] text-[17px] leading-relaxed">
          <p class="mb-5">Watch Me is not a smartwatch. It is a Swiss instrument that happens to contain the most advanced digital operating system ever placed on the wrist.</p>
          <p>The physical piece is machined, brushed, and hand-finished in Geneva. The digital soul was written to feel invisible until the moment you need it — then it is quietly perfect.</p>
        </div>
      </div>
    </section>

    <!-- THE WATCH + CONFIGURATOR -->
    <section id="the-watch" class="bg-[#111214] py-16 md:py-20 border-y border-white/10" aria-labelledby="watch-heading">
      <div class="max-w-7xl mx-auto px-6 md:px-8">
        <div class="flex flex-col items-center text-center mb-12">
          <div class="text-[#c5a26f] text-xs tracking-[4.5px]">THE INSTRUMENT</div>
          <h2 id="watch-heading" class="display-font text-6xl md:text-7xl tracking-[-3px] mt-3">Configure the Circle.</h2>
          <p class="max-w-md mt-4 text-[#c8c9cd]">Three case finishes. Four straps. One living mechanism. Your configuration updates the instrument above in real time.</p>
        </div>

        <div class="grid lg:grid-cols-12 gap-x-10 gap-y-10">
          <!-- Configurator Controls -->
          <div class="lg:col-span-5 xl:col-span-4">
            <div class="sticky top-24 space-y-10">
              <!-- Case Finishes -->
              <div>
                <div class="flex items-center justify-between mb-4 px-1">
                  <div class="uppercase text-xs tracking-[3px] text-white/60">Case Finish</div>
                  <div class="text-[10px] text-[#c5a26f]">3 options</div>
                </div>
                <div class="flex gap-4 flex-wrap" role="radiogroup" aria-label="Case finish options">
                  <button data-case="titanium" class="config-swatch active group" style="background: linear-gradient(145deg,#2f2f2f,#1a1a1a,#1f1f1f);" aria-label="Brushed Titanium" title="Brushed Titanium">
                    <span class="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] text-white/70 whitespace-nowrap group-[.active]:text-[#c5a26f]">Titanium</span>
                  </button>
                  <button data-case="rose" class="config-swatch group" style="background: linear-gradient(145deg,#c9a67f,#a67c52,#b38a5f);" aria-label="18K Rose Gold" title="18K Rose Gold">
                    <span class="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] text-white/70 whitespace-nowrap group-[.active]:text-[#c5a26f]">Rose Gold</span>
                  </button>
                  <button data-case="dlc" class="config-swatch group" style="background: linear-gradient(145deg,#0f1114,#050607,#0d0e11);" aria-label="Midnight DLC" title="Midnight DLC">
                    <span class="absolute -bottom-7 left-1/2 -translate-x-1/2 text-[10px] text-white/70 whitespace-nowrap group-[.active]:text-[#c5a26f]">DLC Black</span>
                  </button>
                </div>
              </div>

              <!-- Straps -->
              <div>
                <div class="flex items-center justify-between mb-4 px-1">
                  <div class="uppercase text-xs tracking-[3px] text-white/60">Strap</div>
                  <div class="text-[10px] text-[#c5a26f]">4 options</div>
                </div>
                <div class="grid grid-cols-2 gap-3" role="radiogroup" aria-label="Strap material options">
                  <button data-strap="alligator" class="config-option flex items-center gap-3 px-4 py-3.5 rounded-2xl border border-white/10 active:bg-white/5 text-left focus-ring active" aria-label="Black Alligator strap">
                    <div class="w-6 h-6 rounded-full bg-[#1c1f24] ring-1 ring-white/10 flex-shrink-0"></div>
                    <div>
                      <div class="font-medium text-sm">Black Alligator</div>
                      <div class="text-[10px] text-white/50">Matte • Hand-selected</div>
                    </div>
                  </button>
                  <button data-strap="leather" class="config-option flex items-center gap-3 px-4 py-3.5 rounded-2xl border border-white/10 active:bg-white/5 text-left focus-ring" aria-label="Havana Barenia leather strap">
                    <div class="w-6 h-6 rounded-full bg-[#3a2f24] ring-1 ring-white/10 flex-shrink-0"></div>
                    <div>
                      <div class="font-medium text-sm">Havana Barenia</div>
                      <div class="text-[10px] text-white/50">French tannery</div>
                    </div>
                  </button>
                  <button data-strap="milanese" class="config-option flex items-center gap-3 px-4 py-3.5 rounded-2xl border border-white/10 active:bg-white/5 text-left focus-ring" aria-label="18K Gold Milanese mesh strap">
                    <div class="w-6 h-6 rounded-full bg-gradient-to-br from-[#d4af7a] to-[#b8975f] ring-1 ring-white/10 flex-shrink-0"></div>
                    <div>
                      <div class="font-medium text-sm">18K Milanese</div>
                      <div class="text-[10px] text-white/50">Hand-woven mesh</div>
                    </div>
                  </button>
                  <button data-strap="rubber" class="config-option flex items-center gap-3 px-4 py-3.5 rounded-2xl border border-white/10 active:bg-white/5 text-left focus-ring" aria-label="Technical FKM rubber strap">
                    <div class="w-6 h-6 rounded-full bg-[#121316] ring-1 ring-white/10 flex-shrink-0"></div>
                    <div>
                      <div class="font-medium text-sm">Technical FKM</div>
                      <div class="text-[10px] text-white/50">Engineered • Sport</div>
                    </div>
                  </button>
                </div>
              </div>

              <!-- Live Price -->
              <div class="rounded-3xl bg-[#08090a] border border-white/10 p-7">
                <div class="flex items-baseline justify-between">
                  <div>
                    <div class="uppercase text-xs tracking-[2.5px] text-white/50 mb-px">Configured Price</div>
                    <div id="price-display" class="font-semibold text-5xl tracking-[-2.2px] tabular-nums">$28,800</div>
                  </div>
                  <div class="text-right text-xs text-white/50 leading-tight">Includes<br>3-year service</div>
                </div>
                <button onclick="reserveConfiguration()" 
                        class="magnetic-btn mt-6 w-full py-3.5 text-sm font-semibold bg-white/95 hover:bg-white text-[#08090a] rounded-2xl tracking-[0.6px]">
                  RESERVE THIS CONFIGURATION
                </button>
                <div class="text-center text-[10px] text-white/40 mt-3 tracking-wider">ATELIER DELIVERY • 10–14 WEEKS</div>
              </div>
            </div>
          </div>

          <!-- Live Watch Preview (synced to hero) -->
          <div class="lg:col-span-7 xl:col-span-8 flex items-center justify-center pt-4 lg:pt-0">
            <div class="text-center">
              <div class="text-xs tracking-[3px] text-white/50 mb-3">LIVE PREVIEW — UPDATES HERO INSTRUMENT</div>
              <div onclick="cycleWatchMode()" class="cursor-pointer inline-block">
                <div id="config-watch-preview" class="premium-watch scale-[0.78] md:scale-[0.82] origin-top mx-auto" 
                     data-case="titanium" data-strap="alligator" style="filter: drop-shadow(0 40px 80px rgba(0,0,0,0.6));">
                  <!-- Mini version of watch markup for visual sync (lightweight) -->
                  <div class="watch-strap watch-strap-top" style="top:-68px;height:88px;width:56px;"></div>
                  <div class="watch-strap watch-strap-bottom" style="bottom:-68px;height:88px;width:56px;"></div>
                  <div class="watch-case" style="width:100%;height:100%;">
                    <div class="watch-bezel"></div>
                    <div class="watch-crystal">
                      <div class="watch-dial">
                        <div id="preview-markers"></div>
                        <div id="preview-hour" class="hand hour-hand" style="height:58px;width:4.5px;"></div>
                        <div id="preview-minute" class="hand minute-hand" style="height:86px;width:3.5px;"></div>
                        <div id="preview-second" class="hand second-hand" style="height:96px;width:1.5px;"></div>
                        <div class="hand-cap" style="width:12px;height:12px;"></div>
                      </div>
                    </div>
                  </div>
                  <div class="watch-crown" style="right:-16px;height:52px;width:18px;top:50%;"></div>
                </div>
              </div>
              <div class="text-[#c5a26f] text-xs tracking-[2px] mt-4">TAP ANYWHERE ON THE INSTRUMENT TO CYCLE COMPLICATIONS</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- THE OS -->
    <section id="the-os" class="max-w-7xl mx-auto px-6 md:px-8 py-20" aria-labelledby="os-heading">
      <div class="flex flex-col items-center text-center mb-12">
        <div class="text-[#c5a26f] text-xs tracking-[4.5px]">CHAPTER II — THE OPERATING SYSTEM</div>
        <h2 id="os-heading" class="display-font text-6xl md:text-7xl tracking-[-2.8px] mt-2">Intelligence at the wrist.</h2>
        <p class="max-w-lg mt-4 text-[#c8c9cd]">Four of sixteen native experiences. Each one crafted with the same obsessive detail as the physical case.</p>
      </div>

      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <!-- App Preview 1: Messages -->
        <div onclick="previewApp('messages')" class="app-preview bg-[#0c0d10] rounded-3xl overflow-hidden border border-white/10 cursor-pointer group">
          <div class="h-2 bg-gradient-to-r from-[#7640ef] to-[#c026ff]"></div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-5">
              <div>
                <div class="font-semibold tracking-tight">Messages</div>
                <div class="text-xs text-white/40">Voice • Text • Presence</div>
              </div>
              <i class="fa-solid fa-comment-dots text-xl text-[#c5a26f]/70 group-hover:text-[#c5a26f]"></i>
            </div>
            <div class="space-y-2 text-sm">
              <div class="flex gap-2"><div class="text-white/50 text-xs w-9">14:02</div><div class="bg-white/5 px-3 py-1 rounded-2xl text-xs flex-1">Dinner at 8?</div></div>
              <div class="flex gap-2 justify-end"><div class="bg-[#c5a26f] text-[#08090a] px-3 py-1 rounded-2xl text-xs">On my way.</div></div>
            </div>
          </div>
          <div class="px-6 pb-5 text-[10px] text-white/40 flex justify-between items-center border-t border-white/5 pt-4">
            <span>4 unread</span><span class="text-[#c5a26f]">OPEN IN OS →</span>
          </div>
        </div>

        <!-- App Preview 2: Health -->
        <div onclick="previewApp('health')" class="app-preview bg-[#0c0d10] rounded-3xl overflow-hidden border border-white/10 cursor-pointer group">
          <div class="h-2 bg-gradient-to-r from-[#ff4a8c] to-[#c026ff]"></div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-5">
              <div>
                <div class="font-semibold tracking-tight">Health</div>
                <div class="text-xs text-white/40">Move • Exercise • Stand</div>
              </div>
              <i class="fa-solid fa-heart-pulse text-xl text-[#c5a26f]/70 group-hover:text-[#c5a26f]"></i>
            </div>
            <!-- Activity Rings preview -->
            <div class="flex items-center justify-center gap-6 py-3">
              <div class="relative w-16 h-16">
                <svg class="w-16 h-16 -rotate-90" viewBox="0 0 42 42">
                  <circle cx="21" cy="21" r="18" fill="none" stroke="#222" stroke-width="3.5"/>
                  <circle cx="21" cy="21" r="18" fill="none" stroke="#ff4a8c" stroke-width="3.5" stroke-dasharray="113" stroke-dashoffset="19"/>
                </svg>
                <div class="absolute inset-0 flex items-center justify-center text-[10px] text-white/70">87%</div>
              </div>
              <div class="space-y-1 text-xs">
                <div>Move <span class="text-[#ff4a8c] font-medium">612</span></div>
                <div>Exercise <span class="font-medium">48</span></div>
                <div>Stand <span class="font-medium">14</span>/16</div>
              </div>
            </div>
          </div>
          <div class="px-6 pb-5 text-[10px] text-white/40 flex justify-between items-center border-t border-white/5 pt-4">
            <span>Today • 14,812 steps</span><span class="text-[#c5a26f]">OPEN IN OS →</span>
          </div>
        </div>

        <!-- App Preview 3: Wallet -->
        <div onclick="previewApp('wallet')" class="app-preview bg-[#0c0d10] rounded-3xl overflow-hidden border border-white/10 cursor-pointer group">
          <div class="h-2 bg-gradient-to-r from-[#c5a26f] to-[#a37e4f]"></div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-4">
              <div>
                <div class="font-semibold tracking-tight">Wallet</div>
                <div class="text-xs text-white/40">Cards • Crypto • Keys</div>
              </div>
              <i class="fa-solid fa-wallet text-xl text-[#c5a26f]/70 group-hover:text-[#c5a26f]"></i>
            </div>
            <div class="text-xs bg-white/5 rounded-2xl p-3 space-y-2">
              <div class="flex justify-between"><span class="text-white/70">Amex Black</span><span class="font-medium">•••• 8842</span></div>
              <div class="flex justify-between items-center"><span class="font-semibold text-lg tracking-tighter">$12,480</span><span class="px-2 py-px bg-emerald-400/10 text-emerald-400 text-[10px] rounded">TAP TO PAY</span></div>
            </div>
          </div>
          <div class="px-6 pb-5 text-[10px] text-white/40 flex justify-between items-center border-t border-white/5 pt-4">
            <span>3 cards • 1.84 BTC</span><span class="text-[#c5a26f]">OPEN IN OS →</span>
          </div>
        </div>

        <!-- App Preview 4: Timer -->
        <div onclick="previewApp('timer')" class="app-preview bg-[#0c0d10] rounded-3xl overflow-hidden border border-white/10 cursor-pointer group">
          <div class="h-2 bg-gradient-to-r from-[#c026ff] to-[#7640ef]"></div>
          <div class="p-6">
            <div class="flex justify-between items-start mb-5">
              <div>
                <div class="font-semibold tracking-tight">Timer</div>
                <div class="text-xs text-white/40">Precision countdowns</div>
              </div>
              <i class="fa-solid fa-stopwatch text-xl text-[#c5a26f]/70 group-hover:text-[#c5a26f]"></i>
            </div>
            <div class="font-mono text-5xl tracking-[-2.5px] text-center tabular-nums font-semibold text-[#c5a26f]">17:42</div>
            <div class="flex justify-center gap-2 mt-4">
              <div class="px-3 py-1 text-xs rounded-full bg-white/5">PRESET 15</div>
              <div class="px-3 py-1 text-xs rounded-full bg-white/5">PRESET 25</div>
            </div>
          </div>
          <div class="px-6 pb-5 text-[10px] text-white/40 flex justify-between items-center border-t border-white/5 pt-4">
            <span>3 active timers</span><span class="text-[#c5a26f]">OPEN IN OS →</span>
          </div>
        </div>
      </div>

      <div class="flex justify-center mt-10">
        <button onclick="launchOSModal()" 
                class="magnetic-btn group inline-flex items-center gap-4 px-14 h-14 text-base font-semibold border-2 border-white/90 hover:border-[#c5a26f] hover:bg-[#c5a26f] hover:text-[#08090a] rounded-3xl transition-all tracking-[0.8px]">
          <span>OPEN FULL SIMULATOR</span>
          <i class="fa-solid fa-play text-sm group-hover:scale-110 transition"></i>
        </button>
      </div>
      <p class="text-center text-xs text-white/40 mt-3 tracking-wider">Currently links to premium instrument prototype • Full OS arriving at <span class="font-mono">prototypes/watch-me-os.html</span></p>
    </section>

    <!-- CRAFT & MATERIALS -->
    <section id="craft" class="border-y border-white/10 bg-[#08090a] py-20" aria-labelledby="craft-heading">
      <div class="max-w-6xl mx-auto px-6 md:px-8">
        <div class="grid lg:grid-cols-12 gap-x-12">
          <div class="lg:col-span-5 mb-12 lg:mb-0">
            <div class="text-[#c5a26f] text-xs tracking-[4.5px]">CHAPTER III — ATELIER</div>
            <h2 id="craft-heading" class="display-font text-[56px] leading-none tracking-[-2.4px] mt-4">Craft is the<br>only luxury<br>that lasts.</h2>
            <p class="mt-6 text-lg text-[#c8c9cd]">Every surface that touches your skin has been considered for decades of daily use.</p>
          </div>
          <div class="lg:col-span-7">
            <div class="grid sm:grid-cols-2 gap-6">
              <div class="luxury-card bg-[#111214] p-8 rounded-3xl">
                <div class="text-[#c5a26f] mb-4"><i class="fa-solid fa-gem text-3xl"></i></div>
                <div class="font-semibold mb-1.5">Sapphire Crystal</div>
                <div class="text-sm text-[#c8c9cd]">Double-domed, anti-reflective on both sides. 9.2 on the Mohs scale. Nearly impossible to scratch in normal use.</div>
              </div>
              <div class="luxury-card bg-[#111214] p-8 rounded-3xl">
                <div class="text-[#c5a26f] mb-4"><i class="fa-solid fa-microchip text-3xl"></i></div>
                <div class="font-semibold mb-1.5">Caliber WM-16</div>
                <div class="text-sm text-[#c8c9cd]">In-house automatic + quartz hybrid. 72-hour power reserve. ±0.8 seconds per month. The most accurate wrist movement ever produced.</div>
              </div>
              <div class="luxury-card bg-[#111214] p-8 rounded-3xl">
                <div class="text-[#c5a26f] mb-4"><i class="fa-solid fa-shield-halved text-3xl"></i></div>
                <div class="font-semibold mb-1.5">Case Materials</div>
                <div class="text-sm text-[#c8c9cd]">Grade 5 titanium, 18K rose gold or proprietary DLC. All finished by hand in our Geneva workshop. 50m water resistance.</div>
              </div>
              <div class="luxury-card bg-[#111214] p-8 rounded-3xl">
                <div class="text-[#c5a26f] mb-4"><i class="fa-solid fa-wifi text-3xl"></i></div>
                <div class="font-semibold mb-1.5">Sensors &amp; OS</div>
                <div class="text-sm text-[#c8c9cd]">Six-axis IMU, optical HR, SpO₂, barometer, temperature, NFC. The OS runs entirely on-device. No cloud required for core functions.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EXPERIENCE / TESTIMONIALS -->
    <section id="experience" class="max-w-6xl mx-auto px-6 md:px-8 py-20" aria-labelledby="experience-heading">
      <div class="text-center mb-11">
        <div class="text-[#c5a26f] text-xs tracking-[4.5px]">CHAPTER IV — EXPERIENCE</div>
        <h2 id="experience-heading" class="display-font text-6xl tracking-[-2.6px] mt-2">Owned by those who notice everything.</h2>
      </div>

      <div class="grid md:grid-cols-3 gap-6">
        <div onclick="reactToTestimonial(0)" class="luxury-card group bg-[#111214] p-8 rounded-3xl cursor-pointer focus-ring" tabindex="0">
          <div class="text-sm text-white/50">“The only watch that feels like it was made for how I actually live. The OS anticipates what I need before I reach for my phone.”</div>
          <div class="mt-8 flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-zinc-700"></div>
            <div>
              <div class="font-medium">Dr. Elena Voss</div>
              <div class="text-xs text-white/40">Principal Conductor, Berlin Philharmonic • Owner #041</div>
            </div>
          </div>
          <div class="mt-4 text-[10px] text-[#c5a26f] tracking-widest group-hover:underline">SETS WATCH TO ACTIVITY RINGS</div>
        </div>

        <div onclick="reactToTestimonial(1)" class="luxury-card group bg-[#111214] p-8 rounded-3xl cursor-pointer focus-ring" tabindex="0">
          <div class="text-sm text-white/50">“I set the moonphase complication before expeditions. It has never been wrong. The crown drag is the most satisfying physical interaction I own.”</div>
          <div class="mt-8 flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-zinc-700"></div>
            <div>
              <div class="font-medium">Capt. Marcus Hale</div>
              <div class="text-xs text-white/40">National Geographic Explorer • Owner #019</div>
            </div>
          </div>
          <div class="mt-4 text-[10px] text-[#c5a26f] tracking-widest group-hover:underline">SETS WATCH TO MOONPHASE</div>
        </div>

        <div onclick="reactToTestimonial(2)" class="luxury-card group bg-[#111214] p-8 rounded-3xl cursor-pointer focus-ring" tabindex="0">
          <div class="text-sm text-white/50">“In the boardroom the Telemetry mode shows my heart rate without anyone noticing. The physical instrument commands respect the moment I place it on the table.”</div>
          <div class="mt-8 flex items-center gap-4">
            <div class="w-10 h-10 rounded-full bg-zinc-700"></div>
            <div>
              <div class="font-medium">Sofia Patel</div>
              <div class="text-xs text-white/40">CEO &amp; Founder, Vesper Capital • Owner #112</div>
            </div>
          </div>
          <div class="mt-4 text-[10px] text-[#c5a26f] tracking-widest group-hover:underline">SETS WATCH TO TELEMETRY</div>
        </div>
      </div>
    </section>

    <!-- ATELIER / CLOSING -->
    <section id="atelier" class="border-t border-white/10 py-20 bg-[#111214]">
      <div class="max-w-3xl mx-auto px-6 text-center">
        <div class="text-[#c5a26f] text-xs tracking-[4.5px]">THE ATELIER</div>
        <h2 class="display-font text-[54px] leading-none tracking-[-2.1px] mt-3">Your instrument awaits.</h2>
        <p class="mt-5 max-w-md mx-auto text-[#c8c9cd]">Every Watch Me is commissioned. Each one engraved with the precise latitude and longitude of its owner at the moment of final calibration.</p>

        <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button onclick="launchOSModal()" class="magnetic-btn px-14 py-4 rounded-3xl text-base font-semibold bg-white text-[#08090a] hover:bg-[#c5a26f] hover:text-white w-full sm:w-auto">Launch the OS</button>
          <button onclick="reserveConfiguration()" class="px-10 py-4 rounded-3xl text-base font-medium border border-white/25 hover:bg-white/5 w-full sm:w-auto">Request a Private Atelier Visit</button>
        </div>
        <div class="mt-7 text-xs text-white/40 tracking-widest">GENEVA • NEW YORK • SINGAPORE • DUBAI</div>
      </div>
    </section>
  </main>

  <!-- FOOTER -->
  <footer class="border-t border-white/10 py-9 text-xs text-white/40">
    <div class="max-w-7xl mx-auto px-6 md:px-8 flex flex-col md:flex-row gap-y-2 items-center justify-between">
      <div>© Watch Me Atelier 1897–2026. All rights reserved. Handcrafted in Switzerland.</div>
      <div class="flex items-center gap-x-6">
        <a href="#" class="hover:text-white transition">Privacy</a>
        <a href="#" class="hover:text-white transition">Legal</a>
        <a href="https://github.com" target="_blank" class="hover:text-white transition">GitHub</a>
        <span class="hidden md:inline">•</span>
        <a href="components/component-catalog.html" class="hover:text-white transition">Component Library</a>
      </div>
    </div>
  </footer>

  <!-- OS LAUNCH MODAL -->
  <div id="os-modal" class="hidden fixed inset-0 z-[110] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="modal-title">
    <div onclick="event.target.id==='os-modal' && closeOSModal()" class="absolute inset-0"></div>
    <div class="modal relative w-full max-w-[460px] bg-[#111214] rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
      <div class="px-8 pt-8 pb-6">
        <div class="flex justify-between items-start">
          <div>
            <div class="text-xs text-[#c5a26f] tracking-[3px]">WATCH ME OS</div>
            <h3 id="modal-title" class="display-font text-[34px] tracking-[-1.2px] mt-1">The digital soul.</h3>
          </div>
          <button onclick="closeOSModal()" class="text-3xl leading-none text-white/60 hover:text-white w-9 h-9 -mr-1 -mt-1" aria-label="Close modal">×</button>
        </div>

        <p class="mt-4 text-[#c8c9cd]">Sixteen refined applications. Real-time sensor fusion. Everything persists across sessions. Nothing leaves the device unless you choose.</p>

        <div class="my-7 grid grid-cols-2 gap-3 text-sm">
          <div class="bg-[#08090a] rounded-2xl p-3.5">Messages &amp; Voice</div>
          <div class="bg-[#08090a] rounded-2xl p-3.5">Health &amp; Rings</div>
          <div class="bg-[#08090a] rounded-2xl p-3.5">Wallet &amp; NFC</div>
          <div class="bg-[#08090a] rounded-2xl p-3.5">Timer • Tasks • Music</div>
          <div class="bg-[#08090a] rounded-2xl p-3.5">Maps • Weather</div>
          <div class="bg-[#08090a] rounded-2xl p-3.5">Settings &amp; Themes</div>
        </div>

        <div class="space-y-3">
          <a href="prototypes/watch-me-premium-instrument.html" 
             class="block text-center magnetic-btn w-full py-[17px] font-semibold bg-white text-[#08090a] rounded-2xl tracking-[0.4px]">
            Enter Current Premium Prototype
          </a>
          <button onclick="closeOSModal(); window.location.href='prototypes/watch-me-os.html'" 
                  class="block w-full py-4 text-center border border-white/20 hover:bg-white/5 rounded-2xl text-sm font-medium tracking-wider">
            Open Full Simulator (prototypes/watch-me-os.html)
          </button>
        </div>
      </div>
      <div class="bg-black/30 text-center py-3 text-[10px] text-white/40 border-t border-white/10">Self-contained • 60fps • Fully persistent • Keyboard accessible</div>
    </div>
  </div>

  <!-- Reserve modal (simple) -->
  <div id="reserve-modal" class="hidden fixed inset-0 z-[120] flex items-center justify-center p-6 bg-black/80 backdrop-blur" role="dialog" aria-modal="true">
    <div onclick="event.target.id==='reserve-modal' && closeReserveModal()" class="absolute inset-0"></div>
    <div class="relative bg-[#111214] max-w-md w-full rounded-3xl p-8 border border-white/10">
      <button onclick="closeReserveModal()" class="absolute top-6 right-6 text-3xl leading-none text-white/50 hover:text-white">×</button>
      <div class="text-[#c5a26f] text-xs tracking-widest">ATELIER COMMISSION</div>
      <div class="text-3xl font-semibold tracking-tight mt-1">Reserve your instrument.</div>
      <p class="text-sm text-white/60 mt-2">An Atelier concierge will contact you within 48 hours to finalize materials, engraving, and delivery window.</p>
      
      <form onsubmit="submitReservation(event)" class="mt-7 space-y-4">
        <input type="text" placeholder="Full name" required class="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-3.5 text-sm focus-ring placeholder:text-white/30">
        <input type="email" placeholder="Email address" required class="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-3.5 text-sm focus-ring placeholder:text-white/30">
        <div class="grid grid-cols-2 gap-4">
          <input type="text" placeholder="City" class="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-3.5 text-sm focus-ring placeholder:text-white/30">
          <input type="text" placeholder="Country" class="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-3.5 text-sm focus-ring placeholder:text-white/30">
        </div>
        <button type="submit" class="magnetic-btn w-full py-3.5 mt-3 bg-[#c5a26f] hover:bg-[#d4af7a] text-[#08090a] font-semibold rounded-2xl">SUBMIT COMMISSION REQUEST</button>
      </form>
      <div class="text-center text-[10px] text-white/40 mt-5">This is a demonstration. No data is transmitted.</div>
    </div>
  </div>

  <script>
    // ==================== WATCH ME — ULTRA PREMIUM INSTRUMENT (2026) ====================
    // Self-contained. Zero production dependencies. 60fps interactions. Luxury first.

    let currentConfig = { case: 'titanium', strap: 'alligator' };
    let currentMode = 'time';
    let timeOffsetMs = 0;
    let rafHandle = null;
    let isCrownDragging = false;
    let crownStartClientY = 0;
    let crownStartOffset = 0;
    let prefersReducedMotion = false;

    const PRICE_BASE = 28800;
    const PRICE_DELTAS = {
      case: { titanium: 0, rose: 4800, dlc: -1200 },
      strap: { alligator: 1450, leather: 720, milanese: 980, rubber: 0 }
    };

    function initTailwind() {
      // Tailwind script already loaded via CDN. This is just for any runtime if needed.
    }

    function checkReducedMotion() {
      prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      const lume = document.getElementById('lume');
      if (lume && prefersReducedMotion) {
        lume.style.animation = 'none';
        lume.style.opacity = '0.55';
      }
    }

    // ---------- WATCH ENGINE (60fps, crown drag, accurate hands, 4 modes) ----------
    function createMarkers(containerId) {
      const container = document.getElementById(containerId);
      if (!container) return;
      container.innerHTML = '';
      for (let i = 0; i < 16; i++) {
        const isMajor = i % 2 === 0;
        const m = document.createElement('div');
        m.className = isMajor ? 'marker' : 'marker minor';
        m.style.transform = `rotate(${i * 22.5}deg)`;
        container.appendChild(m);
      }
    }

    function getDisplayDate() {
      return new Date(Date.now() + timeOffsetMs);
    }

    function updateHandsSmooth() {
      const now = getDisplayDate();
      const ms = now.getMilliseconds();
      const s = now.getSeconds() + ms / 1000;
      const m = now.getMinutes() + s / 60;
      const h = (now.getHours() % 12) + m / 60;

      const secondDeg = s * 6;
      const minuteDeg = m * 6;
      const hourDeg = h * 30;

      // Hero watch
      const sh = document.getElementById('second-hand');
      const mh = document.getElementById('minute-hand');
      const hh = document.getElementById('hour-hand');

      if (sh) sh.style.transform = `rotate(${secondDeg}deg)`;
      if (mh) mh.style.transform = `rotate(${minuteDeg}deg)`;
      if (hh) hh.style.transform = `rotate(${hourDeg}deg)`;

      // Preview watch (lighter)
      const psh = document.getElementById('preview-second');
      const pmh = document.getElementById('preview-minute');
      const phh = document.getElementById('preview-hour');
      if (psh) psh.style.transform = `rotate(${secondDeg}deg)`;
      if (pmh) pmh.style.transform = `rotate(${minuteDeg}deg)`;
      if (phh) phh.style.transform = `rotate(${hourDeg}deg)`;

      // Update label occasionally
      updateModeLabel();
    }

    function startWatchEngine() {
      if (rafHandle) cancelAnimationFrame(rafHandle);

      function loop() {
        updateHandsSmooth();
        rafHandle = requestAnimationFrame(loop);
      }
      loop();

      // Seed initial time
      setTimeout(() => {
        updateHandsSmooth();
        renderComplications(currentMode);
      }, 40);
    }

    // Crown drag — vertical delta controls time offset (luxurious feel)
    function initCrownDrag() {
      const crown = document.getElementById('crown');
      const watch = document.getElementById('premium-watch');
      if (!crown || !watch) return;

      function onPointerDown(e) {
        isCrownDragging = true;
        crownStartClientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
        crownStartOffset = timeOffsetMs;
        crown.style.cursor = 'grabbing';
        watch.style.transitionDuration = '60ms';
        e.preventDefault();
      }

      function onPointerMove(e) {
        if (!isCrownDragging) return;
        const clientY = e.clientY || (e.touches && e.touches[0].clientY) || crownStartClientY;
        const deltaY = clientY - crownStartClientY;

        // 1px drag ≈ 1.8 minutes of time (tuned for satisfying luxury feel)
        const minutesDelta = deltaY * -1.85;
        timeOffsetMs = crownStartOffset + (minutesDelta * 60 * 1000);

        // Immediate visual feedback
        updateHandsSmooth();
        renderComplications(currentMode); // keep complications in sync if needed
      }

      function onPointerUp() {
        if (!isCrownDragging) return;
        isCrownDragging = false;
        crown.style.cursor = 'grab';
        const watchEl = document.getElementById('premium-watch');
        if (watchEl) watchEl.style.transitionDuration = '420ms';
      }

      // Mouse + touch + pointer
      crown.addEventListener('pointerdown', onPointerDown);
      window.addEventListener('pointermove', onPointerMove);
      window.addEventListener('pointerup', onPointerUp);
      window.addEventListener('pointercancel', onPointerUp);

      // Keyboard support (arrow keys)
      crown.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowUp') { timeOffsetMs -= 15 * 60 * 1000; updateHandsSmooth(); e.preventDefault(); }
        if (e.key === 'ArrowDown') { timeOffsetMs += 15 * 60 * 1000; updateHandsSmooth(); e.preventDefault(); }
        if (e.key.toLowerCase() === 'r') { timeOffsetMs = 0; updateHandsSmooth(); e.preventDefault(); }
      });

      crown.addEventListener('dblclick', () => {
        timeOffsetMs = 0;
        updateHandsSmooth();
      });
    }

    // Click on crystal / dial cycles the 4 complications
    function initModeCycling() {
      const crystal = document.getElementById('watch-crystal');
      const dial = document.getElementById('watch-dial');
      const target = crystal || dial;
      if (!target) return;

      target.addEventListener('click', (e) => {
        // Ignore crown area clicks
        if (e.target.id === 'crown' || e.target.closest('#crown')) return;
        cycleWatchMode();
      });

      // Also allow clicking the preview
      const previewDial = document.getElementById('config-watch-preview');
      if (previewDial) {
        previewDial.addEventListener('click', cycleWatchMode);
      }
    }

    function cycleWatchMode() {
      const modes = ['time', 'rings', 'moon', 'telemetry'];
      const idx = modes.indexOf(currentMode);
      currentMode = modes[(idx + 1) % 4];
      renderComplications(currentMode);
      updateModeLabel(true);
    }

    function updateModeLabel(flash = false) {
      const label = document.getElementById('watch-mode-label');
      if (!label) return;

      const names = {
        time: 'TIME • REAL',
        rings: 'ACTIVITY RINGS',
        moon: 'MOONPHASE',
        telemetry: 'TELEMETRY'
      };
      label.textContent = names[currentMode] || 'INSTRUMENT';

      if (flash) {
        label.style.transitionDuration = '60ms';
        label.style.opacity = '1';
        setTimeout(() => {
          label.style.transitionDuration = '220ms';
          label.style.opacity = '0.75';
        }, 420);
      }
    }

    function renderComplications(mode) {
      const comp = document.getElementById('complications');
      if (!comp) return;
      comp.innerHTML = '';
      comp.style.pointerEvents = 'none';

      if (mode === 'time') {
        // Elegant date window
        const now = getDisplayDate();
        const day = String(now.getDate()).padStart(2, '0');
        const mon = now.toLocaleString('en', { month: 'short' }).toUpperCase();
        comp.innerHTML = `
          <div style="position:absolute;top:38%;right:22%;width:46px;height:28px;background:#0a0c10;border:1px solid rgba(197,162,111,0.2);border-radius:3px;display:flex;align-items:center;justify-content:center;gap:4px;font-size:9px;letter-spacing:0.6px;color:#c5a26f;">
            <div>${day}</div><div style="opacity:0.6;font-size:8px;">${mon}</div>
          </div>`;
      }

      if (mode === 'rings') {
        comp.innerHTML = `
          <div style="position:absolute;top:28%;left:50%;transform:translateX(-50%);width:116px;height:116px;border-radius:50%;border:5px solid rgba(255,74,140,0.28);"></div>
          <div style="position:absolute;top:34%;left:50%;transform:translateX(-50%);width:92px;height:92px;border-radius:50%;border:5px solid rgba(192,38,255,0.35);"></div>
          <div style="position:absolute;top:40%;left:50%;transform:translateX(-50%);width:68px;height:68px;border-radius:50%;border:5px solid rgba(197,162,111,0.45);"></div>
          <div style="position:absolute;top:52%;left:50%;transform:translate(-50%,-50%);font-size:10px;letter-spacing:1.5px;color:#c5a26f;opacity:0.75;">MOVE • EX • STAND</div>
        `;
      }

      if (mode === 'moon') {
        comp.innerHTML = `
          <div style="position:absolute;top:34%;left:50%;transform:translateX(-50%);width:74px;height:74px;border-radius:50%;background:#1a1f28;box-shadow:inset 0 0 0 1px rgba(197,162,111,0.2);overflow:hidden;">
            <div style="position:absolute;width:74px;height:74px;background:#c5a26f;border-radius:50%;left:-12px;top:6px;filter:blur(1px);"></div>
            <div style="position:absolute;width:54px;height:54px;background:#0a0c10;border-radius:50%;left:28px;top:10px;"></div>
          </div>
          <div style="position:absolute;top:64%;left:50%;transform:translateX(-50%);font-size:9px;letter-spacing:1.5px;color:#c5a26f;opacity:.7;">WAXING GIBBOUS</div>
        `;
      }

      if (mode === 'telemetry') {
        const now = getDisplayDate();
        const hr = 58 + Math.floor((now.getSeconds() % 12) / 3);
        comp.innerHTML = `
          <div style="position:absolute;top:24%;left:24%;font-size:10px;letter-spacing:0.5px;background:rgba(0,0,0,0.4);padding:1px 7px;border-radius:3px;color:#c5a26f;">${hr} <span style="opacity:.6">BPM</span></div>
          <div style="position:absolute;top:24%;right:24%;font-size:10px;letter-spacing:0.5px;background:rgba(0,0,0,0.4);padding:1px 7px;border-radius:3px;color:#c5a26f;">14.2k <span style="opacity:.6">STEPS</span></div>
          <div style="position:absolute;bottom:26%;left:50%;transform:translateX(-50%);font-size:9px;letter-spacing:1.8px;color:#c5a26f;opacity:0.6;">42.3° • 1,248m</div>
        `;
      }
    }

    // ---------- CONFIGURATOR + LIVE HERO SYNC ----------
    function applyConfigToWatch(watchEl, previewEl) {
      if (!watchEl) return;
      watchEl.setAttribute('data-case', currentConfig.case);
      watchEl.setAttribute('data-strap', currentConfig.strap);

      if (previewEl) {
        previewEl.setAttribute('data-case', currentConfig.case);
        previewEl.setAttribute('data-strap', currentConfig.strap);
      }

      // Update strap visuals on main hero (the strap elements already respond via CSS attribute selectors)
      updatePrice();
    }

    function initConfigurator() {
      const watch = document.getElementById('premium-watch');
      const preview = document.getElementById('config-watch-preview');

      // Case swatches
      document.querySelectorAll('[data-case]').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('[data-case]').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentConfig.case = btn.getAttribute('data-case');
          applyConfigToWatch(watch, preview);
        });
      });

      // Strap options
      document.querySelectorAll('[data-strap]').forEach(btn => {
        btn.addEventListener('click', () => {
          document.querySelectorAll('[data-strap]').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentConfig.strap = btn.getAttribute('data-strap');
          applyConfigToWatch(watch, preview);
        });
      });

      // Initial state
      const initialCaseBtn = document.querySelector(`[data-case="${currentConfig.case}"]`);
      const initialStrapBtn = document.querySelector(`[data-strap="${currentConfig.strap}"]`);
      if (initialCaseBtn) initialCaseBtn.classList.add('active');
      if (initialStrapBtn) initialStrapBtn.classList.add('active');

      // Seed the preview markers
      setTimeout(() => {
        const pMarkers = document.getElementById('preview-markers');
        if (pMarkers) {
          pMarkers.innerHTML = '';
          for (let i = 0; i < 16; i++) {
            const isMajor = i % 2 === 0;
            const m = document.createElement('div');
            m.className = isMajor ? 'marker' : 'marker minor';
            m.style.transform = `rotate(${i * 22.5}deg)`;
            m.style.height = isMajor ? '13px' : '5px';
            m.style.width = isMajor ? '2.5px' : '1.5px';
            m.style.transformOrigin = '50% 108px';
            pMarkers.appendChild(m);
          }
        }
        applyConfigToWatch(watch, preview);
      }, 80);
    }

    function updatePrice() {
      const el = document.getElementById('price-display');
      if (!el) return;

      let price = PRICE_BASE;
      price += PRICE_DELTAS.case[currentConfig.case] || 0;
      price += PRICE_DELTAS.strap[currentConfig.strap] || 0;

      el.textContent = '$' + price.toLocaleString('en-US');
    }

    function reserveConfiguration() {
      const modal = document.getElementById('reserve-modal');
      if (modal) modal.classList.remove('hidden');
    }

    function closeReserveModal() {
      const modal = document.getElementById('reserve-modal');
      if (modal) modal.classList.add('hidden');
    }

    function submitReservation(e) {
      e.preventDefault();
      const modal = document.getElementById('reserve-modal');
      if (modal) {
        modal.innerHTML = `
          <div class="p-10 text-center">
            <i class="fa-solid fa-check text-4xl text-[#c5a26f]"></i>
            <div class="text-2xl mt-4 tracking-tight">Request received.</div>
            <p class="mt-2 text-white/60">Thank you. An Atelier concierge will contact you within 48 hours.</p>
            <button onclick="closeReserveModal()" class="mt-7 px-8 py-3 border border-white/20 rounded-2xl text-sm">CLOSE</button>
          </div>`;
      }
    }

    // ---------- CRYSTAL REFLECTION (mouse + touch) ----------
    function initCrystalReflection() {
      const crystal = document.getElementById('watch-crystal');
      const reflection = document.getElementById('crystal-reflection');
      if (!crystal || !reflection) return;

      function updateReflection(xPct, yPct) {
        reflection.style.background = `radial-gradient(circle at ${xPct}% ${yPct}%, rgba(255,255,255,0.45) 3%, transparent 26%, transparent 58%, rgba(255,255,255,0.07) 76%)`;
      }

      crystal.addEventListener('mousemove', (e) => {
        const rect = crystal.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;
        updateReflection(x, y);
      });

      crystal.addEventListener('mouseleave', () => {
        reflection.style.background = `linear-gradient(135deg, rgba(255,255,255,0.38) 5%, transparent 25%, transparent 55%, rgba(255,255,255,0.08) 75%, transparent 90%)`;
      });

      // Touch support
      crystal.addEventListener('touchmove', (e) => {
        if (!e.touches.length) return;
        const rect = crystal.getBoundingClientRect();
        const x = ((e.touches[0].clientX - rect.left) / rect.width) * 100;
        const y = ((e.touches[0].clientY - rect.top) / rect.height) * 100;
        updateReflection(x, y);
      }, { passive: true });
    }

    // ---------- SCROLL PROGRESS + SUBTLE WATCH INFLUENCE ----------
    function initScrollProgress() {
      const bar = document.getElementById('scroll-progress');
      const watch = document.getElementById('premium-watch');

      function update() {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const pct = docHeight > 0 ? Math.min((scrollTop / docHeight) * 100, 100) : 0;
        if (bar) bar.style.width = pct + '%';

        // Very subtle watch tilt with scroll (luxury micro interaction)
        if (watch && !prefersReducedMotion) {
          const tilt = Math.sin(scrollTop / 900) * 1.2;
          watch.style.transform = `rotate(${tilt}deg)`;
        }
      }
      window.addEventListener('scroll', update, { passive: true });
      update();
    }

    // ---------- MOBILE NAV ----------
    function initMobileNav() {
      const btn = document.getElementById('mobile-menu-btn');
      const menu = document.getElementById('mobile-menu');

      if (!btn || !menu) return;

      btn.addEventListener('click', () => {
        const isOpen = !menu.classList.contains('hidden');
        if (isOpen) {
          closeMobileMenu();
        } else {
          menu.classList.remove('hidden');
          btn.setAttribute('aria-expanded', 'true');
          btn.innerHTML = '<i class="fa-solid fa-times"></i>';
        }
      });

      // Close on link tap
      menu.querySelectorAll('.mobile-nav-link').forEach(link => {
        link.addEventListener('click', () => closeMobileMenu());
      });
    }

    function closeMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      const btn = document.getElementById('mobile-menu-btn');
      if (menu) menu.classList.add('hidden');
      if (btn) {
        btn.setAttribute('aria-expanded', 'false');
        btn.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }
    }

    // ---------- OS MODAL ----------
    function launchOSModal() {
      const modal = document.getElementById('os-modal');
      if (!modal) return;
      modal.classList.remove('hidden');
      modal.setAttribute('aria-hidden', 'false');

      // Focus trap (simple)
      setTimeout(() => {
        const firstBtn = modal.querySelector('a, button');
        if (firstBtn) firstBtn.focus();
      }, 80);

      document.addEventListener('keydown', function escListener(ev) {
        if (ev.key === 'Escape') {
          closeOSModal();
          document.removeEventListener('keydown', escListener);
        }
      }, { once: true });
    }

    function closeOSModal() {
      const modal = document.getElementById('os-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.setAttribute('aria-hidden', 'true');
      }
    }

    // ---------- APP PREVIEW INTERACTIONS ----------
    function previewApp(app) {
      const watch = document.getElementById('premium-watch');
      if (!watch) return;

      // Map app to a nice watch complication + toast
      if (app === 'health' || app === 'rings') {
        currentMode = 'rings';
      } else if (app === 'timer') {
        currentMode = 'time';
        timeOffsetMs = - (12 * 60 * 1000); // playful shift
      } else if (app === 'wallet') {
        currentMode = 'telemetry';
      } else {
        currentMode = 'moon';
      }
      renderComplications(currentMode);
      updateModeLabel(true);

      // Elegant temporary toast
      const toast = document.createElement('div');
      toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#111214] text-xs border border-white/15 text-white/80 px-6 py-3 rounded-2xl flex items-center gap-2 shadow-2xl z-[130]';
      toast.innerHTML = `<span>Opened <strong>${app}</strong> in simulator mindset. Full experience in the OS modal.</span>`;
      document.body.appendChild(toast);
      setTimeout(() => {
        toast.style.transition = 'all 220ms';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 180);
      }, 1450);
    }

    // ---------- REACTIVE TESTIMONIALS ----------
    function reactToTestimonial(index) {
      const watch = document.getElementById('premium-watch');
      if (!watch) return;

      const modeMap = ['rings', 'moon', 'telemetry'];
      currentMode = modeMap[index] || 'time';
      renderComplications(currentMode);
      updateModeLabel(true);

      // Gentle visual pulse on the instrument
      watch.style.transitionDuration = '120ms';
      watch.style.transform = watch.style.transform || 'rotate(0deg)';
      setTimeout(() => {
        watch.style.transitionDuration = '420ms';
      }, 260);
    }

    // ---------- INIT EVERYTHING ----------
    function initWatch() {
      // Markers
      createMarkers('markers');

      // Crystal mouse reflection
      initCrystalReflection();

      // Crown drag + keyboard
      initCrownDrag();

      // Mode cycling on crystal
      initModeCycling();

      // Start the beautiful smooth 60fps engine
      startWatchEngine();

      // Initial complications
      setTimeout(() => {
        renderComplications(currentMode);
        updateModeLabel();
      }, 280);

      // Make crown cursor nice
      const crown = document.getElementById('crown');
      if (crown) crown.style.cursor = 'grab';

      console.log('%c[Watch Me] Ultra-premium 60fps instrument initialized. Crown drag + complication cycling active.', 'color:#c5a26f');
    }

    function initConfiguratorSync() {
      initConfigurator();
      // Ensure price is correct at load
      updatePrice();
    }

    function initGlobalListeners() {
      // Keyboard global shortcuts (luxury power-user touches)
      document.addEventListener('keydown', (e) => {
        if (e.key.toLowerCase() === 'o' && (e.metaKey || e.ctrlKey)) {
          e.preventDefault();
          launchOSModal();
        }
        if (e.key === '?') {
          const watch = document.getElementById('premium-watch');
          if (watch) cycleWatchMode();
        }
      });

      // Respect reduced motion globally
      checkReducedMotion();

      // Scroll progress + micro influence
      initScrollProgress();

      // Mobile nav
      initMobileNav();

      // Close modals on escape already handled inline
    }

    function init() {
      initTailwind();
      initWatch();
      initConfiguratorSync();
      initGlobalListeners();

      // Gentle welcome state
      setTimeout(() => {
        const label = document.getElementById('watch-mode-label');
        if (label) label.style.opacity = '0.75';
      }, 1200);

      // Announce to console (dev)
      console.log('%c[Watch Me 2026] Complete luxury landing page ready — $30k+ Swiss instrument experience loaded.', 'color:#c5a26f;font-size:9px');
    }

    // Boot
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', init);
    } else {
      init();
    }

    // Expose a tiny debug API (non-production but useful for verification)
    window.WatchMe = {
      cycleMode: () => cycleWatchMode(),
      setCase: (c) => { currentConfig.case = c; document.querySelectorAll('[data-case]').forEach(b => b.classList.toggle('active', b.dataset.case === c)); applyConfigToWatch(document.getElementById('premium-watch'), document.getElementById('config-watch-preview')); },
      resetTime: () => { timeOffsetMs = 0; },
      launchSimulator: launchOSModal
    };
  </script>
</body>
</html>