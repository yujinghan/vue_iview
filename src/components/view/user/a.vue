<template>
  <div>
    <h3>{{name}}---------{{age}}----------{{gender}}---------------------a组件</h3>
    <button @click="addAge({num:3})">测试</button>
  </div>
</template>
 
<script type="text/babel">
//命名空间辅助函数，在使用module写分仓库时使用
// import { createNamespacedHelpers } from 'vuex'
// const { mapState, mapActions } = createNamespacedHelpers('仓库名')

import { mapState, mapGetters, mapMutations, mapActions } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  created() {
    var res = this.getUserInfo();
    res.then(res => {
      console.log(res);
    });
  },
  computed: {
    ...mapState(["name", "age", "gender"])
  },
  methods: {
    ...mapMutations(["addAge"]),
    ...mapActions(["getUserInfo"])
    // test(){
    //     //不能用this.$store.mutations.addAge这种形式，必须通过commit方式调用
    //     this.$store.state.age
    //     this.$store.getters.addAge()
    //     this.$store.commit('addAge',{num:5})  //推荐使用对象形式  num:5
    // }
  }
};
</script>
 
<style scoped>
</style>
