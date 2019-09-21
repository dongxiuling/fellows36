<!-- 总组件 -->
<template>
  <div id="app">
    <!-- <common-header></common-header> -->
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>|
      <!-- <router-link to="/mine">我的 </router-link>| -->
      <!-- params传参 不能使用path直接传 需要使用name -->
      <router-link :to="{name:'mine',params:{id:666,name:'小王'}}">我的params </router-link>|
      <!-- query传参 -->
      <router-link :to="{path:'/mine',query:{id:666,name:'小王'}}">我的query </router-link>|
      <!-- 通过路径传参 -->
      <router-link to="/test/5/lisi">test</router-link>
    </div>
    <router-view/>
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
