import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
import router from '../router'

let env = process.env.NODE_ENV === 'production'
  ? 'http://www.longye.xyz/'
  : 'http://192.168.1.146:3333/'

const Axios = axios.create({
  baseURL: env,
  timeout: 10000,
  responseType: 'json',
  withCredentials: true,
  header: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

Axios.interceptors.request.use(
    config => {
      if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
        config.data = qs.stringify(config.data)
      }
      if (localStorage.token) {
        config.headers.Authorization = localStorage.token
      }
      return config
    },
    error => {
      Message({
        showClose: true,
        message: error.data.error.message,
        type: 'error'
      })
    }
  )

Axios.interceptors.response.use(
    res => {
      if (res.data && !res.status == 'y') {
        Message({
          showClose: true,
          message: res.data.message,
          type: 'error'
        })
        return Promise.reject(res.data.message)
      }
      return res
    },
    error => {
      if (!window.localStorage.getItem('loginInfo')) {
        router.push({path: '/login'})
      } else {
        let oldTime = JSON.parse(window.localStorage.getItem('loginInfo')).oldTime*1000
        let nowTime = new Date().getTime()

        if (nowTime > oldTime) {
          Message({
            showClose: true,
            message: '登陆状态信息过期，请重新登录',
            type: 'error'
          })
          router.push({path: 'login'})
      } else {
        if (error.response.status === 404) {
          router.push({path: '/error/404'})
        }
      }
    }
    let errorInfo = error.data.error ? error.data.message : error.data
    return Promise.reject(errorInfo)
    }
  )

export default {
  install (Vue, Option) {
    Object.defineProperty(Vue.prototype, '$http', {value: Axios})
  }
}
