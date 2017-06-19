<template>
  <div style="padding:15px;">
    <load-more tip="星期五" :show-loading="false" background-color="#fbf9fe"></load-more>
    <x-table full-bordered style="background-color:#fff;">
<!--      <thead>
      <tr>
        <th>Product</th>
        <th>Price</th>
        <th>Quantity</th>
      </tr>
      </thead>-->
      <tbody>
      <tr>
        <th>机型/飞机号</th>
        <td style="width: 70%">A320-214/8430</td>
      </tr>
      <tr>
        <th>飞行日期</th>
        <td>2017-06-09</td>
      </tr>
      <tr>
        <th>飞行日期
        </th>
        <td>2017-06-09</td>
      </tr>
      <tr>
        <th>起飞时间
        </th>
        <td>06-09 06:30</td>
      </tr>
      <tr>
        <th>降落时间
        </th>
        <td>06-10 00:10</td>
      </tr>
      <tr>
        <th>飞行性质
        </th>
        <td>正班&nbsp;9851/9852&nbsp;</td>
      </tr>
      <tr>
        <th>航程
        </th>
        <td>青皖兰皖青(ZSQD/ZSOF/ZLLL/ZSOF/ZSQD)</td>
      </tr>
      <tr>
        <th>机长
        </th>
        <td>

          <a href="#person-info-popover-pilot" usercode="1022" rankno="A001" class="pre-status-C"><span>王玉佩</span></a>&nbsp;
        </td>
      </tr>
      <tr>
        <th>飞行检查员</th>
        <td></td>
      </tr>
      <tr>
        <th>第二机长
        </th>
        <td></td>
      </tr>
      <tr>
        <th>资深副驾驶
        </th>
        <td></td>
      </tr>
      <tr>
        <th>第I副驾驶
        </th>
        <td>
          <a href="#person-info-popover-pilot" usercode="1030" rankno="C001" class="pre-status-N"><span>雷景麟</span></a>&nbsp;
        </td>
      </tr>
      <tr>
        <th>第II副驾驶
        </th>
        <td>
          <a href="#person-info-popover-pilot" usercode="1185" rankno="C002" class="pre-status-N"><span>李云飞</span></a>&nbsp;

        </td>
      </tr>
      <tr>
        <th>飞行翻译
        </th>
        <td></td>
      </tr>
      <tr>
        <th>乘务检查员
        </th>
        <td></td>
      </tr>

      <tr>
        <th>乘务长
        </th>
        <td>
          <a href="#person-info-popover-CA" usercode="S2917" rankno="H001" class="pre-status-N"><span>李静</span></a>&nbsp;

        </td>
      </tr>
      <tr>
        <th>安全员
        </th>
        <td>
          <a href="#person-info-popover-CA" usercode="P3533" rankno="FP" class="pre-status-N"><span>刘宏伟</span></a>&nbsp;

        </td>
      </tr>
      <tr>
        <th>乘务员
        </th>
        <td style="">
          <a href="#person-info-popover-CA" usercode="S3597" rankno="H003" class="pre-status-N"><span>石倩</span></a>&nbsp;

          <a href="#person-info-popover-CA" usercode="S3671" rankno="H003" class="pre-status-N"><span>刘雅静</span></a>&nbsp;

          <a href="#person-info-popover-CA" usercode="S3796" rankno="H003" class="pre-status-N"><span>张新钰</span></a>&nbsp;

          <a href="#person-info-popover-CA" usercode="S4071" rankno="H003" class="pre-status-N"><span>尚凡捷</span></a>&nbsp;

        </td>
      </tr>
      <tr>
        <th>跟机人员
        </th>
        <td colspan="3"></td>
      </tr>
      <tr>
        <th>机长仪表等级
        </th>
        <td>CAT1</td>
      </tr>
      <tr>
        <th>飞机飞行设备
        </th>
        <td>齐全</td>
      </tr>
      <tr>
        <th>飞机结构重量
        </th>
        <td>KG</td>
      </tr>
      <tr>
        <th>飞机基本重量
        </th>
        <td>43240KG</td>
      </tr>
      <tr>
        <th>最大着陆重量
        </th>
        <td>64500KG</td>
      </tr>
      <tr>
        <th>最大起飞重量
        </th>
        <td>75500KG</td>
      </tr>
      <tr>
        <th>机组备份
        </th>
        <td>家备份：姜浩,吕准,毛长滨,茌天瀚</td>
      </tr>
      <tr>
        <th>乘务备份
        </th>
        <td>一备: 胡茜,江丽君,赵泽宇<br>在家待命:安宝平,白雪,管尊乾,李呈呈,刘子祺,石钰婷,孙晶,孙田,王晓晴,王宇惠,王妤天馨,魏屹,辛亚静,颜晓蓉,赵鑫,邹昕晏</td>
      </tr>
      <tr>
        <th>空警备份
        </th>
        <td>家中备份：<br>现场备份: 赵烽贺</td>
      </tr>
      </tbody>
    </x-table>
  </div>
</template>

<script>
  import {XTable,LoadMore, Popover } from 'vux'
  export default {

    props:{

    },
    name: 'plan',
    components:{
      XTable,
      LoadMore,
      Popover

    },
    data () {
      return {


      }
    },
    methods:{


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
  table.vux-table{
    font-size: 14px;
    line-height: 1.6;
  }
  table.vux-table tr>td:first-child{
    background-color: rgb(239, 243, 251);
    word-break: keep-all;
  }
  table.vux-table tr>th{
    font-weight: bold;
  }







</style>
<style>
  div.weui-loadmore_line span.weui-loadmore__tips{
    color: black;
    font-size: 18px;
    font-weight: bold;
  }
</style>
