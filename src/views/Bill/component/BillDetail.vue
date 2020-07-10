<template>
    <div>

        <div class="details-pic">
            <img :src="billboard.pic_s260" alt="">
        </div>
        <ul>
            <li v-for="(item,index) in list" :key="index" class="li1">
                {{item.title}}
                <p>{{item.author}}</p>
            </li>
        </ul>


    </div>
</template>

<script>
    import {getBillList} from "../../../api/music-api";

    export default {
        name: "BillDetail",
        data(){
            return{
                list:[],
                billboard:{}
            }
        },
        created() {
            getBillList(this.$route.params.type).then(res=>{
                console.log(res)
                this.list=res.list
                this.billboard=res.billboard
            })
        }
    }
</script>

<style scoped lang="less">
    .details-pic{
        background-color: #E3E2E3;
        width: 100%;
        height: 250px;
        img{
            height: 100%;
            width: 100%;

        }
    }
    li {
        border-bottom: 1px solid gray;
        padding: 15px;
           p {
               color: gray;
               font-size: 16px;
           }
    }

</style>