<template>
    <div class="index-b">
        <h3>热门榜单<router-link  :to="'/index/more/'+type"> <span>更多</span></router-link></h3>
        <van-tabs v-model="active">
            <van-tab title="热歌榜">
                <MusicList :type="2" class="music-list"></MusicList>
            </van-tab>
            <van-tab title="新歌榜">
                <MusicList :type="1" class="music-list"></MusicList>
            </van-tab>
            <van-tab title="king 帮">
                <MusicList :type="24"  class="music-list"></MusicList>
            </van-tab>
        </van-tabs>
    </div>
</template>

<script>

    import MusicList from "./MusicList";
    import {getBillList} from "../api/music-api";

    export default {
        components:{MusicList},
        name: "MusicBill",
        data(){
                return {
                    active: 2,
                    songList:[]
                }
        },
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
    }
   .music-list {
       margin-top: 15px;
   }

</style>