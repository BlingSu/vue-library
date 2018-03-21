import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/hello' },
    { name: 'hello', path: '/hello', component: () => import('components/Hello.vue') },
  ]
})
