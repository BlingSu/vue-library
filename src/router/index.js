import Router from 'vue-router'
import Vue from 'vue'
import storage from 'common/js/store'
import { Message } from 'element-ui'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/list' },
    { name: 'list', path: '/list', component: () => import('components/List.vue') },
    { name: 'user-reg', path: '/user-reg', component: () => import('components/User/UserReg.vue') },
    { name: 'user-login', path: '/user-login', component: () => import('components/User/Login.vue') },
    { name: 'user-center', path: '/user-center', component: () => import('components/User/UserCenter.vue'), meta: { requireAuth: true} },
    { name: 'adminLogin', path: '/admin/login', component: () => import('components/Admin/Login.vue') },
  ]
})


router.beforeEach((to, from, next) => {
  if (to.matched.some(res => res.meta.requireAuth)) {
    if (storage().remove('user_name') && storage().remove('user_id')) {
      next()
    } else {
      Message({ message: "登录状态信息过期,请重新登录", type: 'error' })
    }
  } else {
    next()
  }
})

export default router
