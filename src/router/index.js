import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', redirect: '/list' },
    { name: 'list', path: '/list', component: () => import('components/List.vue') },
    { name: 'user-reg', path: '/user-reg', component: () => import('components/User/UserReg.vue') },
    { name: 'login', path: '/login', component: () => import('components/User/Login.vue') }
  ]
})
