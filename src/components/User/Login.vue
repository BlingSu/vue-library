<template>
  <div class="login">
    <h3>用户登陆</h3>
    <el-form :model="form" ref="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input class="login-input" v-model="form.userName" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input class="login-input" v-model="form.userPWD" placeholder="请输入密码" @keyup.enter.native="loginSubmit"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
        <el-button type="success" @click="handleRegistered">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import storage from 'common/js/store'

export default {
  data() {
    return {
      form: {
        userName: '',
        userPWD: ''
      }
    }
  },

  methods: {
    handleRegistered() {
      this.$router.push({ path: '/user-reg' })
    },

    handleLogin() {
      this.$http.post('user/login', this.form)
      .then(resp => {
        this.$message({type: 'success', message: resp.data.message})
        storage().set('user_name', this.form.userName)
        storage().set('user_id', resp.data.data.user_id)
        this.$store.dispatch('login_status')
        this.$router.push({path: '/'})
      })
    },

    loginSubmit() {
      this.handleLogin()
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.login
  margin: 20px auto
  h3
    margin-left: 120px
  .login-input
    width: 80%
</style>
