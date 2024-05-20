module.exports = {
  outputDir: 'dist',
  // outputDir: 'dist-pwa',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/learn-pwa/'
    : '/',
  pwa: {
    name: 'My PWA',
    // 支持2种模式，GenerateSW（默认值）和 InjectManifest
    workboxPluginMode: 'GenerateSW',
    // workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc: 'src/service-worker.js'
      // 缓存策略
    }
  }
}
