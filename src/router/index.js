import Vue from 'vue'
import VueRouter from 'vue-router'
import IndexLayout from "../layout/IndexLayout";
import Index from "../views/Index";

Vue.use(VueRouter)

  const routes = [
    {
      path:"/",
      redirect:"/index"
    },
    {
    path: '/index',
    component: IndexLayout,
    children:[
      {
        path:"",
        component:Index
      },
      {
        path:"bill",
        component: () => import( '../views/Bill/Bill.vue'),
        meta:{
          title:"榜单"
        }
      },
      {
        path:"/bill/BillDetail/:type",
        component: () => import( '../views/Bill/component/BillDetail'),
        meta:{
          title:"榜单详情"
        }
      },

      {
        path:"my",
        component: () => import( '../views/My.vue'),
        meta:{
          title:"我的"
        }
      },
      {
        path:"search",
        component: () => import( '../views/Search/Search.vue'),
        meta:{
          title:"搜索"
        }
      },
      {
        path:"singer",
        component: () => import( '../views/Singer/Singer.vue'),
        meta:{
          title:"歌手"
        }
      },
      {
        path:"search",
        component: () => import( '../views/Search/Search.vue'),
        meta:{
          title:"搜索"
        }
      },
      {
        path:"/singer/SingerDetail/:tinguid",
        name: "SingerDetail",
        component: () => import( '../views/Singer/component/SingerDetail'),
        meta:{
          title:"歌手详情"
        }
      },

      {
        path:"more/:type/:title",
        name:"MusicMore",
        component: () => import( '../views/MusicMore.vue'),
        meta:{
          title:"更多音乐"
        }
      },
    ]
  },
    {
      path:"/play/:songId",
      // name:"MusicMore",
      component: () => import( '../views/Play/play.vue'),
      meta:{
        title:"歌曲播放"
      }
    },


  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
