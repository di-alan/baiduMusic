<template>
    <div>
        <!-- 榜单 -->
        <router-link :to="'/bill/BillDetail/'+item" v-for="item in billTypeList" :key="item">  <BillItem  :type="item"></BillItem></router-link>
    </div>
</template>

<script>
      // 导入BillItem 组件
    import BillItem from "./component/BillItem";

    export default {
        name: "Bill",
        //声明组件
        components: {
            BillItem
        },
        data() {
            return {
                billTypeList: [1, 2, 11, 22, 23, 24]
            }
        }
    }
</script>

<style scoped lang="less">


</style>