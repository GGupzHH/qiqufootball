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
    getLogin () {
      let username = window.sessionStorage.getItem('userdata')
      if (username) {
        let usernamedata = JSON.parse(username)
        console.log(usernamedata)
        for (let i = 0; i < usernamedata.length; i++) {
          if (this.username === usernamedata[i].username) {
            if (this.password === usernamedata[i].pwd) {
              this.$router.push({
                path: '/'
              })
              window.localStorage.setItem('username', this.username)
            } else {
              this.$message.error('请核对您的用户名和密码')
            }
          } else {
            this.$message.error('请核对您的用户名和密码')
          }
        }
      } else {
        this.$message.error('请先注册之后再登录！')
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
