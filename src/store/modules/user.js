export default {
    //名命空间
    namespaced:true,
    state:{
            name:"小狄",
            age:18
    },
    mutations:{
        changeName(state,payload){
            state.user=payload.user;
        }
    },
    actions:{},
    getter:{}
}