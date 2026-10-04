/* Mobile navigation: hamburger button + sliding panel with tap-to-expand L1 / L2 submenus.
 *
 * Expects (see any page):  <button id="nav-toggle"> and <ul id="nav-menu"> inside .navbar
 * The styles live in assets/css/style.css (see "Mobile navigation").
 * On desktop nothing changes: the dropdowns keep opening on hover.
 */
(function () {
  'use strict';

  var toggle = document.getElementById('nav-toggle');
  var menu = document.getElementById('nav-menu');
  if (!toggle || !menu) return;

  // Same breakpoint as the mobile nav in style.css (narrow screens, or touch phones held in landscape)
  var mobile = window.matchMedia('(max-width: 820px), (pointer: coarse) and (max-height: 500px)');
  var dropdowns = Array.prototype.slice.call(menu.querySelectorAll('.dropdown'));

  function closeSubmenus(except) {
    dropdowns.forEach(function (dd) {
      if (dd === except) return;
      dd.classList.remove('open');
      var btn = dd.querySelector('.dropbtn');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  }

  function setOpen(open) {
    menu.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    if (!open) closeSubmenus();
  }

  toggle.addEventListener('click', function () {
    setOpen(!menu.classList.contains('open'));
  });

  // On mobile, tapping "L1 ▾" / "L2 ▾" expands its submenu instead of navigating
  dropdowns.forEach(function (dd) {
    var btn = dd.querySelector('.dropbtn');
    if (!btn) return;
    btn.setAttribute('aria-haspopup', 'true');
    btn.setAttribute('aria-expanded', 'false');
    btn.addEventListener('click', function (e) {
      if (!mobile.matches) return;
      e.preventDefault();
      var willOpen = !dd.classList.contains('open');
      closeSubmenus(dd);
      dd.classList.toggle('open', willOpen);
      btn.setAttribute('aria-expanded', willOpen ? 'true' : 'false');
    });
  });

  // Choosing a link closes the panel (needed for same-page anchors like #learning-section)
  menu.addEventListener('click', function (e) {
    var link = e.target.closest ? e.target.closest('a') : null;
    if (link && !link.classList.contains('dropbtn')) setOpen(false);
  });

  // Tap anywhere outside the navbar, or press Escape, to close
  document.addEventListener('click', function (e) {
    if (menu.classList.contains('open') && !(e.target.closest && e.target.closest('.navbar'))) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && menu.classList.contains('open')) {
      setOpen(false);
      toggle.focus();
    }
  });

  // Reset when the viewport grows back to desktop, or when restored from the back/forward cache
  function reset() {
    if (!mobile.matches) setOpen(false);
  }
  if (mobile.addEventListener) mobile.addEventListener('change', reset);
  else mobile.addListener(reset);
  window.addEventListener('pageshow', function () { setOpen(false); });
})();
