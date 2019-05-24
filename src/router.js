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
      // 球员信息
      path: '/playerin',
      name: 'playerin',
      component: () => import('./views/playerinformation.vue')
    }, {
      // 精彩集锦
      path: '/highlights',
      name: 'highlights',
      component: () => import('./views/highlights.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  next()
})
export default router
