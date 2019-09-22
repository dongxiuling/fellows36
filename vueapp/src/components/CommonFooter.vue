<template>
    <div id="footer" :style="{background:$store.state.color}">
        <router-link @click.native="$store.commit('change',{title:'电影',color:'red'})" to="/">电影</router-link>
        <router-link @click.native="$store.commit('change',{title:'音乐',color:'green'})" to="/music">音乐</router-link>
        <router-link @click.native="$store.commit('change',{title:'图书',color:'orange'})" to="/book">图书</router-link>
        <router-link @click.native="$store.commit('change',{title:'图片',color:'yellow'})" to="/photo">图片</router-link>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
    #footer{
        height:1rem;
        line-height: 1rem;
        background: #f00;
        position: fixed;
        bottom: 0px;
        width:100%;
        display: flex;
        a{
            flex:1;
            text-align: center;
            color:#000;
            &.router-link-exact-active{
                color:#fff;
            }
        }
    }
    
  
</style>