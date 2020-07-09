<template>
    <div class="d1">
        <van-icon v-show="!like" name="like-o" @click="enshrine" />
        <van-icon v-show="like" name="like" color="red" @click="enshrine"/>
        <a class="d3" href="#" download="">
            <van-icon name="down" /></a>
    </div>

</template>

<script>
    import  {Dialog} from "vant";
    import {Toast}  from "vant";

    export default {
        name: "Caoz",
         data(){
            return {
                like:false
            }
         },
        methods:{
            enshrine(){
                if (this.like){
                    Dialog.confirm({
                        title: '你不喜欢了？',
                        message: '那就取消吧',
                    })
                        .then(() => {
                            this.like=!this.like
                        })
                        .catch(() => {
                            // on cancel
                        });
                }else {
                    this.like=!this.like
                    Toast.success('收藏成功');
                }

            }
        }
    }
</script>

<style scoped lang="less">
     .d1 {
         display: flex;
         justify-content: space-between;
         padding: 20px 40px ;
     }
    .d3 {
        color: #999999;
    }

</style>