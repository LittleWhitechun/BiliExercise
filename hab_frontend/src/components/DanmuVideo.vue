<template>
  <div class="danmu-wrapper" ref="danmuWrapper">
    <div class="danmu" ref="danmu" :style="{height:`${curHeight}px`}">
      <div
        :class="'danmu-item ' + videoState"
        v-for="item in this.showingDanmus"
        :data-line="item.line"
        :key="item.id"
        @mouseover="handleDanmuHover(item)"
      >
        {{ item.content }}
      </div>
    </div>
    <video
      class="video-video"
      ref="video"
      :src="videoUrl"
      controls
      autoplay
      @pause="pauseVideo"
      @play="continueVideo"
    ></video>
    <van-cell-group>
      <van-field
        v-model="newDanmu"
        center
        clearable
        placeholder="发个弹幕见证当下"
        :border="false"
        use-button-slot
      >
        <van-button
          slot="button"
          size="small"
          type="default"
          @click="sendDanmu"
        >
          发送
        </van-button>
      </van-field>
    </van-cell-group>
  </div>
</template>
<script>
const getUUID = () => Math.random() + Math.random();
export default {
  name: "DanmuVideo",
  mounted() {
    this.curHeight = this.$refs.danmuWrapper.offsetHeight;
    console.log(this.curHeight);
    this.$refs.video.ontimeupdate = this.Throttle(this.updateDanmu, 1000);
    // this.$refs.danmu.offsetHeight = this.curHeight + "px";
    // this.$refs.video.ontimeupdate = () => console.log(123)
  },
  props: {
    videoUrl: {
      type: String,
      default: require("../assets/video/never.mp4"),
    },
    width: {
      type: String,
      default: "500px",
    },
  },
  data() {
    return {
      waitingDanmus: [...Array(5).keys()].map((i) => {
        return {
          id: getUUID(),
          content: `我是弹幕机器人${i}号`,
          line: i + 1,
          time: i,
        };
      }),
      showingDanmus: [],
      lines: 5,
      currentLine: 1,
      danmuIntervalId: 0,
      newDanmu: "",
      videoState: "paused",
      curHeight: 300,
      prePlayTime: 0,
    };
  },
  methods: {
    Throttle: (fn, t = 1000) => {
      let prev = Date.now();
      return function () {
        let now = Date.now();
        if (now - prev >= t) {
          prev = Date.now();
          fn.apply();
        }
      };
    },
    closeVideo() {
      this.curVideo = {};
      this.curVideo = { ...this.curVideo };
      this.videoUrl = "";
      clearInterval(this.danmuIntervalId);
      this.showingDanmus = [];
      this.danmus = [...Array(5).keys()].map((i) => {
        return {
          id: getUUID(),
          content: `我是弹幕机器人${i}号`,
          line: 0,
          time: i,
        };
      });
      this.waitingDanmus = this.danmus;
    },
    playVideo(video) {
      console.log(video);
      this.curVideo = Object.assign({}, this.curVideo, video);
      this.isVideoPlay = true;
      this.curVideo.videoUrl =
        this.videoUrl = require("../assets/video/never.mp4");
      console.log(this.curVideo);
    },
    updateDanmu() {
      const curTime = this.$refs.video.currentTime;
      // 如果用户拖动进度条，则清空弹幕
      if (curTime - this.prePlayTime >= 2 || this.prePlayTime > curTime) {
        this.showingDanmus = [];
      }
      this.prePlayTime = curTime;
      let danmuToAppend = this.waitingDanmus.filter((i) => {
        return curTime >= i.time && i.time + 1 > curTime;
      });
      // this.waitingDanmus = this.waitingDanmus.filter((i) => {
      //   return curTime < i.time;
      // });
      if (danmuToAppend.length === 0) {
        return;
      } else {
        this.showingDanmus = [...this.showingDanmus, ...danmuToAppend];
      }
    },
    sendDanmu() {
      if (!this.newDanmu) {
        return;
      }
      const newDanmu = {
        id: getUUID(),
        content: this.newDanmu,
        line: Math.floor(Math.random() * this.lines) + 1,
        time: this.$refs.video.currentTime + 0.1,
      };
      this.waitingDanmus.push(newDanmu);
      this.newDanmu = "";
    },
    removeDanmu() {
      this.showingDanmus.shift();
    },
    pauseVideo() {
      this.videoState = "paused";
    },
    continueVideo() {
      console.log("play");
      this.videoState = "actived";
    },
    updateVideoTime() {
      this.updateDanmu();
    },
    handleDanmuHover(danmu) {
      console.log("hovering!!",danmu);
    },
  },
  beforeDestroy() {
    this.closeVideo;
  },
};
</script>
<style scoped>
.danmu-wrapper {
  width: 100%;
  /* height: 500px; */
}
.danmu {
  position: absolute;
  overflow: hidden;
  width: 100%;
  /* height: 100%; */
  /* pointer-events: none; */
}
.danmu-item {
  color: white;
  position: absolute;
  animation: rightToLeft 5s linear both;
  width: 20rem;
  overflow: hidden;
  pointer-events: none;
  display: inline-block;
}
.danmu-item:hover{
  color: aquamarine;
}
.danmu-item[data-line="1"] {
  top: 0;
}
.danmu-item[data-line="2"] {
  top: 50px;
}
.danmu-item[data-line="3"] {
  top: 100px;
}
.danmu-item[data-line="4"] {
  top: 150px;
}
.danmu-item[data-line="5"] {
  top: 200px;
}
@keyframes rightToLeft {
  from {
    left: 100%;
    transform: translateX(0);
  }
  to {
    left: 0;
    transform: translateX(-200%);
  }
}
.active {
  animation-play-state: running;
}
.paused {
  animation-play-state: paused;
}
.video-video {
  width: 100%;
}
</style>
