const CACHE_NAME = 'e-surat-sekolah-v3';
const ASSETS = [
  './',
  './index.html',
  './app.js',
  './manifest.json',
  'https://tailwindcss.com',
  'https://unpkg.com',
  'https://googleapis.com'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
