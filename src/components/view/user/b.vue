<template>
 <h3>{{money_us}}--------------------------b组件</h3>
</template>
 
<script type="text/babel">
import {mapState,mapGetters} from 'vuex'
export default {

  components: {},
  data() {
    return {
    }
  },
  computed:{
      ...mapState(['money']),
      ...mapGetters(['money_us'])
  },
  methods: {
   
  }
};
</script>
 
<style scoped>
</style>
