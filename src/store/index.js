import Vue from 'vue'
import Vuex from 'vuex'
import {getBillList, getSinger} from "../api/music-api";
import user from "./modules/user";
   //专为vue.js开发的状态管理模式，  采用集中式存储管理所有组件的状态，
   // 相应的规则保证状态以一种可预测的方式发生变化。
Vue.use(Vuex)
 //vuex的值 一刷新 就重新初始化
export default new Vuex.Store({
  //状态（数据）
  //在任何地方都可以通过this.$store.state拿到数据
  //推荐我们用计算属性来获取vuex的值
  state: {
     billList:[],
    useInfo:{
      name:"大庆"
    },
    isLogin:{
      play:"爱你"
    } ,
    list:[1,2,9,6,5,9,3] ,
      // 播放进度
      currentTime: 0,
      // 要设置的时间
      process: null,
      billTypeList:[]

  },
  //修改vuex中的数据
  mutations: {
    //在这里面写的是函数
    //参数
    // 1.state  当前得到state
    //2. mutations是


    //注意：
    //他是一个纯函数   不能有异步操作
    changeIsLogin(state,payload ){
            state.isLogin=payload.isLogin;
            // state.useInfo=payload.useInfo
    }   ,
    setUseInfo (state,payload ){
          state.useInfo=payload.useInfo 
    }  ,

     setBillList(state,payload) {
          state.billList= payload.billList
      },
      setCurrentTime(state,payload) {
          state.currentTime= payload.currentTime
      },
      setProcess(state,payload) {
          state.process= payload.process
      },
      setBillTypeList(state,payload){
          state.billTypeList= payload.billTypeList
      }
  },

  //计算属性，对state数据进行派生
  getters:{
    //定义成函数的形式返回至是getters的值
     zhengXu(state){
       return state.list.sort((a,b) => {
         return  a-b
       } )
     },
     daoXu(state){
         return state.list.sort((a,b)=>{
             return  b-a
      })
    }
  },



    //可以异步操作
  actions: {
      //参数
      //1. context  上下文 可以获取state，可以触发action 也可以获取getters
      //2. 调用 actions时传递来的参数

      setBillList ({commit},{type}){
            getBillList(type).then(res=>{
                //请求了榜单列表的数据
                //触发mutations 修改数据
              commit("setBillList",{billList:res.list})   ;
              
            })
      },
      setBillTypeList ({commit},{tinguid}){
          getSinger(tinguid).then(res=>{
              //触发mutations 修改数据
              commit("setBillTypeList",{ billTypeList:res})   ;

          })
      }
  },
  modules: {
        user
  }
})
