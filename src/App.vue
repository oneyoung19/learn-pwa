<template>
  <div id="app">
    <p>{{ `VUE_APP_TARGET = ${target}` }}</p>
    <p>最终版自主控制更新策略——skipWaiting At Once</p>
    <div id="nav">
      <!-- <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'Story' }">Story</router-link> -->
      <span @click="handleClickHome">Home</span> |
      <span @click="handleClickAbout">About</span> |
      <span @click="handleClickStory">Story</span>
    </div>
    <router-view/>
    <SwNotifyButton/>
  </div>
</template>

<script>
import SwNotifyButton from './components/SwNotifyButton'

export default {
  components: {
    SwNotifyButton
  },
  data () {
    return {
      target: ''
    }
  },
  created () {
    const { VUE_APP_TARGET } = process.env
    this.target = VUE_APP_TARGET
  },
  methods: {
    handleClickHome () {
      this.$router.push({
        name: 'Home'
      })
    },
    handleClickAbout () {
      this.$router.push({
        name: 'About'
      })
    },
    handleClickStory () {
      this.$router.push({
        name: 'Story'
      })
    }
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
