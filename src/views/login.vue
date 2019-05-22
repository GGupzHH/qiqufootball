<template>
  <div class=''>
    <img src="../assets/bg.jpg" alt="" class="loginbg">
    <div class="login">
      <header class="clearfix">
        <span :class="!actives ? 'actives' :''" @click="getLogin(0)">
          登录
        </span>
        <span :class="actives ? 'actives' :''" @click="getLogin(1)">
          注册
        </span>
      </header>
      <nav>
        <loginCenter v-if="!actives"/>
        <registerCenter v-if="actives" :getRegister="getRegister"/>
      </nav>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      actives: false
    }
  },
  components: {
    loginCenter: () => import('../components/loginCenter.vue'),
    registerCenter: () => import('../components/registerCenter.vue')
  },
  computed: {},
  watch: {},
  beforeCreate () {
  },
  created () {
  },
  methods: {
    getRegister (is_getRegister) {
      console.log(is_getRegister)
    },
    getLogin (index) {
      if (index) {
        this.actives = true
      } else {
        this.actives = false
      }
    }
  },
  mounted () {
  }
}
</script>
<style lang='less' scoped>
//@import url(); 引入公共css类
@import url('../style/variables');
.loginbg {
  width: 100%;
  height: 100%;
  position: fixed;
  background-image: url('../assets/bg.jpg');
  z-index: -1;
}
.login {
  width: 400px;
  height: 390px;
  background-color: @headerBg;
  border-radius: 8px;
  position: fixed;
  z-index: 2;
  right: 100px;
  top: 130px;
  box-shadow: 2px 2px 5px 1px rgba(255, 255, 255, .2), -2px -2px 5px 1px rgba(255, 255, 255, .2);
  header {
    margin-top: 20px;
    padding: 0 20px;
    box-sizing: border-box;
    span {
      float: left;
      width: 50%;
      height: 40px;
      line-height: 40px;
      text-align: center;
      border-bottom: 2px solid #ccc;
    }
    span.actives {
      transition: all .4s;
      border-bottom: 2px solid @zuti;
    }
  }
}
</style>
