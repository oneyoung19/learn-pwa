module.exports = {
  outputDir: 'dist',
  // outputDir: 'dist-InjectManifest',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/learn-pwa/'
    : '/',
  pwa: {
    name: 'My PWA',
    // 支持2种模式，GenerateSW（默认值）和 InjectManifest
    workboxPluginMode: 'GenerateSW',
    // workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc: 'src/service-worker.js',
      // 排除掉html的缓存
      exclude: [/\.map$/, /^manifest.*\.js$/, /\.html$/],
      // 排除携带指定参数的URL
      // ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
      // 如果设置为true，则跳过等待，直接激活新的service worker。设置为false，则是利用message事件作为控制接口。
      // skipWaiting: true,
    }
  }
}
