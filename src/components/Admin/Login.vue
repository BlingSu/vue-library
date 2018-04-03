<template>
  <div class="login">
    <el-form :model="form" ref="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input class="login-input" v-model="form.userName" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input class="login-input" v-model="form.userPWD" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="handleLogin">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
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

    handleLogin() {

    }


  },

  created() {
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.login
  margin: 20px auto
  .login-input
    width: calc(100% - 120px)
</style>
