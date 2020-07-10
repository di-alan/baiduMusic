<template>
  <div>
      <div class="searchSingerSong-container">
          <div class="searchSingerSong" v-for="(item,index) in list" :key="index">
              <!-- 图片-->
              <img :src="item.artistpic" alt="">
              <!--歌词-->
              <p>{{item.albumname}}</p>
          </div>
      </div>
  </div>

</template>

<script>
    import {getSearch} from "../../../api/music-api";

    export default {
        name: "SearchItem",
        data(){
            return {
                list:[]
            }
        },
        props: {
            query: String
        },
        created() {
            // console.log(this.query)
            getSearch(this.query).then(res => {
                // console.log(res)

                this.list=res.album
            })
        }

    }

</script>

<style scoped lang="less">

    .searchSingerSong-container {
        display: flex;
        flex-direction: column;

        .searchSingerSong{
            display: flex;
            padding: 10px 2px;
            box-sizing: border-box;
            img {
                display: flex;
                flex-direction: row;
                justify-content: center;
                width: 50%;
            }

            p {
                display: flex;
                flex-direction: column;
                justify-content: center;
                flex-wrap: wrap;
                padding: 1px 15px;
                color: #42b983;
                flex-shrink: 0.5;
                font-size: 14px;
            }
        }

    }

</style>