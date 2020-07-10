<template>
<div>
     <div class="searchSingerSong-container">
         <input type="text"  placeholder="请输入搜索内容" v-model="value1">
         <button @click="click" >搜索</button>

     </div>

    <van-tabs>
        <van-tab v-for="(item,index) in list" :title="item.artistname" :key="index" >
            <SearchItem :query="item.artistname"></SearchItem>
        </van-tab>
    </van-tabs>


</div>
</template>

<script>

    import SearchItem from "./component/SearchItem";
    import {getSearch} from "../../api/music-api";

    export default {
        name: "Search",
        components:{
            SearchItem
        },
        data(){
            return{
                value1:"",
                list:[],
            }
        },
        methods:{
            click(){
                // console.log(this.value1)
                getSearch(this.value1).then(res=>{
                    console.log(res)
                    this.list = res.artist
                });
            }
        }

    }
</script>



<style scoped lang="less">
.searchSingerSong-container {
      /*height: 30px;*/
    /*border: 1px solid black;*/
    padding-left: 60px;
}



</style>