# Workbox

[官方workbox](https://developer.chrome.com/docs/workbox/service-worker-overview/)

[淘系前端之workbox](https://fed.taobao.org/blog/taofed/do71ct/workbox3/)

[workbox-webpack-plugin](https://www.npmjs.com/package/workbox-webpack-plugin)

## 缓存策略

[Workbox 策略](https://developer.chrome.com/docs/workbox/modules/workbox-strategies)

:::tip
`GenerateSW` 模式默认使用的是 [workbox.precaching.precacheAndRoute](https://developer.chrome.com/docs/workbox/modules/workbox-precaching?hl=zh-cn#serving_precached_responses) 方法，而该方法默认是 `CacheFirst` 策略。
:::

### 1.CacheOnly

`CacheOnly` 策略从缓存中获取资源，如果缓存中找不到资源，则返回 `404`。

![](https://developer.chrome.com/static/docs/workbox/modules/workbox-strategies/image/cache-diagram-19446e5e2337e.png)

```js
import { registerRoute } from 'workbox-routing'
import { CacheOnly } from 'workbox-strategies'

registerRoute(({url}) => url.pathname.startsWith('/app/v2/'), new CacheOnly())
```

### 2.NetworkOnly

`NetworkOnly` 策略从网络获取资源，如果网络请求失败，则返回 `404`。

![](https://developer.chrome.com/static/docs/workbox/modules/workbox-strategies/image/network-diagram-8244250312532.png)

```js
import { registerRoute } from 'workbox-routing'
import { NetworkOnly } from 'workbox-strategies'

registerRoute(({url}) => url.pathname.startsWith('/admin/'), new NetworkOnly())
```

### 3.CacheFirst

`CacheFirst` 策略从缓存中获取资源，如果缓存中找不到资源，则从网络获取资源。

![](https://developer.chrome.com/static/docs/workbox/caching-strategies-overview/image/shows-flow-page-servic-a13fd1c656eeb.png)

```js
import { registerRoute } from 'workbox-routing'
import { CacheFirst } from 'workbox-strategies'

registerRoute(({request}) => request.destination === 'style', new CacheFirst())
```

### 4.NetworkFirst

`NetworkFirst` 策略从网络获取资源，如果网络请求失败，则从缓存中获取资源。

![](https://developer.chrome.com/static/docs/workbox/modules/workbox-strategies/image/network-diagram-34e6dede5ee14.png)

```js
import { registerRoute } from 'workbox-routing'
import { NetworkFirst } from 'workbox-strategies'

registerRoute(
  ({url}) => url.pathname.startsWith('/social-timeline/'),
  new NetworkFirst()
)
```

### 5.StaleWhileRevalidate

`StaleWhileRevalidate` 策略从缓存中获取资源，如果缓存中找不到资源，则从网络获取资源，如果网络请求失败，则返回缓存中的资源。

![](https://developer.chrome.com/static/docs/workbox/modules/workbox-strategies/image/stale-while-revalidate-di-81829f38d8fde.png)

```js
import { registerRoute } from 'workbox-routing'
import { StaleWhileRevalidate } from 'workbox-strategies'

registerRoute(
  ({url}) => url.pathname.startsWith('/images/avatars/'),
  new StaleWhileRevalidate()
)
```

## workbox-webpack-plugin

`workbox-webpack-plugin` 是一个 `Webpack` 插件，用于生成 `Service Worker` 文件。

它支持两种模式：

1. `GenerateSW`（**默认值**）
2. `InjectManifest`

官方介绍[如何选择 GenerateSW 或者 InjectManifest 模式](https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin)。

简单说一下我对这两种模式的理解：

1. `GenerateSW`：在该模式下，`workbox-webpack-plugin` 会自动生成 `precache-manifest.js` 和 `Service Worker` 文件，且该 `Service Worker` 文件内置了对于 `precache-manifest.js` 文件的处理逻辑。（很方便开发者使用默认逻辑，但缺点是不支持自定义 `Service Worker` 逻辑）。

2. `InjectManifest`：在该模式下，`workbox-webpack-plugin` 只会生成 `precache-manifest.js`，因此开发者需要手动声明 `swSrc` 配置以自定义 `Service Worker` 文件逻辑。`workbox-webpack-plugin` 会自动利用 `importScripts` 方法将 `precache-manifest.js` 注入到自定义 `Service Worker` 文件中。
