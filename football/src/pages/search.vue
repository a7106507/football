<template>
    <div class="search">
        <nav> 
            <form>
                <input type="text" class="put1" placeholder="jsonp请求百度搜索数据" @input="serch()" v-model="value">
                <input type="button" value="搜索" class="put2" @click="serchbd()">
            </form>
        </nav>
        <main>
            <ul>
                <li
                 v-for="(item,index) in scdata" :key="index" 
                 @click="col(item,index)"
                 :class="{active:index == vueindex}"
                 >{{item}}</li>
                <!-- <li>{{scdata}}</li>
                <li>足球王子</li>
                <li>英国足球</li>
                <li>最近足球1000年</li>
                <li>哈哈足球</li>
                <li>我是足球迷</li>
                <li class="te">点击选项快速搜索</li> -->
            </ul>
        </main>
    </div>
</template>
<script>
export default {
    data(){
        return {value:'',scdata:[],vueindex:null}
    },
    methods:{
        serch(){
            let url = `https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=${this.value}&cb=cc`
            var jsp = document.createElement("script");
            console.log(jsp)
			jsp.id = "jsonp";
			jsp.src = url;
            console.log(document.body)
            document.body.appendChild(jsp);
            window.cc=(res)=>{
                this.scdata = res.s
                var jsonp = document.getElementById("jsonp");
				jsonp.remove();
            }
            this.vueindex = null
        },
        col(item,index){
            this.vueindex = index
            // event.target.className = 'active'
            // console.log(item)
            this.value = item;
            window.open(`http://www.baidu.com/s?wd=${this.value}`)
            var that = this
            setTimeout(function(){
                console.log(1)
                that.scdata = []
            },600)
        },
        serchbd(){
            window.open(`http://www.baidu.com/s?wd=${this.value}`)
        }
    }
}
</script>
>
<style scoped>
nav{position:fixed;left:0;right:0;top:.88rem;height:.65rem;padding:.08rem .1rem .09rem .1rem;box-sizing:border-box;border-bottom:1px solid #cdcdcd;background:#fff;}
nav form{display:flex;align-items:center;justify-content:space-between;}
nav .put1{width:5.15rem;height:.46rem;border-radius:10px;border:1px solid #aaa;font-size:.24rem;}
nav .put2{border:0;width:.91rem;height:.46rem;font-size:.24rem;line-height:.46rem;border-radius:10px;background:#0dc441;color:#fff;cursor: pointer;margin-left:.1rem;}
input::-moz-placeholder{color:#aab2bd;}
main ul{padding-top:.37rem;position:fixed;}
main ul li{margin:0;font-size:.22rem;line-height:.64rem;border-bottom:.01rem solid #d9d9d9;text-indent:.23rem;color:#a7a7a7;width:6.4rem;}
main ul .active {background:#0dc441;color:#fff;}
</style>

