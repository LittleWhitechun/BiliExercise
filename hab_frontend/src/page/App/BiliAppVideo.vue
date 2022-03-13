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
            <div :class="`operation-item ${zaned ? 'ed' : ''}`">
              <van-icon name="good-job" @click="zaned = !zaned" />
              <div class="operation-item-text">
                {{ "1000+" }}
              </div>
            </div>
            <div :class="`operation-item ${showGift ? 'ed' : ''}`">
              <van-icon name="invitation" @click="showGift = !showGift" />
              <div class="operation-item-text">
                {{ "打赏" }}
              </div>
            </div>
            <VideoGift @cancelGiftTable="cancelGiftTable" :show="showGift" />
            <div :class="`operation-item ${flowered ? 'ed' : ''}`">
              <van-icon name="shop-collect" @click="sendFlower" />
              <div class="operation-item-text">
                {{ "送花" }}
              </div>
            </div>
            <div class="operation-item">
              <van-icon name="share" @click="showShare = true" />
              <div class="operation-item-text">
                {{ "分享" }}
              </div>
            </div>
            <van-share-sheet
              v-model="showShare"
              title="立即分享给好友"
              :options="options"
            />
          </div>
          <div class="my-split-line"></div>
          <div class="relation-videos">
            <div v-for="(video, index) in relationVideos" :key="index">
              <keep-alive>
                <VideoCardRow :video="video"></VideoCardRow>
              </keep-alive>
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
import VideoGift from "../../components/VideoGift.vue";
export default {
  name: "BiliAppVideo",
  components: { VideoCardRow, DanmuVideo, VideoGift },
  mounted() {
    // this.curVideo = this.$store.state.curVideo;
    axios.get("/mock/relation").then((res) => {
      this.relationVideos = res.data.videos;
    });
  },
  data() {
    return {
      // curVideo: {},
      activeTab: 0,
      relationVideos: [],
      videoUrl: require("../../assets/video/never.mp4"),
      isPlaying: false,
      zaned: false,
      showShare: false,
      options: [
        { name: "微信", icon: "wechat" },
        { name: "微博", icon: "weibo" },
        { name: "复制链接", icon: "link" },
        { name: "分享海报", icon: "poster" },
        { name: "二维码", icon: "qrcode" },
      ],
      showGift: false,
      flowered: false,
    };
  },
  computed: {
    curVideo() {
      return this.$store.state.curVideo;
    },
  },
  watch: {
    curVideo: () => (this.isPlaying = false),
    showShare: () => console.log("show share"),
  },
  methods: {
    backPage() {
      this.$router.back();
    },
    cancelGiftTable(bool) {
      this.showGift = bool;
    },
    sendFlower() {
      if (!this.flowered) {
        this.$toast({ message: "谢谢你的花", icon: "flower-o" });
        this.flowered = true
      }else{
        this.flowered = false
      }
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
.operation-item:active {
  color: rgb(235, 145, 145);
}
.operation-item.ed {
  color: rgb(233, 111, 111);
  animation: zan 0.25s ease-in-out;
}
@keyframes zan {
  25% {
    transform: scale(1.15);
  }
  50% {
    transform: scale(1.3);
  }
  75% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
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