importScripts("/learn-pwa/precache-manifest.b9a16ba4654b415cb9ad008c0729eeab.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// skipWaiting
self.addEventListener('install', (event) => {
  self.skipWaiting()
})
// html networkFirst
workbox.routing.registerRoute(
  /\.html$/,
  workbox.strategies.networkFirst({
    cacheName: 'url-cache',
  })
)

workbox.core.setCacheNameDetails({prefix: 'learn-pwa'})

self.addEventListener('message', (event) => {
  console.warn('message', event.data)
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

// workbox.core.clientsClaim() // Vue CLI 4 and Workbox v4, else
// workbox.clientsClaim() // Vue CLI 3 and Workbox v3.

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

