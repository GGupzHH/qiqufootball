import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'index',
      component: () => import('./views/index.vue')
    }, {
      // 赛区
      path: '/CompetitionArea',
      name: 'CompetitionArea',
      component: () => import('./views/CompetitionArea.vue'),
      children: [
        {
          path: 'chinaSp', // 中超
          component: () => import('./components/CompetitionArea/chinaSp.vue')
        }, {
          path: 'engSp', // 英超
          component: () => import('./components/CompetitionArea/engSp.vue')
        }, {
          path: 'espNail', // 西甲
          component: () => import('./components/CompetitionArea/espNail.vue')
        }, {
          path: 'gerNail', // 德甲
          component: () => import('./components/CompetitionArea/gerNail.vue')
        }, {
          path: 'ItalyNail', // 意甲
          component: () => import('./components/CompetitionArea/ItalyNail.vue')
        }, {
          path: 'europeWinner', // 欧冠
          component: () => import('./components/CompetitionArea/europeWinner.vue')
        }, {
          path: 'franceNail', // 法甲
          component: () => import('./components/CompetitionArea/franceNail.vue')
        }, {
          path: 'chinaNail', // 中甲
          component: () => import('./components/CompetitionArea/chinaNail.vue')
        }, {
          path: 'europeLeague', // 欧联
          component: () => import('./components/CompetitionArea/europeLeague.vue')
        }, {
          path: 'britainWinner', // 英冠
          component: () => import('./components/CompetitionArea/britainWinner.vue')
        }, {
          path: 'holandNail', // 荷甲
          component: () => import('./components/CompetitionArea/holandNail.vue')
        }, {
          path: 'portugalNail', // 葡甲
          component: () => import('./components/CompetitionArea/portugalNail.vue')
        }, {
          path: 'franceSecond', // 法乙
          component: () => import('./components/CompetitionArea/franceSecond.vue')
        }, {
          path: 'russiaSp', // 俄超
          component: () => import('./components/CompetitionArea/russiaSp.vue')
        }, {
          path: 'turkeySp', // 土超
          component: () => import('./components/CompetitionArea/turkeySp.vue')
        }, {
          path: 'japanOccup', // 日职
          component: () => import('./components/CompetitionArea/japanOccup.vue')
        }, {
          path: 'HKSp', // 港超
          component: () => import('./components/CompetitionArea/HKSp.vue')
        }, {
          path: 'Kleague', // K联赛
          component: () => import('./components/CompetitionArea/Kleague.vue')
        }, {
          path: 'argentinaNail', // 阿甲
          component: () => import('./components/CompetitionArea/argentinaNail.vue')
        }, {
          path: 'brazilNail', // 巴甲
          component: () => import('./components/CompetitionArea/brazilNail.vue')
        }
      ]
    }, {
      // 赛事积分榜
      path: '/CompetitionScoreList',
      name: 'CompetitionScoreList',
      component: () => import('./views/CompetitionScoreList.vue')
    }, {
      // 球队信息
      path: '/TeamInformation',
      name: 'TeamInformation',
      component: () => import('./views/TeamInformation.vue')
    }, {
      // 赛事回顾
      path: '/EventReview',
      name: 'EventReview',
      component: () => import('./views/EventReview.vue'),
      children: [
        {
          // 精彩回顾
          path: 'WonderfulReview',
          name: 'WonderfulReview',
          component: () => import('./components/WonderfulReview.vue')
        }
      ]
    }
  ]
})
