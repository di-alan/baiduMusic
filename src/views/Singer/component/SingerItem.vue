<template>
    <div class="item-container">
            <div class="cover">
                <img :src="obj.avatar_big" alt="">
            </div>
            <span>{{obj.name}}</span>
    </div>
</template>

<script>


    import {getSingerList} from "../../../api/music-api";

    export default {
        name: "SingerItem",
        props: {
            type: {
                type: Number
            },

        },
        data() {
            return {

                obj: {}
                // song_list:{}
                // billboard:{}
            }
        },
        created() {
            getSingerList(this.type).then(res => {
                // this.list=res.list;
                // console.log(res)
                // this.billboard=res.billboard;
                this.obj = res;
            })
        }
    }
</script>

<style scoped lang="less">
    .item-container {
        display: flex;

        .cover {
            width: 100px;
            height: 100px;
            flex-shrink: 0;
            padding: 15px;

            img {
                width: 100%;
            }
        }

        span {
            line-height: 130px;
            color: red;
        }
    }
</style>


