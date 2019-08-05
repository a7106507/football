<template>
  <!-- <div class="banner" ref="f1">
    <ul class="clearfix">
      <li v-for="(item,index) of banner" :key="index">
        <img :src='`${config.active+item.path}`' alt="">
      </li>
      <li>
        <img src="../assets/images/8d9f90be00adffb46436e0cef019823b.jpg" alt="">
      </li>
      <li>
        <img src="../assets/images/71392544610c96b8171274f8930760a6.jpg" alt="">
      </li>
    </ul>
  </div> -->
  <swipe class="my-swipe">
     <swipe-item class="slide" v-for="(item,index) of banner" :key="index">
       <img :src='`${config.active+item.path}`' alt="">
     </swipe-item>
  </swipe>
</template>

<script>
import 'vue-swipe/dist/vue-swipe.css';
import { Swipe, SwipeItem } from 'vue-swipe';
let config = require('../../config/config')
export default {
  data(){
    return {config:config}
  },
  props:['banner'],
  components:{
    'swipe':Swipe,
    'swipe-item':SwipeItem
  }
};
</script>

<style scoped>
/* .content{max-width:6.4rem; margin:0 auto; margin-bottom:0.8rem;} */
*{padding:0;margin:0;}
.my-swipe {
  padding-top:.58rem;
  height: 3.2rem;
  text-align: center;
}
  .slide img{
   width:100%;
   display:block;
 }
/* .slide1 {
  background-color: #0089dc;
  color: #fff;
}
 
.slide2 {
  background-color: #ffd705;
  color: #000;
}
 
.slide3 {
  background-color: #ff2d4b;
  color: #fff;
} */
</style>
