import 'element-ui/lib/theme-chalk/index.css'
import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router/index'
import store from './store/index'

import axiosPlugin from 'common/js/server'
Vue.use(axiosPlugin)

Vue.use(ElementUI)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
