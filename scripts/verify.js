#!/usr/bin/env node
/**
 * Watch Me 2026 — Verification harness
 * Run: npm run verify
 * 1) Structural file + string checks
 * 2) Library DEMO path resolution for 16 core cards + home widgets
 * 3) OS home/grid app registration integrity
 * 4) Shipped os-core unit tests (scripts/test-os.mjs)
 */

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
let failed = 0;

function ok(msg) {
  console.log(`✅ ${msg}`);
}
function bad(msg) {
  console.log(`❌ ${msg}`);
  failed++;
}

console.log('🔍 Watch Me 2026 Verification\n');

// ---------- 1. Required files ----------
const REQUIRED = [
  'index.html',
  'package.json',
  'README.md',
  'docs/plans/2026-06-01-figma-005-complete-redesign.md',
  'prototypes/watch-me-os.html',
  'components/dark-theme-cards-library.html',
  'components/component-catalog.html',
  'components/catalog.html',
  'components/library.html',
  'scripts/os-core.js',
  'scripts/test-os.mjs',
  'scripts/verify.js',
];

console.log('— Presence —');
REQUIRED.forEach((f) => {
  const p = path.join(ROOT, f);
  if (!fs.existsSync(p)) bad(`MISSING: ${f}`);
  else ok(`Present: ${f}`);
});

// ---------- 2. Content checks ----------
console.log('\n— Content —');
const CHECKS = [
  {
    file: 'index.html',
    contains: ['Watch Me', 'prototypes/watch-me-os.html', 'color-block', 'Experience the OS'],
    minLines: 100,
  },
  {
    file: 'prototypes/watch-me-os.html',
    contains: [
      'Watch Me OS',
      'screen-root',
      'side-pusher',
      'wm_state_v1',
      'os-core.js',
      'WMCore',
      'createSideButtonController',
      'scrubTimer',
      'new-msg-body',
    ],
    minLines: 400,
  },
  {
    file: 'scripts/os-core.js',
    contains: [
      'formatTime',
      'setTimerPreset',
      'toggleTimer',
      'resetTimer',
      'scrubTimer',
      'addTask',
      'toggleTask',
      'sendMessage',
      'nfcPay',
      'confirmTransaction',
      'cycleTheme',
      'wm_state_v1',
      'createSideButtonController',
      'HOME_PAGES',
      'REGISTERED_APPS',
    ],
    minLines: 100,
  },
  {
    file: 'components/dark-theme-cards-library.html',
    contains: ['home-widget-cluster.html', 'demo:', '01-new-message.html', '16-add-contact.html'],
    minLines: 100,
  },
  {
    file: 'components/component-catalog.html',
    contains: [
      'new-message',
      'timer',
      'wallet',
      'activity',
      'add-contact',
      'home-widgets',
      'voice-message',
      'confirm-transaction',
    ],
    minLines: 100,
  },
];

CHECKS.forEach(({ file, contains, minLines }) => {
  const p = path.join(ROOT, file);
  if (!fs.existsSync(p)) return;
  const content = fs.readFileSync(p, 'utf8');
  const lines = content.split('\n').length;
  let fileOk = true;
  contains.forEach((str) => {
    if (!content.includes(str)) {
      bad(`${file}: missing expected string "${str}"`);
      fileOk = false;
    }
  });
  if (minLines && lines < minLines) {
    console.log(`⚠️  ${file}: only ${lines} lines (expected >=${minLines})`);
  }
  if (fileOk) ok(`Content checks: ${file}`);
});

// ---------- 3. Landing primary links ----------
console.log('\n— Landing primary links —');
{
  const landing = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const launchCount = (landing.match(/prototypes\/watch-me-os\.html/g) || []).length;
  if (launchCount >= 3) ok(`index.html has ${launchCount} Launch/Experience OS links to flagship simulator`);
  else bad(`index.html expected ≥3 links to prototypes/watch-me-os.html, found ${launchCount}`);
}

// ---------- 4. Library DEMO paths resolve on disk ----------
console.log('\n— Library DEMO files —');
const CORE_DEMOS = [
  '01-new-message.html',
  '02-voice-message.html',
  '03-timer.html',
  '04-wallet.html',
  '05-overall-progress.html',
  '06-clock.html',
  '07-confirm-transaction.html',
  '08-call.html',
  '09-tasks.html',
  '10-message.html',
  '11-notifications.html',
  '12-activity.html',
  '13-team.html',
  '14-card.html',
  '15-messages.html',
  '16-add-contact.html',
  'home-widget-cluster.html',
];

const libSrc = fs.readFileSync(path.join(ROOT, 'components/dark-theme-cards-library.html'), 'utf8');
CORE_DEMOS.forEach((demo) => {
  const disk = path.join(ROOT, 'components/cards', demo);
  if (!fs.existsSync(disk)) {
    bad(`Card file missing on disk: components/cards/${demo}`);
    return;
  }
  if (!libSrc.includes(demo)) {
    bad(`Library does not reference DEMO target: ${demo}`);
    return;
  }
  ok(`DEMO ok: ${demo}`);
});

// Catalog coverage: 16 core + home-widgets keys
console.log('\n— Catalog coverage —');
const catalogSrc = fs.readFileSync(path.join(ROOT, 'components/component-catalog.html'), 'utf8');
const CATALOG_KEYS = [
  'new-message',
  'voice-message',
  'timer',
  'wallet',
  'overall-progress',
  'clock',
  'confirm-transaction',
  'call',
  'tasks',
  'message',
  'notifications',
  'activity',
  'team',
  'card',
  'messages',
  'add-contact',
  'home-widgets',
];
CATALOG_KEYS.forEach((k) => {
  if (catalogSrc.includes(`'${k}'`) || catalogSrc.includes(`"${k}"`)) ok(`Catalog card: ${k}`);
  else bad(`Catalog missing card key: ${k}`);
});

// ---------- 5. OS home apps registered in source ----------
console.log('\n— OS home / registry integrity —');
const osHtml = fs.readFileSync(path.join(ROOT, 'prototypes/watch-me-os.html'), 'utf8');
const osCore = fs.readFileSync(path.join(ROOT, 'scripts/os-core.js'), 'utf8');

// HOME_PAGES from core
const Core = require('./os-core.js');
const homeApps = Core.HOME_PAGES.flat();
homeApps.forEach((name) => {
  if (!Core.REGISTERED_APPS.includes(name)) {
    bad(`HOME app "${name}" not in REGISTERED_APPS`);
  } else if (!osHtml.includes(`registerApp('${name}'`) && name !== 'home') {
    // home is registered; others must be too
    bad(`OS HTML missing registerApp('${name}')`);
  } else {
    ok(`Home app registered: ${name}`);
  }
});

// Side button element present
if (osHtml.includes('id="side-pusher"') && osHtml.includes('createSideButtonController')) {
  ok('Side button element + controller wired');
} else {
  bad('Side button missing or not wired to createSideButtonController');
}

// Boot must not assume #crystal without null check
if (osHtml.includes("getElementById('crystal')") && osHtml.includes('if (crystal && refl)')) {
  ok('Boot guards optional #crystal reflection');
} else if (!osHtml.includes("getElementById('crystal')")) {
  ok('Boot does not reference missing #crystal');
} else {
  bad('Boot still attaches to #crystal without null guard (uncaught error risk)');
}

// sendQuickMessage must read textarea, not hard-coded only
if (osHtml.includes('new-msg-body') && osHtml.includes('sendQuickMessage')) {
  ok('New-message flow reads user textarea (#new-msg-body)');
} else {
  bad('New-message send path incomplete');
}

// ---------- 6. Run unit tests on shipped core ----------
console.log('\n— Unit tests (scripts/test-os.mjs) —');
const unit = spawnSync(process.execPath, [path.join(__dirname, 'test-os.mjs')], {
  encoding: 'utf8',
  cwd: ROOT,
});
process.stdout.write(unit.stdout || '');
if (unit.stderr) process.stderr.write(unit.stderr);
if (unit.status !== 0) {
  bad('Unit tests failed');
} else {
  ok('Unit tests passed');
}

// ---------- summary ----------
console.log('');
if (failed === 0) {
  console.log('✅ All verification checks passed.');
  process.exit(0);
} else {
  console.log(`❌ ${failed} issue(s) found.`);
  process.exit(1);
}
