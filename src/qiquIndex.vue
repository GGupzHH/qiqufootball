<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link> |
      <router-link to="/CompetitionArea">赛区</router-link> |
      <router-link to="/CompetitionScoreList">赛事积分榜</router-link> |
      <router-link to="/TeamInformation">球队信息</router-link> |
      <router-link to="/EventReview">赛事回顾</router-link>
      <!-- <router-link to="/about">About</router-link> -->
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less">

</style>
