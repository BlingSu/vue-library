<template>
  <div class="reg">
    <el-form :model="form" :rules="rules" ref="form" label-width="120px">
      <el-form-item label="用户名" prop="user_name">
        <el-input class="reg-input" placeholder="请输入你的用户名" v-model="form.user_name"></el-input>
      </el-form-item>
      <el-form-item prop="pwd" label="密码">
        <el-input type="password" class="reg-input" placeholder="请输入你的密码" v-model="form.pwd"></el-input>
      </el-form-item>
      <el-form-item prop="rePWD" label="确认密码">
        <el-input type="password" class="reg-input" placeholder="请再次输入你的密码" v-model="form.rePWD"></el-input>
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
      <el-form-item prop="birthday" label="出生日期">
        <el-date-picker
          v-model="form.birthday"
          type="date"
          placeholder="选择日期">
        </el-date-picker>
      </el-form-item>
      <el-form-item prop="mobile" label="手机号">
        <el-input class="reg-input" placeholder="请输入手机号" v-model="form.mobile"></el-input>
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
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.form.rePWD !== '') {
          this.$refs.form.validateField('rePWD')
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.form.pwd) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      form: {
        user_name: '',
        pwd: '',
        rePWD: '',
        name: '',
        gender: '',
        birthday: '',
        mobile: '',
        email: '',
        address: ''
      },
      rules: {
        user_name: [{required: true, message: '请输入用户名', trigger: 'blur'}],
        pwd: [{validator: validatePass, trigger: 'blur'}],
        rePWD: [{validator: validatePass2, trigger: 'blur'}],
        name: [{required: true, message: '请输入姓名', trigger: 'blur'}],
        gender: [{required: true, message: '请选择性别', trigger: 'change'}],
        birthday: [{required: true, message: '请选择出生年月', trigger: 'change'}],
        mobile: [{required: true, message: '请输入手机号码', trigger: 'blur'}],
        email: [{required: true, message: '请输入邮箱', trigger: 'blur'}],
        address: [{required: true, message: '请输入地址', trigger: 'blur'}]
      }
    }
  },

  methods: {
    submitForm(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
            console.log(this.form)
            this.$http.post('user/reg', {
              user_name: this.form.user_name,
              pwd: this.form.pwd,
              rePWD: this.form.rePWD,
              name: this.form.name,
              gender: this.form.gender,
              birthday: this.form.birthday,
              mobile: this.form.mobile,
              email: this.form.email,
              address: this.form.address
            })
            .then(resp => {
              console.log(resp)
            })
        } else {
          this.$message({ type: 'warning', message: '请完整填写相关信息' })
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
