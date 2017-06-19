<template>
  <div class="">
    <div class="card-wrap margin-top">
      <div class="card ill">
        <div class="card-content">
          <div class=" thead" style="margin-top: 1em;margin-bottom: 1em">
            <div class="flex-wrap" style="font-weight: 600;padding: 0.5rem">
              <div class="">
                健康状况
              </div>
              <div class="" style="text-align: right">
                正常/异常
              </div>
            </div>
          </div>
          <!-- 全选按钮 -->
          <group >
            <x-switch title="全选按钮" v-model="illAllCheckStatus" @on-change="illAllCheck"></x-switch>
            <x-switch title="" v-for="(illLi,index) in illUl" :key="index" :inline-desc="illLi.text" v-model="illLi.isOk"></x-switch>
          </group>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {Group,XSwitch} from 'vux'
  export default {

    props:{

    },
    name: 'health',
    components:{
      Group,
      XSwitch
    },
    data () {
      return {
        value1:1,
        illAllCheckStatus:false,
        illUl:[
          {
            text:'体温、脉搏超过正常（正常体温36-37℃ 正常脉搏60-100次/分）',
            isOk:false
          },
          {
            text:'在安静状态下，收缩压超过19.3Kpa（145mmhg）舒张压超过12kpa（96mmhg):高血压病I期有自觉症状',
            isOk:false
          },
          {
            text:'心慌心悸与胸闷气短、左胸疼痛不适、下肢水肿与口唇紫绀等',
            isOk:false
          }
        ]

      }
    },
    methods:{
      illAllCheck(value){
        this.illUl.map((valueObj)=>{
          valueObj.isOk=value;
        });
      }

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .flex-wrap{
    display: flex;

  }
  .flex-wrap>div{
    flex:1
  }




  .card.ill .thead{
    color: white;
    background-color: #00B767;
  }

  .ill-li>div:first-child{
    padding-right: 20px;
  }
  .ill-li.all-clear>div:first-child{
    font-size: 18px;
    font-weight: 600;
  }

</style>
