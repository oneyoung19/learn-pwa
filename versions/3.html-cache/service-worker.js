// skipWaiting
self.addEventListener('install', (event) => {
  self.skipWaiting()
})
// html networkFirst
// workbox.routing.registerRoute(
//   /\.html$/,
//   workbox.strategies.networkFirst({
//     cacheName: 'html-cache',
//   })
// )
// 该方式下 测试发现workbox.core.clientsClaim不是必需的 多个clients会自动同时刷新

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
