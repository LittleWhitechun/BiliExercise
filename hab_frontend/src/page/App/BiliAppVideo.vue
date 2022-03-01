<template>
  <div style="overflow-x: hidden">
    <div class="video">
      <img :src="curVideo.img" />
    </div>
    <div class="video-info">
      <van-tabs v-model="activeTab">
        <van-tab title="简介">
          <div class="up">
            <img :src="require('../../assets/cat1.png')" />
            <div class="up-info">
              <div>{{ curVideo.upName }}</div>
              <div>3.3万粉丝 100+视频</div>
            </div>
          </div>
          <div class="operations">
            <div class="operation-item">
              <van-icon name="good-job" />
              <div class="operation-item-text">
                {{ "1000+" }}
              </div>
            </div>
            <div class="operation-item">
              <van-icon name="invitation" />
              <div class="operation-item-text">
                {{ "打赏" }}
              </div>
            </div>
            <div class="operation-item">
              <van-icon name="shop-collect" />
              <div class="operation-item-text">
                {{ "送花" }}
              </div>
            </div>
            <div class="operation-item">
              <van-icon name="add-square" />
              <div class="operation-item-text">
                {{ "添加" }}
              </div>
            </div>
          </div>
          <div class="my-split-line"></div>
          <div class="relation-videos">
            <div v-for="(video, index) in relationVideos" :key="index">
              <VideoCardRow :video="video"></VideoCardRow>
              <div class="my-split-line"></div>
            </div>
          </div>
        </van-tab>
        <van-tab title="评论">内容 2</van-tab>
      </van-tabs>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import VideoCardRow from "../../components/VideoCardRow.vue";
export default {
  name: "BiliAppVideo",
  components: { VideoCardRow },
  mounted() {
    this.curVideo = this.$store.state.curVideo;
    console.log(this.$store.state.curVideo);
    axios.get("/mock/relation").then((res) => {
      this.relationVideos = res.data.videos;
    });
  },
  data() {
    return {
      curVideo: {},
      activeTab: 0,
      relationVideos: [],
    };
  },
};
</script>
<style scoped>
.video img {
  width: 100%;
}
.up {
  display: flex;
}
.up img {
  width: 2em;
  height: 2em;
  border-radius: 50%;
}
.up-info {
  margin-left: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 0.2em;
}
.van-tab__pane {
  margin: 0.5em 0.2em;
}
.operations {
  display: flex;
}
.operation-item {
  margin-top: 7.5%;
  width: 25%;
  text-align: center;
  color: rgb(146, 146, 146);
}
.operation-item .van-icon {
  font-size: 1.5em;
}
.operation-item-text {
  font-size: 0.7em;
}
</style>