<template>
  <div class="reg">
    <el-form :model="form" :rules="rules" ref="form" label-width="120px">
      <el-form-item label="用户名">
        <el-input class="reg-input" placeholder="请输入你的用户名" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input class="reg-input" placeholder="请输入你的密码" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item label="确认密码">
        <el-input class="reg-input" placeholder="请再次输入你的密码" v-model="form.pwd"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input class="reg-input" placeholder="请输入你的姓名" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio v-model="form.gender" label="1">男</el-radio>
        <el-radio v-model="form.gender" label="2">女</el-radio>
      </el-form-item>
      <el-form-item label="出生日期">
        <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input class="reg-input" placeholder="请输入手机号" v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item label="邮箱">
        <el-input class="reg-input" placeholder="请输入邮箱" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item label="地址">
        <el-input class="reg-input" placeholder="请输入地址" v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        pwd: '',
        name: '',
        gender: '',
        date: '',
        phone: '',
        email: '',
        address: ''
      },
      rules: {}
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .reg
    width: 1200px
    margin: 20px auto
    .reg-input
      width: 80%
</style>
