<template>
  <div>
    <!-- 菜单具体展示内容 -->
    <div class="person-info" >
      <img src="../../assets/headImage.jpg" style="width: 60px;height: 60px;text-align: center">
      <span style="display: block;font-weight: 600;color: #91949d;" >王玉佩</span>
    </div>
    <Group class="left-menu-color">
      <Cell title="飞行准备" :is-link="true" link="/" :class="{active:menuOpts[0].selected}" @click.native="addSelectBack" :data-id="0"></Cell>
      <Cell title="通知公告" :is-link="true" link="/indexImportInfo" :class="{active:menuOpts[1].selected}" @click.native="addSelectBack" :data-id="1"></Cell>
      <Cell title="飞行计划查询" :is-link="true" :class="{active:menuOpts[2].selected}" @click.native="addSelectBack" :data-id="2"></Cell>
      <Cell title="航班动态查询" :is-link="true" :class="{active:menuOpts[3].selected}" @click.native="addSelectBack" :data-id="3"></Cell>
      <Cell title="机场信息" :is-link="true" :class="{active:menuOpts[4].selected}" @click.native="addSelectBack" :data-id="4"></Cell>
      <Cell
        title="个人信息查询"
        is-link
        :border-intent="false"
        :arrow-direction="showContent001 ? 'up' : 'down'"
        @click.native="showContent001 = !showContent001">
      </Cell>
      <template v-if="showContent001">
        <cell-box class="sub-item" is-link :class="{active:menuOpts[5].child[0].selected}" @click.native="addSelectBack" :data-id="6">个人信息</cell-box>
        <cell-box class="sub-item" is-link :class="{active:menuOpts[5].child[1].selected}" @click.native="addSelectBack" :data-id="7">飞行小时</cell-box>
        <cell-box class="sub-item" is-link :class="{active:menuOpts[5].child[2].selected}" @click.native="addSelectBack" :data-id="8">QAR数据</cell-box>
      </template>
    </Group>
  </div>
</template>

<script>
  import {Cell,Group,CellBox} from 'vux'
  import Vue from 'vue'
  export default {
    props:{

    },
    name: 'index-menu',
    components:{
      Cell,
      Group,
      CellBox
    },
    data () {
      return {
        showContent001: false,
        menuOpts:[
          {
            text:"飞行准备",
            id:0,
            value:"flightPlan",
            level:1,
            hasChild:false,
            selected:true
          },
          {
            text:"通知公告",
            id:1,
            value:"importInfo",
            level:1,
            hasChild:false,
            selected:false
          },
          {
            text:"飞行计划查询",
            id:2,
            value:"flightFlan",
            level:1,
            hasChild:false,
            selected:false
          },
          {
            text:"航班动态查询",
            id:3,
            value:"flightDynamic",
            level:1,
            hasChild:false,
            selected:false
          },
          {
            text:"机场信息",
            id:4,
            value:"airport",
            level:1,
            hasChild:false,
            selected:false
          },
          {
            text:"个人信息",
            id:5,
            value:"personQuery",
            level:1,
            hasChild:true,
            selected:false,
            child:[
              {
                text:"个人信息",
                id:6,
                value:"personInfo",
                level:2,
                hasChild:false,
                selected:false
              },
              {
                text:"飞行小时",
                id:7,
                value:"flightHours",
                level:2,
                hasChild:false,
                selected:false
              },
              {
                text:"QAR数据",
                id:8,
                value:"QARData",
                level:2,
                hasChild:false,
                selected:false
              }
            ]
          }
        ]
      }
    },
    computed:{

    },
    methods:{
      clickTest(event){
        console.log(event.currentTarget.dataset.id);
      },
      addSelectBack(event){
        let currentID=event.currentTarget.dataset.id;
        console.log(currentID);
        /*this.menuOpts[event.currentTarget.dataset.id].*/
        this.menuOpts.map((val)=>{
          if(val.hasChild==true){
            val.child.map((childVal)=>{
              childVal.selected=false;
              if(childVal.id==currentID){
                Vue.set(childVal,'selected',true)
              }
              return val
            });

          }else{
            val.selected=false;
            if(val.id==currentID){
              Vue.set(val,'selected',true)
            }
            return val;
          }
        });
        this.$emit('menuClick');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.left-menu-color,.left-menu-color .weui-cells{
  background-color: #233646;
  color: #91949d;
}
.left-menu-color .weui-cells:before,
.left-menu-color .weui-cells:after,
.left-menu-color .weui-cell:before{
  border-top:0 solid #233646;
  border-bottom:0 solid #233646;
}
.weui-cell.vux-tap-active.weui-cell_access:active{
  background-color: #1b222a;

}
  .sub-item>div{
    text-indent: 1rem;
  }
.weui-cell.active{
  background-color: #1b222a;
}

</style>
