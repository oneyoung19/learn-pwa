/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  register(`${process.env.BASE_URL}service-worker.js`, {
    ready (registration) {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
      console.log(navigator.serviceWorker.controller)
      // if (navigator.serviceWorker.controller) {
      //   navigator.serviceWorker.controller.postMessage({
      //     type: 'SKIP_WAITING'
      //   })
      // }
    },
    registered (registration) {
      console.log('Service worker has been registered.')
    },
    cached (registration) {
      console.log('Content has been cached for offline use.')
    },
    updatefound (registration) {
      console.log('New content is downloading.')
    },
    updated (registration) {
      console.log('New content is available; please refresh.')
      // navigator.serviceWorker.controller.postMessage({
      //   type: 'SKIP_WAITING'
      // })
      console.log(registration)
      // registration.waiting.postMessage({ type: 'SKIP_WAITING' })
      document.dispatchEvent(
        new CustomEvent('swUpdated', { detail: registration })
      )
    },
    offline () {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error (error) {
      console.error('Error during service worker registration:', error)
    }
  })
}

// TODO:
// 1.在此文件中触发postmessage 检测是否触发skipwaiting。目前浏览器中是3448和3449(waiting)
// 2.检查html是否不再命中serviceworker
// 当在workbox中配置了exclude选项排除html后，文件能够及时更新。
