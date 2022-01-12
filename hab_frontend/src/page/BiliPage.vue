<template>
  <!-- TODO:懒加载；页面骨架 -->
  <div>
    <div class="banner">
      <el-row type="flex" justify="center">
        <el-col :span="6">
          <div class="button-group">
            <el-button type="text">首页</el-button>
            <el-button type="text">番剧</el-button>
            <el-button type="text">直播</el-button>
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
        <el-col :span="6"
          ><div class="button-group">
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
          <el-avatar
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          ></el-avatar>
        </el-badge>
        <el-badge value="99+">
          <el-avatar :src="require('../assets/hot.png')"></el-avatar>
        </el-badge>
        <el-badge value="2">
          <el-avatar :src="require('../assets/cat1.png')"></el-avatar>
        </el-badge>
      </div>
      <div class="channel-items">
        <span v-for="channel in channels" :key="channel" class="channel-item">{{
          channel
        }}</span>
      </div>
    </div>
    <div class="content">
      <el-row type="flex" justify="start">
        <el-col :span="8">
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
        <el-col :span="16">
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
                  style="width: 250px; height: 150px"
                />
                <div style="margin: 10px 0">
                  <el-skeleton-item variant="p" style="width: 50%" />
                </div>
                <div><el-skeleton-item variant="p" style="width: 50%" /></div>
              </template>

              <template>
                <img
                  style="width: 100%; height: 150px; object-fit: cover;border-radius:10px"
                  :src="item.img"
                />
                <div style="margin: 0px 0">
                  <span><b>{{ item.title }}</b></span>
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
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "BiliPage",
  mounted() {
    axios.get("/mock/video/8").then((res) => {
      this.videos = res.data.videos;
      window.setTimeout(() => {
        this.loading = false;
      }, 1000);
      console.log(res.data);
      console.log(this.videos);
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
    };
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
.banner .button-group .el-button--text {
  color: #f2f6fc;
  background: 0 0;
  font-weight: bold;
  padding: 10px;
}
.button-group {
  min-width: 400px;
}
.banner .el-input {
  margin-top: 18px;
  margin-left: 24px;
  width: 85%;
}
.channel,
.content {
  margin-top: 20px;
  padding: 0 64px;
  overflow: hidden;
  vertical-align: middle;
}
.channel-icons {
  display: inline-block;
  padding: 20px;
  width: 15%;
  vertical-align: top;
}
.channel-icons .el-badge {
  margin: 0 20px;
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
</style>
