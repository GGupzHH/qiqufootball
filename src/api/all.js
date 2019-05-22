import { getMainQueryUi } from './mainQueryUi'
import { login } from './login/login'
import { register } from './login/registerCenter'
let apiAll = {}
apiAll.install = function (Vue) {
  apiAll = {
    login,
    register,
    getMainQueryUi
  }
  Vue.prototype.$apiAll = apiAll
}
export default apiAll
