<template>
  <div class='loginCenter'>
    <div class="userlogin">
      <div class="box">
        <el-input placeholder="请输入用户名" v-model="username" class="username">
        </el-input>
        <el-input placeholder="请输入密码" v-model="password" show-password class="password">
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
    async getLogin () {
      let {
        data: {
          error,
          msg
        }
      } = await this.$apiAll.login(this, `login`, {
        username: this.username,
        password: this.password
      })
      if (error === 200) {
        this.$router.push({
          path: '/'
        })
        this.$message.success(msg)
        window.localStorage.setItem('username', this.username)
      } else {
        this.$message.error(msg)
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
