// const pwaConfig = require('./versions/1.default/config')
// const pwaConfig = require('./versions/2.navigate/config')
const pwaConfig = require('./versions/3.html-cache/config')

module.exports = {
  outputDir: 'dist',
  // outputDir: 'dist-InjectManifest',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/learn-pwa/'
    : '/',
  ...pwaConfig
}
