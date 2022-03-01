<template>
  <div style="overflow:hidden">
    <div v-for="video in videos" :key="video.id">
      <VideoCardRow :video="video"></VideoCardRow>
      <div class="my-split-line"></div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import VideoCardRow from "../../components/VideoCardRow.vue";
// import Line from "../../components/Line.vue"
export default {
  name: "Hot",
  data() {
    return {
      videos: [],
    };
  },
  components: { VideoCardRow, },
  mounted() {
    axios.get("/mock/hot").then((res) => {
      this.videos = res.data.videos;
      console.log(res);
    });
  },
};
</script>