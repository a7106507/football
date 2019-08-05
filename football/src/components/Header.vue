<template>
        <header>
            <a href="#" class="iocn-l clear" @click="showmunu(true)">
                <span></span>
            </a>
            <p>
                <router-link to='/hotspot' tag='a' active-class="active">热点</router-link>
                <router-link to='/follow' tag='a' active-class="active">关注</router-link>
            </p>
            
        </header>
</template>
<script>
import {mapActions,mapGetters} from 'vuex'
export default {
    methods:mapActions([
        'showmunu'
    ])
}
</script>

<style>
    html{font-size:15.625vw;}
    header{height:.88rem;background:#0cc440;display:flex;justify-content:center;align-items:center;width:100%;position:fixed;top:0;z-index:99;}
    header .iocn-l{width:.28rem;height:.16rem;border-top:.02rem solid #FFF;border-bottom:.02rem solid #FFF;position:absolute;left:.34rem;}
    header .iocn-l span{height:.02rem;background:#FFF;display:block;margin:.07rem 0;}
    header p{display:flex;border-radius:.24rem;overflow:hidden;}
    header p a{width:1.18rem;font-size:.24rem;line-height:.48rem;display:flex;justify-content:center;color:#a3e9b7;background:#3dd067;}
    header p a.active{background:#64d985;color:#fff;}
</style>

