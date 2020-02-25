<template>
  <Card style="width:auto;" :padding="0" class="no-select">
    <div class="flex">
      <div
        class="flex a-center j-center"
        style="width:25%;height:110px;"
        :style="{background:bgcolor}"
      >
        <i class="iconfont ivu-icon ivu-icon-ios-checkmark"></i>
      </div>
      <div class="flex a-center j-center flex-1 flex-col" style="width:75%;height:110px;">
        <h1>{{mycount}}</h1>
        <div>{{title}}</div>
      </div>
    </div>
  </Card>
</template>

<script>
export default {
  props: ["icon", "bgcolor", "count", "title"],
  data() {
    return {
      mycount: 0
    };
  },
  mounted() {
    var timer = setInterval(() => {
      if (this.mycount < this.count) {
        this.mycount++;
      } else {
        clearInterval(timer);
      }
    }, 1);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.iconfont {
  color: white;
  font-size: 30px;
}
</style>
