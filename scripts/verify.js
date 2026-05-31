#!/usr/bin/env node
/**
 * Watch Me 2026 — Basic Self-Verification Script
 * Run with: npm run verify
 * Checks: file presence, basic syntax, key strings for critical features.
 * For full QA use browser + manual flows + console inspection.
 */

const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const REQUIRED = [
  'index.html',
  'package.json',
  'README.md',
  'docs/plans/2026-06-01-figma-005-complete-redesign.md',
  'prototypes/watch-me-os.html',
];

const CHECKS = [
  { file: 'index.html', contains: ['Watch Me', 'The Instrument', 'color-block'], minLines: 200 },
  { file: 'prototypes/watch-me-os.html', contains: ['Watch Me OS', 'crown', 'watch-frame', 'watch-screen'], minLines: 400 },
  { file: 'prototypes/watch-me-interactive-prototype.html', contains: ['renderScreen'], minLines: 600 },
];

let failed = 0;

console.log('🔍 Watch Me 2026 Verification\n');

REQUIRED.forEach(f => {
  const p = path.join(ROOT, f);
  if (!fs.existsSync(p)) {
    console.log(`❌ MISSING: ${f}`);
    failed++;
  } else {
    console.log(`✅ Present: ${f}`);
  }
});

CHECKS.forEach(({file, contains, minLines}) => {
  const p = path.join(ROOT, file);
  if (!fs.existsSync(p)) return;
  const content = fs.readFileSync(p, 'utf8');
  const lines = content.split('\n').length;
  let ok = true;
  contains.forEach(str => {
    if (!content.includes(str)) {
      console.log(`❌ ${file}: missing expected string "${str}"`);
      ok = false; failed++;
    }
  });
  if (minLines && lines < minLines) {
    console.log(`⚠️  ${file}: only ${lines} lines (expected >=${minLines})`);
  }
  if (ok) console.log(`✅ Content checks: ${file}`);
});

if (failed === 0) {
  console.log('\n✅ All structural checks passed. Proceed to browser QA + full flows.');
  process.exit(0);
} else {
  console.log(`\n❌ ${failed} issue(s) found.`);
  process.exit(1);
}
