import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      // 赛区
      path: '/CompetitionArea',
      name: 'CompetitionArea',
      component: () => import(/* webpackChunkName: "about" */ './views/CompetitionArea.vue'),
      children: [
        {
          path: 'chinaSp',
          component: () => import(/* webpackChunkName: "about" */ './components/CompetitionArea/china.vue')
        }
      ]
    }, {
      // 赛事积分榜
      path: '/CompetitionScoreList',
      name: 'CompetitionScoreList',
      component: () => import(/* webpackChunkName: "about" */ './views/CompetitionScoreList.vue')
    }, {
      // 球队信息
      path: '/TeamInformation',
      name: 'TeamInformation',
      component: () => import(/* webpackChunkName: "about" */ './views/TeamInformation.vue')
    }, {
      // 赛事回顾
      path: '/EventReview',
      name: 'EventReview',
      component: () => import(/* webpackChunkName: "about" */ './views/EventReview.vue'),
      children: [
        {
          // 精彩回顾
          path: '/WonderfulReview',
          name: '/WonderfulReview',
          component: () => import(/* webpackChunkName: "about" */ './components/WonderfulReview.vue')
        }
      ]
    }
  ]
})
