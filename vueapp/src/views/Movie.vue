<template>
    <div>
        <ul class="movie-box">
            <li class="movieList" v-for="(obj,index) in movieList" :key="index">
                <img :src="obj.images.medium" alt="">
                <div>
                    <h2>{{obj.original_title}}</h2>
                    <p>{{obj.collect_count}}已收藏</p>
                    <!-- {{obj.casts}} -->
                    <p>演员：<span v-for="(cast,index) in obj.casts" :key="index">{{cast.name}}</span></p>
                    <p>上映时间：{{obj.year}}</p>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                movieList:[]
            }
        },
        created(){
            // 发送请求 
            // axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10')
            axios.get('./data/movie0.json')
            .then((res)=>{
                this.movieList= res.data.subjects;
            }).catch((err)=>{
                console.log(err);
            })
           
            // window.onscroll = function(){
            //      // 判断滚动条是否滑动到底部  
            //       axios.get('https://bird.ioliu.cn/v1?url=https://api.douban.com/v2/movie/in_theaters?apikey=0df993c66c0c636e29ecbb5344252a4a&start=0&count=10')
            //     .then((res)=>{
            //         this.movieList= res.data.subjects;
            //     }).catch((err)=>{
            //         console.log(err);
            //     })
            // }

        }
    }
</script>

<style lang="scss" scoped>
.movie-box{
    padding: 0.2rem;
    .movieList{
        display: flex;
        img{
            width:2rem;
            margin-right:0.2rem;
        }
        margin-bottom:0.2rem;
        border-bottom: 1px solid #000;
    }
}
 

</style>