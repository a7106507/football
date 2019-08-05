import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/Home'
import Follow from '../pages/Follow'
import Search from '../pages/search'
import hotspot from '../pages/hotspot'
import User from '../pages/user'
import userfollow from '../pages/userfollow'
import imgbox from '../pages/imgbox'
import fans from '../pages/fans'
import List from '../pages/List'
import photo from '../pages/photo'
Vue.use(VueRouter)

let routes = [
    {path:'/home',component:Home},
    {path:'/',redirect:'/home'},
    {path:'/follow',component:Follow},
    {path:'/search',component:Search},
    {path:'/hotspot',component:hotspot},
    {path:'/list',component:List},
    {path:'/user',component:User,children:[
        {path:'/',redirect:'/imgbox'},
        {path:'/imgbox',component:imgbox},
        {path:'/userfollow',component:userfollow},
        {path:'/fans',component:fans}        
]},
    {path:'/photo',component:photo}
    // {path:'/login'}
]

let router = new VueRouter({
    routes
})

export default router