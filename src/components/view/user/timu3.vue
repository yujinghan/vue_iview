<template>
  <div>
    <h2 style="font-size:30px">试卷预览</h2>
    <ul>
      <!-- 题目展示列表 -->
      <li v-for="(item,i) in testContent" :key="i" style="position:relative">
        <div style="position:absolute;right:0px;">
            <Button shape="circle" icon="md-arrow-round-up" v-if="i>0" @click="up(i)"></Button>
            <Button shape="circle" icon="md-arrow-round-down" v-if="i<testContent.length-1"   @click="down(i)"></Button>
            <Button shape="circle" icon="md-trash"  @click="remove(i)"></Button>
        </div>          
        <h2 style="margin-top:10px">{{i+1}} .【{{item.type | fmtSubjectType}}】{{item.title}}</h2>
        <Card
          style="padding:10px;margin-top:10px"
          v-if="[DAN_XUAN_TI,DUO_XUAN_TI].includes(item.type)"
        >
          <p>选项：</p>
          <ul>
            <li
              v-for="(option,j) in item.options"
              :key="j"
              style="padding:5px;font-size:14px"
            >{{j | fmtOptions}} . {{option}}</li>
          </ul>
        </Card>
      </li>
    </ul>
  </div>
</template>
<script type="text/babel">
import { mapState,mapMutations } from "vuex";
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
    return {};
  },
  mounted() {
  
  },
  created() {},
  computed: {
    ...mapState({
      testContent: state => state.subject.testContent
    })
    // ...mapState("subject",["testContent"])//这种写法也可以
  },
  methods: {
      ...mapMutations("subject",["up","down","remove"])
  }
};
</script>
 
<style scoped>
li {
  list-style: none;
}

</style>
