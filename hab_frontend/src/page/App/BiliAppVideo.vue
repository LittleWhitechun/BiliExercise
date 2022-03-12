<template>
  <div style="overflow-x: hidden">
    <div class="back-btn" @click="backPage">
      <van-icon name="revoke" />
    </div>
    <div class="video">
      <img :src="curVideo.img" v-if="!isPlaying" @click="isPlaying = true" />
      <DanmuVideo v-if="isPlaying" />
      <!-- <div>
        <video
          class="video-video"
          :src="videoUrl"
          controls
          v-if="isPlaying"
          autoplay
        ></video>
      </div> -->
      <!-- <van-icon name="play-circle-o" class="play-btn" v-if="!isPlaying" /> -->
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
import DanmuVideo from "../../components/DanmuVideo.vue";
export default {
  name: "BiliAppVideo",
  components: { VideoCardRow, DanmuVideo },
  mounted() {
    // this.curVideo = this.$store.state.curVideo;
    console.log(this.$store.state.curVideo);
    axios.get("/mock/relation").then((res) => {
      this.relationVideos = res.data.videos;
    });
    console.log("this.$route.path:", this.$route.path);
  },
  data() {
    return {
      // curVideo: {},
      activeTab: 0,
      relationVideos: [],
      videoUrl: require("../../assets/video/never.mp4"),
      isPlaying: false,
    };
  },
  computed: {
    curVideo() {
      return this.$store.state.curVideo;
    },
  },
  methods: {
    backPage() {
      this.$router.back();
      console.log("back");
    },
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
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
}
.up-info {
  margin-left: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  font-size: 0.2rem;
}
.van-tab__pane {
  margin: 0.5rem 0.2rem;
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
  font-size: 1.5rem;
}
.operation-item-text {
  font-size: 0.7rem;
}
.video-video {
  width: 100%;
}
.play-btn {
  /* display: absolute !important; */
  top: 30%;
  left: calc(50% - 1.75rem);
  font-size: 3.5rem;
}
.back-btn {
  position: fixed;
  font-size: 1.5rem;
  color: rgb(255, 255, 255);
  font-weight: 600;
  z-index: 999;
}
</style>