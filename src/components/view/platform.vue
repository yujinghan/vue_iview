<template>
  <div>
    <Breadcrumb style="margin-bottom:20px">
      <BreadcrumbItem>工作平台</BreadcrumbItem>
      
    </Breadcrumb>
    <Row :gutter="16">
      <Col span="4">
        <homecard title="新增用户" count="50" bgcolor="#2186F2"></homecard>
      </Col>
      <Col span="4">
        <homecard title="累计点击" icon="ios-contact" count="50" bgcolor="#19be6b"></homecard>
      </Col>
      <Col span="4">
        <homecard title="新增问答" icon="ios-contact" count="255" bgcolor="#ff9900"></homecard>
      </Col>
      <Col span="4">
        <homecard title="分享统计" icon="ios-contact" count="36" bgcolor="#e46cbb"></homecard>
      </Col>
      <Col span="4">
        <homecard title="新增问答" icon="ios-contact" count="49" bgcolor="#9a66e4"></homecard>
      </Col>
      <Col span="4">
        <homecard title="分享统计" icon="ios-contact" count="78" bgcolor="#ed3f14"></homecard>
      </Col>
    </Row>
    <Row style="margin-top:20px"> 
      <Col span="8">
      <Card>
        <charts-pie></charts-pie>
        </Card>
      </Col>
      <Col span="15" offset="1">
        <Card>
        <charts-column></charts-column>
        </Card>
      </Col>
    </Row>
    <Row style="margin-top:20px"> 
      <Col span="24">
        <Card style="height:300px;width:auto">
        <charts-line></charts-line>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import homecard from "./homecard";
import DataSet from "@antv/data-set";
import G2 from "@antv/g2";
import column from "./charts/colum";
import pie from "./charts/pie"
import line from "./charts/line"

export default {
  name: "platform",
  data() {
      return {}  
  },
  mounted() {

  },
  methods: {

  },
  components: {
    homecard,
    "charts-column":column,
    "charts-line":line,
    "charts-pie":pie,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
