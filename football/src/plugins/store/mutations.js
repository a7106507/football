let mutations = {
    increment(state,payload){
        state.onoff = payload
    },
    showlogin(state,payload){
        state.showlogin = payload
    },
    showpost(state,payload){
        state.showpost = payload
    },
    LoginType(state,payload){
        state.LoginType = payload
    },
    showmunu(state,payload){
        state.showmunu = payload
    },
    userdata(state,payload){
        state.userdata = payload
    }


}
export default mutations