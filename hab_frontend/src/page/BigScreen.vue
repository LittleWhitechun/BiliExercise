<template>
  <div id="bigscreen" >
    <el-container>
      <el-header>
        <dv-decoration-11 class="header-title"
          >Bili Situation screen</dv-decoration-11
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
                <dv-conical-column-chart
                  class="conical-chart"
                  :config="conicalConfig"
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
  name: "BigScreen",
  components: { Earth },
  component: Earth,
  data() {
    return {
      keyConfig: {
        data: [
          {
            name: "美食",
            value: 167,
          },
          {
            name: "生活",
            value: 67,
          },
          {
            name: "动漫",
            value: 123,
          },
          {
            name: "知识",
            value: 55,
          },
          {
            name: "影视",
            value: 98,
          },
        ],
      },
      partitionConfig: {
        data: [
          {
            name: "生活",
            value: 55,
          },
          {
            name: "动漫",
            value: 120,
          },
          {
            name: "舞蹈",
            value: 78,
          },
          {
            name: "影视",
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
        "音乐",
        "影视",
        "生活",
        "游戏",
        "运动",
        "时尚",
        "动漫",
        "学习",
      ],
      scrollConfig: {
        header: ["视频", "时间", "播放了"],
        carousel: "page",
        rowNum: 8,
        data: [
          [
            "【猛男版】Phut Hon 大摆锤不是只有妹子能跳！",
            "Mar 6, 2021",
            "581,905 views",
          ],
          [
            "这个【腐乳肉】配方，是我给师傅打了几年饭洗了几年袜子才学来的",
            "Sep 20, 2019",
            "1,838,630 views",
          ],
          [
            "谁说我女朋友像树懒的！请站出来！我给你…..",
            " Nov 27, 2021",
            "1,121 watching now",
          ],
          ["【全明星】纸 团 战 争", " Nov 22, 2021", "85,005 views"],
          [
            "【LNG】LNG俱乐部2022宣传片：麒麟云中现",
            "Nov 5, 2021",
            "1,119,063 views",
          ],
          ["印度餐晚饭闲聊。", "Aug 9, 2020", "5,863,282 views"],
          [
            "988元一只，米其林级别的烤乳猪，没想到还挺好吃，胖猪头每天都想要【凭啥这么贵ep35-Estado Puro】",
            " Nov 27, 2021",
            "1,121 watching now",
          ],
          ["想刀一个人的眼神是藏不住的！", " Nov 22, 2021", "85,005 views"],
          [
            "⚡姐姐你啊，实在是太弱了！⚡",
            " Nov 1, 2020",
            "123,121 watching now",
          ],
          [
            "『新-恶意别车』连载1 不爽被我超一路较劲 被我记录一串违章",
            " Aug 22, 2018",
            "185,005 views",
          ],
          [
            "【全程高燃】舞蹈up的期末答卷 ！剑袖扇伞大集合！【九州同】",
            "Aug 9, 2020",
            "5,863,282 views",
          ],
          [
            "阿姨你好，你的女儿我抓到了，任务完成了",
            "Aug 19, 2020",
            "59,861,282 views",
          ],
        ],
      },
      conicalConfig: {
        data: [
          {
            name: "音乐",
            value: 55,
          },
          {
            name: "游戏",
            value: 102,
          },
          {
            name: "时尚",
            value: 71,
          },
          {
            name: "影视",
            value: 66,
          },
          {
            name: "运动",
            value: 80,
          },
        ],
        img: [
          require("../assets/cat1.png"),
          require("../assets/cat2.png"),
          require("../assets/cat3.png"),
          require("../assets/cat4.png"),
          require("../assets/cat5.png"),
        ],
      },
      width: "1800",
      height: "1000",
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
  /* transform: scale(0.5); */
  /* position: absolute;
  left: 50%;
  height: 50%;
  transition: 0.3s;
  transform-origin: 0 0; */
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
.conical-chart {
  height: 85% !important;
  margin: 5% 0;
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
