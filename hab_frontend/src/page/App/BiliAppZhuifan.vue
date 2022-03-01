<template>
  <div style="padding: 1em 0.5em">
    <van-swipe class="zhuifan-swipe" @change="onSwipeChange">
      <van-swipe-item v-for="(img, index) in swipes" :key="index">
        <img :src="img.img" />
        <div class="img-title">{{ img.title }}</div>
      </van-swipe-item>
      <template #indicator>
        <div class="custom-indicator">
          {{ currentSwipe + 1 }}/{{ swipes.length }}
        </div>
      </template>
    </van-swipe>
    <div class="zhuifan-channel">
      <div
        class="zhuifan-channel-item"
        v-for="(item, index) in zhuifanChannels"
        :key="index"
      >
        <img :src="item.img" />
        <div class="zhuifan-channel-item-title">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
// import Line from "../../components/Line.vue"
// import VideoCardRow from "../../components/VideoCardRow.vue";
export default {
  name: "Zhuifan",
  components:{},
  data() {
    return {
      swipes: [],
      currentSwipe: 0,
      zhuifanChannels: [
        { title: "全部", img: require("../../assets/cat1.png") },
        { title: "番剧", img: require("../../assets/cat2.png") },
        { title: "国创", img: require("../../assets/cat3.png") },
        { title: "新番", img: require("../../assets/cat4.png") },
        { title: "一起看", img: require("../../assets/cat5.png") },
        { title: "推广", img: require("../../assets/tuiguang.png") }
      ],
    };
  },
  mounted() {
    axios.get("/mock/swipe").then((res) => {
      this.swipes = res.data.swipes;
    });
  },
  methods: {
    onSwipeChange(idx) {
      this.currentSwipe = idx;
    },
  },
};
</script>
<style scoped>
.zhuifan-swipe {
  height: 26vh;
}
.van-swipe-item {
  overflow: hidden;
}
.van-swipe-item img {
  height: 100%;
  width: 100%;
  border-radius: 1em;
  object-fit: cover;
  filter: brightness(86%);
}
.custom-indicator {
  position: absolute;
  right: 5px;
  bottom: 5px;
  padding: 2px 5px;
  font-size: 12px;
  background: rgba(253, 253, 253, 0.575);
}
.img-title {
  color: aliceblue;
  top: -2em;
  position: relative;
  padding-left: 1em;
  font-weight: 500;
}
.zhuifan-channel {
  display: flex;
  margin-top: 1em;
  overflow: auto;
}
.zhuifan-channel::-webkit-scrollbar {
  width: 0;
}
.zhuifan-channel-item {
  display: flex;
  flex-direction: column;
  margin: 0 1em;
  /* background-color: rgb(250, 250, 250); */
}
.zhuifan-channel-item img {
  width: 3.5em;
  height: 3.5em;
  border-radius: 50%;
}
.zhuifan-channel-item-title {
  font-size: 1em;
  text-align: center;
}
</style>
