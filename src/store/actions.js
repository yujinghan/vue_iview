export default {
    //action也相当于methods，但支持异步操作，可以请求接口api，async，axios操作等
    getUserInfo() {
        return { size: 11 }
    }

    // vuex中mutation和action的详细区别
    //mutation中是state;action中是context
    // 1、流程顺序
    // “相应视图—>修改State”拆分成两部分，视图触发Action，Action再触发Mutation。
    // 2、角色定位
    // 基于流程顺序，二者扮演不同的角色。
    // Mutation：专注于修改State，理论上是修改State的唯一途径。
    // Action：业务代码、异步请求。
    // 3、限制
    // 角色不同，二者有不同的限制。
    // Mutation：必须同步执行。
    // Action：可以异步，但不能直接操作State。


    //  vuex中 mutation和action的区别和使用
    // mutations 类似于事件，用于提交 Vuex 中的状态 state
    // action 和 mutations 也很类似，主要的区别在于mutations 只能是同步操作，action 可以包含异步操作，而且可以通过 action 来提交 mutations
    // mutations 有一个固有参数 state，接收的是 Vuex 中的 state 对象
    // action 也有一个固有参数 context，但是 context 是 state 的父级，包含 state、getters
    // Vuex 的仓库是 store.js，将 axios 引入，并在 action 添加新的方法
    // 分发调用action：
    // this.$store.dispatch('action中的函数名'，发送到action中的数据)
    // 在组件中提交 Mutation：
    // this.$store.commit(“mutation函数名”，发送到mutation中的数据)


    // 在action中提交mutation ：
    // const store = new Vuex.Store({
    //     state: {
    //       count: 0
    //     },
    //     mutations: {
    //       increment (state) {
    //         state.count++
    //       }
    //     },
    //     actions: {
    //       increment (context) {    //官方给出的指定对象, 此处context可以理解为store对象
    //         context.commit('increment');
    //       }
    //     }
    //   })

    // 第一种写法简写形式
    // 　　const actions = {
    //     　　　　action的函数名({commit}) { 
    //     　　　　　　commit(“mutation函数名”, value);   //调用mutation中的函数
    //     　　　　　　//此处value可以是对象,可以是固定值等
    //     　　　　}
    //     　　}
    //     　　// 第二种形式
    //     　　const actions = {
    //     　　　　action中的函数名(context) {
    //     　　　　　　//context 官方给出的指定对象, 此处context可以理解为store对象
    //     　　　　　　context.commit(“mutation函数名”, value);     //调用mutation中的函数
    //     　　　　}
    //     　　}
    // 
}