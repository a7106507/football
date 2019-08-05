<template>
  <div id="app">
    <Header></Header>
    <Nav v-show="onoff"></Nav>
    <router-view></router-view>
    <Footer></Footer>
    <Login v-show="showlogin"></Login>
    <Post v-show="showpost"></Post>
    <munu v-show="showmunu" :UserData='userdata'></munu>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'
import Nav from './components/Nav'
import Login from './pages/login'
import Post from './pages/post'
import munu from './pages/munu'
import {mapActions,mapGetters} from 'vuex'
export default {
  name: 'app',
  components: {
    Header,Footer,Nav,Login,Post,munu
  },
  watch:{
    $route:{
      handler(to){
        document.documentElement.scrollTop = 0;
        console.log(to.path)
        if(to.path == '/follow'||to.path == '/search'||to.path == '/hotspot'||to.path == '/imgbox'||to.path == '/photo'){
          this.$store.dispatch("onoff",false)
        }else if(to.path == '/home'){
           this.$store.dispatch("onoff",true)
        }
      }
    }
  },
  computed:mapGetters([
    'onoff','showlogin','showpost','showmunu','userdata','LoginType'
  ]),
  beforeCreate(){
    console.log('挂载之前')
    var data = document.cookie.split('=')[1]
    if(data){
      this.$store.dispatch('LoginType',true)
      this.$store.dispatch('userdata',JSON.parse(data))
      console.log(JSON.parse(data))
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
