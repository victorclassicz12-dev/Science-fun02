self.addEventListener("install", e=>{
  e.waitUntil(caches.open("sciencefun-cache").then(cache=>cache.addAll(["sciencefun.html","manifest.json"])));
});
self.addEventListener("fetch", e=>{
  e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)));
});