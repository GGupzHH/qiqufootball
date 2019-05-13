<template>
  <div class='loginCenter'>
    <div class="userlogin">
      <div class="box">
        <el-input placeholder="请输入内容" v-model="username" class="username">
          <template slot="prepend">用户名</template>
        </el-input>
        <el-input placeholder="请输入内容" v-model="password" show-password class="password">
          <template slot="prepend">密&nbsp;&nbsp;&nbsp;码</template>
        </el-input>
      </div>
    </div>
    <div class="userYes">
      <el-button type="primary" class="btn" @click="getLogin">登录</el-button>
    </div>
    <footer>
      <!-- sadsad -->
    </footer>
  </div>
</template>

<script>

export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  components: {},
  computed: {},
  watch: {},
  beforeCreate () {
  },
  created () {
  },
  methods: {
    getLogin () {
      if (this.username && this.password) {
        this.$router.push({
          path: '/'
        })
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
.loginCenter {
  .userlogin {
    height: 174px;
    // background-color: red;
    margin: 0 auto;
    // width: 80%;
    margin-top: 20px;
    .box {
      width: 80%;
      margin: 0 auto;
    }
    .username,.password {
      margin-top: 30px;
    }
  }
  .userYes {
    width: 80%;
    height: 40px;
    margin: 0 auto;
    .btn {
      width: 100%;
    }
  }
}
</style>
