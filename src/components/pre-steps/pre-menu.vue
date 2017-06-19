<template>
  <div>
    <!-- 菜单具体展示内容 -->
    <div class="person-info" >
      <img src="../../assets/headImage.jpg" style="width: 60px;height: 60px;text-align: center">
      <span style="display: block;font-weight: 600;color: #91949d;" >王玉佩</span>
    </div>
    <Group class="left-menu-color">
      <Cell title="主页" :is-link="true" link="/" :class="{active:menuOpts[0].selected}" @click.native="addSelectBack" :data-id="0"></Cell>
      <Cell title="健康状况" :is-link="true" link="health" :class="{active:menuOpts[1].selected}" @click.native="addSelectBack" :data-id="1"></Cell>
      <Cell title="排班情况" :is-link="true" link="plan" :class="{active:menuOpts[2].selected}" @click.native="addSelectBack" :data-id="2"></Cell>
      <Cell title="重要信息" :is-link="true" :class="{active:menuOpts[3].selected}" @click.native="addSelectBack" :data-id="3"></Cell>
      <Cell title="航路数据" :is-link="true" :class="{active:menuOpts[4].selected}" @click.native="addSelectBack" :data-id="4"></Cell>
      <Cell title="机场信息" :is-link="true" :class="{active:menuOpts[5].selected}" @click.native="addSelectBack" :data-id="5"></Cell>
<!--      <Cell title="航行通告" :is-link="true" :class="{active:menuOpts[6].selected}" @click.native="addSelectBack" :data-id="6"></Cell>
      <Cell title="故障保留" :is-link="true" :class="{active:menuOpts[7].selected}" @click.native="addSelectBack" :data-id="7"></Cell>
      <Cell title="安全提示" :is-link="true" :class="{active:menuOpts[8].selected}" @click.native="addSelectBack" :data-id="8"></Cell>
      <Cell title="操作通告" :is-link="true" :class="{active:menuOpts[9].selected}" @click.native="addSelectBack" :data-id="9"></Cell>
      <Cell title="性能资料" :is-link="true" :class="{active:menuOpts[10].selected}" @click.native="addSelectBack" :data-id="10"></Cell>
      <Cell title="天气信息" :is-link="true" :class="{active:menuOpts[10].selected}" @click.native="addSelectBack" :data-id="11"></Cell>
      <Cell title="网上考试" :is-link="true" :class="{active:menuOpts[10].selected}" @click.native="addSelectBack" :data-id="12"></Cell>-->
    </Group>
  </div>
</template>

<script>
  import {Cell,Group,CellBox} from 'vux'
  import Vue from 'vue'
  export default {
    props:{

    },
    name: 'pre-menu',
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
            text:"主页",
            id:0,
            value:"homePage",
            level:1,
            hasChild:false,
            selected:false
          },
          {
            text:"健康状况",
            id:1,
            value:"health",
            level:1,
            hasChild:false,
            selected:false
          },
          {
            text:"排班情况",
            id:2,
            value:"plan",
            level:1,
            hasChild:false,
            selected:false
          },
          {
            text:"重要信息",
            id:3,
            value:"importInfo",
            level:1,
            hasChild:false,
            selected:false
          },
          {
            text:"航路数据",
            id:4,
            value:"airway",
            level:1,
            hasChild:false,
            selected:false
          },
          {
            text:"机场信息",
            id:5,
            value:"airport",
            level:1,
            hasChild:false,
            selected:false
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
