<template>
    <nav>
    	<router-link to='/home' tag="a" active-class="active">足球现场</router-link><router-link to='/list' tag="a" active-class="active">足球生活</router-link><router-link to='/hotspot' tag="a" active-class="active">足球美女</router-link>
    </nav>
</template>
<style>
nav{height:.7rem;width:100%;border-bottom:.01rem solid rgba(0,0,0,.15);background:rgba(255,255,255,.8);display:flex;justify-content:space-between;position:fixed;top:.88rem;left:0;z-index:99;}
nav a{font-size:.26rem;line-height:.66rem;flex:1;display:flex;justify-content:center;height:.66rem;color:#666;}
nav a.active{border-bottom:0.05rem solid #0dc441;color:#0dc441;}
</style>

