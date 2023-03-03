import axios from "axios";
import ElementUI from "element-ui";
// http://114.132.197.185:80/api/v1/mall-bk
const baseURL = ``

const instance = axios.create({
  baseURL
})

instance.interceptors.request.use(config => {

  const token = sessionStorage.getItem('Authorization')
  if (token) {
    config.headers.setAuthorization(token)
  }

  return config
})

instance.interceptors.response.use(res => {
  return res.data
}, err => {

  ElementUI.Message("失败")
  return Promise.reject(err)
})


export const request = instance
export const get = (url, params) => instance.get(url, { params })
export const post = (url, data) => instance.post(url, { data })
export const put = (url, data) => instance.put(url, { data })
export const del = (url, data) => instance.delete(url, { data })