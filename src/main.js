import Vue from 'vue'
import App from './App'
import router from './router/index'
import 'element-ui/lib/theme-chalk/index.css'
import ElementUI from 'element-ui'
import axiosPlugin from './common/js/server'

Vue.use(ElementUI)
Vue.use(axiosPlugin)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
