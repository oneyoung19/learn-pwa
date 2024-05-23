import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import * as Sentry from '@sentry/vue'
import './registerServiceWorker'
import VConsole from 'vconsole'
// eslint-disable-next-line no-unused-vars
const vConsole = new VConsole()

Sentry.init({
  Vue,
  dsn: 'https://71b9df1545ea5dace43ae53e40fc38c3@o4507303699808256.ingest.us.sentry.io/4507304161705984',
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration()
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, //  Capture 100% of the transactions
  // [Set 'tracePropagationTargets' to control for which URLs distributed tracing should be enabled](https://docs.sentry.io/platforms/javascript/performance/instrumentation/automatic-instrumentation/#tracepropagationtargets)
  // tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0 // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
