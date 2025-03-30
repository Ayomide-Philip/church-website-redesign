const CACHE_NAME = "my-cache";
const CORE_ASSETS = [
  "/",
  "/index.html",
  "/manifest.json",
  "/robots.txt",
  "/static/css/main.2b3662c6.css",
  "/static/js/main.bcbf8660.js",
  "/images/images.png",
];

// Install: Cache core assets
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("Service Worker: Pre-caching core assets");
      return cache.addAll(CORE_ASSETS);
    })
  );
});

// Activate: Remove old caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("Service Worker: Deleting old cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Fetch: Serve cached assets & dynamically cache images
self.addEventListener("fetch", (event) => {
  const requestUrl = new URL(event.request.url);

  event.respondWith(
    caches
      .match(event.request)
      .then((cachedResponse) => {
        if (cachedResponse) {
          console.log("Serving from cache:", event.request.url);
          return cachedResponse;
        }

        return fetch(event.request).then((networkResponse) => {
          return caches.open(CACHE_NAME).then((cache) => {
            // Only cache images dynamically
            if (event.request.destination === "image") {
              cache.put(event.request, networkResponse.clone());
              console.log("Caching new image:", event.request.url);
            }
            return networkResponse;
          });
        });
      })
      .catch(() => {
        // Optional: Serve a fallback image if offline
        if (event.request.destination === "image") {
          return caches.match("/images/offline.png");
        }
      })
  );
});
