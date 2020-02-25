<template>
  <div>
    <Card>
      <p>题目标题</p>
      <Input style="margin-top:7px" v-model="subject.title" placeholder="Enter something..."/>
    </Card>
    <Card class="card">
      <p>题目解析</p>
      <Input style="margin-top:7px" v-model="subject.desc" type="textarea" :rows="4" placeholder="Enter something..." />
    </Card>
    <Card class="card">
      <p>题目类型{{subject.type}}</p>
      <!-- 使用RadioGroup实现一组互斥的选项组 -->
      <RadioGroup v-model="subject.type" style="margin-top:7px">
        <Radio :label="DAN_XUAN_TI">
          <Icon type="md-school" />
          <span>单选题</span>
        </Radio>
        <Radio :label="DUO_XUAN_TI">
          <Icon type="md-school" />
          <span>多选题</span>
        </Radio>
        <Radio :label="PAN_DUAN_TI">
          <Icon type="md-school" />
          <span>判断题</span>
        </Radio>
        <Radio :label="ZHU_GUAN_TI">
          <Icon type="md-school" />
          <span>主观题</span>
        </Radio>
      </RadioGroup>
      <!-- 原始写法
      <label for="a">
        <input id="a" type="radio" v-model="subject.type" :value="DAN_XUAN_TI" />单选题
      </label>
      <label for="b">
        <input id="b" type="radio" v-model="subject.type" :value="DUO_XUAN_TI" />多选题
      </label>
      <label for="c">
        <input id="c" type="radio" v-model="subject.type" :value="PAN_DUAN_TI" />判断题
      </label>
      <label for="d">
        <input id="d" type="radio" v-model="subject.type" :value="ZHU_GUAN_TI" />主观题
      </label>-->
    </Card>
    <Card class="card">
      <p>题目答案</p>
      <div v-if="subject.type===DAN_XUAN_TI" style="margin-top:7px">
        <!-- <Radio :id="'a'+i" :label="getOptionName(i)" v-model="subject.answer" v-for="(o,i) in subject.options" :key="i">{{i | fmtOptions}}</Radio> -->
        <label :for="'a'+i" v-for="(o,i) in subject.options" :key="i">
          <input :id="'a'+i" type="radio" :value="getOptionName(i)" v-model="subject.answer" />
          {{i | fmtOptions}}
        </label>
      </div>
      <div v-if="subject.type===DUO_XUAN_TI" style="margin-top:7px">
        <label :for="'a'+i" v-for="(o,i) in subject.options" :key="i">
          <input :id="'a'+i" type="checkbox" :value="getOptionName(i)" v-model="subject.answer" />
          {{i | fmtOptions}}
        </label>
      </div>
      <div v-if="subject.type===PAN_DUAN_TI" style="margin-top:7px">
        <label for="a1">
          <input id="a1" type="radio" v-model="subject.answer" value="T" />√
        </label>
        <label for="b1">
          <input id="b1" type="radio" v-model="subject.answer" value="F" />×
        </label>
      </div>
      <div v-if="subject.type===ZHU_GUAN_TI" style="margin-top:7px">
        <Input v-model="subject.answer" type="textarea" :rows="4" placeholder="Enter something..." />
      </div>
    </Card>
    <Card v-if="[DAN_XUAN_TI,DUO_XUAN_TI].includes(subject.type)" class="card">
      <p>题目选项</p>
      <div style="margin-top:7px">
        <div v-for="(o,i) in subject.options" :key="i">
          {{i | fmtOptions}}
          <Input type="text" @on-change="settext($event,i)" :style="{float:'left'}" />
          <!-- <input type="text" @input="settext($event,i)" /> -->
        </div>
        <Button type="primary" @click="subject.options.push('')" style="margin-top:7px">添加选项</Button>
      </div>
    </Card>
    <Card class="card">
      <Button type="primary" @click="save">保存</Button>
      <!-- <Button type="primary" @click="clear">重置</Button> -->
    </Card>
  </div>
</template>
 
<script type="text/babel">
export default {
  components: {},
  watch: {
    //监听题目类型的变化，重置选项
    ["subject.type"](val) {
      console.log(val);
      if (val === this.DUO_XUAN_TI) {
        //此处之所以将answer只为数组为空形式是因为vue中多选框checkbox只接受数组的传参，类似于['A','C']形式
        this.subject.answer = [];
        // this.subject.options.[1] =  '';
      } else this.subject.answer = ""; //单选框可以直接置为空
    }
  },
  data() {
    return {
      subject: {
        id: "", //题目id
        title: "", //题目题干
        content: "", //具体内容
        options: new Array(4), //选择题的题目选项
        answer: "", //答案
        type: 1, //题目类型
        userid: "", //创建者
        createTime: "", //创建时间
        desc: "" //题目解析
      }
    };
  },
  created() {},
  computed: {},
  methods: {
    getOptionName(i) {
      return "ABCDEFG"[i];
    },
    settext(e, i) {
      this.$set(this.subject.options, i, e.target.value);
    },
    save() {
      if (this.subject.title === "") {
        this.$Message.warning("请完善题目信息");
      } else {
        console.log(this.subject);
        let arr = [];
        //先从localstorage里拿数据
        var str = localStorage.getItem("subjectList");
        //非空处理，数据转换
        if (str) arr = JSON.parse(str);
        //将新的题目信息push进arr
        arr.push(this.subject);
        //规定题目id，一般是后台给出
        this.subject.id = Math.floor(Math.random() * 1000000 + 1);
        console.log(this.subject.id);
        //将新的题目信息存入到localstorage中
        localStorage.setItem("subjectList", JSON.stringify(arr));
        //跳转到题目展示列表
        this.$router.push("./timu1");
      }
    }
  }
};
</script>
 
<style scoped>
li {
  list-style: none;
}
.card {
  margin-top: 15px;
}
p{ 
  color: #515A6E;
  font-size:16px; 
}
</style>
