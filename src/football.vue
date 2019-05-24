<template>
  <div id="app">
    <div id="nav" v-if="isshow">
      <div class="w clearfix">
        <div class="left logos">
          <img src="./assets/logos.png" alt="">
        </div>
        <div class="right users clearfix" v-show="userisshow">
          <span class="icon-users"></span>
          <span>{{ username }}</span>
          <span class="icon-logout"></span>
          <span @click="getLogout">退出</span>
        </div>
        <div class="right users clearfix" v-show="!userisshow">
          <span @click="getLogin">登录</span>
        </div>
        <router-link to="/highlights" class="fistchild" :id="isactiveArr[5].isshow? 'active' : ''">精彩集锦</router-link>
        <router-link to="/playerin" :id="isactiveArr[4].isshow? 'active' : ''">球队信息</router-link>
        <router-link to="/integral" :id="isactiveArr[2].isshow? 'active' : ''">积分榜</router-link>
        <router-link to="/zone" :id="isactiveArr[1].isshow? 'active' : ''">各大赛区</router-link>
        <router-link to="/" :id="isactiveArr[0].isshow? 'active' : ''">首页</router-link>
      </div>
    </div>
    <router-view/>
    <footers v-show="userisshow"/>
  </div>
</template>

<script>

export default {
  data () {
    return {
      isshow: true,
      userisshow: true,
      username: '',
      isactiveArr: [
        {
          name: 'main',
          isshow: false
        }, {
          name: 'zone',
          isshow: false
        }, {
          name: 'integral',
          isshow: false
        }, {
          name: 'review',
          isshow: false
        }, {
          name: 'playerin',
          isshow: false
        }, {
          name: 'highlights',
          isshow: false
        }
      ]
    }
  },
  components: {
    footers: () => import('./components/footer')
  },
  computed: {},
  watch: {
    $route (to, from) {
      if (to.name === 'login') {
        this.isshow = false
      } else {
        this.isshow = true
        let username = window.localStorage.getItem('username')
        if (username) {
          this.username = username
          this.userisshow = true
        } else {
          this.userisshow = false
        }
        for (let i = 0; i < this.isactiveArr.length; i++) {
          if (this.isactiveArr[i].name === to.name) {
            this.isactiveArr[i].isshow = true
          } else if (to.name === 'getinfor' || to.name === 'mateinfor') {
            this.isactiveArr[4].isshow = true
          } else {
            this.isactiveArr[i].isshow = false
          }
        }
      }
    }
  },
  beforeCreate () {
  },
  created () {
  },
  methods: {
    getLogin () {
      this.$router.push({
        path: '/login'
      })
    },
    getLogout () {
      window.localStorage.setItem('username', '')
      this.userisshow = false
    }
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
  z-index: 9;
  .w {
    .logos {
      img {
        width: 150px;
      }
    }
    .users {
      height: 100%;
      padding-left: 30px;
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
    width: 60px;
    text-align: center;
    height: 50px;
    line-height: 50px;
    font-size: 14px;
    float: right;
    padding: 0px 12px;
    color: @zuti;
    transition: all .2s;
  }
  a#active {
    background-color: @zuti;
    color: @mainBg;
  }
  a:hover {
    background-color: @zuti;
    color: @mainBg;
  }
  a.fistchild {
    margin-right: 150px;
  }
}
</style>
