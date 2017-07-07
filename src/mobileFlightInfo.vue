<template>
  <div id="app">
    <!--标题栏-->
    <x-header>
      航班动态
      <!--右侧home键-->

      <!--左侧菜单键-->
      <x-icon class="toggle-button"  slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
    </x-header>
    <!--动态加载所需主页面页面-->
    <div class="content">
      <div class="card-wrap">
        <ul class="list-card" style="padding: 0 0.4rem;margin-top: 5px;">
          <flightLi :rawFlightItem="flightItem" v-for="(flightItem,index) in rawFlightList" :key="index"></flightLi>
        </ul>
      </div>
    </div>

  </div>
</template>

<script>
  import {XHeader} from 'vux'
  import flightLi from './components/mobileFlightInfo/flightLi'
  /*仅测试*/
  import testJson from './test_data/test.json'

  export default {
    created(){
        this.ajaxGetData();


    },
    components: {
      XHeader,
      flightLi
    },
    name: 'app',
    data () {
      return {
        msg: ' Hello World! ',
        rawFlightList:testJson,
      }
    },
    computed:{
        flightList(){

        }

    },
    methods:{
      ajaxGetData:function () {
          console.trace();
          console.log(testJson);
/*        this.$http.get('./text_data/test.json').then(function (response) {
          console.log(response.body);
        }).catch(function(err){
          console.log(err);
        });*/
    }

    }
  }
</script>

<style lang="less">
  @import '~vux/src/styles/reset.less';
  @import 'style/common.css';
  @import 'style/mobileFlightInfo/icon-arrow.css';
</style>
<style>
  body{
    background-color: #efeff4;
  }
  .content{
    font-size: 13px;
    background-color: #efeff4;
  }




</style>
