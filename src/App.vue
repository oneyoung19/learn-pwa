<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link> |
      <router-link :to="{ name: 'Story' }">Story</router-link> -->
      <span @click="handleClickHome">Home</span> |
      <span @click="handleClickAbout">About</span> |
      <span @click="handleClickStory">Story</span>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
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
