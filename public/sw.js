/* simple PWA service worker */
const CACHE = "quran-verse-v1";
const OFFLINE_URLS = [
  "/", "/home",
  "/favicon.ico",
  "/icons/icon-192.png", "/icons/icon-512.png",
  "/icons/icon-maskable-192.png", "/icons/icon-maskable-512.png"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE).then((cache) => cache.addAll(OFFLINE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k === CACHE ? null : caches.delete(k))))
    )
  );
  self.clients.claim();
});

/* network-first for navigations (HTML), cache-first for static GETs */
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // only handle same-origin GET
  const isSameOrigin = new URL(req.url).origin === self.location.origin;
  if (req.method !== "GET" || !isSameOrigin) return;

  // navigations: try network, fall back to cache
  if (req.mode === "navigate") {
    event.respondWith(
      fetch(req).catch(() => caches.match("/home") || caches.match("/"))
    );
    return;
  }

  // others: cache-first, then network
  event.respondWith(
    caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((cache) => cache.put(req, copy));
      return res;
    }))
  );
});
