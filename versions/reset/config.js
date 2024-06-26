/*
自定义serviceWorker文件 以重置生产环境的serviceWorker
*/
const path = require('path')

module.exports = {
  pwa: {
    name: 'Reset PWA',
    // 支持2种模式，GenerateSW（默认值）和 InjectManifest
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: path.resolve(__dirname, './service-worker.js'),
      swDest: 'service-worker.js'
    }
  }
}
