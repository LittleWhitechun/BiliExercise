<template>
  <div class="index-bg">
    <div class="router-box">
      <div class="router-title"><router-link to="bilipage">视频网站</router-link></div>
      <div class="router-title" ><router-link to="bigscreen">大屏</router-link></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
};
</script>
<style scoped>
a {
  text-decoration: none; 
}
.index-bg {
  background-image: url("../assets/Zelda.jpg");
  width: 100vw;
  height: 100vh;
  background-size: cover;
  text-align: center;
  vertical-align: middle;
}
.router-box {
  width: 440px;
  height: 309px;
  background-color: rgba(0, 0, 0, 0.2);
  background-clip: padding-box;
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -150px;
  margin-left: -220px;
  box-sizing: border-box;
  border: 5px solid rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.router-title a {
  color: rgb(233, 233, 233);
  font-weight: bold;
  user-select: none;
  padding: 15px;
  width: 120px;
  height: 90px;
  line-height: 90px;
}
.router-title a:hover{
  color: #9fd4ec;
}
.router-box::after,
.router-box::before {
  content: "";
  position: absolute;
  height: 50px;
  width: 50px;
  transition: 0.75s ease-in-out;
}
.router-box::before {
  top: -15px;
  left: -15px;
  pointer-events:none;
  border-top: 1.5px solid #03a9f3;
  border-left: 1.5px solid #03a9f3;
}
.router-box::after {
  right: -15px;
  bottom: -15px;
  pointer-events:none;
  border-bottom: 1.5px solid #03a9f3;
  border-right: 1.5px solid #03a9f3;
}
.router-box:hover::before,
.router-box:hover::after {
  width: calc(100% + 28px);
  height: calc(100% + 28px);    
}
</style>