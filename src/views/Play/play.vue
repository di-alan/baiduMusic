<template>
    <div  :style="{minheight:height}">
        <div style="position: fixed;top: 0;left: 0;bottom: 0;right: 0;background-color:#f5f5f5;z-index: -1"></div>
        <Header class="a1"/>
        <p  class="a2" ><img :src="songInfo.pic_big" class="a5"></p>
        <Lrc v-if="songInfo.lrclink" :lrc-link="songInfo.lrclink"/>
        <Caoz :file-link="bitrate.file_link"/>
        <audio   style="display: flex;justify-content:center"
                ref="audio" class="a3" controls :src="bitrate.show_link"></audio>
    </div>
</template>

<script>


    import Header from "./component/Header";
    import Caoz from "./component/Caoz";
    import Lrc from "./component/Lrc";
    import {getSongInfo} from "../../api/music-api";
    import {mapState} from "vuex";


    export default {
        components:{
            Header,
            Caoz,
            Lrc
        },
        name: "play",
        data() {
            return {
                height: 0,
                //歌曲详情
                songInfo:{},
                //歌曲媒体信息
                bitrate: {}
            }
        },
        created() {
            this.height = window.innerHeight + "px";
            getSongInfo(this.$route.params.songId).then(res => {
                // console.log(res);
                this.songInfo=res.songinfo;
                this.bitrate = res.bitrate;
            })
        },
        mounted() {
            this.$refs.audio.addEventListener("timeupdate", () => {
                // eslint-disable-next-line
                this.$store.commit("setCurrentTime", {currentTime: this.$refs.audio.currentTime})
            })
        },
        computed: {
            ...mapState(["process"])
        },
        watch: {
            process() {
                this.$refs.audio.currentTime = this.process;
            }
        }
    }
</script>

<style scoped lang="less">
    .a1 {
        margin-top: 30px;
        /*display: flex;*/
        /*justify-content: space-between;*/
    }
    .a2 {
        display: flex;
        justify-items: center;
        margin-top: 20px;
        margin-bottom: 20px;
        margin-left: 110px;
          img {
              border-radius: 50%;
          }
    }
    .a3 {
        margin-left: 30px;
    }
     .a5 {
         animation: myFirst 6s linear infinite;
     }
    @keyframes myFirst {
        0% {
            transfrom: rotate(0deg);
        }

        100% {
            transform: rotate(360deg);
        }
    }

</style>