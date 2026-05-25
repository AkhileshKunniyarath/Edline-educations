/* No-op service worker placeholder.
   This prevents /sw.js requests from falling through to the dynamic [slug] route
   when using static export. */
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(self.clients.claim());
});
