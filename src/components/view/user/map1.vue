<template>
  <div>
    <div id="citymap" style="width: 100%; height:820px;position: absolute;z-index: 10;"></div>
  </div>
</template>
 
<script type="text/babel">
import jiuquan from "../../json/cityMap/酒泉市.json";
import zhangye from "../../json/cityMap/张掖市.json";
import lanzhou from "../../json/cityMap/兰州市.json";
import baiyin from "../../json/cityMap/白银市.json";
import jiayuguan from "../../json/cityMap/嘉峪关市.json";
import pingliang from "../../json/cityMap/平凉市.json";
import wuwei from "../../json/cityMap/武威市.json";
import longnan from "../../json/cityMap/陇南市.json";
import tianshui from "../../json/cityMap/天水市.json";
import dingxi from "../../json/cityMap/定西市.json";
import qingyang from "../../json/cityMap/庆阳市.json";
import jinchang from "../../json/cityMap/金昌市.json";
export default {
  name: "citymap",
  components: {},
  data() {
    return {
      mapName: "lanzhou"
    };
  },
  computed: {},
  mounted() {
    this.cityName = this.$store.getters.getCityName;//从vuex中取地名
    this.mapName = this.cityName;
    console.log("mapname是"+this.mapName);
    console.log("cityname是"+this.cityName);
    this.drawCity();
  },
  methods: {
    drawCity(mapName) {
      // debugger
      var geoJson = jiuquan;
      var center = [100, 39];
      var zoom = 1.1;
      if (this.mapName === "酒泉市") {
        var geoJson = jiuquan;
        var center = [100, 39];
      } else if (this.mapName === "张掖市") {
        var geoJson = zhangye;
        var center = [100, 39];
      } else if (this.mapName === "兰州市") {
        var geoJson = lanzhou;
        var center = [104, 36];
      } else if (this.mapName === "嘉峪关市") {
        var geoJson = jiayuguan;
        var center = [98, 36];
      } else if (this.mapName === "平凉市") {
        var geoJson = pingliang;
        var center = [107, 35];
      } else if (this.mapName === "白银市") {
        var geoJson = baiyin;
        var center = [107, 35.5];
      }else if (this.mapName === "天水市") {
        var geoJson = tianshui;
        var center = [106, 34.5];
      } else if (this.mapName === "庆阳市") {
        var geoJson = qingyang;
        var center = [107, 36];
      } else if (this.mapName === "金昌市") {
        var geoJson = jinchang;
        var center = [102, 38.5];
      } else if (this.mapName === "武威市") {
        var geoJson = wuwei;
        var center = [105, 38];
      } else if (this.mapName === "陇南市") {
        var geoJson = longnan;
        var center = [106, 33];
      } else if (this.mapName === "定西市") {
        var geoJson = dingxi;
        var center = [106, 35.5];
      }else if (this.mapName === "" ) {
        var geoJson = lanzhou;
        var center = [104, 36];
      }

      let citymap = this.$echarts.init(document.getElementById("citymap"));
      this.$echarts.registerMap("ls", geoJson);
      citymap.setOption({
        geo: {
          center: center,
          map: "ls",
          show: true,
          roam: "false",
          label: {
            emphasis: {
              show: true,
              color: "#00D4C0"
            }
          },
          itemStyle: {
            normal: {
              areaColor: "rgba(0,0,0,0)",
              borderColor: "red",
              shadowColor: "#00D4C0",
              shadowBlur: 1
            }
          },
          zoom: 0.7
        },
        series: [
          {
            center: center,
            type: "map",
            zoom: 0.7,
            map: "ls",
            geoIndex: 1,
            aspectScale: 0.75, //长宽比
            label: {
              normal: {
                formatter: "{b}",
                show: true,
                textStyle: {
                  color: "#0096f3",
                  fontFamily: "Microsoft YaHei"
                }
              },
              emphasis: {
                show: false,
                textStyle: {
                  color: "#FFF"
                }
              }
            },
            roam: "false",
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
          }
        ]
      });
    }
  }
};
</script>
 
<style scoped>
</style>
