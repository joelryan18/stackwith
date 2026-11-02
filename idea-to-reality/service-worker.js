/* App-specific offline support. Never cache or control other site routes. */
const PREFIX = 'idea-to-reality-';
const CACHE = PREFIX + "c856d4619ff2";
const PATHS = ["/idea-to-reality/","/idea-to-reality/mvp-scope/","/idea-to-reality/validate-an-idea/","/idea-to-reality/weekend-projects/","/idea-to-reality/download/idea-to-reality.html","/idea-to-reality/manifest.webmanifest","/assets/fonts/ClashDisplay-500.woff2","/assets/fonts/Inter-400.woff2","/assets/fonts/Inter-600.woff2","/assets/images/idea-to-reality/icon-192.png","/assets/images/idea-to-reality/icon-512.png","/assets/reality.MZVB7URP.js","/assets/reality.4ICOQB4B.css"];
const ALLOWED = new Set(PATHS);
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(PATHS)));
});
self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter(name => name.startsWith(PREFIX) && name !== CACHE).map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});
self.addEventListener('message', event => {
  if (event.data?.type === 'APPLY_UPDATE') self.skipWaiting();
});
self.addEventListener('fetch', event => {
  const request = event.request;
  if (request.method !== 'GET') return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin || !ALLOWED.has(url.pathname)) return;
  event.respondWith((async () => {
    const cache = await caches.open(CACHE);
    // A consistent installed shell is served from one version. The browser
    // checks the worker for updates; a waiting version is applied by the user.
    const cached = await cache.match(url.pathname);
    return cached || fetch(request);
  })());
});
