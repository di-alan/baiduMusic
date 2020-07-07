<template>
    <div class="item-container">
        <div class="cover">
            <img :src="billboard.pic_s640" alt="">
        </div>
        <ul class="item-list ">

<!--            <li>1</li>-->
<!--            <li>2</li>-->
<!--            <li>3</li>-->
            <li v-for="(item,index) in list" :key="item.song_id"><span>{{index+1}}</span>{{item.title}}</li>
        </ul>

    </div>
</template>

<script>


    import {getBillList} from "../../../api/music-api";

    export default {
        name: "BillItem",
       props:{
            type:{
               type: [String,Number]
            },

       },
        data(){
            return {
                list:[],
                billboard:{}
            }
        },
        created(){
            getBillList(this.type,3).then(res=> {
                this.list=res.list;
                this.billboard=res.billboard;
            })
        }
    }
</script>

<style scoped lang="less">
    .item-container {
        display: flex;


        .cover {
            width: 100px;
            height: 100px;
            flex-shrink: 0;
            padding: 15px;

            img {
                width: 100%;
            }
        }

        .item-list {
            display: flex;
            flex-direction: column;
            justify-content: space-around;

        }

        span {
            color: red;
        }
    }
</style>