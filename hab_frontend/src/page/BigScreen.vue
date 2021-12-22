<template>
  <div id="bigscreen">
    <el-container>
      <el-header>
        <dv-decoration-11 class="header-title"
          >Situation screen</dv-decoration-11
        >
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="6">
            <div class="chart-container">
              <dv-border-box-11 title="Keyword distribution">
                <dv-capsule-chart :config="keyConfig" class="bar-chart" />
              </dv-border-box-11>
            </div>
            <div class="chart-container">
              <dv-border-box-9>
                <div class="chart-title">
                  <dv-decoration-7>Partition</dv-decoration-7>
                </div>
                <dv-active-ring-chart
                  :config="getConfigData()"
                  class="ring-chart"
                />
                <dv-active-ring-chart
                  :config="getConfigData()"
                  class="ring-chart"
                /><dv-active-ring-chart
                  :config="getConfigData()"
                  class="ring-chart"
                />
              </dv-border-box-9>
            </div>
            <div class="chart-container">
              <dv-border-box-8>
                <dv-conical-column-chart :config="conicalConfig"
              /></dv-border-box-8>
            </div>
          </el-col>
          <el-col :span="12"><Earth></Earth></el-col>
          <el-col :span="6">
            <dv-border-box-1
              ><dv-border-box-8>
                <dv-scroll-board class="scroll-chart" :config="scrollConfig" />
              </dv-border-box-8>
            </dv-border-box-1>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
// import chart from "../components/chart.vue";
// import * as echarts from "echarts";
import Earth from "../components/Earth.vue";
export default {
  name: "App",
  components: { Earth },
  component: Earth,
  data() {
    return {
      keyConfig: {
        data: [
          {
            name: "Food",
            value: 167,
          },
          {
            name: "Life",
            value: 67,
          },
          {
            name: "Comic",
            value: 123,
          },
          {
            name: "Knowledge",
            value: 55,
          },
          {
            name: "Video",
            value: 98,
          },
        ],
      },
      partitionConfig: {
        data: [
          {
            name: "Life",
            value: 55,
          },
          {
            name: "Comic",
            value: 120,
          },
          {
            name: "Dance",
            value: 78,
          },
          {
            name: "Video",
            value: 66,
          },
        ],
        color: [
          "rgba(184,241,237,0.9)",
          "rgba(184,241,204,0.9)",
          "rgba(0,206,209,0.9)",
          "rgba(135,206,250,0.9)",
        ],
        lineWidth: 10,
      },
      randomKeys: [
        "Music",
        "Movies",
        "Live",
        "Gaming",
        "Sports",
        "Fashion",
        "Comic",
        "Study",
      ],
      scrollConfig: {
        header: ["Video Name", "Time", "Views"],
        carousel: "page",
        data: [
          [
            "【python】4hours beginner tutorial",
            "Mar 6, 2021",
            "581,905 views",
          ],
          ["Peaceful Piano Music", "Sep 20, 2019", "1,838,630 views"],
          ["jazz/lofi hip hop radio", " Nov 27, 2021", "1,121 watching now"],
          ["Huaqiang Mai Gua", " Nov 22, 2021", "85,005 views"],
          ["Chill Drive - Lofi hip hop mix", "Nov 5, 2021", "1,119,063 views"],
          ["Work & Study Lofi Jazz", "Aug 9, 2020", "5,863,282 views"],
          ["jazz/lofi hip hop radio", " Nov 27, 2021", "1,121 watching now"],
          ["Huaqiang Mai Gua", " Nov 22, 2021", "85,005 views"],
          ["AoteMan radio", " Nov 1, 2020", "123,121 watching now"],
          ["Kai Xin Chaoren", " Aug 22, 2018", "185,005 views"],
          ["Work & Study Lofi Jazz", "Aug 9, 2020", "5,863,282 views"],
          ["AA & BB Lofi Jazz", "Aug 19, 2020", "59,861,282 views"],
        ],
      },
      conicalConfig: {
        data: [
          {
            name: "Music",
            value: 55,
          },
          {
            name: "Gaming",
            value: 120,
          },
          {
            name: "Fashion",
            value: 71,
          },
          {
            name: "Movie",
            value: 66,
          },
          {
            name: "Sports",
            value: 80,
          },
          {
            name: "Car",
            value: 35,
          },
          {
            name: "Beauty",
            value: 15,
          },
        ],
        img:[]
      },
    };
  },
  methods: {
    getRandom: (max = 10, min = 150) =>
      parseInt(Math.random() * (max - min + 1) + min, 10),
    getConfigData() {
      let config = {
        data: this.getRandomFromArr(this.randomKeys, this.getRandom(4, 8)).map(
          (key) => {
            return { name: key, value: this.getRandom() };
          }
        ),
        // color: [
        //   "rgba(184,241,237,0.9)",
        //   "rgba(184,241,204,0.9)",
        //   "rgba(0,206,209,0.9)",
        //   "rgba(135,206,250,0.9)",
        // ],
        lineWidth: 10,
        showOriginValue: true,
      };
      this.partitionConfig = config;
      return config;
    },
    getRandomFromArr(arr = [null], count = 1) {
      let result = [];
      let len = arr.length;
      [...Array(count).keys()].forEach((i) => {
        let idx = ~~(Math.random() * len) + i;
        result[i] = arr[idx];
        arr[idx] = arr[i];
        len--;
      });
      return result;
    },
  },
};
</script>

<style>
.el-main {
  overflow: hidden !important;
}
.el-container {
  height: 100vh;
  overflow: hidden;
}
.border-box-content {
  overflow: hidden;
}
.el-row {
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
}
#bigscreen {
  background-image: url("../assets/background.jpg");
}

.dv-border-box-11 {
  overflow: hidden;
}
.bar-chart {
  margin: 7.5vh auto auto auto;
  width: 75%;
}
.ring-chart {
  height: 85%;
  width: 33%;
  display: inline-block;
}
.ring-chart .active-ring-info {
  transform: scale(0.65);
}
.dv-border-box-9 {
  padding-top: 5%;
}
.dv-border-box-11-title {
  text-shadow: 0 0 5px #479bfc, 0 0 5px #479bfc;
  font-size: 1em;
}
.dv-border-box-11-title[fill] {
  fill: #479bfc;
}
.chart-container {
  height: 25vh;
  margin-bottom: 5vh;
  text-align: center;
}
.header-title {
  color: rgb(66, 202, 226, 0.8);
  font-weight: bold;
  margin: 0 auto;
  font-size: 1.5em;
  font-family: Tahoma;
  letter-spacing: 2px;
}
.chart-title {
  width: 100%;
  /* height: 30px;  */
  color: rgba(55, 174, 243, 0.8);
  margin: 0 auto;
  font-weight: bold;
  font-size: 1.25em;
  letter-spacing: 0.05em;
}
</style>
