<template>
<!-- style="width: 50vw; height: 95vh" -->
  <ScreenAdapter :width="'1000'" :height="'1000'">
    <div id="globe" style="width:100%;height:100%"></div>
  </ScreenAdapter>
</template>
<script>
// import echarts from "echarts"
// import * from "echarts-gl"
import ScreenAdapter from "./ScreenAdapter.vue";
export default {
  name: "Earth",
  components:{ScreenAdapter},
  data() {
    return {
      domName: 0,
    };
  },
  mounted() {
    this.initChart();
  },
  methods: {
    initChart() {
      const echarts = require("echarts/lib/echarts");
      require("echarts-gl");
      const chartDom = document.getElementById("globe");
      //   const chartDom = this.$ref.globel;
      const myChart = echarts.init(chartDom);
      myChart.setOption({
        backgroundColor: "rgba(0,0,0,0)",
        globe: {
          baseTexture: require("../assets/globe.webp"), //地球的纹理。支持图片路径的字符串，图片或者 Canvas 的对象
          //   heightTexture: "../assets/globel.webp", //地球的高度纹理
          shading: "lambert", //地球中三维图形的着色效果
          light: {
            main: {
              main: {
                color: "red", // 光照颜色
                intensity: 1.2, // 光照强度
                shadowQuality: "ultra", //阴影亮度
                shadow: true, // 是否显示阴影
                alpha: 40,
                beta: -30,
              },
              ambient: {
                intensity: 4.6,
              },
            },
          },
          viewControl: {
            alpha: 30,
            beta: 160,
            //			            targetCoord: [116.46, 39.92],
            autoRotate: true,
            autoRotateAfterStill: 10,
            distance: 240,
            autoRotateSpeed: 4,
          },
          postEffect: {
            //为画面添加高光，景深，环境光遮蔽（SSAO），调色等效果
            enable: true, //是否开启
            SSAO: {
              //环境光遮蔽
              radius: 0.5, //环境光遮蔽的采样半径。半径越大效果越自然
              intensity: 0.5, //环境光遮蔽的强度
              enable: true,
            },
          },
          atmosphere: {
            show: true,
            offset: 0.1,
            color: "rgba(255,255,255,0.2)",
            glowPower: 1,
            innerGlowPower: 2.5,
          },
        },
        series: {
          type: "lines3D",
          coordinateSystem: "globe",
          blendMode: "source-over",
          effect: {
            show: true,
          },
          lineStyle: {
            width: 1,
            color: "rgb(255, 255,255)",
            opacity: 1,
            trailWidth: 4,
            trailLength: 0.01,
          }, //3D飞线图
          data: [
            [
              [112, 40, 2], // 终点的经纬度和海拔坐标
              [120, 20, 1], // 起点的经纬度和海拔坐标
            ],
            [
              [112, 40, 2],
              [20, -40, 1],
            ],
            [
              [112, 40, 2],
              [40, 0, 1],
            ],
            [
              [112, 40, 2],
              [-20, 20, 1],
            ],
            [
              [112, 40, 2],
              [-39, -40, 1],
            ],
            [
              [112, 40, 2],
              [67, 43, 1],
            ],
            [
              [112, 40, 2],
              [160, -18, 1],
            ],
            [
              [112, 40, 2],
              [145, 66, 1],
            ],
            [
              [112, 40, 2],
              [1790, 42, 1],
            ],
          ],
        },
      });
    },
  },
};
</script>