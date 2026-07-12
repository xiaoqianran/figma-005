#!/usr/bin/env node
/**
 * Headless launch smoke: load index + OS twice each, assert no page errors
 * and #screen-root paints after boot; drive timer navigation via WM.test.
 */
import { createServer } from 'http';
import { readFileSync, existsSync } from 'fs';
import { join, extname, dirname } from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.md': 'text/markdown; charset=utf-8',
};

function startServer() {
  return new Promise((resolve) => {
    const server = createServer((req, res) => {
      let urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
      if (urlPath === '/') urlPath = '/index.html';
      const file = join(ROOT, urlPath.replace(/^\//, ''));
      if (!file.startsWith(ROOT) || !existsSync(file)) {
        res.writeHead(404);
        res.end('not found');
        return;
      }
      const body = readFileSync(file);
      res.writeHead(200, { 'Content-Type': MIME[extname(file)] || 'application/octet-stream' });
      res.end(body);
    });
    server.listen(0, '127.0.0.1', () => {
      const { port } = server.address();
      resolve({ server, port });
    });
  });
}

async function main() {
  // Ensure chromium is available
  const install = spawnSync('npx', ['--yes', 'playwright', 'install', 'chromium'], {
    encoding: 'utf8',
    timeout: 300000,
  });
  if (install.status !== 0) {
    console.error('playwright install chromium failed');
    console.error(install.stdout);
    console.error(install.stderr);
    process.exit(2);
  }

  const { chromium } = await import('playwright');
  const { server, port } = await startServer();
  const base = `http://127.0.0.1:${port}`;
  console.log('Serving', ROOT, 'on', base);

  const browser = await chromium.launch({ headless: true });
  const results = [];

  async function loadOnce(path, label) {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', (e) => errors.push(String(e.message || e)));
    page.on('console', (msg) => {
      if (msg.type() === 'error') errors.push('console.error: ' + msg.text());
    });
    await page.goto(base + path, { waitUntil: 'networkidle', timeout: 60000 });
    await page.waitForTimeout(500);

    let rootText = null;
    let timerText = null;
    if (path.includes('watch-me-os')) {
      await page.waitForFunction(() => {
        const r = document.getElementById('screen-root');
        return r && r.innerHTML.trim().length > 20;
      }, { timeout: 10000 });
      rootText = await page.$eval('#screen-root', (el) => el.innerText.slice(0, 200));
      // Drive timer via shipped WM.test API
      await page.evaluate(() => {
        window.WM.test.navigate('timer');
      });
      await page.waitForTimeout(200);
      timerText = await page.$eval('#timer-display', (el) => el.textContent);
      // Scrub crown while on timer
      await page.evaluate(() => window.WM.test.crown(20));
      await page.waitForTimeout(100);
      const afterScrub = await page.$eval('#timer-display', (el) => el.textContent);
      results.push({ label, path, errors, rootText, timerText, afterScrub });
    } else {
      const title = await page.title();
      const hasLaunch = await page.locator('a[href*="watch-me-os"]').count();
      results.push({ label, path, errors, title, hasLaunch });
    }
    await page.close();
  }

  try {
    await loadOnce('/index.html', 'landing-1');
    await loadOnce('/index.html', 'landing-2');
    await loadOnce('/prototypes/watch-me-os.html', 'os-1');
    await loadOnce('/prototypes/watch-me-os.html', 'os-2');
  } finally {
    await browser.close();
    server.close();
  }

  console.log(JSON.stringify(results, null, 2));

  let fail = 0;
  for (const r of results) {
    if (r.errors && r.errors.length) {
      console.error('FAIL errors on', r.label, r.errors);
      fail++;
    }
    if (r.path.includes('watch-me-os')) {
      if (!r.rootText || r.rootText.trim().length < 5) {
        console.error('FAIL empty screen-root on', r.label);
        fail++;
      }
      if (!r.timerText || !/^\d{2}:\d{2}$/.test(r.timerText)) {
        console.error('FAIL timer display missing on', r.label, r.timerText);
        fail++;
      } else {
        console.log('OK', r.label, 'timer', r.timerText, 'after scrub', r.afterScrub);
      }
    } else {
      if (!r.hasLaunch) {
        console.error('FAIL no OS launch links on', r.label);
        fail++;
      } else {
        console.log('OK', r.label, 'title=', r.title, 'launch links=', r.hasLaunch);
      }
    }
  }

  if (fail) {
    console.error(`Launch smoke FAILED (${fail})`);
    process.exit(1);
  }
  console.log('Launch smoke PASSED (2× landing + 2× OS)');
  process.exit(0);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
