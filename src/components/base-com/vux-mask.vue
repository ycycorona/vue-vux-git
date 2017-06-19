<template>

    <a class="vux-popup-mask" :class="[{'vux-popup-show':isShow}]"  @click="closeMask" href="javascript:void(0)" :style="{'z-index': zIndex}"></a>

</template>

<script>
  import Vue from 'vue'
  export default {
    props:{
      isMaskShowStatus:Boolean
    },
    name: 'vux-mask-ycy',
    components:{

    },
    data () {
      return {
        zIndex:-1

      }
    },
    computed:{
      isShow(){
        return this.isMaskShowStatus;
      },
    },
    watch:{
      isShow(val){
        if(val===true){
          this.zIndex=500;
        }
        setTimeout(()=>{
          if(val===false){
            this.zIndex=-1;
          }
        },200)
      }
    },
    methods:{
      closeMask(){
        this.$emit("closeMask")
      }
    }
  }
</script>


<style scoped>
  .vux-popup-mask{
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    opacity: 0;
    tap-highlight-color: rgba(0, 0, 0, 0);
    z-index: -1;
    -webkit-transition: opacity 400ms;
    transition: opacity 400ms;
  }
  .vux-popup-mask.vux-popup-show {
    opacity: 1;
  }

</style>
