<template>
  <div class="login">
    <h3>管理员登陆</h3>
    <el-form :model="form" ref="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input class="login-input" v-model="form.adminName" placeholder="请输入用户名" @keyup.enter.native="loginSubmit"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input class="login-input" v-model="form.adminPassWord" placeholder="请输入密码" @keyup.enter.native="loginSubmit"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
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
        adminName: '',
        adminPassWord: ''
      }
    }
  },

  methods: {

    handleLogin() {
      this.$http.post('/admin/admin_login', this.form)
      .then(resp => {
        this.$message({ type: 'success', message: resp.data.message })
        storage().set('admin_token', {admin: 'admin', token: Math.random(), time: new Date().getTime()})
        this.$router.push({path: '/admin/books'})
      })
    },

    loginSubmit() {
      this.handleLogin()
    }

  },

  created() {
    this.$store.dispatch('admin_login')
    storage().remove('admin_token')
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.login
  margin: 20px auto
  h3
    margin-left: 120px
  .login-input
    width: calc(100% - 120px)
</style>
