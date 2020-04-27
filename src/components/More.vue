<template>
  <div class="more">
    <span>气温:{{moreWea.minTem}}~{{moreWea.maxTem}}</span>
    <span>{{moreWea.wea}}</span>
    <span>风力:{{moreWea.speed}}</span>
    <span>{{moreWea.win}}</span>
  </div>
</template>

<script>
  export default {
    name: "More",
    props:{
      moreWea: {
        type:Object,
        default() {
          return {}
        }
      }
    }
  }
</script>

<style scoped>
  .more {
    color: #fff;
    text-align: center;
    font-size: 14px;
  }
</style>
