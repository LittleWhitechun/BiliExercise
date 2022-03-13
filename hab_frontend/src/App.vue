<template>
  <div id="app">
    <keep-alive include="BiliApp">
    <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  components: {
    // HelloWorld
  },
};
</script>

<style>
body {
  margin: 0;
  height: 100%;
}
#app {
  margin: 0;
  width: 100%;
  height: 100%;
}
.my-split-line {
  display: flex;
  align-items: center;
  font-size: 1em;
  color: #999;
  margin: 1% 2.75%;
}
.my-split-line::before,
.my-split-line::after {
  content: "";
  flex: 1;
  height: 0.006rem;
  background: #ccc;
}
</style>
