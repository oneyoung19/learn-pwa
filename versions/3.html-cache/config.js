/*
GenerateSW + self.skipWaiting + html networkFirst

首先，测试发现skipWaiting的副作用很小，即使对于懒加载路由来说。所以计划采用skipWaiting。
另外，为了向下兜底，防止有边界错误情况，我们采用html networkFirst，这样即使资源加载失败，用户手动刷新页面后，系统正常。

*/
// const path = require('path')

module.exports = {
  pwa: {
    name: 'HTML Cache PWA',
    // 支持2种模式，GenerateSW（默认值）和 InjectManifest
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      // swSrc: path.resolve(__dirname, './service-worker.js'),
      // swDest: 'service-worker.js',
      clientsClaim: true,
      skipWaiting: true,
      exclude: [/\.map$/, /^manifest.*\.js$/, /\.html$/],
      // 缓存策略
      runtimeCaching: [
        {
          urlPattern: /\.html?$/,
          handler: 'networkFirst',
          options: {
            cacheName: 'html-cache',
            expiration: {
              maxEntries: 50,
              maxAgeSeconds: 30 * 24* 60 * 60 // 30 days
            }
          }
        }
      ]
    }
  }
}
