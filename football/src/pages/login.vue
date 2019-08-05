<template>
    <div id="bg">
    	<div class="login">
        	<h3>登录<a @click="showlogin"></a></h3>
            <form>
            	<input type="tel" placeholder="手机号" v-model="user">
                <input type="text" placeholder="密码" v-model="pass">
                <p>没有账号？点击此处立即<a @click="showlogin(false),showpost(true)">注册</a></p>
                <input type="submit" value="提交" class="button" @click="Login">
                <span>{{msg}}</span>
            </form>
        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    data(){
        return {user:'',pass:'',msg:''}
    },
    methods:{
        showlogin(){
            this.$store.dispatch('showlogin',false)
        },
        showpost(){
            this.$store.dispatch('showlogin',false)
            this.$store.dispatch('showpost',true)
        },
        Login(){
            axios({
                url:'/ajx',
                method:'post',
                data:{user:this.user,pass:this.pass}
            }).then((res)=>{
                console.log(res.data)
                if(res.data == 0){
                    console.log(false)
                    this.$store.dispatch('LoginType',false)
                    this.msg = '用户名密码错误'
                }else{
                    console.log(true)
                    this.$store.dispatch('LoginType',true)
                    this.$store.dispatch('showlogin',false)
                    this.$store.dispatch('userdata',res.data[0])
                    this.$router.push("/user");
                    var d = new Date()
                    d.setDate(d.getDate()+3)
                    document.cookie=`userdata = ${JSON.stringify(res.data[0])};expires=${d}`
                }
            })
        }
    }
}
</script>

<style scoped>
#bg{background:rgba(0,0,0,.25);position:fixed;left:0;right:0;top:0;bottom:0;display:flex;justify-content:center;align-items:center;z-index:100;}
#bg a{cursor: pointer;}
#bg .login{width:5rem;height:4.5rem;background:#fff;border:.01rem solid #919191;border-radius:.05rem;}
#bg .login h3{font-size:.26rem;line-height:.6rem;border-bottom:.01rem solid #ebebeb;text-align:center;color:#1cb950;position:relative;}
#bg .login h3 a{width:.18rem;height:.18rem;background:url(../assets/images/X.jpg) no-repeat;background-size:.18rem .18rem;position:absolute;top:.2rem;right:.24rem;}
#bg .login form{display:flex;flex-direction:column;justify-content:space-around;height:3.73rem;padding:.12rem .41rem 0rem .41rem;box-sizing:border-box;}
#bg .login form input{height:.64rem;border:0;border-bottom:.01rem solid #b2b2b2;cursor: pointer;}
#bg .login form input.button{border:0;background:#0cc440;font-size:.24rem;color:#fff;border-radius:.05rem;}
#bg .login form p{font-size:.24rem;text-align:center;color:#999;}
#bg .login form p a{color:#a3e9b7;}
#bg .login form span{color:red;font-size:.18rem;margin:0;padding:0;text-align:left;display:block; }
</style>

