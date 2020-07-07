<template>
    <div class="index-a">
        <BillList class="index-d" title="今日榜单" :type="2"></BillList>
        <BillList title="新歌速递" :type="1" :size="3"></BillList>
        <swiper></swiper>
        <MusicBill></MusicBill>
        <BillList title="热门榜单" :type="24"></BillList>
    </div>
</template>

<script>
    import BillList from "../components/BillList";
    import MusicBill from "../components/MusicBill";
    import Swiper from "../components/Swiper";


    export default {
        name: "Index",
        components: {
            BillList,
            MusicBill,
            Swiper,

        },



    }
</script>

<style scoped lang="less">
 .index-a {
    background-color: #f5f5f5;
 }
    .index-d {
        margin-bottom: 9px ;
    }
</style>