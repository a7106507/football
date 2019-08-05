import axios from "../axios";

let actions = {
    onoff({state,commit},payload){
        commit('increment',payload)
    },
    showlogin({state,commit},payload){
        commit('showlogin',payload)
    },
    showpost({state,commit},payload){
        commit('showpost',payload)
    },
    LoginType({state,commit},payload){
        commit('LoginType',payload)
    },
    showmunu({state,commit},payload){
        commit('showmunu',payload)
    },
    userdata({state,commit},payload){
        commit('userdata',payload)
    }
}
export default actions