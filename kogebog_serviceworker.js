
let TFTK_CACHE = 'TFTK-cache';
let CACHED_URLS = [
  'components/rice.js',
  'favicons/favicon-192.png',
  'favicons/maskable_192.png',
  'favicons/favicon-512.png',
  'changeTextSize.png',
  'favicon.jpg',
  'jquery-3.5.1.min.js',
  'kogebog_print.css',
  'kogebog.css',
  'kogebog.html',
  'kogebog.js',
  'LICENCE',
  '/',
  'manifest.json'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(TFTK_CACHE).then(function(cache) {
      return cache.addAll(CACHED_URLS);
    })
  );
});

self.addEventListener('fetch', function(event) {
  console.log('Fetch request for: ', event.request.url);
  event.respondWith(caches.match(event.request, { ignoreVary: true }).then( // ignoreVary should make the cache match ignore flags and stuff that can make a mathc fail unintentionally
    function(response) {
      if (response) {
        console.log('Yay, retrieved from cache!', response.url);
        return response
      } else {
        console.log('Strange, requested online request...', response.url);
        return fetch(event.request);
      }
    }).catch(function(error) {
      console.log('TFT Kogebog serviceWorker responded with error', error);
    })
  );
})
