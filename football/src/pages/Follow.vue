<template>
    <div class="follow">
        <nav> 
            <form>
                <input type="text" class="put1" placeholder="请输入你的昵称">
                <input type="submit" value="搜索" class="put2">
            </form>
        </nav>
        <main>
            <div class="main-t">
                <div class="idpg"></div>
                <div class="title">
                    <h3>断水流大师兄！</h3>
                    <a href="#" class="active">关注</a>
                    <b>唉唉唉！我不是针对谁！</b>
                </div>
            </div>
            <div class="main-t">
                <div class="idpg"></div>
                <div class="title">
                    <h3>断水流大师兄！</h3>
                    <a href="#">关注</a>
                    <b>唉唉唉！我不是针对谁！</b>
                </div>
            </div>              
        </main>
    </div>
</template>
<style scoped>
nav{position:fixed;left:0;right:0;top:.88rem;height:.65rem;padding:.08rem .1rem .09rem .1rem;box-sizing:border-box;border-bottom:1px solid #cdcdcd;background:#fff;z-index:99;}
nav form{display:flex;align-items:center;justify-content:space-between;font-size:.24rem;line-height:.46rem;}
nav .put1{width:5.15rem;height:.46rem;border-radius:10px;border:1px solid #aaa;font-size:.24rem;}
nav .put2{border:0;width:.91rem;height:.46rem;font-size:.24rem;line-height:.46rem;border-radius:10px;background:#0dc441;color:#fff;}
input::-webkit-input-placeholder{color:#aab2bd;font-size:.24rem;}
input::-moz-placeholder{color:#aab2bd;font-size:.24rem;}
main{padding:.6rem 0 .88rem;}
main .main-t{display:flex;flex-wrap:wrap;justify-content:space-between;border-top:.1rem solid #f1f1f1;border-bottom:.01rem solid #e5e5e5;}
main .idpg{width:.93rem;height:.93rem;border-radius:50%;border:1px solid #aaa;left:.23rem;top:.90rem;background:url(../assets/images/dashixiong.jpg) no-repeat center;background-size:.93rem .93rem;margin:.05rem 0 0 .23rem;}
main .title{display:flex;justify-content:space-between;width:4.8rem;flex-wrap:wrap;margin-right:.24rem;}
main .title h3{font-size:.28rem;line-height:.52rem;font-weight:400;}
main .title b{font-size:.24rem;line-height:.40rem;color:#ccc;font-weight:400;}
main .title a{font-size:.24rem;line-height:.36rem;padding:0 .15rem;background:#e5e5e5;display:block;height:.36rem;margin-top:.08rem;border-radius:.1rem;color:#fff;}
main .title a.active{background:#0dc441;}
</style>

