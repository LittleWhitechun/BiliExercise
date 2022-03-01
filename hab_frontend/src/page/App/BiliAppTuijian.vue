<template>
  <div class="tuijian">
    <van-grid :border="false" :column-num="2" :gutter="10">
      <van-grid-item class="video-card" v-for="video in videos" :key="video.id">
          <VideoCard :video="video"></VideoCard>
      </van-grid-item>
    </van-grid>
  </div>
</template>
<script>
import axios from "axios";
import VideoCard from "../../components/VideoCard.vue"
export default {
  name: "BiliAppTuijian",
  components:{VideoCard},
  data() {
    return {
      videos: [],
    };
  },
  mounted() {
    axios.get("/mock/video/bili/12").then((res) => {
      console.log(res);
      this.videos = res.data.videos;
    });
  },
};
</script>
<style scoped>
.tuijian {
  background-color: rgb(250, 250, 250);
}
.tuijian >>> .van-grid-item__content {
  padding: 0;
  border-radius: 5px;
  overflow: hidden;
}

</style>
