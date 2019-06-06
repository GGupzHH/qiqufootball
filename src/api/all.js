import { login } from './login/login'
import { register } from './login/registerCenter'
import { schedule } from './schedule'
import { getinforCenter } from './getinforCenter'
import { getinforMate } from './getinforMate'
import { mateinfor } from './mateinfor'
let apiAll = {}
apiAll.install = function (Vue) {
  apiAll = {
    login,
    register,
    schedule,
    getinforCenter,
    getinforMate,
    mateinfor
  }
  Vue.prototype.$apiAll = apiAll
}
export default apiAll
