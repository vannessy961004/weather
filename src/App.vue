<template>
  <div id="app">
    <Header></Header>
    <Detail></Detail>
		<div class="chart"><line-chart class="linec"></line-chart></div>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import Detail from "./components/Detail.vue"
import LineChart from "./components/LineChart.vue"

export default {
  name: 'App',
  components: {
    Header,
    Detail,
    LineChart
  },
}
</script>

<style>
  @import url("./assets/css/normalize.css");
  body {
    background-color: #333;
    height: 100vh;
  }

  .chart .linec #main {
    /* margin: 0 auto; */
    left: 50%;
    transform: translateX(-50%);
  }
</style>
