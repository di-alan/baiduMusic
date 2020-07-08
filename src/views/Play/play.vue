<template>
    <div>
        <Header class="a1"/>
        <p><img src="http://qukufile2.qianqian.com/data2/pic/140d09665d1c204efe00973c3e16282c/612757841/612757841.jpg@s_2,w_240,h_240"></p>
        <p>歌词</p>
        <p>歌词</p>
        <p>歌词</p>
        <p>歌词</p>
        <p>歌词</p>
        <p>歌词</p>
        <Caoz/>
        <audio controls src="http://audio04.dmhmusic.com/71_53_T10052963112_128_4_1_0_sdk-cpm/cn/0207/M00/AB/E6/ChR47F358H2ATBCZACyoAk8TiUM352.mp3?xcode=9d74883c9588dd035dd20295708d531ba73e989"></audio>
    </div>
</template>

<script>


    import Header from "../Search/component/Header";
    import Caoz from "../Search/component/Caoz";

    export default {
        components:{
            Header,
            Caoz
        },
        name: "play"
    }
</script>

<style scoped lang="less">
    .a1 {

    }

</style>