<template>
  <div id="c2" style="height:300px"></div>
</template>
<script>
import DataSet from "@antv/data-set";
import G2 from "@antv/g2";
export default {
  name: "login",
  mounted() {
    this.initc2();
  },
  methods: {
    initc2() {
      var data = [
        {
          item: "事例一",
          count: 40,
          percent: 0.4
        },
        {
          item: "事例二",
          count: 21,
          percent: 0.21
        },
        {
          item: "事例三",
          count: 17,
          percent: 0.17
        },
        {
          item: "事例四",
          count: 13,
          percent: 0.13
        },
        {
          item: "事例五",
          count: 9,
          percent: 0.09
        }
      ];
      var chart = new G2.Chart({
        container: "c2",
        forceFit: true,
        height: 300,
        width: 300
      });
      chart.source(data, {
        percent: {
          formatter: function formatter(val) {
            val = val * 100 + "%";
            return val;
          }
        }
      });
      chart.coord("theta", {
        radius: 0.75
      });
      chart.tooltip({
        showTitle: false,
        itemTpl:
          '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
      });
      chart
        .intervalStack()
        .position("percent")
        .color("item")
        .label("percent", {
          formatter: function formatter(val, item) {
            return item.point.item + ": " + val;
          }
        })
        .tooltip("item*percent", function(item, percent) {
          percent = percent * 100 + "%";
          return {
            name: item,
            value: percent
          };
        })
        .style({
          lineWidth: 1,
          stroke: "#fff"
        });
      chart.render();
    }
  }
};
</script>
<style scoped>
</style>