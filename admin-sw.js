// Service worker minimal du panneau admin : aucune mise en cache,
// tout passe par le réseau pour que les données Firebase et les
// mises à jour de admin.html soient toujours à jour.
self.addEventListener('install', function(){ self.skipWaiting(); });
self.addEventListener('activate', function(e){ e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function(e){ e.respondWith(fetch(e.request)); });
