<template>
    <div class="card-wrap" id="index-card-wrap">
      <h4>
        <slot name="icon"></slot>
          {{cardWrapTitle}}
      </h4>
      <ul class="list-card" style="padding: 0 .4rem">
        <indexFlightItem v-if="cardWrapID===0"></indexFlightItem>
      </ul>
      <dutyManager v-if="cardWrapID===3"></dutyManager>
      <dutyCall v-if="cardWrapID===4"></dutyCall>
    </div>
</template>

<script>
  import indexFlightItem from './index-flight-item'
  import dutyManager from './duty-manager'
  import dutyCall from './duty-call'
  export default {
    props:{
      cardWrapTitle:String,
      cardWrapID:Number
    },
    name: 'index-card-wrap',
    components:{
      indexFlightItem,
      dutyManager,
      dutyCall
    },
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
