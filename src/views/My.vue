<template>
    <div>
      我的{{useInfo.name}}{{isLogin.play}}
        <button @click="logout">退出登录</button>
        <button @click="logout1">修改信息</button>
        <ul>
            <li v-for="(item,index) in zhengXu" :key="index">{{item}}</li>
        </ul>
        <ul>
            <li v-for="(item,i) in billList" :key="i">{{item.title}}</li>
        </ul>
        {{name}}
    </div>
</template>

<script>

    import {createNamespacedHelpers, mapGetters,mapState} from 'vuex';
    const {mapState:mapUserState}= createNamespacedHelpers("user")
    export default {
        name: "My",
        created() {
            //在任何地方都可以通过this.$store拿到数据
            //推荐我们用计算属性来获取vuex的值
            // eslint-disable-next-line
            // let obj = mapState ({useInfo:"useInfo",isLogin:"isLogin"});
            // eslint-disable-next-line
            // debugger
            // console.log(this.state.useInfo.name);
            this.$store.dispatch("setBillTypeList",{type:2})
        },
        computed:{
            // vuex  都要写在计算属性里面
            // useInfo(){
            //     return this.$store.state.useInfo.name
            // },
            // isLogin(){
            //     return this.$store.state.useInfo.play
            // },
            //方法一
            // ...mapState ({useInfo:"useInfo",isLogin:"isLogin"})
            //方法二
            ...mapState (["useInfo","isLogin","billList"]),
            // name(){
            //     return this.$store.state.user.name
            // },
            ...mapUserState(["name"]),
            // list2(){
            //     return this.$store.getters.zhengXu
            // },
            ...mapGetters(["zhengXu"]),


        },
        methods:{
            logout(){
                //触发mutation
                //第一个是类型
                //第二个参数是payload 就是我们姚给这个mutation的传过来的值
                // this.$store.commit("changeIsLogin",{isLogin:false}
                // )
                this.$store.commit({
                    type:"changeIsLogin",
                    isLogin:false
                })
            },
            logout1(){
                this.$store.commit({
                    type:"setUseInfo",
                    useInfo:{name:"么么哒"}
                });
                //
                this.$store.commit("user/changeName",{name:"哎呀"})

            }
        }

    }
</script>

<style scoped>

</style>