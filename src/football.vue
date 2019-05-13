<template>
  <div id="app">
    <div id="nav" v-if="isshow">
      <div class="w clearfix">
        <div class="right users clearfix">
          <span class="icon-users"></span>
          <span>用户名</span>
          <span class="icon-logout"></span>
          <span>退出</span>
        </div>
        <router-link to="/game">精彩集锦</router-link>
        <router-link to="/game">球员信息</router-link>
        <router-link to="/about">赛事回顾</router-link>
        <router-link to="/data">积分榜</router-link>
        <router-link to="/game">各大赛区</router-link>
        <router-link to="/">首页</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isshow: true
    }
  },
  components: {},
  computed: {},
  watch: {
    $route (to, from) {
      console.log(to)
      if (to.name === 'login') {
        this.isshow = false
      } else {
        this.isshow = true
      }
    }
  },
  beforeCreate () {
  },
  created () {
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style lang="less" scoped>
@import url('./style/variables');
#nav {
  width: 100%;
  height: 50px;
  background-color: @headerBg;
  box-shadow: 0px 3px 5px @checkName;
  position: fixed;
  top: 0px;
  left: 0px;
  .w {
    .users {
      height: 100%;
      span {  
        float: left;
        line-height: 50px;
        margin-right: 8px;
        cursor: pointer;
      }
      span:nth-child(2) {
        margin-right: 18px;
      }
    }
  }
  a {
    font-size: 14px;
    line-height: 18px;
    float: right;
    height: 18px;
    padding: 0px 12px;
    border-right: 1px solid @endofuearchartTableborder;
    margin-top: 15px;
    color: @zuti;
  }
  a:nth-child(2) {
    border: none;
    margin-right: 150px;
  }
}
</style>