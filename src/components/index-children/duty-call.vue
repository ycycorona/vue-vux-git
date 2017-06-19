<template>
  <div class=" callout bs-callout bs-callout-default" style="border-left-color:#F7B824;padding-top:0;padding-bottom:0">
    <ul style="list-style-type: none;padding-left: 0;">
      <li>
        运控值班:<a class="call-tels" href="tel:0532-85851588">0532-85851588</a>
      </li>
      <li style="color:transparent">
        一三一四:<a class="call-tels" href="tel:0532-85851000">0532-85851000</a>
      </li>
      <li>机务值班:<a class="call-tels" href="tel:0532-85851605">0532-85851605</a></li>
      <li>市场值班:<a class="call-tels" href="tel:0532-85851606">0532-85851606</a></li>
      <li>综保值班:<a class="call-tels" href="tel:0532-85851607">0532-85851607</a></li>
      <li>飞行值班:<a class="call-tels" href="tel:0532-85851608">0532-85851608</a></li>
      <li>客舱值班:<a class="call-tels" href="tel:0532-85851713">0532-85851713</a></li>
      <li>保卫值班:<a class="call-tels" href="tel:0532-85851602">0532-85851602</a></li>
      <li>航医值班:<a class="call-tels" href="tel:0532-85851706">0532-85851706</a></li>
      <li>信息值班:<a class="call-tels" href="tel:0532-85851600">0532-85851600</a></li>
    </ul>
  </div>
</template>

<script>

  export default {
    props:{

    },
    name: 'duty-call',
    components:{

    },
    data () {
      return {

      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li{
    font-size: 17px;
  }
  div.callout ul{
    margin: 1em auto;
  }
</style>
