import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    }, {
      // 首页
      path: '/',
      name: 'main',
      component: () => import('./views/main.vue')
    }, {
      // 各大赛区
      path: '/zone',
      name: 'zone',
      component: () => import('./views/zone.vue')
    }, {
      // 积分榜
      path: '/integral',
      name: 'integral',
      component: () => import('./views/integral.vue')
    }, {
      // 球队列表
      path: '/playerin',
      name: 'playerin',
      component: () => import('./views/playerinformation.vue')
    }, {
      // 精彩集锦
      path: '/highlights',
      name: 'highlights',
      component: () => import('./views/highlights.vue')
    }, {
      // 球队信息
      path: '/getinfor',
      name: 'getinfor',
      component: () => import('./components/getinfor')
    }, {
      // 球员信息
      path: '/mateinfor',
      name: 'mateinfor',
      component: () => import('./components/mateinfor')
    }
  ]
})
router.beforeEach((to, from, next) => {
  next()
})
export default router
