# Service Worker

## jake archibald

[Service worker 生命周期](https://web.dev/articles/service-worker-lifecycle?hl=zh-cn#avoid_url_change)

[Using ServiceWorker Today](https://jakearchibald.com/2014/using-serviceworker-today/)

[ServiceWorker First Draft](https://jakearchibald.com/2014/service-worker-first-draft/)

[Offline Cookbook](https://jakearchibald.com/2014/offline-cookbook/)

[w3 文档](https://www.w3.org/TR/service-workers/)

## youyuxi

[register-service-worker](https://www.npmjs.com/package/register-service-worker)

[@vue/cli-plugin-pwa](https://www.npmjs.com/package/@vue/cli-plugin-pwa)

## 调试

[chrome://serviceworker-internals/](chrome://serviceworker-internals/)

[chrome://inspect/#service-workers](chrome://inspect/#service-workers)

## 缓存策略

[Cache strategies](https://developer.chrome.com/docs/workbox/caching-strategies-overview)

### 1.CacheOnly

**仅缓存**是指当 `Service Worker` 控制着页面时，匹配的请求将只会进入缓存。

这意味着，任何缓存的资源都需要进行预缓存，以使模式正常工作，并且在 `Service Worker` 更新之前，绝不会在缓存中更新这些资源。

![](https://developer.chrome.com/static/docs/workbox/modules/workbox-strategies/image/cache-diagram-19446e5e2337e.png)

```js
// Establish a cache name
const cacheName = "MyFancyCacheName_v1"

// Assets to precache
const precachedAssets = [
  "/possum1.jpg",
  "/possum2.jpg",
  "/possum3.jpg",
  "/possum4.jpg",
]

self.addEventListener("install", (event) => {
  // Precache assets on install
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(precachedAssets)
    })
  )
})

self.addEventListener("fetch", (event) => {
  // Is this one of our precached assets?
  const url = new URL(event.request.url)
  const isPrecachedRequest = precachedAssets.includes(url.pathname)

  if (isPrecachedRequest) {
    // Grab the precached asset from the cache
    event.respondWith(
      caches.open(cacheName).then((cache) => {
        return cache.match(event.request.url)
      })
    )
  } else {
    // Go to the network
    return
  }
})
```

### 2.NetworkOnly

**仅网络**是指请求通过 `Service Worker` 传递到网络，而无需与 `Service Worker` 缓存进行任何交互。

这是确保内容新鲜度的好策略（比如使用标记），但需要权衡的是，用户离线时自定义设置将永远不会起作用。

![](https://developer.chrome.com/static/docs/workbox/caching-strategies-overview/image/shows-flow-page-servic-3b48b65632b29.png)

### 3.CacheFirst

**缓存优先**是指：

1. 请求到达缓存。如果资源位于缓存中，请从缓存中提供。
2. 如果请求不在缓存中，请转到网络。
3. 网络请求完成后，将其添加到缓存中，然后从网络返回响应。

![](https://developer.chrome.com/static/docs/workbox/caching-strategies-overview/image/shows-flow-page-servic-a13fd1c656eeb.png)

```js
// Establish a cache name
const cacheName = 'MyFancyCacheName_v1'

self.addEventListener('fetch', (event) => {
  // Check if this is a request for an image
  if (event.request.destination === 'image') {
    event.respondWith(caches.open(cacheName).then((cache) => {
      // Go to the cache first
      return cache.match(event.request.url).then((cachedResponse) => {
        // Return a cached response if we have one
        if (cachedResponse) {
          return cachedResponse
        }

        // Otherwise, hit the network
        return fetch(event.request).then((fetchedResponse) => {
          // Add the network response to the cache for later visits
          cache.put(event.request, fetchedResponse.clone())

          // Return the network response
          return fetchedResponse
        })
      })
    }))
  } else {
    return
  }
})
```

:::tip
这是一项适用于所有静态资源（例如 `CSS`、`JavaScript`、图片和字体）的绝佳策略，尤其是**经过哈希处理的资源**。 

它可以绕过 `HTTP` 缓存可能启动的服务器执行任何内容新鲜度检查，从而加快不可变资源的速度。更重要的是，所有缓存的资源都将离线可用
:::

### 4.NetworkFirst

**网络优先**是指：

1. 优先直接向网络请求资源，同时在缓存中保留一份。
2. 当网络不可用，资源请求失败时，取缓存中的资源。

![](https://developer.chrome.com/static/docs/workbox/caching-strategies-overview/image/shows-flow-page-servic-5aa9ce979ce7c.png)

```js
// Establish a cache name
const cacheName = 'MyFancyCacheName_v1'

self.addEventListener('fetch', (event) => {
  // Check if this is a navigation request
  if (event.request.mode === 'navigate') {
    // Open the cache
    event.respondWith(caches.open(cacheName).then((cache) => {
      // Go to the network first
      return fetch(event.request.url).then((fetchedResponse) => {
        cache.put(event.request, fetchedResponse.clone())

        return fetchedResponse
      }).catch(() => {
        // If the network is unavailable, get
        return cache.match(event.request.url)
      })
    }))
  } else {
    return
  }
})
```

### 5.StaleWhileRevalidate

**重新验证时过时**是指：

1. 在第一次请求获取资源时，从网络中提取资源，将其放入缓存中并返回网络响应；
2. 对于后续请求，首先从缓存提供资源，然后**在后台**从网络重新请求该资源，并更新资源的缓存条目；
3. 对于此后的请求，您将收到在上一步中从缓存中放置的最后一个网络提取的版本。

![](https://developer.chrome.com/static/docs/workbox/caching-strategies-overview/image/shows-flow-page-servic-5b2c0ea03f4f3.png)

```js
// Establish a cache name
const cacheName = 'MyFancyCacheName_v1'

self.addEventListener('fetch', (event) => {
  if (event.request.destination === 'image') {
    event.respondWith(caches.open(cacheName).then((cache) => {
      return cache.match(event.request).then((cachedResponse) => {
        const fetchedResponse = fetch(event.request).then((networkResponse) => {
          cache.put(event.request, networkResponse.clone())

          return networkResponse
        })

        return cachedResponse || fetchedResponse
      })
    }))
  } else {
    return
  }
})
```
