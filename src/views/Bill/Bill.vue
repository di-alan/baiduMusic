<template>
    <div>
        <BillItem v-for="item in billTypeList" :key="item" :type="item"></BillItem>
    </div>
</template>

<script>

    import BillItem from "./component/BillItem";

    export default {
        name: "Bill",
        components:{
            BillItem
        },
        data(){
            return {
                billTypeList:[1,2,11,22,23,24]
            }
        }
    }
</script>

<style scoped lang="less">


</style>