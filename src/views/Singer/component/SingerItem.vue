<!--<template>-->
<!--    <div class="item-container">-->
<!--        <div class="cover">-->
<!--            <img :src="song_list.pic_small" alt="">-->
<!--        </div>-->
<!--        <ul class="item-list ">-->
<!--            <li v-for="item in list" :key="item.song_id">{{item.author}}</li>-->
<!--        </ul>-->

<!--    </div>-->
<!--</template>-->

<!--<script>-->


<!--    import {getBillList} from "../../../api/music-api";-->

<!--    export default {-->
<!--        name: "SingerItem",-->
<!--        props:{-->
<!--            type:{-->
<!--                type: [String,Number]-->
<!--            },-->

<!--        },-->
<!--        data(){-->
<!--            return {-->
<!--                list:[],-->
<!--                song_list:{}-->
<!--                // billboard:{}-->
<!--            }-->
<!--        },-->
<!--        created(){-->
<!--            getBillList(this.type,3).then(res=> {-->
<!--                this.list=res.list;-->
<!--                // this.billboard=res.billboard;-->
<!--                this.song_list=res.song_list;-->
<!--            })-->
<!--        }-->
<!--    }-->
<!--</script>-->

<!--<style scoped lang="less">-->
<!--    .item-container {-->
<!--        display: flex;-->


<!--        .cover {-->
<!--            width: 100px;-->
<!--            height: 100px;-->
<!--            flex-shrink: 0;-->
<!--            padding: 15px;-->

<!--            img {-->
<!--                width: 100%;-->
<!--            }-->
<!--        }-->

<!--        .item-list {-->
<!--            display: flex;-->
<!--            flex-direction: column;-->
<!--            justify-content: space-around;-->

<!--        }-->

<!--        span {-->
<!--            color: red;-->
<!--        }-->
<!--    }-->
<!--</style>-->


