/* "Add to Home Screen" support.
 *
 * 1. Registers the (cache-free) service worker so browsers treat the site as an installable app.
 * 2. On phones/tablets, shows a small dismissible banner that explains how to add the site to the home screen:
 *      - Android / Chrome: native "Installer" button when the browser offers it, manual steps otherwise
 *      - iOS (Safari, Chrome, Firefox): "Partager > Sur l'écran d'accueil" steps (iOS has no install API)
 *    It is NOT shown on desktop, inside in-app browsers (they can't add to the home screen), or when the
 *    site already runs as an installed app. At most once per browser session; "Plus tard" snoozes it
 *    (7 days, then 30 days), "Ne plus afficher" hides it for good.
 *
 * Preview it on a computer by adding ?a2hs=1 (or ?a2hs=ios / ?a2hs=android) to any page URL.
 * To reset what a visitor dismissed, run localStorage.removeItem('a2hs') in the browser console.
 */
(function () {
  'use strict';

  var KEY = 'a2hs';
  var DAY = 24 * 60 * 60 * 1000;

  var script = document.currentScript || document.querySelector('script[src*="pwa.js"]');
  var base = (script && script.src) || location.href;
  function assetUrl(rel) { return new URL(rel, base).href; }   // this file lives in assets/js/

  // ------------------------------------------------------------------ 1. Service worker
  var secure = location.protocol === 'https:' || location.hostname === 'localhost' || location.hostname === '127.0.0.1';
  if ('serviceWorker' in navigator && secure) {
    window.addEventListener('load', function () {
      navigator.serviceWorker.register(assetUrl('../../sw.js')).catch(function () {});
    });
  }

  // ------------------------------------------------------------------ 2. Context checks
  var ua = navigator.userAgent || '';
  var force = new URLSearchParams(location.search).get('a2hs');   // preview / testing aid
  var isIOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  var isAndroid = /Android/i.test(ua);
  var mode = force === 'ios' ? 'ios'
    : force === 'android' ? 'android'
    : isIOS ? 'ios'
    : isAndroid ? 'android'
    : force ? 'android'
    : null;

  var standalone = (window.matchMedia && window.matchMedia('(display-mode: standalone)').matches) ||
    window.navigator.standalone === true;
  // In-app browsers (Instagram, Facebook, Android WebView, iOS web views...) can't add to the home screen
  var inApp = /FBAN|FBAV|Instagram|Snapchat|TikTok|MicroMessenger|Line\/|Twitter|; wv\)/i.test(ua) ||
    (isIOS && !/Safari/.test(ua));

  // Chrome's own mini-infobar is silenced: we show our banner instead (and keep the event for the button)
  var deferred = null;
  var onDeferred = function () {};
  window.addEventListener('beforeinstallprompt', function (e) {
    e.preventDefault();
    deferred = e;
    onDeferred();
  });
  window.addEventListener('appinstalled', function () {
    remember({ never: true });
    track('installed');
    hide();
  });

  // ------------------------------------------------------------------ 3. Remember the visitor's choices
  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function remember(patch) {
    var s = load();
    for (var k in patch) if (Object.prototype.hasOwnProperty.call(patch, k)) s[k] = patch[k];
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {}
  }
  function snooze() {
    var n = (load().n || 0) + 1;
    remember({ n: n, until: Date.now() + (n > 1 ? 30 : 7) * DAY });
  }
  function track(action) {   // Google Analytics event (no-op if gtag is missing)
    try { if (typeof window.gtag === 'function') window.gtag('event', 'a2hs_' + action, { platform: mode }); } catch (e) {}
  }

  if (!force) {
    if (!mode || standalone || inApp) return;
    var saved = load();
    if (saved.never || (saved.until && Date.now() < saved.until)) return;
    try { if (sessionStorage.getItem(KEY)) return; } catch (e) {}   // already shown in this session
  }

  // ------------------------------------------------------------------ 4. The banner
  var root = null;

  var SHARE_ICON = '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" ' +
    'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
    '<path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/><polyline points="16 6 12 2 8 6"/>' +
    '<line x1="12" y1="2" x2="12" y2="15"/></svg>';

  // Self-contained styles (the page's own CSS is not needed). Dark by default, light when data-theme="light".
  var CSS = [
    '.a2hs{position:fixed;left:12px;right:12px;bottom:calc(12px + env(safe-area-inset-bottom,0px));z-index:100000;',
    'display:flex;justify-content:center;pointer-events:none;opacity:0;transform:translateY(24px);',
    'transition:opacity .3s ease,transform .3s ease}',
    '.a2hs.a2hs-in{opacity:1;transform:none}',
    '.a2hs-card{pointer-events:auto;position:relative;box-sizing:border-box;width:100%;max-width:440px;',
    'padding:16px 16px 6px;border-radius:20px;background:rgba(20,24,36,.97);color:#e2e8f0;',
    'border:1px solid rgba(255,255,255,.12);box-shadow:0 18px 50px rgba(0,0,0,.45);',
    '-webkit-backdrop-filter:blur(14px);backdrop-filter:blur(14px);text-align:left;',
    'font:15px/1.45 Outfit,system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}',
    '[data-theme="light"] .a2hs-card{background:rgba(255,255,255,.98);color:#1e293b;',
    'border-color:rgba(0,0,0,.1);box-shadow:0 18px 50px rgba(15,23,42,.25)}',
    '.a2hs-head{display:flex;gap:12px;align-items:center;padding-right:36px}',
    '.a2hs-icon{width:48px;height:48px;border-radius:12px;flex:0 0 auto;display:block}',
    '.a2hs-txt strong{display:block;font-size:16px;font-weight:700;line-height:1.3}',
    '.a2hs-txt span{display:block;margin-top:2px;font-size:13.5px;color:#94a3b8}',
    '[data-theme="light"] .a2hs-txt span{color:#64748b}',
    '.a2hs-x{position:absolute;top:4px;right:4px;width:44px;height:44px;border:0;border-radius:50%;',
    'background:none;color:inherit;font:inherit;font-size:26px;line-height:1;opacity:.7;cursor:pointer}',
    '.a2hs-steps{margin:12px 0 2px;padding:0;list-style:none;counter-reset:a2hs}',
    '.a2hs-steps li{counter-increment:a2hs;display:flex;align-items:center;gap:10px;margin:8px 0;font-size:14.5px}',
    '.a2hs-steps li::before{content:counter(a2hs);flex:0 0 24px;height:24px;border-radius:50%;',
    'background:#EF4E6E;color:#fff;font-size:13px;font-weight:700;display:flex;align-items:center;justify-content:center}',
    '.a2hs-ico{display:inline-flex;vertical-align:middle;margin:0 1px;color:#0a84ff}',
    '.a2hs-primary{display:block;width:100%;margin:12px 0 2px;padding:13px 16px;border:0;border-radius:12px;',
    'background:linear-gradient(90deg,#EF4E6E,#8B45D4);color:#fff;font:inherit;font-weight:700;cursor:pointer}',
    '.a2hs-actions{display:flex;justify-content:space-between;gap:8px;margin-top:4px}',
    '.a2hs-link{min-height:44px;padding:10px 6px;border:0;background:none;color:#94a3b8;font:inherit;',
    'font-size:13.5px;cursor:pointer}',
    '[data-theme="light"] .a2hs-link{color:#64748b}',
    '@media (prefers-reduced-motion:reduce){.a2hs{transition:none}}'
  ].join('');

  function stepsHtml() {
    if (mode === 'ios') {
      return '<ol class="a2hs-steps">' +
        '<li><span>Touchez <span class="a2hs-ico">' + SHARE_ICON + '</span> <b>Partager</b> dans la barre du navigateur</span></li>' +
        '<li><span>Choisissez <b>« Sur l’écran d’accueil »</b></span></li>' +
        '<li><span>Validez avec <b>Ajouter</b></span></li>' +
        '</ol>';
    }
    return '<ol class="a2hs-steps">' +
      '<li><span>Ouvrez le menu <b>⋮</b> de votre navigateur</span></li>' +
      '<li><span>Touchez <b>« Ajouter à l’écran d’accueil »</b> (ou <b>« Installer l’application »</b>)</span></li>' +
      '</ol>';
  }

  // Android + native prompt available -> one big button; otherwise -> the manual steps
  function render() {
    if (!root) return;
    var body = root.querySelector('.a2hs-body');
    body.innerHTML = (mode === 'android' && deferred)
      ? '<button type="button" class="a2hs-primary" data-a2hs="install">Installer l’application</button>'
      : stepsHtml();
  }
  onDeferred = render;

  function hide() {
    if (!root) return;
    var el = root;
    root = null;
    el.classList.remove('a2hs-in');
    setTimeout(function () { if (el.parentNode) el.parentNode.removeChild(el); }, 350);
  }

  function onClick(e) {
    var target = e.target.closest ? e.target.closest('[data-a2hs]') : null;
    if (!target) return;
    var action = target.getAttribute('data-a2hs');
    if (action === 'install') {
      if (!deferred) return;
      var evt = deferred;
      deferred = null;
      evt.prompt();
      Promise.resolve(evt.userChoice).then(function (choice) {
        if (choice && choice.outcome === 'accepted') { remember({ never: true }); track('accepted'); }
        else { snooze(); track('declined'); }
        hide();
      });
    } else if (action === 'never') {
      remember({ never: true });
      track('never');
      hide();
    } else {
      snooze();
      track('dismissed');
      hide();
    }
  }

  function show() {
    if (root) return;
    var style = document.createElement('style');
    style.id = 'a2hs-style';
    style.textContent = CSS;
    document.head.appendChild(style);

    root = document.createElement('div');
    root.className = 'a2hs';
    root.setAttribute('role', 'dialog');
    root.setAttribute('aria-label', 'Ajouter le site à l’écran d’accueil');
    root.innerHTML =
      '<div class="a2hs-card">' +
        '<button type="button" class="a2hs-x" data-a2hs="later" aria-label="Fermer">×</button>' +
        '<div class="a2hs-head">' +
          '<img class="a2hs-icon" src="' + assetUrl('../images/app/icon-192.png') + '" width="48" height="48" alt="">' +
          '<div class="a2hs-txt"><strong>Ajoutez le site à votre écran d’accueil</strong>' +
          '<span>Accès en un geste, comme une application.</span></div>' +
        '</div>' +
        '<div class="a2hs-body"></div>' +
        '<div class="a2hs-actions">' +
          '<button type="button" class="a2hs-link" data-a2hs="later">Plus tard</button>' +
          '<button type="button" class="a2hs-link" data-a2hs="never">Ne plus afficher</button>' +
        '</div>' +
      '</div>';
    document.body.appendChild(root);
    render();
    root.addEventListener('click', onClick);
    requestAnimationFrame(function () {
      requestAnimationFrame(function () { if (root) root.classList.add('a2hs-in'); });
    });
    try { sessionStorage.setItem(KEY, '1'); } catch (e) {}
    track('shown');
  }

  // A short delay so the banner doesn't cover the page the moment it opens
  function schedule() {
    setTimeout(function () {
      if (force || document.visibilityState === 'visible') show();
    }, force ? 300 : 3500);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', schedule);
  else schedule();
})();
