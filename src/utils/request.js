import axios from 'axios'

const baseURL = 'http://152.136.113.191:8081'
// 创建 axios 实例
const service = axios.create({
    baseURL: baseURL, // 请求地址前缀，将自动加在 url 前面
    timeout: 6000, // 请求超时时间
    contentType: 'application/json',
})

// axios请求拦截器
service.interceptors.request.use(config => {
    if (localStorage.getItem('loginToken')) {
        // 请求统一设置header
        config.headers.Authorization = localStorage.getItem('loginToken')
    }
    return config
}, error => {
    return Promise.reject(error)
})

// axios响应拦截器
service.interceptors.response.use(response => {
    return response
    },
    error => {
    const { status } = error.response
    if (status === 401) { // token失效
        Message.error('token失效，请重新登录')
        // 清除token
        localStorage.removeItem('loginToken')
        router.push('/')
    }
    return Promise.reject(error)
})

export { service as axios }
