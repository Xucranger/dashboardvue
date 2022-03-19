// ./router/axios.js
import axios from 'axios'

// 超时时间
axios.defaults.timeout = 60000
// 跨域请求，允许保存cookie
axios.defaults.withCredentials = true
axios.defaults.headers['channelNo'] = "WEB" // 让每个请求携带channelNo
// 请求地址的域名
axios.defaults.baseURL = "/service" // 启用代理，参见下方代理配置

// 设置 post、put 默认 Content-Type
axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.put['Content-Type'] = 'application/json'


export default axios
