<template>
  <div id="globe" style="width: 50vw; height: 95vh"></div>
</template>
<script>
// import echarts from "echarts"
// import * from "echarts-gl"
export default {
  name: "Earth",
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
            ambient: {
              intensity: 0.8, //环境光源强度
            }, //环境光
            main: {
              intensity: 0.8, //光源强度
            }, //主光源
          }, //光照设置
          atmosphere: {
            show: true,
            offset: 0.5,
            color: "rgba(255,255,255,0.2)",
            glowPower: 3,
            innerGlowPower: 1.5,
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