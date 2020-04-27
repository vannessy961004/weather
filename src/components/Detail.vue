<template>
  <div class="detail">
    <div class="name">{{wea.name}}</div>
    <div class="wea">{{wea.wea}}</div>
    <div class="now">{{wea.nowTem}}</div>
    <div class="air">
      <span>风力:{{wea.speed}}</span>
      <span>风向:{{wea.win}}</span>
      <span>空气湿度:{{wea.air}}%</span>
    </div>
    <div class="next">
      <div class="tomorrow">
        <span>明日:</span>
        <more :moreWea="tomorrow"></more>
      </div>
      <div class="aftertom">
        <span>后天:</span>
        <more :moreWea="atomorrow"></more>
      </div>
    </div>
  </div>
</template>

<script>
  import {getWeather, TodayWea, OtherWea} from "../network/weather.js"

  import More from "./More.vue"

  export default {
    name: "Detail",
    data() {
      return {
        wea:{},
        tomorrow:{},
        atomorrow:{}
      }
    },
    components:{
      More
    },
    created() {
      getWeather("佛山").then(res => {
        this.wea = new TodayWea(res)
        this.tomorrow = new OtherWea(res.data[1])
        this.atomorrow = new OtherWea(res.data[2])
        console.log(this.wea)
        console.log(res)
      })
    }
  }
</script>

<style scoped>
  .name {
    font-size: 19px;
    text-align: center;
    margin-top: 10px;
    margin-bottom: 8px;
    color: #fff;
  }

  .wea {
    width: 100%;
    text-align: center;
    font-size: 19px;
    color: #fff;
  }

  .now {
    margin-top: 10px;
    margin-bottom: 20px;
    text-align: center;
    font-size: 40px;
    color: #fff;
    font-weight: bold;
  }

  .air {
    color: #fff;
    text-align: center;
  }

  .air span {
    padding: 0 5px;
    border-right: 2px solid white;
  }

  .air span:last-child {
    border: none;
  }

  .next {
   margin-top: 40px;
  }

  .tomorrow, .aftertom {
    width: 360px;
    margin: 0 auto;
    height: 50px;
    line-height: 50px;
    background-color: #686868;
    border-radius: 5px;
    display: flex;
  }

  .tomorrow span, .aftertom span {
    width: 40px;
    font-size: 16px;
    margin-left: 5px;
    margin-right: 8px;
  }

  .aftertom {
    margin-top: 10px;
  }
</style>
