import { axios } from './request'

const api = {
    user: '/userinfo/login',
    tmns: '/terminals/alltmns',
    tmn: '/terminals/getTmndetail'
}

export default api

export function getUsersApi(param) {
    return axios({
        url: api.user,
        method: 'post',
        data: param,
        // headers: {
        //   'Content-Type': 'multipart/form-data'
        //   'Content-Type': 'application/json;charset=UTF-8'
        // },
        // timeout: 500000
        // responseType: 'blob'
    })
}
export function getTmnsApi() {
    return axios({
        url: api.tmns,
        method: 'get',
    })
}
export function getTmndetail(param) {
    return axios({
        url: api.tmn,
        method: 'post',
        data:param,
    })
}