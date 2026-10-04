/* Minimal service worker: makes the site installable as an app ("Add to Home Screen").
 *
 * It deliberately does NOT cache anything. Every request goes straight to the network,
 * so students always get the latest pages, quizzes and PDFs (no stale-content surprises).
 * Registered by assets/js/pwa.js.
 */
self.addEventListener('install', function () {
  self.skipWaiting();
});

self.addEventListener('activate', function (event) {
  event.waitUntil(self.clients.claim());
});

// A fetch handler is required by some browsers for installability.
// Not calling event.respondWith() lets the browser handle the request normally.
self.addEventListener('fetch', function () {});
