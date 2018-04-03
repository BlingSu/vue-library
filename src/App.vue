<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">图书借阅系统</el-menu-item>
      <el-menu-item index="user-center">个人中心</el-menu-item>
      <el-submenu index="3" class="userInfo">
        <template slot="title">{{ name }}</template>
        <el-menu-item index="user-login">用户登录</el-menu-item>
        <el-menu-item index="user-reg">用户注册</el-menu-item>
        <el-menu-item index="admin/login">管理员登录</el-menu-item>
        <el-menu-item index="logout" @click="logout">退出</el-menu-item>
      </el-submenu>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
import getRouter from 'common/js/router'
import storage from 'common/js/store'
import { mapState } from 'vuex'

export default {
  name: 'app',
  data() {
    return {
      activeIndex: '1',
      name: '用户'
    }
  },

  methods: {
    handleSelect(key, keyPath) {
      this.$router.push(getRouter(key, keyPath))
    },

    getName() {
      if (storage().get('user_name')) {
        this.name = JSON.parse(storage().get('user_name'))
      }
    },

    logout() {
      if (storage().get('user_id') && storage().get('user_name')) {
        storage().remove('user_id')
        storage().remove('user_name')
        this.$router.push('/')
        this.$message({type: 'info', message: '退出成功～'})
        this.$store.dispatch('logoutStatus')
        // 刷新
      } else {
        this.$message({type: 'info', message: '未登录，退出错误'})
      }
    }
  },

  created() {
    this.getName()
  }
}
</script>

<style lang="stylus">
  @import 'common/stylus/header.styl'
</style>
