<template>
  <div class="biliapp">
    <van-sticky>
      <van-row class="header">
        <van-col span="3" class="header-avatar">
          <img
            src="../../assets/cat1.png"
            style="object-fit: cover; border-radius: 50%; width: 100%"
          />
        </van-col>
        <van-col span="19"
          ><van-search v-model="searchValue" placeholder="奇异博士2"
        /></van-col>
        <van-col span="2" class="header-message"
          ><van-icon name="comment-o" size="2em"
        /></van-col>
      </van-row>

      <van-tabs v-model="headerActive">
        <van-tab title="推荐"> </van-tab>
        <van-tab title="热门"></van-tab>
        <van-tab title="追番"></van-tab>
        <van-tab title="影视">内容 4</van-tab>
      </van-tabs>
    </van-sticky>
    <div class="app-content">
      <keep-alive>
        <Tuijian v-if="headerActive == 0" />
        <Hot v-if="headerActive == 1" />
        <Zhuifan v-if="headerActive == 2" />
      </keep-alive>
    </div>
    <van-tabbar v-model="footerActive">
      <van-tabbar-item icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">发现</van-tabbar-item>
      <van-tabbar-item icon="friends-o">购物</van-tabbar-item>
      <van-tabbar-item icon="setting-o">设置</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Tuijian from "./BiliAppTuijian.vue";
import Hot from "./BiliAppHot.vue";
import Zhuifan from "./BiliAppZhuifan.vue";
export default {
  name: "BiliApp",
  components: {
    Tuijian,
    Hot,
    Zhuifan,
  },
  data() {
    return {
      headerActive: 0,
      footerActive: 0,
      searchValue: "",
    };
  },
};
</script>
<style scoped>
.van-search__content {
  border-radius: 16px;
}
.header {
  display: flex;
  align-items: center;
  background-color: white;
}
.header-avatar {
  padding-left: 0.25rem;
}
.header-message {
  text-align: center;
}
.biliapp {
  font-size: 3.3vw;
  letter-spacing: 0.035rem;
  overflow: visible;
}
.app-content {
  margin-top: 1rem;
}
</style>