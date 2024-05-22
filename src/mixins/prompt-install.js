export default {
  data () {
    return {
      deferredPrompt: null
    }
  },
  created () {
    window.addEventListener('beforeinstallprompt', this.beforeInstallPrompt.bind(this))
    window.addEventListener('appinstalled', this.appInstalled.bind(this))
  },
  methods: {
    beforeInstallPrompt (e) {
      // Prevent the mini-infobar from appearing on mobile
      e.preventDefault()
      // Stash the event so it can be triggered later.
      this.deferredPrompt = e
      // Update UI notify the user they can install the PWA
      // showInstallPromotion();
      // Optionally, send analytics event that PWA install promo was shown.
      console.log('\'beforeinstallprompt\' event was fired.')
    },
    appInstalled () {
      // hide the app-provided install promotion
      // hideInstallPromotion()
      // Clear the deferredPrompt so it can be garbage collected
      this.deferredPrompt = null
      // Optionally, send analytics event to indicate successful install
      console.log('PWA was installed')
    },
    handlePromptInstall () {
      // hide the app provided install promotion
      // hideInstallPromotion();
      // Show the install prompt
      this.deferredPrompt.prompt()
      // Wait for the user to respond to the prompt
      this.deferredPrompt.userChoice
        .then((choiceResult) => {
          if (choiceResult.outcome === 'accepted') {
            // console.log('User accepted the install prompt');
          }
        })
    },
    getPWADisplayMode () {
      const isStandalone = window.matchMedia('(display-mode: standalone)').matches
      if (document.referrer.startsWith('android-app://')) {
        return 'twa'
      } else if (navigator.standalone || isStandalone) {
        return 'standalone'
      }
      return 'browser'
    }
  }
}
