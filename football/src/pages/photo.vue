<template>
    <div class="photo">
         <div id="bigbox" ref="bigbox">
            <p v-show="showhead">点击上传图片</p>
            <input type="file" id="imgFile" @change="imgFile" v-show="!box2state">
            <div id="photo-box2" v-show="box2state">
                <img id="demoImg" alt="" ref="demoImg"/>
                <div id="chooseBox" ref="chooseBox" @touchstart="Boxmove" v-show="showhead"></div>
            </div>
        </div>
        <canvas id="myCan" width="150" height="150" ref="myCan"></canvas>
        <div class="photo-box-upimg">
            <div class="photo-box-input">
                <button id="cut" @click="cutImg" ref="cut">{{cutmsg}}</button>
                <button id="btn" @click="upImg">上传图片</button>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {box2state:false,imgwidth:null,imgheight:null,csale:null,imgData:null,upData:{},onoff:0,showhead:true,cutmsg:'裁剪文件',cutstate:0}
    },
    methods:{
        imgFile(){
            var File = document.getElementById('imgFile').files[0];
            var reader = new FileReader();
            reader.onloadend=()=>{
                this.$refs.demoImg.src = reader.result
                this.box2state = true
            }
            reader.readAsDataURL(File)
        },
        Boxmove(){
            // console.log('启动事件')
            // console.log(this)
            this.$refs.chooseBox.addEventListener('touchmove',(eve)=>{
                // console.log(this.$refs.chooseBox.offsetWidth/2)
                // console.log(this.$refs.chooseBox.offsetHeight/2)
                // console.log(this.$refs.bigbox)
                let newX = eve.changedTouches[0].clientX-this.$refs.bigbox.offsetLeft-this.$refs.chooseBox.offsetWidth/2
                let newY = eve.changedTouches[0].clientY-this.$refs.bigbox.offsetTop-this.$refs.chooseBox.offsetHeight/2
                console.log(newX)
                console.log(newY)
                if(newX<this.$refs.demoImg.offsetLeft){
                    newX = this.$refs.demoImg.offsetLeft;
                }
                if(newY<this.$refs.demoImg.offsetTop){
                    newY = this.$refs.demoImg.offsetTop;
                }
                if(newX>(this.$refs.demoImg.offsetWidth-this.$refs.chooseBox.offsetWidth+this.$refs.demoImg.offsetLeft)){
                    newX = this.$refs.demoImg.offsetWidth-this.$refs.chooseBox.offsetWidth+this.$refs.demoImg.offsetLeft;
                }
                if(newY>(this.$refs.demoImg.offsetHeight-this.$refs.chooseBox.offsetHeight+this.$refs.demoImg.offsetTop)){
                    newY = this.$refs.demoImg.offsetHeight-this.$refs.chooseBox.offsetHeight+this.$refs.demoImg.offsetTop;
                }
                this.$refs.chooseBox.style.top = newY+'px';
                this.$refs.chooseBox.style.left = newX+'px';
            }) 
            this.$refs.chooseBox.ontouchend = ()=>{
                this.$refs.chooseBox.touchmove = null
            }
        },
        cutImg(){
            if(this.cutstate == 0){
                var l = this.$refs.chooseBox.offsetLeft-this.$refs.demoImg.offsetLeft
                var t = this.$refs.chooseBox.offsetTop-this.$refs.demoImg.offsetTop
                var x= l/(this.$refs.demoImg.offsetWidth - this.$refs.chooseBox.offsetWidth)
                var y= t/(this.$refs.demoImg.offsetHeight - this.$refs.chooseBox.offsetHeight)
                if(!x){x=0}
                if(!y){y=0}
                var xx = x*(this.imgwidth-this.$refs.chooseBox.offsetWidth*this.csale)
                var yy = y*(this.imgheight-this.$refs.chooseBox.offsetHeight*this.csale)
                var ctx = this.$refs.myCan.getContext('2d');
                ctx.drawImage(this.$refs.demoImg,xx,yy,this.$refs.chooseBox.offsetWidth*this.csale,this.$refs.chooseBox.offsetHeight*this.csale,0,0,150,150)
                this.imgData = this.$refs.myCan.toDataURL();
                this.upData.imgData = this.imgData.split(',')[1]
                this.onoff = 1;
                this.$refs.demoImg.src = this.imgData;
                this.showhead = false;
                this.cutmsg = '重新上传';
                this.cutstate = 1;
            }else{
                this.box2state = false;
                this.showhead = true;
                this.cutmsg = '裁剪文件';
                this.cutstate = 0;
            }
        },
        upImg(){
            var url = '/uphead'
            var ajx = new XMLHttpRequest()
            ajx.open('POST',url,true)
            this.upData.user = this.$store.state.userdata.user
            var pack = this.$store.state.userdata
            ajx.onreadystatechange=()=>{
                if(ajx.readyState == 4||ajx.status == 200){
                    console.log(ajx.responseText)
                    pack.path = ajx.responseText;
                    this.$store.commit('userdata',pack)
                    this.$router.push('/user')
                }
            }
            ajx.send(JSON.stringify(this.upData));
        }
    },
    mounted(){     
        this.$refs.demoImg.onload=()=>{
            this.$refs.demoImg.style = '';
            this.imgwidth = this.$refs.demoImg.width;
            this.imgheight = this.$refs.demoImg.height ;
            if(this.imgwidth>this.imgheight){
                this.$refs.demoImg.style.width = this.$refs.bigbox.offsetWidth+'px';
                this.$refs.chooseBox.style.width = this.$refs.demoImg.offsetHeight+'px';
                this.$refs.chooseBox.style.height = this.$refs.demoImg.offsetHeight +'px';
            }else if(this.imgwidth<this.imgheight){
                this.$refs.demoImg.style.height = this.$refs.bigbox.offsetWidth+'px';
                this.$refs.chooseBox.style.height = this.$refs.demoImg.offsetWidth +'px';
                this.$refs.chooseBox.style.width = this.$refs.demoImg.offsetWidth +'px';
            }else if(this.imgwidth == this.imgheight){
                this.$refs.demoImg.style.width = this.$refs.bigbox.offsetWidth+'px';
                this.$refs.demoImg.style.height = this.$refs.bigbox.offsetWidth+'px';
                this.$refs.chooseBox.style.width = this.$refs.demoImg.offsetWidth +'px';
                this.$refs.chooseBox.style.height = this.$refs.demoImg.offsetHeight +'px';
            }
            if(this.onoff == 1){
                this.$refs.demoImg.style.width = '150px'
                this.$refs.demoImg.style.height = '150px'
                this.onoff = 0        
            }
            this.csale = this.imgwidth/this.$refs.demoImg.offsetWidth;
            this.$refs.chooseBox.style.left = this.$refs.demoImg.offsetLeft +'px';
            this.$refs.chooseBox.style.top = this.$refs.demoImg.offsetTop +'px';
        }
    }
}
</script>

<style scoped>
        #bigbox{
            text-align: center;
            width: 6.4rem;
            height: 6.4rem;
            background: #e1e1e1;;
            font-size:.6rem;
            line-height:6.4rem;
            color: #b8b8b8;
        }
        #bigbox p{
            width: 6.4rem;
            height: 6.4rem;
            position: absolute;
            top:.9rem;
        }
        #bigbox input{
            width: 6.4rem;
            height: 6.4rem;
            opacity: 0;
            cursor:pointer;
            position: absolute;
            top:.9rem;
            left: 0;
            z-index:2;
        }
        #bigbox #photo-box2{
            width: 6.4rem;
            height: 6.4rem;
            position: relative;
        }
        #chooseBox{
            box-sizing:border-box;
            position: absolute;
            border: .01rem dashed #42aaf9;
            width: 3rem;
            height: 3rem;
            left:0;
            top:0;
            background:#000;
            opacity:.2;
        }
        .photo-box-upimg{
            position: relative;
            margin-top:.2rem; 
        }
        #myCan{
            position: absolute;
            left: 0;
            right: 0;
            margin:auto;
            display:none;
        }
        .photo-box-input{
            display:flex;
            justify-content: space-around;
        }
        #cut{
            width:1.4rem;
            height:.5rem;
            border:0;
            background:#0cc440;
            color:#fff;
            border-radius:.08rem;  
        }
        #btn{
            width:1.4rem;
            height:.5rem;
            border:0;
            background:#0cc440;
            color:#fff; 
            border-radius:.08rem;        
        }
</style>
