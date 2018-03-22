import Vue from 'vue'
import App from './App'
import router from './router/index'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import axiosPlugin from './common/server'
// import axios from 'axios'

// axios.defaults.baseURL = process.env.NODE_ENV === 'production'
//   ? 'http://www.longye.xyz'
//   : 'http://192.168.1.146:3333/'
// Vue.prototype.$http = axios

Vue.use(ElementUI)
Vue.use(axiosPlugin)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
