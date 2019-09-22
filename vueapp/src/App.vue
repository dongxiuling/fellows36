<!--总组件-->
<template>
  <div id="app">
      <!-- commonHeader组件 -->
      <common-header></common-header>
        <router-view></router-view>
        sdhfjgkhlj;kjhdfghgjh
        dhfjkhjlkkgjfhdh
      <common-footer></common-footer>
  </div>
</template>

<script>
    // 1 commonHeader组件 import 
    // 2 components声明组件
    import CommonHeader from './components/CommonHeader';
    import CommonFooter from './components/CommonFooter';
    export default {
        components:{
           CommonHeader,
           CommonFooter
        }
    }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
