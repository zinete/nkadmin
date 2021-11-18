<template>
  <div class="dashboard_page">
    <div class="dashboard">
      <div v-for="item in info" :key="item.id" class="box_info">
        <div class="box_info_cu">
          <i :class="item.icon" :style="{ color: item.color }"></i>
          <div class="box_info_sum">
            <h2>{{ item.title }}</h2>
            <span>{{ item.num }}</span>
          </div>
        </div>
      </div>
    </div>
    <div class="more_info">
      <div class="left" id="chartInit"></div>
      <div class="right">231231</div>
    </div>
  </div>
</template>

<script>
import chartOption from "../../utils/chartOption";
export default {
  name: "Dashboard",

  data() {
    return {
      info: [
        {
          title: "节点数量",
          num: 23131,
          icon: "el-icon-notebook-1",
          color: "#fe2313",
        },
        {
          title: "文件数量",
          num: 32,
          icon: "el-icon-toilet-paper",
          color: "#e231e1",
        },
        {
          title: "文件大小",
          num: 2231,
          icon: "el-icon-files",
          color: "#a23d23",
        },
        {
          title: "传输速度",
          num: "10m/s",
          icon: "el-icon-chicken",
          color: "#dde222",
        },
      ],
    };
  },
  mounted() {
    this.propertyChartInit();
  },
  methods: {
    propertyChartInit() {
      try {
        let chartOptions = new chartOption({
          chartData: [],
          title: "test",
          name: "name",
          chartThemeBg: "#AC81FB",
          series: [
            {
              name: "测试1",
              type: "line",
              symbol: "circle",
              sampling: "lttb",
              itemStyle: {
                color: "#ffae00",
              },
              areaStyle: {
                opacity: 0.4,
              },
              data: [
                226, 137, 128, 139, 120, 111, 212, 213, 214, 15, 14, 123, 12,
                12, 11, 13, 14, 22, 44, 11, 142, 122, 34,
              ],
              smooth: true,
            },
            {
              name: "测试2",
              type: "line",
              symbol: "circle",
              sampling: "lttb",
              itemStyle: {
                color: "#AC81FB",
              },
              areaStyle: {
                opacity: 0.4,
              },
              data: [
                122, 133, 124, 222, 344, 12, 23, 23, 14, 25, 63, 472, 228, 229,
                410, 114, 132, 133, 214, 215, 14, 123, 12, 123, 12, 111, 42,
                421, 34,
              ],
              smooth: true,
            },
            {
              name: "测试3",
              type: "line",
              symbol: "circle",
              sampling: "lttb",
              itemStyle: {
                color: "#ede232",
              },
              areaStyle: {
                opacity: 0.4,
              },
              data: [
                121, 132, 132, 142, 125, 134, 123, 12, 123, 12, 11, 13, 14, 22,
                44, 11, 42, 12, 23, 23, 234, 25, 36, 237, 28, 39, 20, 424,
              ],
              smooth: true,
            },
          ],
        });
        let propertyChartInit = window.echarts.init(
          document.getElementById("chartInit")
        );
        propertyChartInit.setOption(chartOptions.options);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.dashboard_page {
  position: relative;
  padding: 20px;
}
.dashboard {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;

  .box_info {
    width: 24%;
    height: 140px;
    padding: 32px;
    margin-bottom: 20px;
    align-items: center;
    display: flex;
    background: #fff;
    color: #000;
  }
  .box_info:hover {
    box-shadow: 0px 2px 12px 2px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
  }
  .box_info_cu {
    display: flex;
    flex-direction: row;
    align-items: center;
    i {
      font-size: 42px;
      margin-right: 20px;
      color: #07a76ae8;
    }
  }
  .box_info_sum {
    display: flex;
    flex-direction: column;
    h2 {
      font-size: 18px;
      color: #666;
      line-height: 0;
    }

    span {
      font-size: 20px;
      margin-top: 4px;
      font-weight: 500;
      color: rgba(105, 100, 100, 0.568);
    }
  }
}
.more_info {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 400px;

  .left {
    flex: 3;
    height: 100%;
    background-color: #fff;
    margin-right: 24px;
  }
  .right {
    flex: 1;
    background-color: #fff;

    height: 100%;
  }
}
</style>
