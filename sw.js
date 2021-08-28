self.addEventListener("install", e => {
    e.waitUntil(
      cache.open("static").then(cache => {
        return cache.addAll(["./", "/src/style.css/", "./images/Logo192.png"]);
      })
    );
  });
  
  self.addEventListener("fetch", e => {
    e.respondWith(
      cache.match(e.request).then(response => {
        return response || fetch(e.request);
      }))
  })