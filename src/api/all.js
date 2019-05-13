import { aRStatistics } from './earch/aRStatistics'
import { fPStatistics } from './earch/fPStatistics'
import { aiStatistics } from './earch/aiStatistics'
import { kiStatistics } from './earch/kiStatistics'
import { dbquery } from './dbquery'
import { endofyearchart } from './endofyearchart/endofyearchart'
import { getCompany } from './getCompany/company'
import { getContrast } from './query/contrast'
import { getMainQueryUi } from './mainQueryUi'
import { getPDF } from './getPDF'
let apiAll = {}
apiAll.install = function (Vue) {
  apiAll = {
    aRStatistics,
    fPStatistics,
    aiStatistics,
    kiStatistics,
    dbquery,
    endofyearchart,
    getCompany,
    getContrast,
    getMainQueryUi,
    getPDF
  }
  Vue.prototype.$apiAll = apiAll
}
export default apiAll
