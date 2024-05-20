# Workbox

[官方workbox](https://developer.chrome.com/docs/workbox/service-worker-overview/)

[淘系前端之workbox](https://fed.taobao.org/blog/taofed/do71ct/workbox3/)

[workbox-webpack-plugin](https://www.npmjs.com/package/workbox-webpack-plugin)

## workbox-webpack-plugin

`workbox-webpack-plugin` 是一个 `Webpack` 插件，用于生成 `Service Worker` 文件。

它支持两种模式：

1. `GenerateSW`（**默认值**）
2. `InjectManifest`

官方介绍[如何选择 GenerateSW 或者 InjectManifest 模式](https://developer.chrome.com/docs/workbox/modules/workbox-webpack-plugin?hl=zh-cn)。

简单说一下我对这两种模式的理解：

1. `GenerateSW`：在该模式下，`workbox-webpack-plugin` 会自动生成 `precache-manifest.js` 和 `Service Worker` 文件，且该 `Service Worker` 文件内置了对于 `precache-manifest.js` 文件的处理逻辑。（很方便开发者使用默认逻辑，但缺点是不支持自定义 `Service Worker` 逻辑）。

2. `InjectManifest`：在该模式下，`workbox-webpack-plugin` 只会生成 `precache-manifest.js`，因此开发者需要手动声明 `swSrc` 配置以自定义 `Service Worker` 文件逻辑。`workbox-webpack-plugin` 会自动利用 `importScripts` 方法将 `precache-manifest.js` 注入到自定义 `Service Worker` 文件中。
