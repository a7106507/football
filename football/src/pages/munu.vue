<template>
    <!-- <div id="bg" @click.stop="show">
        <div class="userbar" @click.stop="">
            <img src="../assets/images/dashixiong.jpg">
            <dl>
                <dt>断水流大师兄！</dt>
                <dd>唉唉唉！我不是正对谁！</dd>
            </dl>
            <ul>
                <li>足球现场</li>
                <li>足球生活</li>
                <li>足球美女</li>
            </ul>
        </div>
    </div> -->
    <div id="bg" @click.stop="show">
        <div class="userbar" @click.stop=""  v-if="!this.$store.state.LoginType">
            <img src="../assets/images/timg.jpg">
            <dl>
                <dt @click="login">请登录</dt>
                <dd></dd>
            </dl>
        </div>
        <div class="userbar" @click.stop="" v-if="this.$store.state.LoginType">
            <img :src="`${config.active+UserData.path}`">
            <dl>
                <dt>{{UserData.user}}</dt>
                <dd v-if="UserData.count">{{UserData.count}}</dd>
                <dd v-if="!UserData.count">这个人很懒什么都没写！</dd>
            </dl>
            <ul>
                <li>足球现场</li>
                <li>足球生活</li>
                <li>足球美女</li>
            </ul>
        </div>
    </div>
</template>
<script>
let config = require('../../config/config')
export default {
    data(){
        return {config:config}
    },
    methods:{
        show(){
            this.$store.dispatch('showmunu',false)
        },
        login(){
            this.$store.dispatch('showmunu',false)
            this.$store.dispatch('showlogin',true)
        }
    },
    props:['UserData']
}
</script>

<style>
#bg{background:rgba(0,0,0,.3);position:fixed;left:0;right:0;top:0;bottom:0;text-align:center;}
#bg .userbar{width:3.6rem;height:100%;background:rgba(27,73,40,.7);box-sizing:border-box;padding:.35rem 0;}
#bg .userbar img{border-radius:50%;width:1.6rem;height:1.6rem;align-self:center;}
#bg .userbar dt{font-size:.24rem;line-height:.6rem;border-top:.01rem solid #4d7c5a;border-bottom:.01rem solid #4d7c5a;color:#fff;background:rgba(13,196,65,.4);cursor:pointer;}
#bg .userbar dd{font-size:.24rem;line-height:.6rem;text-align:center;color:#a6bdab;border-bottom:.01rem solid #4d7c5a;}
#bg .userbar ul li{font-size:.24rem;line-height:.6rem;color:#fff;border-bottom:.01rem solid #648d6f;cursor:pointer;}
</style>

