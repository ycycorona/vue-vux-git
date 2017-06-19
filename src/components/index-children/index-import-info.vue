<template>
  <div>
    <search @on-submit="onSubmit" :auto-fixed="autoFixed" @on-focus="onFocus" @on-cancel="onCancel"></search>
    <group>
      <cell title="title" is-link value="value"></cell>
    </group>
  </div>
</template>

<script>
  import Vue from 'vue'
  import { Search,Group,Cell } from 'vux'
  export default {
    props:{

    },
    name: 'index-import-info',
    components:{
      Search,
      Group,
      Cell
    },
    data () {
      return {
        results: [],
        autoFixed: false,
      }
    },
    computed:{

    },
    methods:{
      onSubmit (val) {
        window.alert('on submit' + val)
      },
      onCancel () {
        console.log('on cancel')
      },
      onFocus () {
        console.log('on focus')
      }
    }
  }
</script>


<style>


</style>
