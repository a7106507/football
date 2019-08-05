<template>
    <div class="follow">
            <div class="follow-msg">
                <div class="usr-msg">
                    <div class="idpg"></div>
                    <div class="title">
                        <h3>断水流大师兄！</h3>
                        <b>唉唉唉！我不是针对谁！</b>
                    </div>
                </div>
                <span>取消关注</span>
            </div>
            <div class="follow-msg">
                <div class="usr-msg">
                    <div class="idpg" style=""></div>
                    <div class="title">
                        <h3>断水流大师兄！</h3>
                        <b>唉唉唉！我不是针对谁！</b>
                    </div>
                </div>
                <span>取消关注</span>
            </div>
        </div>
</template>
<style scoped>
 .usr-msg{display:flex;}
 .idpg{width:.93rem;height:.93rem;border-radius:50%;border:1px solid #aaa;left:.23rem;top:.90rem;margin:0 .23rem;background:url(../assets/images/yashi.jpg) no-repeat center;background-size:.93rem .93rem;}
 .title h3{font-size:.28rem;line-height:.54rem;display:block;font-weight:400;width:3rem;}
 .title b{font-size:.24rem;line-height:.42rem;color:#ccc;display:block;font-weight:400;width:3rem;}
 .follow .follow-msg{display:flex;width:100%;justify-content:space-between;align-items:center;margin-bottom:.2rem;margin-top:.1rem;}
 .follow .idpg{background:url(../assets/images/dashixiong.jpg) no-repeat center;background-size:.93rem .93rem;}
 .follow span{font-size:.18rem;display:block;display:block;background:#0dc441;padding:.1rem .32rem;height: .24rem;border-radius:.08rem;color:#fff;cursor: pointer;margin-right:.4rem;}
</style>
