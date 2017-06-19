<template>
  <li class="flight-item " @click="toPre">
    <div class="flex-wrap to-pre" style="padding: 0 0.75rem">
      <div class="item-left " style="flex: 3">
        <div class="flight-info flex-wrap">
          <div style="flex: 1"><span class="span-title">乌兰青</span><span class="jian-jiao-code"></span></div>
          <div style="text-align: right;flex: 1"><span class="date-type span-title">2017-06-06</span></div>
        </div>
        <div class="flight-time flex-wrap">
          <div class=" " style="text-align: left;flex: 1">
            <span class="date-type"></span> 06-06 18:00
          </div>
          <div class=" " style="text-align: center;flex: 1">
            <div class="icon-arrow"><i class="icon-arrow-line"></i> <!----></div>
          </div>
          <div class=" " style="text-align: right;flex: 1">
            <span class="date-type"></span> 06-07 00:20
          </div>
        </div>
      </div>

      <div class="item-right " style="text-align: right; line-height: 47px;flex: 1">
        <span style="" class="pre-status ed">已完成</span>
      </div>

    </div>
    <!--页脚-->
    <div class="flight-person" @click="toggleShow" style="padding: 0 0.75rem;">
                  <span style="font-weight:600">
                      9800
                  </span>
      <span style="display:none" class="acReg">9955</span>
      <span style="margin-left: 2em;">
                      机长：王玉佩
                  </span>
      <!-- 隐藏，单击下拉 -->
      <div :class="{'crew-collapse':isCrewCollapse}">
        <div class="mui-row flight-crew-row">
          <span class="crew-type">飞行员：</span><span id="crew-pilot">王玉佩,潘志远,姜德洲</span>
        </div>
        <!-- 乘务员 -->
        <div class="mui-row flight-crew-row">
          <span class="crew-type">乘务员：</span><span id="crew-CA">薛涵,田晓佳,王继东,于安鑫</span>
        </div>
        <!-- 安全员 -->
        <div class="mui-row flight-crew-row">
          <span class="crew-type">安全员：</span><span id="crew-security">姜文添,刘宏伟,王家林,赵烽贺</span>
        </div>
      </div>
    </div>
  </li>
</template>

<script>

  export default {
    props:{

    },
    name: 'index-flight-item',
    components:{

    },
    data () {
      return {
        isCrewCollapse:true,
      }
    },
    methods:{
      toggleShow(){
        this.isCrewCollapse=!this.isCrewCollapse;

      },
      toPre(){
       this.$router.push('/preSteps/health');
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .flex-wrap{
    display: flex;

  }
  li.flight-item{
    display: block;
  }
</style>
