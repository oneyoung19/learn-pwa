/*
默认配置：
  - workboxPluginMode: 'GenerateSW'
*/

module.exports = {
  pwa: {
    name: 'Default PWA',
    // 支持2种模式，GenerateSW（默认值）和 InjectManifest
    workboxPluginMode: 'GenerateSW',
    workboxOptions: {
      // swSrc: 'src/service-worker.js',
      // 如果排除HTML缓存的话 那么在offline时 将不能访问到html 进而不能访问js和img等静态资源 ServiceWorker也就失去了意义
      // exclude: [/\.map$/, /^manifest.*\.js$/, /\.html$/],
      // 排除携带指定参数的URL
      // ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
      // 如果设置为true，则跳过等待，直接激活新的service worker。设置为false，则是利用message事件作为控制接口。
      // skipWaiting: true,
    }
  }
}
