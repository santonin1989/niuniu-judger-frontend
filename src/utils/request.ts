import axios from 'axios'
import type {
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000,
})

// 请求拦截器
request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    // config.headers.set('Content-Type', 'application/json') // 正确设置请求头
    return config
  },
  error => {
    console.log('请求错误', error)
    return Promise.reject(error)
  },
)

// 响应拦截器
request.interceptors.response.use(
  <T>(response: AxiosResponse<T>): Promise<T> => {
    const res = response.data
    if (response.status === 200) {
      return Promise.resolve(res)
    } else {
      return Promise.reject(res)
    }
  },
  (error: AxiosError) => {
    //定义一个变量:存储网络错误信息
    let message = ''
    //http状态码
    const status = error.response ? error.response.status : 0
    switch (status) {
      case 401:
        message = 'TOKEN过期'
        break
      case 403:
        message = '无权访问'
        break
      case 404:
        message = '请求地址错误'
        break
      case 500:
        message = '服务器出现问题'
        break
      default:
        message = '网络出现问题'
        break
    }
    //可在此处引入UI进行错误提示
    console.log('报错', message)
    return Promise.reject(error)
  },
)

export default request
