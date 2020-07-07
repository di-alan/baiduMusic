<template>
    <div>
        <SingerItem v-for="item in billTypeList" :key="item" :type="item"></SingerItem>
    </div>
</template>

<script>

    import SingerItem from "./component/SingerItem";

    export default {
        name: "Singer",
        components:{
            SingerItem
        },
        // data(){
        //     return {
        //         billTypeList:[1,2,11,22,23,24]
        //     }
        // }
    }
</script>

<style scoped>

</style>