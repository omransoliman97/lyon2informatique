#!/usr/bin/env node
// Quick health check for the whole site (no dependencies). Run from anywhere:
//
//     node scripts/check-site.mjs
//
// Every .html page must have:
//   - the Google Analytics tag (same measurement ID everywhere)
//   - the app manifest link and assets/js/pwa.js ("Add to Home Screen")
//   - the shared navigation: assets/css/nav.css + assets/js/nav.js, the SAME navbar markup as every other page
//     (compared after resolving its links), and no private nav styles of its own (keeps the menu identical everywhere)
//   (404.html is the exception for the manifest / pwa.js / nav: Vercel serves it at ANY address, so it can't use relative links)
// and every local link / image / script / stylesheet must point to a file that exists
// (exact upper/lower case, because Vercel/GitHub are case-sensitive even if macOS is not).
// vercel.json: every redirect must lead to an existing file and must not hide a real one.
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
  if (!rel) return true;   // the site root itself
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

// Navbar markup with every link resolved to an absolute site path (a fragment-only link such as #links-section
// means "this page") and whitespace collapsed, so the same menu written from different folders compares equal.
// One intentional exception: on the L1 page, "Liens" jumps to the L1 page's own links section; everywhere else it
// goes to the home page's (L2) links section.
function normalizedNav(html, pageRel) {
  const match = html.match(/<nav class="navbar">[\s\S]*?<\/nav>/);
  if (!match) return null;
  const dir = path.posix.dirname(pageRel);
  let nav = match[0]
    .replace(/(href|src)="([^"]*)"/g, (m, attr, value) => {
      if (!value || /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(value)) return m;
      const [, file, rest = ''] = value.match(/^([^?#]*)(.*)$/);
      const resolved = file ? path.posix.normalize(path.posix.join(dir, file)) : pageRel;
      return `${attr}="/${resolved}${rest}"`;
    })
    .replace(/\s+/g, ' ')
    .replace(/\s*([<>])\s*/g, '$1')   // whitespace next to a tag is irrelevant
    .trim();
  if (pageRel === 'l1/index.html') nav = nav.replace('href="/l1/index.html#links-section"', 'href="/index.html#links-section"');
  return nav;
}
let referenceNav = null;
let referencePage = null;

// Selectors that only the shared nav.css may define
const PRIVATE_NAV_STYLE = /\.(?:nav-container|nav-logo|nav-menu|nav-link|nav-toggle|dropbtn|dropdown(?:-content)?|theme-toggle|arrow)\b[^{]*\{/;

for (const file of pages) {
  const rel = path.relative(root, file).split(path.sep).join('/');
  // ignore commented-out code
  const html = fs.readFileSync(file, 'utf8').replace(/<!--[\s\S]*?-->/g, (m) => ' '.repeat(m.length));

  if (!html.includes(`googletagmanager.com/gtag/js?id=${GA_ID}`) || !html.includes(`gtag('config', '${GA_ID}')`)) {
    problems.push(`${rel}: Google Analytics tag (${GA_ID}) is missing`);
  }
  if (rel !== '404.html') {
    if (!/<link[^>]+rel="manifest"/.test(html)) problems.push(`${rel}: <link rel="manifest"> is missing`);
    if (!/<script[^>]+src="[^"]*assets\/js\/pwa\.js/.test(html)) problems.push(`${rel}: assets/js/pwa.js is not loaded`);
  }
  if (/class="navbar"/.test(html)) {
    if (!html.includes('id="nav-toggle"') || !html.includes('id="nav-menu"')) {
      problems.push(`${rel}: mobile nav markup (#nav-toggle / #nav-menu) is missing`);
    }
    if (!/<link[^>]+href="[^"]*assets\/css\/nav\.css/.test(html)) problems.push(`${rel}: the shared nav stylesheet (assets/css/nav.css) is not linked`);
    if (!/<script[^>]+src="[^"]*assets\/js\/nav\.js/.test(html)) problems.push(`${rel}: the shared nav script (assets/js/nav.js) is not loaded`);

    // same navbar markup on every page
    const nav = normalizedNav(html, rel);
    if (referenceNav === null) {
      referenceNav = nav;
      referencePage = rel;
    } else if (nav !== referenceNav) {
      let i = 0;
      while (i < nav.length && nav[i] === referenceNav[i]) i++;
      problems.push(`${rel}: navbar markup differs from ${referencePage} (first difference near: "${nav.slice(Math.max(0, i - 25), i + 40)}")`);
    }

    // no private nav styles: they belong in assets/css/nav.css (only a flex / z-index layout rule on .navbar is allowed)
    for (const block of html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)) {
      if (PRIVATE_NAV_STYLE.test(block[1])) problems.push(`${rel}: defines its own nav styles in an inline <style>; they belong in assets/css/nav.css`);
      for (const rule of block[1].matchAll(/\.navbar\s*\{([^}]*)\}/g)) {
        const props = rule[1].split(';').map((d) => d.split(':')[0].trim()).filter(Boolean);
        if (props.some((name) => !['flex', 'z-index'].includes(name))) {
          problems.push(`${rel}: styles .navbar itself (${props.join(', ')}); only layout glue (flex, z-index) is allowed, the look belongs in assets/css/nav.css`);
        }
      }
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

// vercel.json redirects (old addresses -> new ones)
let redirectCount = 0;
const vercelFile = path.join(root, 'vercel.json');
if (fs.existsSync(vercelFile)) {
  let config = {};
  try {
    config = JSON.parse(fs.readFileSync(vercelFile, 'utf8'));
  } catch (e) {
    problems.push(`vercel.json: invalid JSON (${e.message})`);
  }
  for (const r of config.redirects ?? []) {
    redirectCount++;
    const dest = decodeURIComponent(String(r.destination ?? '').split('#')[0].split('?')[0]);
    if (!dest.startsWith('/') || (!/[:*]/.test(dest) && !existsExactCase(path.join(root, dest)))) {
      problems.push(`vercel.json: ${r.source} -> ${r.destination}: the destination does not exist`);
    }
    if (!/[:*()?+{}]/.test(r.source) && existsExactCase(path.join(root, decodeURIComponent(r.source)))) {
      problems.push(`vercel.json: ${r.source} is a real file, so this redirect would hide it`);
    }
  }
}

if (problems.length) {
  console.error(`\n${problems.length} problem(s) found:\n`);
  for (const p of problems) console.error('  ✗ ' + p);
  process.exit(1);
}
console.log(`✓ ${pages.length} pages OK: Google Analytics, manifest + pwa.js, mobile nav, ${refCount} local links, and ${redirectCount} redirects in vercel.json all good.`);
