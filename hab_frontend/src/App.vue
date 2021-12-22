<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  }
}
</script>

<style>
body{
  margin: 0;
  height: 100%;
}
#app{
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>
