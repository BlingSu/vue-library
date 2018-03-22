import Vue from 'vue'
import App from './App'
import router from './router/index'

import axios from 'axios'
axios.defaults.baseURL = ''
axios.defaults.baseURL = process.env.NODE_ENV === 'production'
  ? 'http://www.longye.xyz'
  : 'http://192.168.1.146:3333/'
Vue.prototype.$http = axios


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
