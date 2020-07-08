<template>
    <div>
        <SingerItem v-for="item in billTypeList" :key="item" :type="item "></SingerItem>

    </div>
</template>

<script>

    import SingerItem from "./component/SingerItem";

    export default {
        name: "Singer",
        components:{
            SingerItem
        },
        data(){
            return {
                billTypeList:[2517 ,7994,1091,45561,2507,245815,1077,1204,1117,82366]
            }
        }
    }
</script>

<style scoped>

</style>