import Vue from 'vue'
import App from './football.vue'
import ElementUI from 'element-ui'
import router from './router'
import Http from './utils/request'
import AllApi from './api/all'
import './mock/mock'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css/normalize.css'
import './style/index.less'
import '@/icon/style.css'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(Http)
Vue.use(AllApi)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
