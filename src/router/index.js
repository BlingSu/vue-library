import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/home' },
    { name: 'home', path: '/home', component: () => import('components/Home.vue') },
  ]
})
