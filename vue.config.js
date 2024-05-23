// const pwaConfig = require('./versions/1.default/config')
// const pwaConfig = require('./versions/2.navigate/config')
const pwaConfig = require('./versions/3.html-cache/config')
const { sentryWebpackPlugin } = require('@sentry/webpack-plugin')

module.exports = {

  outputDir: 'dist',
  // outputDir: 'dist-InjectManifest',
  publicPath: process.env.NODE_ENV === 'production'
    ? '/learn-pwa/'
    : '/',
  ...pwaConfig,
  configureWebpack: {
    devtool: process.env.NODE_ENV === 'production' ? 'source-map' : 'eval-cheap-module-source-map',
  },
  chainWebpack: config => {
    config.plugin('sentry')
      .use(sentryWebpackPlugin({
        authToken: process.env.SENTRY_AUTH_TOKEN,
        org: 'oneyoung',
        project: 'learn-pwa'
      }))
  }
}
