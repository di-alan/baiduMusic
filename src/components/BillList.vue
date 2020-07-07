<template>
    <div class="index-b">
        <h3>{{title}}
          <router-link :to="'/index/more/'+type"><span>更多</span></router-link>
        </h3>
        <div>
            <ul class="index-c">
                <li v-for="item in songList" :key="item.song_id">
                    <img :src="item.pic_big" alt="">
                    <div>{{item.title}}</div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {getBillList} from "../api/music-api";

    export default {
        name: "BillList",
        props:{
            title:{
                type:String,
                default:"榜单"
            },
            type:{
                type:Number,


            },
            size :{
                type:Number,
                default: 6
            }
        },
        data(){
            return{
                songList:[]
            }
        },
        created() {
            // this.$http.get(`/v1/restserver/ting?method=baidu.ting.billboard.billList&type=${this.type}&size=${this.size}&offset=0`)
            //     .then(res=>{
            //         this.songList=res.song_list;
            //     })
            getBillList(this.type,this.size).then(res=>{
                        this.songList=res.song_list;
                    })
        }
    }

</script>

<style scoped lang="less">
.index-b {
    padding: 5px 15px;
    background-color: whitesmoke;
    h3 {
        margin: 10px 0;

        span {
            float: right;
            font-size: 14px;
            color: #999999;
        }
    }
    .index-c {
        display: flex;
        flex-wrap: wrap;
        li {
            width:calc(100% / 3) ;
            box-sizing: border-box;
            padding: 5px;
            img {
                width: 100%;
            }
        }
    }
}

</style>