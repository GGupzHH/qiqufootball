import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'main',
      component: () => import('./views/main.vue')
    }, {
      path: '/game',
      name: 'game',
      component: () => import('./views/game.vue')
    }, {
      path: '/data',
      name: 'data',
      component: () => import('./views/data.vue')
    }, {
      path: '/login',
      name: 'login',
      component: () => import('./views/login.vue')
    }
  ]
})
router.beforeEach((to, from, next) => {
  // ...
  if (to.path === '/login') {
    next()
  }
  if (to.path === '/') {
    const token = localStorage.getItem('token')
    if (!token) {
      console.log(111)
      router.push({
        path: '/login'
      })
      next()
    } else {
      next()
    }
  }
})
export default router
