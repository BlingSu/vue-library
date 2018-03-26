<template>
  <div class="reg">
    <el-form :model="form" :rules="rules" ref="form" label-width="120px">
      <el-form-item label="用户名" prop="username">
        <el-input class="reg-input" placeholder="请输入你的用户名" v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item prop="password" label="密码">
        <el-input class="reg-input" placeholder="请输入你的密码" v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item prop="pwd" label="确认密码">
        <el-input class="reg-input" placeholder="请再次输入你的密码" v-model="form.pwd"></el-input>
      </el-form-item>
      <el-form-item prop="name" label="姓名">
        <el-input class="reg-input" placeholder="请输入你的姓名" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item prop="gender" label="性别">
        <el-radio-group v-model="form.gender">
          <el-radio label="男"></el-radio>
          <el-radio label="女"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item prop="date" label="出生日期">
        <el-date-picker
          v-model="form.date"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item prop="phone" label="手机号">
        <el-input class="reg-input" placeholder="请输入手机号" v-model="form.phone"></el-input>
      </el-form-item>
      <el-form-item prop="email" label="邮箱">
        <el-input class="reg-input" placeholder="请输入邮箱" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item prop="address" label="地址">
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
      rules: {
        username: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        password: [{required: true, message: '请输入密码', trigger: 'blur'}],
        pwd: [{required: true, message: '请再次输入密码', trigger: 'blur'}],
        name: [{required: true, message: '请输入姓名', trigger: 'blur'}],
        gender: [{required: true, message: '请选择性别', trigger: 'change'}],
        date: [{required: true, message: '请选择出生年月', trigger: 'change'}],
        phone: [{required: true, message: '请输入手机号码', trigger: 'blur'}],
        email: [{required: true, message: '请输入邮箱', trigger: 'blur'}],
        address: [{required: true, message: '请输入地址', trigger: 'blur'}]
      }
    }
  },

  methods: {
    submitForm(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      })
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
