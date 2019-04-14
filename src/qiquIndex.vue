<template>
  <div id="app">
    <div id="nav">
      <div class="w">
        <div class="left">
          <router-link to="/">首页</router-link> |
          <router-link to="/CompetitionArea">赛区</router-link> |
          <router-link to="/CompetitionScoreList">赛事积分榜</router-link> |
          <router-link to="/TeamInformation">球队信息</router-link> |
          <router-link to="/EventReview">赛事回顾</router-link>
        </div>
        <div class="right" v-if="!admin">
          <span>登录</span>|
          <span>退出</span>
        </div>
        <div class="right" v-else>
          <span>欢迎</span>
          <span>{{ admin }}</span>
          <span>|</span>
          <span>退出</span>
        </div>
      </div>
    </div>
    <router-view class="bodys"/>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      admin: 'dddd'
    }
  }
}
</script>
<style lang="less">
#app {
  padding-top: 35px;
  #nav {
    width: 100%;
    height: 35px;
    background-color: #16b13a;
    line-height: 35px;
    position: fixed;
    top: 0px;
  }
  .bodys {
  }
}
</style>
