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
      // swSrc: 'src/service-worker.js'
      // 排除掉html的缓存
      exclude: [/\.map$/, /^manifest.*\.js$/, /\.html$/]
      // 排除携带指定参数的URL
      // ignoreURLParametersMatching: [/^utm_/, /^fbclid$/]
    }
  }
}
