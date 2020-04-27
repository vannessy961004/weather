<template>
  <div class="header">
    <div class="date">
      {{date | formatDate}}
    </div>
    <div class="change">
      <span>切换城市</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Header",
    data() {
      return {
        date: new Date(),
        timer:''
      }
    },
    filters:{
      formatDate(value) {
        let y = value.getFullYear();
        let M = value.getMonth() + 1;
        M = M < 10 ? ("0" + M) : M;
        let d = value.getDate();
        d = d < 10 ? ("0" + d) : d;
        let h = value.getHours();
        h = h < 10 ? ("0" + h) : h;
        let m = value.getMinutes();
        m = m < 10 ? ("0" + m) : m;
        let s = value.getSeconds();
        s = s < 10 ? ("0" + s) : s;
        return y + '-' + M + '-' + d + ' ' + h + ':' + m + ':' + s;
      }
    },
    methods: {
      getTime() {
        this.date = new Date()
      }
    },
    created() {
      this.timer = setInterval(() => {
        this.getTime()
      },1000)
    },
    beforeDestroy() {
      if(this.timer) {
        clearInterval(this.timer);
      }
    }
  }
</script>

<style scoped>
  .header {
    position: relative;
    color: #FFFFFF;
    height: 40px;
    line-height: 40px;
    font-size: 18px;
  }

  .change {
    height: 30px;
    position: absolute;
    right: 0;
    top: 0;
  }
</style>
