<template>
<!--    tab切换的子组件-->
    <div>
        <ul class="index-f">
            <li v-for="item in list" :key="item.song_id">
                <div class="index-g">
                    <img :src="item.pic_big" alt="">
                </div>
                    <div class="info">
                        <div class="title1">{{item.title}}</div>
                        <div class="title2">{{item.author}}</div>
                    </div>

            </li>
        </ul>
    </div>
</template>

<script>
    import {getBillList} from "../api/music-api";

    export default {
        name: "MusicList",
        data(){
            return{
                list:[]
            }
        },
        props:{
          type:{
              type:[Number,String],
              default:''
          },
            size:{
                type:[Number,String],
                default:6
            }
        },
        created() {
            getBillList(this.type,6).then(res=>{
                this.list=res.song_list
            })
        }
    }
</script>

<style scoped lang="less">
    .index-f {
          li {
              display: flex;
              .index-g {
                     width: 60px;
                     flex-shrink: 0;
                      img {
                        width: 100%;
                      }
              }
              .info{
                  flex-grow: 1;
                  padding: 3px 10px;
                  display: flex;
                  flex-direction: column;
                  justify-content: space-around;
              }
          }
    }

</style>