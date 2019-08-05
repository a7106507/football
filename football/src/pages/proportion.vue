<template>
<div class="proportion">
    <div>
        <div>
            <input type="file" id="imgFile">
        </div>
        <div style="position: absolute;left: 300px;top: 0;display: inline-block">
            <img id="demoImg"   alt="">
        <div style="border: 1px solid #4fb8e3;position: absolute;left: 0;top: 0;z-index: 1000;box-sizing:border-box;" id="chooseBox">
        </div>
    </div>
    <div style="position: absolute;left: 700px;top: 0">
        <canvas id="myCan" width="150" height="150"></canvas>
        <button id="cut">裁剪文件</button>
        <button id="btn">后台返回获取裁剪后的文件</button>
        <img id="returnImg" alt="" src=''/>
    </div>
</div>
</template>
>