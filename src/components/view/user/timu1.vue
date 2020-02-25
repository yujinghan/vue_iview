<template>
  <div>
    <div class="cart"><router-link to="/timu3">{{subjectCount}}</router-link></div>
    <ul>
      <!-- 题目展示列表 -->
      <li v-for="(item,i) in list" :key="i" style="position:relative">
        <div style="position:absolute;right:0px">
            <Button shape="circle" icon="md-add"   @click="addTest(item)"></Button>
        </div> 
        <h2 style="margin-top:10px">{{i+1}} .【{{item.type | fmtSubjectType}}】{{item.title}}</h2>
        <Card class="card"
          v-if="[DAN_XUAN_TI,DUO_XUAN_TI].includes(item.type)"
        >
          <P>选项：</P>
          <ul>
            <li
              v-for="(option,j) in item.options"
              :key="j"
              style="padding:7px;font-size:14px"
            >{{j | fmtOptions}} . {{option}}</li>
          </ul>
        </Card>
        <Card class="card">
          <p>解析：</p>
          <div>{{item.desc}}</div>
        </Card>
      </li>
    </ul>
  </div>
</template>
 
<script type="text/babel">
import { createNamespacedHelpers } from "vuex";
// import { mapState,mapGetters } from "vuex"
let { mapGetters,mapMutations } = createNamespacedHelpers("subject");
export default {
  name: "timu1",
  components: {},
  filters: {
    fmtSubjectType(val) {
      // 利用filter过滤器将type类型1，2，3换成"主观题"...
      return ["主观题", "单选题", "多选题", "判断题"][val];
    }
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {},
  created() {
    // 从localstorage里拿subjectlist数据渲染到页面上
    var str = localStorage.getItem("subjectList");
    //做个非空校验，并将subjectlist值赋给list
    if (str) this.list = JSON.parse(str);
  },
  computed: {
    // ...mapState('subject',["a"]),
    // ...mapGetters('subject',["subjectCount"])
    //  ...mapState(["a"]),
    ...mapGetters(["subjectCount"])
  },
  methods: {
    ...mapMutations(["addTest"])
  }
};
</script>
 
<style scoped>
li {
  list-style: none;
}
.cart {
  width: 50px;
  height: 50px;
  background: #515A6E;
  position: fixed;
  z-index: 1000;
  right: 0px;
  top: 40%;
  font-size: 28px;
  color: #2D8CF0;
  text-align: center;
  line-height: 50px
}
.card{
  margin-top:10px
}
</style>
