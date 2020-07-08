<template>
    <div class="item-container-search">
        <input type="text" v-model="value1"  >
        <button @click="click">搜索</button>
        <SearchItem></SearchItem>
    </div>
</template>

<script>



    import SearchItem from "./component/SearchItem";

    export default {
        name: "Search",
        components:{
            SearchItem
        },
        data() {
             return {
                 value1:"输入搜索内容"
             }
        },
        methods:{
            click(){

            }
        }
    }
</script>

<style scoped lang="less">
 .item-container-search {
     position: relative;
     left: 65px;
     top:30px
 }
</style>