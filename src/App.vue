<template>
  <div id="app">
    <Slideout menu="#menu" panel="#panel" :isOpenStatus="isMenuShowStatus" @on-beforeclose="maskClose" :padding="getLeftMenuWidth" :toggleSelectors="['.toggle-button','#vux-mask-ycy']" @on-beforeopen="maskOpen">
      <nav id="menu" :style="{width:getLeftMenuWidth+'px'}">
        <!--动态加载所需的左菜单页面-->
        <keep-alive>
          <!--<router-view name="indexMenu"></router-view>-->
          <router-view name="menu" @menuClick="jsMenuToggle"></router-view>
        </keep-alive>
      </nav>
      <main id="panel">
        <!--标题栏-->
        <x-header>
          飞行准备
          <!--右侧home键-->
          <router-link slot="right" :to="{path:'/'}">
            <x-icon  type="home" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
          </router-link>
          <!--左侧菜单键-->
          <x-icon class="toggle-button"  slot="overwrite-left" type="navicon" size="35" style="fill:#fff;position:relative;top:-8px;left:-3px;"></x-icon>
        </x-header>
        <!--动态加载所需主页面页面-->
        <keep-alive>
          <router-view name="pageIndex">

          </router-view>
        </keep-alive>
        <!--<iviewPage :current="2" :total="500" simple :page-size="5" ></iviewPage>-->
        <!--遮罩-->
        <vuxMask :isMaskShowStatus="isMaskShowStatus"  id="vux-mask-ycy"></vuxMask>
      </main>
    </Slideout>

  </div>
</template>

<script>
import {XHeader} from 'vux'
import Slideout from '../other-plug/vue-slideout/lib/vue-slideout'
/*import Slideout from 'vue-slideout'*/
import vuxMask from './components/base-com/vux-mask'
export default {
  created(){
    this.getLeftMenuWidth=window.innerWidth/2;
  },
  components: {
    XHeader,
    Slideout,
    vuxMask,
  },
  name: 'app',
  data () {
    return {
      msg: ' Hello World! ',
      getLeftMenuWidth:100,
      isMaskShowStatus:false,
      isMenuShowStatus:false
    }
  },
  computed:{

  },
  methods:{
    maskOpen() {
      this.isMenuShowStatus=true ;
      this.isMaskShowStatus=true;
    },
    maskClose() {
      this.isMenuShowStatus=false ;
      this.isMaskShowStatus=false;
    },
    jsMenuToggle(){
      this.isMenuShowStatus=!this.isMenuShowStatus

    }
  }
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';
@import 'style/common.css';
@import 'style/bootstrap-callout.css';
@import 'style/left-menu.css';

body {
  background-color: #fbf9fe;
}
body {
  width: 100%;
  height: 100%;
  margin: 0;
}

.slideout-menu {
  position: fixed;
  top: 0;
  bottom: 0;
  width: 256px;
  height: 100vh;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  z-index: 0;
  display: none;
  background-color: #233646;
  /*color: white;*/
}

.slideout-menu-left {
  left: 0;
}

.slideout-menu-right {
  right: 0;
}

.slideout-panel {
  background-color: #fbf9fe;
  color: #233646;
  position: relative;
  z-index: 1;
  will-change: transform;
  min-height: 100vh;
}

.slideout-open,
.slideout-open body,
.slideout-open .slideout-panel {
  overflow: hidden;
}

.slideout-open .slideout-menu {
  display: block;
}

/*标题栏颜色*/
main .vux-header{
  background-color: #027FB7;
}
</style>
