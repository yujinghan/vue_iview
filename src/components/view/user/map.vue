<template>
  <div>
    <div id="gansuMap" :style="{width: '100%',height: 'calc(100vh - 120px)'}"></div>
  </div>
</template>
 
<script type="text/babel">
import gansu from "../../json/provinceMap/gansu.json";
export default {
  name: "provincemap",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.drawMap();  
  },
  methods: {
    drawMap(params) {
      var geoJson = gansu;
      var center = [105, 38];
      var zoom = 1.1;
      let gansuMap = this.$echarts.init(document.getElementById("gansuMap"));
      this.$echarts.registerMap("mapJson", geoJson);
      gansuMap.setOption({
           geo: {
            center: center,
            map: 'mapJson',
            show: true,
            roam: 'false',
            label: {
              emphasis: {
                show: true,
                color: '#00D4C0'
              },
            },
            itemStyle: {
              normal: {
                areaColor: 'rgba(0,0,0,0)',
                borderColor: '#00D4C0',
                shadowColor: '#00D4C0',
                shadowBlur: 1
              }
            },
            zoom: 1.1,
          },
          series: [{
            center: center,
            type: 'map',
            zoom: 1.1,
            map: 'mapJson',
            geoIndex: 1,
            aspectScale: 0.75, //长宽比
            label: {
              normal: {
                formatter: '{b}',
                show: true,
                textStyle: {
                  color: "#0096f3",
                  fontFamily: 'Microsoft YaHei',
                },
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: '#FFF',
                },
              }
            },
            roam: 'false',
            itemStyle: {
              normal: {
                areaColor: "rgba(11,36,81,0.55)",
                borderColor: "#0096f3",
                borderColor2: "red",
                borderWidth: 2.5,
                shadowBlur: 15,
                shadowColor: "rgba(0,0,0,0.5)"
              },
              emphasis: {
                areaColor: "rgba(55,156,184)",
                shadowColor: "rgba(55,156,184)",
                shadowBlur: 20
              }
            }
          }]
          
      });
      gansuMap.on('click', (params) => {
         console.log(params);
         if (params.componentIndex === 0) {
            this.$store.commit('setCityName', params.name)//把点击的地名传给vuex
            this.$router.push({path: "/cityMap"});
          } else {
            return
          }
        });
    }
  }
};
</script>
 
<style scoped>
</style>
