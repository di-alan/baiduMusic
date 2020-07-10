<template>
    <div>
        <div class="f1">
            <div class="singer-conpainer">
                <img :src="pic.avatar_s180" alt="">
                <p></p>
            </div>
        </div>
        <ul>
            <li v-for="(item,index) in list" :key="index">{{item.title}}</li>
        </ul>

    </div>
</template>

<script>
    import {getSinger} from "../../../api/music-api"
    // import {mapState} from "vuex";

    export default {
        name: "SingerDetail",
        data(){
            return{
                list:[],
                pic:{}
            }
        },
        // computed:{
        //     ...mapState (["billTypeList"]),
        // },
        // created() {
        //     // eslint-disable-next-line no-debugger
        //     this.$store.dispatch("setBillTypeList",{tinguid:this.$route.params.tinguid})
        // }
        created() {
                console.log(this.$route.params.tinguid);
                getSinger(this.$route.params.tinguid).then(res=>{
                console.log(res)
                this.list=res.songlist
                this.pic=res.artistinfo
            })
        }
    }
</script>

<style scoped lang="less">
    .singer-conpainer{
        display: flex;
        justify-content: center;
        margin-top: 50px;
    }
    img {
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }
    ul {
        padding: 10px;
    }
    li {
        margin-top: 10px;
        height: 50px;
        line-height: 50px;
        border-bottom: 1px solid black;
    }

</style>