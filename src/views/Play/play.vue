<template>
    <div>
        <Header class="a1"/>
        <p class="a2" ><img :src="songInfo.pic_big"></p>
        <Lrc v-if="songInfo.lrclink" :lrc-link="songInfo.lrclink"/>
        <Caoz :file-link="bitrate.file_link"/>
        <audio ref="audio" class="a3" controls :src="bitrate.show_link"></audio>
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
                songInfo:{},
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
        // mounted() {
        //     this.$refs.audio.addEventListener("timeupdate", () => {
        //         this.$store.commit("setCurrentTime", {currentTime: this.$refs.audio.currentTime})
        //     })
        // },
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
              border-radius: 20px;
          }
    }
    .a3 {
        margin-left: 30px;
    }

</style>