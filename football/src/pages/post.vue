<template>
     <div id="bg">
    	<div class="login">
        	<div class="login-t">
            	<a @click="showpost" class="login-t-l">取消</a>
                <a href="#" class="login-t-r" @click="postdata">确定</a>
            </div>
            <form>
            	<input type="text" placeholder="手机号" v-model="phone">
                <input type="text" placeholder="密码" v-model="pass">
                <input type="text" placeholder="用户名" v-model="user">
                <span>{{msg}}</span>
            </form>
        </div>
    </div>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    data(){
        return {phone:'',pass:'',user:'',msg:''}
    },
    methods:{
        showpost(){
            this.$store.dispatch('showpost',false)
        },
        postdata(){
            this.$axios({
                url:'/post',
                method:'post',
                data:{user:this.user,pass:this.pass}
            }).then((res)=>{
                console.log(res.data[0])
                if(res.data == 0){
                    this.msg = '账号名重复'
                }else{
                    alert('注册成功！')
                    this.$store.dispatch('LoginType',true)
                    this.$store.dispatch('showpost',false)
                    this.$store.dispatch('userdata',res.data[0])
                    this.$router.push("/user")
                }
            })
        }
    }
}
</script>


<style>
#bg{background:rgba(0,0,0,.25);position:fixed;left:0;right:0;top:0;bottom:0;display:flex;align-items:flex-end;z-index:100;}
#bg .login{height:4.01rem;width:100%;background:#fff;border-top:.01rem solid #929292;}
#bg .login .login-t a{cursor: pointer;}
#bg .login .login-t{border-bottom:.01rem solid #ebebeb;height:.72rem;}
#bg .login .login-t .login-t-l{float:left;font-size:.24rem;line-height:.72rem;margin:0 .2rem;color:#acacac;}
#bg .login .login-t .login-t-r{float:right;font-size:.24rem;line-height:.72rem;margin:0 .2rem;color:#13c648;}
#bg .login form{display:flex;flex-direction:column;justify-content:space-between;height:3.28rem;padding:.3rem .41rem .51rem;box-sizing:border-box;}
#bg .login form input{font-size:.24rem;line-height:.64rem;border:0;border-bottom:.01rem solid #b2b2b2;}
#bg .login form span{color:red;font-size:.18rem;text-align:left;}
</style>

