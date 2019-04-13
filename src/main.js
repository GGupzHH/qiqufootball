import Vue from 'vue'
import qiquIndex from './qiquIndex.vue'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../public/style/reset.css'
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false
Vue.use(ElementUI)
new Vue({
  router,
  render: h => h(qiquIndex)
}).$mount('#app')
