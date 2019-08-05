<template>
     <div class="fans">
            <div class="fans-msg">
                <div class="usr-msg">
                    <div class="idpg" style=""></div>
                    <div class="title">
                        <h3>谢谢苍蝇哥！</h3>
                        <b>实打实大所多阿萨德阿！</b>
                    </div>
                </div>
                <div class="option">
                    <a>私聊</a>
                    <a>删除</a>
                </div>
            </div>
        </div>
</template>
<style scoped>
.usr-msg{display:flex;}
.idpg{width:.93rem;height:.93rem;border-radius:50%;border:1px solid #aaa;left:.23rem;top:.90rem;margin:0 .23rem;background:url(../assets/images/yashi.jpg) no-repeat center;background-size:.93rem .93rem;}
.title h3{font-size:.28rem;line-height:.54rem;display:block;font-weight:400;width:3rem;text-align:left;}
.title b{font-size:.24rem;line-height:.42rem;color:#ccc;display:block;font-weight:400;width:3rem;text-align:left;}
.fans .fans-msg{display:flex;width:100%;justify-content:space-between;align-items:center;margin-bottom:.2rem;}
.fans .fans-msg .option{font-size:.2rem;margin-right:.4rem;}
.fans .fans-msg .option a{display:block;line-height:.4rem;cursor: pointer;color:#999;}
.fans .fans-msg .option a:active{color:red;}
</style>

