import axios from 'axios'
import qs from 'qs'
import { Message } from 'element-ui'
import router from '../../router'

let env = process.env.NODE_ENV === 'production'
  ? 'http://www.longye.xyz/'
  : 'http://192.168.1.146:3333/'


const Axios = axios.create({
  baseURL: env,
  timeout: 10000,
  responseType: 'json',
  withCredentials: false,
  header: {
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
  }
})

Axios.interceptors.request.use(
    config => {
      if (config.method === 'post' || config.method === 'put' || config.method === 'delete') {
        config.data = qs.stringify(config.data)
      }
      return config
    },
    error => {
      Message({ message: error, type: 'error' })
    }
  )

Axios.interceptors.response.use(
    res => {
      if (res.data.status == 'n' && res.data) {
        Message({ message: res.data.message, type: 'error' })
        return Promise.reject(res.data.message)
      }
      return res
    },
    error => {
      Message({ message: '404 Not Found', type: 'error' })
    }
  )

export default{
  install(Vue, Option) {
    Object.defineProperty(Vue.prototype, '$http', { value: Axios })
  }
}
