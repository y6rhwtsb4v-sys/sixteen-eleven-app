/* Sixteen Eleven service worker.

   The shell (html, css, js) is fetched network-first, so a redeploy always
   takes effect on the next load. Only the large scripture files are served
   cache-first, since they are what makes the app slow to start and they
   rarely change. An earlier version cached everything, which meant a broken
   build could keep serving itself out of cache after it had been fixed.

   Bump CACHE whenever the scripture data changes. */
const CACHE = 'sixteen-eleven-v92';
const SHELL = [
  './', './index.html',
  './assets/styles.css',
  './assets/app.js',
  './manifest.webmanifest'
];
const DATA = [
  './assets/data/meta.json',
  './assets/data/index.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL.concat(DATA)).catch(() => c.addAll(SHELL)))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('message', e => {
  if (e.data === 'skipWaiting') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // never touch the neural voice model or its library
  if (url.origin !== location.origin) return;

  const isData = url.pathname.includes('/assets/data/');

  if (isData) {
    // cache-first: large, and unchanged between deploys
    e.respondWith(
      caches.match(e.request).then(hit => hit || fetch(e.request).then(res => {
        if (res && res.status === 200) {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      }))
    );
    return;
  }

  // network-first for everything else, so fixes reach people immediately
  e.respondWith(
    fetch(e.request).then(res => {
      if (res && res.status === 200) {
        const copy = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, copy));
      }
      return res;
    }).catch(() => caches.match(e.request).then(hit => hit || caches.match('./index.html')))
  );
});
