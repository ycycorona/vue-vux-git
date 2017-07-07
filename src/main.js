// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'
/*import VueRouter from 'vue-router'*/
import { AjaxPlugin } from 'vux'

/*import App from './App'*/
import App from './mobileFlightInfo.vue'
/*import App from './components/Hello.vue'*/
/*import index from './components/index-children/index-layout'
import flightPlan from './components/index-children/flight-plan'
import indexImportInfo from './components/index-children/index-import-info'
import indexMenu from './components/index-children/index-menu'
import preMenu from './components/pre-steps/pre-menu'
import preIndex from './components/pre-steps/pre-index'
import health from './components/pre-steps/health'
import plan from './components/pre-steps/plan'*/
/*import router from './router/mobileFlightInfoRouter'*/
Vue.use(AjaxPlugin)

/*Vue.use(VueRouter)*/

/*const routes = [
  {
    path: '/',
    components: {
      menu:indexMenu,
      pageIndex:index,
    },
    redirect:'/flightPlan',
    children:[
      {
        path:'flightPlan',
        components:{
          pageIndexItem:flightPlan,
        }
      },
      {
        path:'indexImportInfo',
        components:{
          pageIndexItem:indexImportInfo,
        }
      }
    ]
  },
  {
    path: '/preSteps',
    components:{
      menu:preMenu,
      pageIndex:preIndex
    },
    children:[
      {
        path:'health',
        components:{
          preStep:health
        }
      },
      {
        path:'plan',
        components:{
          preStep:plan
        }
      }
    ]

  }
]
const router = new VueRouter({
/!*  mode: 'history',*!/
  routes
})*/


FastClick.attach(document.body)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
/*  router,*/
  render: h => h(App)
}).$mount('#app-box')
