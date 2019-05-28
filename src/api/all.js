import { login } from './login/login'
import { register } from './login/registerCenter'
let apiAll = {}
apiAll.install = function (Vue) {
  apiAll = {
    login,
    register
  }
  Vue.prototype.$apiAll = apiAll
}
export default apiAll
