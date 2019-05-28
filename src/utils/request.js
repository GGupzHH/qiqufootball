import axios from 'axios'
import { interceptorsRequest, interceptorsResponse } from './interceptors'
const Http = {}
Http.install = function (Vue) {
  axios.defaults.baseURL = `/api`
  axios.interceptors.request.use(interceptorsRequest, function (error) {
    console.error('error-----------------------')
    return Promise.reject(error)
  })
  axios.interceptors.response.use(interceptorsResponse)
  Vue.prototype.$http = axios
}
export default Http
