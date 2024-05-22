importScripts("/learn-pwa/precache-manifest.2da1d98c225dd6e4b8315da1da29d0ab.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// 当客户端只存在一个tab时 进行刷新时 会激活新的serviceWorker 并刷新当前页面（在firefox上可能存在兼容性）
self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    if (event.request.mode === 'navigate' &&
      event.request.method === 'GET' &&
      self.registration.waiting &&
      (await clients.matchAll()).length < 2
    ) {
      self.registration.waiting.postMessage('skipWaiting')
      return new Response('', {headers: {'Refresh': '0'}})
    }
    return await caches.match(event.request) ||
      fetch(event.request)
  })())
})

workbox.core.setCacheNameDetails({prefix: "learn-pwa"})

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting()
  }
})

// workbox.core.clientsClaim() // Vue CLI 4 and Workbox v4, else
// workbox.clientsClaim() // Vue CLI 3 and Workbox v3.

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

