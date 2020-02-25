import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);

import subject from './module/subject'
//将state等写在不同的js文件里
import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

//一句话新建并导出仓库
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters,
    modules: {
        subject
    }
})



//新建一个仓库
// let store = new Vuex.Store({
//     state,
//     actions,
//     mutations,
//     getters
// });
//导出仓库
// export default store







//state，getters，mutation，actions写在一个js文件里
// export default new Vuex.Store({
//     //data
//     state: {
//         name: 'yjh',
//         age: 10,
//         gender: 'male',
//         money: 100,
//         cityName: '',
//     },
//     //computed:用已有变量生成一个新变量用getters
//     getters: {
//         money_us(state) {
//             return (state.money / 7).toFixed(2)
//         },
//         getCityName(state) {
//             return state.cityName
//         },
//     },
//     //methods
//     //mutations的代码只能是同步的，不能写axios，settimeout等异步操作
//     mutations: {
//         addAge(state, payLoad) {
//             state.age += payLoad.num
//         },
//         setCityName(state, name) {

//             state.cityName = name
//         },
//     },
//     actions: {
//         getUserInfo() {
//             return { size: 11 }
//         }
//     }
// })