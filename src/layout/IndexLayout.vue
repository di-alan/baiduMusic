<template>
    <div>
<!--   头部导航栏     -->
        <header>
            <ul class="navbar">
                <li><router-link to="/index"><img class="icon" src="../assets/logo-ea5.png"></router-link></li>
                <li><router-link to="/index/singer">歌手</router-link></li>
                <li><router-link to="/index/bill">榜单</router-link></li>
                <li><router-link to="/index/my">我的</router-link></li>
                <li><router-link to="/index/search">搜索</router-link></li>
            </ul>
        </header>
<!--   区域渲染     -->
        <section>
            <router-view></router-view>
        </section>
    </div>
</template>

<script>
    export default {
        name: "IndexLayout",

    }
</script>

<style scoped lang="less">
   .navbar{
        display: flex;
        justify-content: space-around;
        height: 50px;
        font-size: 16px;
        background-color: #f9f9f9;
        color: #999;
        /*line-height: 50px;*/
        align-items: center;
       li {
           width: 20%;
           text-align: center;
       }
       .icon {

           height: 28px;

       }
       a {
           color: #999;
           text-decoration: none;
       }
       .router-link-active {
           color: hotpink
       }
   }
</style>