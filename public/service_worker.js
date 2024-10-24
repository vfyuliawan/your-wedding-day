// Import the Workbox library
importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.4.1/workbox-sw.js');

// Precache assets. Workbox will inject the list of assets here.
workbox.precaching.precacheAndRoute(self.__WB_MANIFEST || []);

// Optional: You can also define additional caching strategies, for example:
workbox.routing.registerRoute(
  ({ request }) => request.destination === 'font',
  new workbox.strategies.CacheFirst({
    cacheName: 'font-cache',
    plugins: [
      new workbox.expiration.ExpirationPlugin({
        maxEntries: 20,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 Days
      }),
    ],
  })
);


self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('font-cache').then(cache => {
        return cache.addAll([
          '/Font/Belleza/Belleza-Regular.ttf',
          '/Font/brilon/brilon-11-regular.ttf',
          '/Font/brittany_signature/BrittanySignature.ttf',
          '/Font/dream_evanue/FontsFree-Net-Dream-Avenue.ttf',
          '/Font/creattion/CreattionDemo.otf',
          '/Font/faunaone/FaunaOne-Regular.ttf',
          '/Font/Forum/Forum-Regular.ttf',
          '/Font/sachlette-signature/Sachlette Signature.ttf',
          '/Font/Poppins/Poppins-Regular.ttf',
          '/Font/regular-light/Regular-Light.ttf'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    if (event.request.url.includes('/Font/')) {
      event.respondWith(
        caches.match(event.request).then(response => {
          return response || fetch(event.request);
        })
      );
    }
  });
  