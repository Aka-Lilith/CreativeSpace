const CACHE_NAME = "lilith-studio-v44";

const PRECACHE = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png",
  "/favicon.png",
];

const CDN_CACHE = "lilith-cdn-v43";
const CDN_URLS = [
  "https://unpkg.com/react@18/umd/react.production.min.js",
  "https://unpkg.com/react-dom@18/umd/react-dom.production.min.js",
  "https://unpkg.com/@babel/standalone/babel.min.js",
  "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Inter:wght@400;500;600&display=swap",
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    Promise.all([
      caches.open(CACHE_NAME).then(function(cache) {
        return cache.addAll(PRECACHE);
      }),
      caches.open(CDN_CACHE).then(function(cache) {
        return Promise.allSettled(
          CDN_URLS.map(function(url) {
            return fetch(url, {mode:"cors"})
              .then(function(res) { return cache.put(url, res); })
              .catch(function() {});
          })
        );
      }),
    ])
  );
  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME && k !== CDN_CACHE; })
            .map(function(k) { return caches.delete(k); })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", function(event) {
  var url = event.request.url;
  if (url.includes("api.anthropic.com")) return;
  // Ne jamais intercepter les requetes POST ou les appels Supabase/Cloudinary
  if (event.request.method !== "GET") return;
  if (url.includes("supabase.co") || url.includes("cloudinary.com")) return;

  event.respondWith(
    caches.match(event.request).then(function(cached) {
      if (cached) return cached;
      return fetch(event.request).then(function(response) {
        if (!response || response.status !== 200) return response;
        var cacheName = url.includes("unpkg.com") || url.includes("fonts.g")
          ? CDN_CACHE : CACHE_NAME;
        var clone = response.clone();
        caches.open(cacheName).then(function(cache) { cache.put(event.request, clone); });
        return response;
      }).catch(function() {
        if (event.request.mode === "navigate") {
          return caches.match("/index.html");
        }
      });
    })
  );
});
