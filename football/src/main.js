import Vue from 'vue'
import App from './App.vue'
import './assets/css/public.css'
import router from './plugins/router'
import store from './plugins/store'
import axios from './plugins/axios'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,store
}).$mount('#app')
