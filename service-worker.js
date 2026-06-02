const CACHE_NAME = "lilith-studio-v52";
const BASE = "/CreativeSpace";

const PRECACHE = [
  BASE + "/",
  BASE + "/index.html",
  BASE + "/manifest.json",
  BASE + "/icon-192.png",
  BASE + "/icon-512.png",
  BASE + "/favicon.png",
];

const CDN_CACHE = "lilith-cdn-v52";
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
  // Prend le contrôle immédiatement sans attendre la fermeture des onglets
  self.skipWaiting();
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(keys) {
      return Promise.all(
        keys.filter(function(k) { return k !== CACHE_NAME && k !== CDN_CACHE; })
            .map(function(k) { return caches.delete(k); })
      );
    }).then(function() {
      // Prend le contrôle de tous les onglets ouverts immédiatement
      return self.clients.claim();
    })
  );
});

// Message depuis l'app pour forcer le skip waiting si un nouveau SW attend
self.addEventListener("message", function(event) {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

self.addEventListener("fetch", function(event) {
  var url = event.request.url;
  if (url.includes("api.anthropic.com")) return;
  if (event.request.method !== "GET") return;
  if (url.includes("supabase.co") || url.includes("cloudinary.com")) return;

  event.respondWith(
    caches.match(event.request).then(function(cached) {
      // Network-first pour index.html pour toujours avoir la dernière version
      if (url.endsWith("/") || url.includes("index.html")) {
        return fetch(event.request).then(function(response) {
          if (!response || response.status !== 200) return cached || response;
          var clone = response.clone();
          caches.open(CACHE_NAME).then(function(cache) { cache.put(event.request, clone); });
          return response;
        }).catch(function() {
          return cached || caches.match(BASE + "/index.html");
        });
      }
      // Cache-first pour le reste
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
          return caches.match(BASE + "/index.html");
        }
      });
    })
  );
});
