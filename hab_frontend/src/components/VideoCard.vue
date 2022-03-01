<template>
  <div>
    <van-image :src="video.img" @click="goToVideo(video)" />
    <div class="video-card-info">
      <div class="video-card-title">{{ video.title }}</div>
      <div class="video-card-upName">
        <van-icon name="manager-o" />{{ video.upName }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "VideoCard",
  props: {
    video: {
      type: Object,
    },
  },
  methods:{
    goToVideo(video){
      this.$router.push({path:'/biliapp/video'})
      this.$store.commit('updateCurVideo',video)
    }
  }
};
</script>
<style scoped>
.video-card-title {
  width: 100%;
  text-align: left;
}
.video-card-upName {
  width: 100%;
  text-align: left;
  font-size: 0.85em;
  margin-top: 2.5px;
  color: rgb(90, 91, 92);
}
.video-card-info {
  width: 100%;
  text-align: left;
  padding: 7.5px;
}
</style>