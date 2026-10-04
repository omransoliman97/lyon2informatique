#!/usr/bin/env node
// Quick health check for the whole site (no dependencies). Run from anywhere:
//
//     node scripts/check-site.mjs
//
// Every .html page must have:
//   - the Google Analytics tag (same measurement ID everywhere)
//   - the app manifest link and assets/js/pwa.js ("Add to Home Screen")
//   - the mobile nav markup (#nav-toggle + #nav-menu) and its script
// and every local link / image / script / stylesheet must point to a file that exists
// (exact upper/lower case, because GitHub Pages is case-sensitive even if macOS is not).
// Exits with code 1 if anything is wrong, so it can also be used before a push.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const GA_ID = 'G-27SCS6BBW2';

function findPages(dir, out = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === '.git' || entry.name === 'node_modules' || entry.name.startsWith('.tmp')) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) findPages(full, out);
    else if (entry.name.endsWith('.html')) out.push(full);
  }
  return out.sort();
}

function existsExactCase(abs) {
  const rel = path.relative(root, abs);
  if (rel.startsWith('..')) return false;
  let current = root;
  for (const part of rel.split(path.sep)) {
    if (!fs.readdirSync(current).includes(part)) return false;
    current = path.join(current, part);
  }
  return true;
}

// href/src/poster/action attributes, location.href='...', css url(...), and <meta content="image.png">
const REF = /(?<![\w.-])(?:data-src|href|src|poster|action)\s*=\s*(["'])(.*?)\1|\blocation(?:\.href)?\s*=\s*(["'])(.*?)\3|\burl\(\s*(["']?)([^)"']*)\5\s*\)|<meta[^>]+content=(["'])([^"']+\.(?:png|jpe?g|webp|svg|gif))\7/gi;
const NOT_LOCAL = /^(?:[a-z][a-z0-9+.-]*:|\/\/|#)/i;

const problems = [];
let refCount = 0;
const pages = findPages(root);

for (const file of pages) {
  const rel = path.relative(root, file).split(path.sep).join('/');
  // ignore commented-out code
  const html = fs.readFileSync(file, 'utf8').replace(/<!--[\s\S]*?-->/g, (m) => ' '.repeat(m.length));

  if (!html.includes(`googletagmanager.com/gtag/js?id=${GA_ID}`) || !html.includes(`gtag('config', '${GA_ID}')`)) {
    problems.push(`${rel}: Google Analytics tag (${GA_ID}) is missing`);
  }
  if (!/<link[^>]+rel="manifest"/.test(html)) problems.push(`${rel}: <link rel="manifest"> is missing`);
  if (!/<script[^>]+src="[^"]*assets\/js\/pwa\.js/.test(html)) problems.push(`${rel}: assets/js/pwa.js is not loaded`);
  if (/class="navbar"/.test(html)) {
    if (!html.includes('id="nav-toggle"') || !html.includes('id="nav-menu"')) {
      problems.push(`${rel}: mobile nav markup (#nav-toggle / #nav-menu) is missing`);
    } else if (!html.includes('assets/js/nav.js') && !html.includes("getElementById('nav-toggle')")) {
      problems.push(`${rel}: nothing handles the mobile nav (assets/js/nav.js is not loaded)`);
    }
  }

  for (const m of html.matchAll(REF)) {
    const url = m[2] ?? m[4] ?? m[6] ?? m[8];
    if (!url || NOT_LOCAL.test(url)) continue;
    const clean = decodeURIComponent(url.split('#')[0].split('?')[0]);
    if (!clean) continue;
    refCount++;
    const target = clean.startsWith('/') ? path.join(root, clean) : path.resolve(path.dirname(file), clean);
    if (!existsExactCase(target)) problems.push(`${rel}: broken link -> ${url}`);
  }
}

if (problems.length) {
  console.error(`\n${problems.length} problem(s) found:\n`);
  for (const p of problems) console.error('  ✗ ' + p);
  process.exit(1);
}
console.log(`✓ ${pages.length} pages OK: Google Analytics, manifest + pwa.js, mobile nav, and ${refCount} local links all good.`);
