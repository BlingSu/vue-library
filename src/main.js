import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router/index'

import axiosPlugin from 'common/js/server'
Vue.use(axiosPlugin)

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
