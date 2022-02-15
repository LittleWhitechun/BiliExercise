<template>
  <!-- TODO:懒加载；页面骨架 -->
  <div>
    <div class="bilipage">
      <div class="banner">
        <el-row type="flex" justify="center">
          <el-col :span="7">
            <div class="button-group">
              <el-button type="text">首页</el-button>
              <el-button type="text">番剧</el-button>
              <el-popover
                visible-arrow="false"
                placement="bottom"
                width="400"
                trigger="hover"
              >
                <div class="live">
                  <div class="live-left">
                    <div class="pop-title">热门直播</div>
                    <div class="live-left-grid">
                      <a
                        ><img
                          :src="require('../assets/cat1.png')"
                          width="60"
                          height="60"
                        />
                        <div class="live-left-grid-title">热门1</div></a
                      >
                      <a
                        ><img
                          :src="require('../assets/cat2.png')"
                          width="60"
                          height="60"
                        />
                        <div class="live-left-grid-title">热门2</div></a
                      >
                      <a
                        ><img
                          :src="require('../assets/cat3.png')"
                          width="60"
                          height="60"
                        />
                        <div class="live-left-grid-title">热门3</div></a
                      >
                      <a
                        ><img
                          :src="require('../assets/cat4.png')"
                          width="60"
                          height="60"
                        />
                        <div class="live-left-grid-title">热门4</div></a
                      >
                      <a
                        ><img
                          :src="require('../assets/cat5.png')"
                          width="60"
                          height="60"
                        />
                        <div class="live-left-grid-title">热门5</div></a
                      >
                      <a
                        ><img
                          :src="require('../assets/globe-blue.png')"
                          width="60"
                          height="60"
                        />
                        <div class="live-left-grid-title">热门6</div></a
                      >
                    </div>
                  </div>
                  <div class="live-right">
                    <div class="pop-title">热门活动</div>
                    <img
                      :src="require('../assets/Bilipic/live1.webp')"
                      style="width: 180px; height: 90px; border-radius: 10%"
                    />
                    <img
                      :src="require('../assets/Bilibg/bg6.jpg')"
                      style="width: 180px; height: 90px; border-radius: 10%"
                    />
                  </div>
                </div>
                <el-button slot="reference" type="text">直播</el-button>
              </el-popover>
              <el-button type="text">游戏中心</el-button>
              <el-button type="text">会员购</el-button>
              <el-button type="text" icon="el-icon-message"></el-button>
              <el-button type="text" icon="el-icon-star-off"></el-button>
            </div>
          </el-col>
          <el-col :span="6">
            <el-input
              placeholder="请输入内容"
              prefix-icon="el-icon-search"
              v-model="searchContent"
            >
            </el-input>
          </el-col>
          <el-col :span="1">
            <img
              class="avatar"
              :src="require('../assets/cat4.png')"
              style="border-radius: 50%:display:inline-block"
              height="45px"
              @mouseenter="enterAvatar"
            />
          </el-col>
          <el-col :span="6">
            <div class="button-group">
              <el-button type="text">大会员</el-button>
              <el-button type="text">消息</el-button>
              <el-button type="text">预约</el-button>
            </div></el-col
          >
        </el-row>
      </div>
      <div class="channel">
        <div class="channel-icons">
          <el-badge value="1">
            <el-avatar :src="require('../assets/cat2.png')"></el-avatar>
          </el-badge>
          <el-badge value="99+">
            <el-avatar :src="require('../assets/hot.png')"></el-avatar>
          </el-badge>
          <el-badge value="2">
            <el-avatar :src="require('../assets/cat1.png')"></el-avatar>
          </el-badge>
        </div>
        <div class="channel-items">
          <span
            v-for="channel in channels"
            :key="channel"
            class="channel-item"
            >{{ channel }}</span
          >
        </div>
      </div>
      <div class="content">
        <el-row type="flex" justify="start">
          <el-col :span="11">
            <div class="carousel">
              <el-carousel :autoplay="false" height="450px">
                <el-carousel-item>
                  <img src="../assets/Bilibg/bird.jpg" />
                </el-carousel-item>
                <el-carousel-item>
                  <img src="../assets/Bilibg/turtle.jpg" />
                </el-carousel-item>
                <el-carousel-item>
                  <img src="../assets/Bilibg/tiger.jpg" />
                </el-carousel-item>
              </el-carousel></div
          ></el-col>
          <el-col :span="12">
            <div class="recommend">
              <el-skeleton
                animated
                v-for="item in videos"
                :key="item.id"
                :loading="loading"
              >
                <template slot="template">
                  <el-skeleton-item
                    variant="image"
                    style="width: 300px; height: 150px"
                  />
                  <div style="margin: 10px 0">
                    <el-skeleton-item variant="p" style="width: 50%" />
                  </div>
                  <div><el-skeleton-item variant="p" style="width: 50%" /></div>
                </template>

                <template>
                  <img
                    style="
                      width: 300px;
                      height: 150px;
                      object-fit: cover;
                      border-radius: 10px;
                    "
                    :src="item.img"
                    @click="playVideo(item)"
                  />
                  <div style="margin: 0px 0">
                    <span @click="playVideo(item)"
                      ><b>{{ item.title }}</b></span
                    >
                  </div>
                  <div>
                    <span> {{ item.upName }} {{ item.time }} </span>
                  </div>
                </template>
              </el-skeleton>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="extension">
        <div style="display: flex; align-items: center">
          <img src="../assets/tuiguang.png" width="60px" height="60px" />
          <span style="color: black; font-weight: bold; font-size: 27.5px"
            >推广</span
          >
        </div>
        <div style="display: flex; margin-top: 25px">
          <el-skeleton
            animated
            v-for="item in ads"
            :key="item.id"
            :loading="loading"
            style="margin: 0 10px"
          >
            <template slot="template">
              <el-skeleton-item
                variant="image"
                style="width: 400px; height: 200px"
              />
              <div style="margin: 10px 0">
                <el-skeleton-item variant="p" style="width: 50%" />
              </div>
              <div><el-skeleton-item variant="p" style="width: 50%" /></div>
            </template>

            <template>
              <img
                style="
                  width: 400px;
                  height: 200px;
                  object-fit: cover;
                  border-radius: 10px;
                "
                :src="item.img"
              />
              <div style="margin: 0px 0">
                <span
                  ><b>{{ item.title }}</b></span
                >
              </div>
              <div>
                <span> {{ item.upName }} {{ item.time }} </span>
              </div>
            </template>
          </el-skeleton>
        </div>
      </div>
    </div>
    <el-dialog
      :visible.sync="isVideoPlay"
      width="810px"
      @close="closeVideo()"
      :show-close="false"
    >
      <div class="video-title">
        {{ curVideo.title }}
      </div>
      <div class="video-data">
        <img src="../assets/time.png" width="25px" height="25px" />
        {{ curVideo.time }}
        &nbsp;&nbsp;&nbsp;&nbsp;
        <img src="../assets/avatar.png" width="25px" height="25px" />
        {{ curVideo.upName }}
      </div>
      <div class="video-wrapper" style="width: 780px; height: 450px">
        <div
          class="danmu"
          style="width: 780px; height: 450px"
          @animationend="removeDanmu"
        >
          <div
            :class="'danmu-item ' + videoState"
            v-for="item in this.showingDanmus"
            :data-line="item.line"
            :key="item.id"
          >
            {{ item.content }}
          </div>
        </div>
        <video
          ref="video"
          :src="videoUrl"
          controls
          width="780px"
          @pause="pauseVideo"
          @play="continueVideo"
          @timeupdate="updateVideoTime"
        ></video>
      </div>
      <div style="display: flex">
        <el-input
          v-model="newDanmu"
          placeholder="发个弹幕见证当下"
          maxlength="10"
        ></el-input
        ><el-button @click="sendDamu">发送</el-button>
      </div>
      <div style="display: flex; align-items: center; margin: 15px 5px">
        <img src="../assets/comment.png" width="50px" height="50px" />
        <span style="color: black; font-weight: 400; font-size: 20px"
          >&nbsp;评论</span
        >
      </div>
      <div class="video-comments">
        <div class="video-comment" v-for="c in curVideo.comments" :key="c.name">
          <img :src="c.avatar" style="border-radius: 50%" />
          <div class="video-comment-content">
            <div style="font-size: 19px; color: #fb7299; font-weight: 600">
              {{ c.name }}
            </div>
            <div style="margin: 7.5px 0; font-size: 16px; color: black">
              {{ c.content }}
            </div>
            <div>{{ c.time }}</div>
          </div>
          <el-divider></el-divider>
        </div>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import axios from "axios";
const getUUID = () => Math.random() + Math.random();
export default {
  name: "BiliPage",
  mounted() {
    axios.get("/mock/video/8").then((res) => {
      this.videos = res.data.videos;
      window.setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
    axios.get("/mock/ads/4").then((res) => {
      this.ads = res.data.videos;
      window.setTimeout(() => {
        this.loading = false;
      }, 1000);
    });
  },
  data() {
    return {
      searchContent: "",
      channels: [
        "直播",
        "番剧",
        "电影",
        "国创",
        "电视剧",
        "综艺",
        "纪录片",
        "动画",
        "游戏",
        "鬼畜",
        "音乐",
        "舞蹈",
        "影视",
        "娱乐",
        "知识",
        "科技",
        "资讯",
        "美食",
        "生活",
        "汽车",
        "时尚",
        "运动",
        "动物圈",
        "课堂",
        "专栏",
        "活动中心",
        "小黑屋",
        "新歌热榜",
        "VLOG",
        "搞笑",
      ],
      loading: true,
      videos: [...Array(8).keys()].map((i) => {
        return { key: i };
      }),
      ads: [...Array(4).keys()].map((i) => {
        return { key: i };
      }),
      isVideoPlay: false,
      videoUrl: "",
      curVideo: {},
      waitingDanmus: [...Array(5).keys()].map((i) => {
        return {
          id: getUUID(),
          content: `我是弹幕机器人${i}号`,
          line: 0,
          time: i,
        };
      }),
      showingDanmus: [],
      lines: 5,
      currentLine: 1,
      danmuIntervalId: 0,
      newDanmu: "",
      videoState: "paused",
    };
  },
  methods: {
    enterAvatar() {
      console.log("enter avatar");
    },
    closeVideo() {
      this.curVideo = {};
      this.curVideo = { ...this.curVideo };
      this.videoUrl = "";
      clearInterval(this.danmuIntervalId);
      this.showingDanmus = [];
      this.waitingDanmus = [...Array(5).keys()].map((i) => {
        return {
          id: getUUID(),
          content: `我是弹幕机器人${i}号`,
          line: 0,
          time: i,
        };
      });
    },
    playVideo(video) {
      console.log(video);
      this.curVideo = Object.assign({}, this.curVideo, video);
      this.isVideoPlay = true;
      this.curVideo.videoUrl =
        this.videoUrl = require("../assets/video/never.mp4");
      console.log(this.curVideo);
      // this.danmuIntervalId = setInterval(this.showNextDanmu, 700);
    },
    // showNextDanmu() {
    //   if(this.videoState == 'paused'){
    //     return;
    //   }
    //   if (!this.waitingDanmus.length) {
    //     return;
    //   }
    //   console.log('show next danmu')
    //   this.currentLine = (this.currentLine % this.lines) + 1;
    //   const currentDanmu = this.waitingDanmus.shift();
    //   currentDanmu.line = this.currentLine;
    //   this.showingDanmus.push(currentDanmu);
    // },
    updateDanmu() {
      const curTime = this.$refs.video.currentTime;
      let danmuToAppend = this.waitingDanmus.filter((i) => {
        return  curTime >= i.time ;
      });
      this.waitingDanmus = this.waitingDanmus.filter((i) => {
        return  curTime < i.time ;
      });
      if (danmuToAppend.length === 0) {
        return;
      } else {
        console.log(danmuToAppend);
        this.showingDanmus = [...this.showingDanmus, ...danmuToAppend];
      }
    },
    sendDamu() {
      if (!this.newDanmu) {
        return;
      }
      const newDanmu = {
        id: getUUID(),
        content: this.newDanmu,
        line: 0,
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
      // const curTime = this.$refs.video.currentTime;
      // const duration = this.$refs.video.duration;
      // console.log(`curtime:${curTime},duration:${duration}`);
      this.updateDanmu();
    },
  },
};
</script>
<style scoped>
.el-row {
  display: flex;
  flex-wrap: wrap;
}
.banner {
  height: 15vh;
  min-height: 150px;
  width: 100%;
  background-image: url("../assets/Bilibg/bg3.jpg");
  overflow: hidden;
}
.banner .button-group {
  margin-top: 18px;
  margin-left: 24px;
}
.banner .avatar {
  margin-top: 13px;
  margin-left: 24px;
}
.banner .button-group .el-button--text {
  color: #f2f6fc;
  background: 0 0;
  font-weight: bold;
  padding: 10px;
}
@keyframes hoverbanner {
  50% {
    transform: translateY(-6.5px);
  }
  100% {
    transform: translateY(0);
  }
}
.banner .button-group .el-button:hover {
  /* transform: translateY(-10px); */
  animation: hoverbanner 0.25s ease-in-out;
}
.button-group {
  min-width: 400px;
}
.banner .el-input {
  margin-top: 18px;
  margin-left: 24px;
  width: 85%;
}

.live {
  display: flex;
}
.live .live-left {
  width: 300px;
}
.live .live-right {
  width: 300px;
}
.live-left-grid {
  display: grid;
  grid-template-columns: 60px 60px 60px;
  grid-template-rows: 90px 90px;
  grid-gap: 10px;
}
.live-left-grid-title {
  text-align: center;
}
.live-right {
  margin-left: 15px;
}
.pop-title {
  font-size: 20px;
  line-height: 28px;
  color: "#fffff";
  margin-bottom: 16px;
  font-weight: 400;
}
.channel,
.content {
  margin-top: 20px;
  padding: 0 64px;
  overflow: hidden;
  vertical-align: middle;
  display: flex;
}
.channel-icons {
  display: flex;
  padding: 20px;
  width: 15%;
  vertical-align: top;
  justify-content: space-between;
}
.channel-icons .el-badge {
  margin: 0 7.5px;
  /* width: 26%; */
}

.channel-items {
  display: inline-grid;
  width: 60%;
  grid-template-columns: repeat(15, 100px);
  grid-gap: 5px;
  grid-template-rows: repeat(2, 45px);
}
.carousel img {
  /* width: 100%; */
  height: 100%;
  object-fit: fill;
}
.channel-item {
  text-align: center;
  padding: 5px 5px;
  margin: 5px;
  background-color: #f6f7f8;
  color: rgb(129, 129, 129);
  border-radius: 5px;
  font-size: 14px;
  letter-spacing: 1.5px;
}
.content {
  height: 425px;
}
.recommend {
  margin: 0 25px;
  display: grid;
  /* grid-template-columns: repeat(auto-fit, 250px); */
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 225px);
  grid-gap: 0px 20px;
  grid-auto-flow: row dense;
}
.el-skeleton {
  display: flex;
  width: 100%;
}
.extension {
  margin-top: 45px;
  padding: 0 64px;
}
.video-title {
  font-weight: bold;
  font-size: 25px;
  color: black;
  font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei,
    sans-serif;
  font-weight: 500;
  margin-bottom: 10px;
}
.video-data {
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}
.video-comment-content {
  display: inline-block;
  margin-left: 15px;
}
.danmu {
  width: 780px;
  height: 450px;
  position: absolute;
  color: white;
  font-size: 20px;
  overflow: hidden;
}
.danmu-item {
  position: absolute;
  animation: rightToLeft 5s linear both;
  width: 300px;
  overflow: hidden;
  pointer-events: none;
  display: inline-block;
}
.danmu-item[data-line="1"] {
  top: 0;
}
.danmu-item[data-line="2"] {
  top: 75px;
}
.danmu-item[data-line="3"] {
  top: 150px;
}
.danmu-item[data-line="4"] {
  top: 225px;
}
.danmu-item[data-line="5"] {
  top: 300px;
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
</style>

<style>
.el-popper[x-placement^="bottom"] .popper__arrow {
  display: none !important;
}
.el-badge__content.is-fixed {
  left: 0;
}
.el-avatar {
  background: #fff !important;
  width: 50px !important;
  height: 50px !important;
}
.el-dialog__body {
  padding: 12.5px 14.5px !important;
}
.el-dialog__header {
  display: none;
}
.el-divider--horizontal {
  margin: 17px 0 !important;
}
</style>
