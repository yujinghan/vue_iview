// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import Mock from 'mockjs'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import VueRouter from 'vue-router' //引入路由
import './assets/css/common.css'


import VueJsonp from 'vue-jsonp'
Vue.use(VueJsonp)

import store from './store/index'

import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(iView)
Vue.use(VueRouter);
Vue.use(Mock);
Vue.use(Vuex);
Vue.prototype.$ajax = axios;
/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
})



Vue.mixin({
        // 设置为全局变量
        data() {
            return {
                DAN_XUAN_TI: 1, //单独定义出来为了消除魔法数字：魔法数字是代码中莫名其妙出现的数字
                DUO_XUAN_TI: 2,
                PAN_DUAN_TI: 3,
                ZHU_GUAN_TI: 0,
            }
        }
    })
    //全局设置过滤器
Vue.filter("fmtOptions", (val) => {
    return "ABCDEFG" [val];
})