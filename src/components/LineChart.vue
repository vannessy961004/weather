<template>
  <div class="chart">
    <div id="main"></div>
  </div>
</template>

<script>
  import {getWeather} from "../network/weather.js"
  import echarts from "echarts"

  export default {
    name: "LineChart",
    data() {
      return {
        maxTem:[],
        minTem:[],
        week:[],
        wTem:[],
      }
    },
    mounted() {
      var myChart = echarts.init(document.getElementById('main'));
      getWeather("佛山").then(res => {
        this.wTem = res.data;
        this.getMaxTem(this.wTem,this.maxTem);
        this.getMinTem(this.wTem,this.minTem);
        this.getWeek(this.wTem,this.week)
        myChart.setOption({
          tooltip: {
            trigger: 'axis',
          },
          grid: {
            containLabel: true,
            left:'2%',
            right:'5%'
          },
          xAxis: {
            type:'category',
            boundaryGap: false,
            data: this.week,
            axisLine:{
              lineStyle:{color:"#fff"}
            }
          },
          yAxis: {
            type: 'value',
            axisLine:{
              lineStyle:{color:"#fff"}
            }
          },
          axisPoint: {
            label:"show"
          },
          series: [
            {
              name: '最高温度',
              type: 'line',
              data: this.maxTem,
              itemStyle : {
                normal: {
                  label : {show: true},
                }
              }
            },
            {
              name: '最低温度',
              type: 'line',
              data: this.minTem,
              itemStyle : {
                normal: {
                  label : {show: true},
                  color:"#0000ff",
                  lineStyle: {
                    color: '#0000ff' //改变折线颜色
                  }
                }
              }
            },
          ]
        });
      })
     },
    methods: {
      getMaxTem(data, arr) {
        for (let i in data) {
          arr.push(data[i].tem1.slice(0,2))
        }
      },
      getMinTem(data, arr) {
        for (let i in data) {
          arr.push(data[i].tem2.slice(0,2))
        }
      },
      getWeek(data, arr) {
        for (let i in data) {
          arr.push(data[i].week)
        }
      },
    }
   }
</script>

<style scoped>
  #main {
    width: 350px;
    height: 400px;
  }
</style>
