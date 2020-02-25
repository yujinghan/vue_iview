<template>
    <button @click="login">登录</button>
</template>
<script>
export default {
    name:'login',
    methods:{
        login(){
            this.$router.push('/')
        }
    }

}
</script>
<style scoped>

</style>