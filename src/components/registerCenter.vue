<template>
  <div class='register'>
    <div class="box">
      <el-input placeholder="用户名" v-model="username" class="username"></el-input>
      <el-input show-password placeholder="密码" v-model="password" class="password"></el-input>
      <el-input show-password placeholder="确认密码" v-model="passwords" class="passwords"></el-input>
    </div>
    <div class="userYes">
      <el-button type="primary" class="btn" @click="getRegister">注册</el-button>
    </div>
  </div>
</template>

<script>

export default {
  data () {
    return {
      username: '',
      password: '',
      passwords: ''
    }
  },
  methods: {
    async getRegister () {
      if (!this.username.length) {
        this.$message.error('用户名不能为空！')
      } else {
        if (this.password === this.passwords) {
          const {
            error,
            msg
          } = await this.$apiAll.register(this, `register`, {
            username: this.username,
            password: this.password
          })
          if (error === 200) {
            this.$message.success(msg)
          } else {
            this.$message.error(msg)
          }
        } else {
          this.$message.error('您两次输入的密码不相同！请核对之后注册')
        }
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
.register {
  .box {
    width: 80%;
    margin: 0 auto;
    .username,.password,.passwords   {
      margin-top: 30px;
    }
  }
  .userYes {
    width: 80%;
    height: 40px;
    margin: 30px auto;
    .btn {
      width: 100%;
    }
  }
}
</style>
