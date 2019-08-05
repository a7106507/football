<template>
    <main>
        <div class="usr-msg">
            <img :src='`${config.active+userdata.path}`' class="idpg" @click="photo"/>
            <div class="title">
                <h3>{{userdata.user}}</h3>
                <b>唉唉唉！我不是针对谁！</b>
            </div>
        </div>
        <div class="count">
            <ul>
                <router-link to='/imgbox' active-class="active" tag="li">照片（5）</router-link>
                <router-link to='/userfollow' active-class="active" tag="li">关注（2）</router-link>
                <router-link to='/fans' active-class="active" tag="li">粉丝（11）</router-link>
            </ul>
        </div>
        <router-view></router-view>
    </main>
</template>
<script>
let config = require('../../config/config.js')
import {mapActions,mapGetters} from 'vuex'
export default {
    data(){
        return {config:config}
    },
    computed:mapGetters([
        'userdata'
    ]),
    methods:{
        photo(){
            this.$router.push('/photo')
        }
    }
}
</script>

<style scoped>
        main {margin-top:1.18rem;padding-bottom:.88rem; }
        main .usr-msg{display:flex;text-align:left;}
        main .idpg{width:.93rem;height:.93rem;border-radius:50%;left:.23rem;top:.90rem;margin:0 .23rem;}
        main .title h3{font-size:.28rem;line-height:.54rem;display:block;font-weight:400;width:3rem;}
        main .title b{font-size:.24rem;line-height:.42rem;color:#ccc;display:block;font-weight:400;width:3rem;}
        main .count{display:flex;justify-content:space-between;}
        main .count ul{display:flex;justify-content:space-between;height:.54rem;width:100%;margin-top:.1rem;}
        main .count ul li{font-size:.22rem;color:#999;line-height:.54rem;width:2rem;text-align:center;cursor: pointer;}
        main .count ul li.active{color:#0dc441;border-bottom:.05rem solid #0dc441;}
</style>

