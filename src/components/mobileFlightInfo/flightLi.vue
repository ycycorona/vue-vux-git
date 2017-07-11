<template>
  <li class="flight-item " style="display: block">
    <!-- 航班在当前页面中的显示序号 -->
    <div style="position:absolute;font-size: 12px;line-height: 1;" class="list-index"></div>
    <div class="flex-wrap main-card" style="padding: 0.5rem 0">
      <!--卡片左侧-->
      <div class="item-left">
        <div class=" mui-row flex-wrap">
          <div class=" flight-city" style="text-align: center;font-size: 13px;flex: 1">
            <span class="departureAirportName">
              {{rawFlightItem.departureAirportName}}
              <span style="" v-if="rawFlightItem.outBay.trim()">({{rawFlightItem.outBay}})</span>
            </span>
          </div>
          <div class=" " style="text-align: center;flex: 1">
            <div class="arrow-top-text flightNo">{{rawFlightItem.flightNo}}</div>
            <div class="icon-arrow"><i class="icon-arrow-line"></i> <!----></div>
            <div class="arrow-bottom-text acReg">B{{rawFlightItem.acReg}}</div>
          </div>
          <div class="flight-city seat-num" style="text-align: center;font-size: 13px;flex: 1">
            <span class="arrivalAirportName">
              {{rawFlightItem.arrivalAirportName}}
              <span style="" v-if="rawFlightItem.bay.trim()">({{rawFlightItem.bay}})</span>
            </span>
          </div>
        </div>
      </div>
      <!--卡片右侧-->
      <div class="item-right" style="text-align: left;font-size: 12px;line-height: 1.8;">
        <div class="mui-row" style="font-size:12px" >
          <span class="up-down up" >起</span>
          <span class="std fix-width-1">{{rawFlightItem.std.slice(11,16)}}</span>(<span  style='white-space:pre;' class="atd-etd fix-width-1" >{{rawFlightItem.atd=="" ? rawFlightItem.etd.slice(11,16) : rawFlightItem.atd.slice(11,16)}}</span><span  style='white-space:pre;' class="time-type up fix-width-2"></span>)
        </div>
        <div class="mui-row" style="font-size:12px">
          <span class="up-down down" >落</span>
          <span class="sta fix-width-1">{{rawFlightItem.sta.slice(11,16)}}</span>(<span style='white-space:pre;' class="ata-eta fix-width-1" >{{rawFlightItem.ata=="" ? rawFlightItem.eta.slice(11,16) : rawFlightItem.ata.slice(11,16)}}</span><span  style='white-space:pre;' class="time-type down fix-width-2"></span>)
        </div>
      </div>
      <div class="item-right item-right-edge">
        <span class="delay-status yan">延</span>
      </div>
    </div>
    <!--页脚-->
<!--    <div class="flight-person " style="padding: 0 0.75rem;">
      <div class="captainPerson person-wrap" >
        <span class="bolder-span">飞行员：</span>
      </div >
      <div class="stewardPerson person-wrap">
        <span class="bolder-span">乘务员：</span>
      </div>
      <div class="safetyPerson person-wrap">
        <span class="bolder-span">安全员：</span>
      </div>
      <div class="randomPerson person-wrap">
        <span class="bolder-span randomPerson-title">加机组：</span>
      </div>
      <div>
                        <span class="" >
                机组人数：<span class="airCrewNum "></span><span class="StewardNum "></span><span class="otherCrewNum "></span>
                        </span>
      </div>
      <div>
                      <span style="">
                航班状态：<span class="flightStatusName "></span>
                        </span>
        <span class="scew-margin delayReason1-wrap" >
                延误原因：<span class="delayReason1"></span>
                        </span>
      </div>
    </div>-->
  </li>
</template>

<script>
  import Vue from 'vue'
  export default {
    props:{
      rawFlightItem:{
          type:Object,
          required:true
      }

    },
    name: 'flight-li',
    components:{

    },
    data () {
      return {

      }
    },
    computed:{

    },
    methods:{

    }
  }
</script>


<style scoped>
  .flex-wrap{
    display:flex;
    justify-content: space-around;
    align-items: center;

  }
  .flex-wrap>.item-left{
    flex:8;
  }
  .flex-wrap>.item-right{
    flex:4;
  }
  .flex-wrap>.item-right.item-right-edge{
    flex:1;
  }

  .arrow-top-text {
    font-size: 12px;
    margin-bottom: -0.5rem;
  }
  .arrow-bottom-text {
    font-size: 12px;
    margin-top: -0.5rem;
  }
  /*起落状态*/
  .up-down.up{
    padding: 1px;
    background-color: #e26b0a;
    color: #ffffff;
  }
  .up-down.down{
    padding: 1px;
    background-color: #76933c;
    color: #ffffff;
  }
  /*延误类型*/
  .delay-status.yan{
    padding: 2px;
    background-color: #f0ad4e;
    color: #ffffff;
  }
  .delay-status.bei{
    padding: 2px;
    background-color: #f0ad4e;
    color: #ffffff;
  }
  .delay-status.fan{
    padding: 2px;
    background-color: #f0ad4e;
    color: #ffffff;
  }
  .flight-person .member-num{
    padding:0 0.2rem;
  }
  .scew-margin{
    margin-left:0.5em;
  }


</style>
