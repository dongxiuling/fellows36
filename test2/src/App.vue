<template>
  <div id="app">
      <common-header></common-header>
      <div class="container">
          fyghjkl;'lhaha
        header'
        <h2>hehe</h2>
      </div>
      <common-footer></common-footer>
  </div>
</template>
<script>
  //  1 导入  
  //  2 components中声明 
  //  3template中 使用
    import CommonHeader from './components/CommonHeader';
    // import HelloWorld from './components/HelloWorld';
    import CommonFooter from './components/CommonFooter';
    export default {
        components:{
            CommonHeader,
            CommonFooter
            // HelloWorld
        }
    }
</script>

<style lang="scss" >
  .container{
    height: 300px;
    background: red;
  }
</style>
