/*
自定义serviceWorker文件 + navigate配置
*/
const path = require('path')

module.exports = {
  pwa: {
    name: 'Navigate PWA',
    // 支持2种模式，GenerateSW（默认值）和 InjectManifest
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: path.resolve(__dirname, './service-worker.js'),
      swDest: 'service-worker.js'
    }
  }
}
