<template>
    <footer>
    	<ul>
        	<li>
                <router-link to="/home" tag='a' active-class="te">
                    <i class="iocn-1"></i>
            		<p>首页</p>
                </router-link>
            </li>
            <li>
                <router-link to="/search" tag='a' active-class="te">
                    <i class="iocn-2"></i>
            		<p>发现</p>
                </router-link>
            	<!-- <a>
                	<i class="iocn-2"></i>
            		<p>发现</p>
                </a> -->
            </li>
		</ul>
        <ul>            
            <li>
                 <!-- <router-link to="/user" tag='a' active-class="te">
                    <i class="iocn-3"></i>
            		<p>我的</p>
                </router-link> -->
                <a @click="showlogin">
                    <i class="iocn-3"></i>
            		<p>我的</p>
                </a>
            </li>
            <li>
            	<a @click="Loginout">
                	<i class="iocn-4"></i>
            		<p>退出</p>
                </a>
            </li>
        </ul>
        <a class="photo"></a>
    </footer>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    methods:{
        showlogin(){
           if(this.$store.state.LoginType){
               console.log(1)
               this.$router.push("/user");
           }else{
               console.log(2)
               this.$store.dispatch('showlogin',true)
           }
        },
        Loginout(){
            this.$store.dispatch('LoginType',false)
            this.$router.push("/home");
            var d = new Date()
            d.setDate(d.getDate()-1)
            document.cookie=`userdata = 123;expires=${d}`
        }
    }
}
</script>

<style>
footer{width:100%;height:.87rem;background:#FFF;border-top:.01rem solid rgba(0,0,0,.15);position:fixed;bottom:0;left:0;display:flex;justify-content:space-between;}
footer ul{width:2.7rem;display:flex;justify-content:space-between;margin-top:12px;}
footer ul li{flex:1;}
footer ul li a{display:block;text-align:center;cursor: pointer;}
footer ul li a p{display:block;font-size:.24rem;color:#ccc;line-height:.45rem;}
footer ul li a i{display:block;width:.32rem;height:.32rem;background:url(../assets/images/iocn.png) no-repeat;background-size:.64rem 1.28rem;margin:0 auto;}
footer ul li a i.iocn-2{background-position:0 -.32rem;}
footer ul li a i.iocn-3{background-position:0 -.64rem;}
footer ul li a i.iocn-4{background-position:0 -.96rem;}
footer ul li a.te i.iocn-1{background-position:-.32rem 0;}
footer ul li a.te i.iocn-2{background-position:-.32rem -.32rem;}
footer ul li a.te i.iocn-3{background-position:-.32rem -.64rem;}
footer ul li a.te i.iocn-4{background-position:-.32rem -.96rem;}
footer ul li a.te p{color:#0dc441;}
footer .photo{width:1.01rem;height:1.01rem;border-radius:50%;border:2px solid #dedede;position:absolute;left:0;right:0;margin:auto;bottom:0;background:#fff url(../assets/images/photo.png) no-repeat center;background-size:.6rem .54rem;}
</style>

