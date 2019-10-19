<template>
    <div class="photo-box">
        <img v-for="(photo,index) in photoData" :key="index" :src="photo.src" alt="">
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        data(){
            return {
                photoData:[]
            }
        },
        created(){
            axios.get('./data/photodata.json')
            .then((res)=>{
                this.photoData = res.data.photoData;
            })
        }
    }
</script>

<style lang="scss" scoped>
    .photo-box{
        overflow: hidden;
        img{
            float: left;
            width:50%;
        }
    }
</style>