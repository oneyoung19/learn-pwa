importScripts("/learn-pwa/precache-manifest.37647130473df540ed322db1db00311f.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

// 当客户端只存在一个tab时 进行刷新时 会激活新的serviceWorker 并刷新当前页面（在firefox上可能存在兼容性--截止到2024/05/22 firefox@125.0.3版本执行依然失败 下述逻辑不触发）
// 接收到'Refresh': '0'响应头后，立即刷新当前页面
self.addEventListener('fetch', event => {
  event.respondWith((async () => {
    if (event.request.mode === 'navigate' &&
      event.request.method === 'GET' &&
      self.registration.waiting &&
      (await clients.matchAll()).length < 2
    ) {
      self.registration.waiting.postMessage({
        type: 'SKIP_WAITING'
      })
      return new Response('', {
        headers: {
          'Refresh': '0'
        }
      })
    }
    return await caches.match(event.request) ||
      fetch(event.request)
  })())
})

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

