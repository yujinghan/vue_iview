<template>
  <div class="iCountUp">
    <ICountUp
      :endVal="endVal"
      :options="options"
    ></ICountUp>
     <Button type="primary" icon="ios-search" @click="openJsonp">jsonp跨域请求</Button>
  </div>
</template>
 
<script type="text/babel">
  import ICountUp from 'vue-countup-v2';
  export default {
    
    components: {
      ICountUp
    },
    data() {
      return {
        endVal: 120,
        options: {
          useEasing: true,
          useGrouping: true,
          separator: ',',
          decimal: '...',
          prefix: '',
          suffix: ''
        }
      };
    },
    methods: {
      openJsonp(){
       this.$jsonp('https://www.jianshu.com/shakespeare/notes/35048061/').then(res => {
                　　console.log(res)
                   
                }).catch(err => {
                　　console.log(err)
                })
      }
    }
  };
</script>
 
<style scoped>
  .iCountUp {
    font-size: 12em;
    margin: 0;
    color: #4d63bc;
  }
</style>
