<template>
  <div class="operate">
    <h3>{{ title }}</h3>
    <el-form :model="form" :rules="rules" ref="form" label-width="120px">
      <el-form-item prop="user_name" label="姓名">
        <el-input class="operate-input" placeholder="请输入你的用户名" v-model="form.user_name"></el-input>
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
        <el-input class="operate-input" placeholder="请输入手机号" v-model="form.mobile"></el-input>
      </el-form-item>
      <el-form-item prop="email" label="邮箱">
        <el-input class="operate-input" placeholder="请输入邮箱" v-model="form.email"></el-input>
      </el-form-item>
      <el-form-item prop="address" label="地址">
        <el-input class="operate-input" placeholder="请输入地址" v-model="form.address"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">{{ button }}</el-button>
      </el-form-item>
    </el-form>
  </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  data() {
    return {
      title: '用户信息新增',
      button: '新增',
      form: {},
      rules: {}
    }
  },

  computed: {
    ...mapState(['is_status', 'user_data'])
  },

  created() {
    if (this.user_data._id) {
      this.title = '用户信息编辑'
      this.button = '保存'
    } else {
      this.title = '用户信息新增'
      this.button = '新增'
    }
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.operate
  width: 1200px
  margin: 20px auto
  h3
    margin-left: 120px
  .operate-input
    width: 80%
</style>
