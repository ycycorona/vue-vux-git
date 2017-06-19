<template>
  <div id="index-layout">
    <!--当前日期以及飞行时间-->
    <indexSum></indexSum>
    <indexCardWrap cardWrapTitle="飞行计划" :cardWrapID="flightPlanID">
      <x-icon  slot="icon" type="plane" size="20" style="fill:#fff;position:relative;top: 3px"></x-icon>
    </indexCardWrap>
    <indexCardWrap cardWrapTitle="随机">
      <x-icon  slot="icon" type="plane" size="20" style="fill:#fff;position:relative;top: 3px"></x-icon>
    </indexCardWrap>
    <indexCardWrap cardWrapTitle="其他计划">
      <x-icon  slot="icon" type="document" size="20" style="fill:#fff;position:relative;top: 3px"></x-icon>
    </indexCardWrap>
    <indexCardWrap cardWrapTitle="当班经理" :cardWrapID="dutyManagerID">
      <x-icon  slot="icon" type="person" size="20" style="fill:#fff;position:relative;top: 3px"></x-icon>
    </indexCardWrap>
    <indexCardWrap cardWrapTitle="值班电话" :cardWrapID="dutyCallID">
      <x-icon  slot="icon" type="person" size="20" style="fill:#fff;position:relative;top: 3px"></x-icon>
    </indexCardWrap>
    <indexCardWrap cardWrapTitle="通知公告">
      <x-icon  slot="icon" type="chatbox-working" size="20" style="fill:#fff;position:relative;top: 3px"></x-icon>
    </indexCardWrap>
  </div>
</template>

<script>
  import indexSum from "./index-sum"
  import indexCardWrap from "./index-card-wrap"
  export default {
    name: 'flight-plan',
    components:{
      indexSum,
      indexCardWrap
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        flightPlanID:0,
        dutyManagerID:3,
        dutyCallID:4
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
@import '../../style/index.css';
</style>
