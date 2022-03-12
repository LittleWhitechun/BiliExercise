<template>
  <div class="video">
    <div class="video-img" @click="goToVideo(video)">
      <img :src="videoData.img" />
    </div>
    <div class="video-info">
      <div class="video-info-title">
        {{ videoData.title }}
      </div>
      <div class="video-info-label">
        <span>
          {{ videoData.label }}
        </span>
      </div>
      <div class="video-info-upname">
        <van-icon name="manager-o" />{{ videoData.upName }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VideoCardRow",
  props: {
    video: {
      type: Object,
    },
  },
  data() {
    return {
      videoData: this.video,
    };
  },
  methods: {
    goToVideo(video) {
      // console.log(this.$route.path);
      if (this.$route.path != "/biliapp/video") {
        // 同一个页面更新
        this.$router.push({ path: "/biliapp/video" });
      }
      this.$store.commit("updateCurVideo", video);
    },
  },
};
</script>
<style scoped>
.video {
  display: flex;
  width: 100%;
  padding: 1% 2.5%;
}
.video-img {
  width: 45%;
  /* overflow: hidden; */
}
.video-img img {
  width: 100%;
  height: 100%;
  border-radius: 4.5%;
}
.video-info {
  margin-left: 1%;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
}
.video-info-title {
  font-size: 1em;
}
.video-info-label span {
  color: #e1622f;
  padding: 0.3em;
  border-color: #e1622f;
  background-color: #f1ccb8;
}
.video-info-upname {
  color: rgba(0, 0, 0, 0.7);
}
</style>