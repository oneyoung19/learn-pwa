<template>
  <button v-if="updateExists" @click="refreshApp" class="btn">
    New version available! Click to update
  </button>
</template>

<script>
export default {
  data () {
    return {
      refreshing: false,
      registration: null,
      updateExists: false
    }
  },
  created () {
    document.addEventListener(
      'swUpdated', this.showRefreshUI, { once: true }
    )
    if (navigator.serviceWorker) {
      navigator.serviceWorker.addEventListener('controllerchange', () => {
        console.log('---controllerchange---', this.refreshing)
        if (this.refreshing) return
        this.refreshing = true
        // window.location.reload()
      })
    }
  },
  methods: {
    showRefreshUI (e) {
      this.registration = e.detail
      this.updateExists = true
    },
    refreshApp () {
      this.updateExists = false
      console.log('---refreshApp---', this.registration)
      if (!this.registration || !this.registration.waiting) { return }
      this.registration.waiting.postMessage({
        type: 'SKIP_WAITING'
      })
    }
  }
}
</script>

<style scoped lang="less">
.btn {
  position: fixed;
  right: 20px;
  bottom: 20px;
}
</style>
