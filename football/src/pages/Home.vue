<template>
    <div class="home">
        <Swiper :banner='Banner'></Swiper>
        <iconnav></iconnav>
        <List></List>
    </div>
</template>
<script>
import Swiper from './Swiper'
import List from './List'
import iconnav from './icon-nav'
export default {
    data(){
        return {Banner:[]}
    },
    components:{
        Swiper,List,iconnav
    },
    mounted(){
        axios({
            url:'/getbanner'
        }).then((res)=>{
            console.log(res)
            this.Banner = res.data
        })
    }
}
</script>

