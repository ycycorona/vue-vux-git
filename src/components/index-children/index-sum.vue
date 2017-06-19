<template>
  <div class="index-sum">
    <div class="date-wrap">
      <div style="text-indent:2em;font-size: 15px;">今天是<span id="date-show">2017/06/06</span>，离月最大飞行时间<span id="month-max-time">[100:00]</span>
        还差<span id="month-need-time">[92:39]</span>,当月飞行时间<span id="month-fly-time">[7:21]</span></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'indexSum',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.date-wrap{
  padding: 0.2rem 0.5rem;
  margin-top: 0.5em;
  line-height: 1.6;
}
.date-wrap span{
  background-color: rgb(73, 184, 234);
  padding: 0.1rem 0.2rem;
  border-radius: 5px;
  color: white;

}
</style>
