/**
 * @ Author: zhenghui
 * @ Create Time: 2021-09-16 12:02:13
 * @ Modified by: zhenghui
 * @ Modified time: 2021-11-18 17:39:29
 * @ Description:
 */

class chartOptions {
  constructor(props) {
    this.title = props.title;
    this.series = props.series || [];
    this.name = props.name || "";
    this.chartData = props.chartData || [];
    this.chartTheme = props.chartTheme || "#2C0770";
    (this.chartThemeBg = props.chartThemeBg || "rgba(172, 129, 251, 1)"),
      (this.options = {
        title: {
          left: 14,
          top: 10,
          text: this.title.value,
          subtext: `${chartOptions.getWeek()} ${new Date().getDate()}，${new Date().getFullYear()}`,
          subtextStyle: {
            color: "#9690A0",
            fontSize: 16,
          },
          textStyle: {
            //设置主标题风格
            fontSize: 16,
            fontWeight: 500,
            color: "#2C0770", //设置主标题字体颜色
          },
        },
        xAxis: {
          type: "category",
          axisTick: {
            alignWithLabel: true,
          },
          data: [
            1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
            20, 21, 22, 23, 24,
          ],
          axisLabel: {
            textStyle: {
              color: "#000",
            },
          },
        },

        yAxis: [
          {
            type: "value",
            splitLine: {
              // 横线
              show: false,
              lineStyle: {
                color: [this.chartTheme],
                width: 2,
                type: "dashed",
              },
            },
            axisLabel: {
              show: true,
              textStyle: {
                color: "#000",
              },
            },
          },
        ],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },

        grid: {
          top: 88,
          bottom: 32,
          left: 44,
          right: 32,
        },
        series: this.series,
      });
  }

  static getWeek() {
    let day = new Date().getDay();
    let b = "";
    switch (day) {
      case 0:
        b = "Sun";
        break;
      case 1:
        b = "Mon";
        break;
      case 2:
        b = "Tue";
        break;
      case 3:
        b = "Wed";
        break;
      case 4:
        b = "Thu";
        break;
      case 5:
        b = "Fri";
        break;
      default:
        b = "Sat";
    }
    return b;
  }
}

export default chartOptions;
