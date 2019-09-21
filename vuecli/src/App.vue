<!-- 总组件 -->
<template>
  <div id="app">
    <!-- <common-header></common-header> -->
    <router-view/>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <router-link to="/mine">我的 </router-link>|
      <router-link to="/test">test</router-link>
    </div>
  
    
  </div>
</template>

<script>
    // 1 引入  2components下声明
    import CommonHeader from './components/CommonHeader';
    export default {
        components:{
            CommonHeader
        }
    }
</script>

<style lang="scss">

</style>
