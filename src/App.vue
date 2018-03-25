<template>
  <div id="app">
    <el-menu
      :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">图书借阅系统</el-menu-item>
      <el-menu-item index="2">书籍列表</el-menu-item>
      <el-submenu index="3" class="userInfo">
        <template slot="title">{{ name }}</template>
        <el-menu-item index="userLogin">用户登录</el-menu-item>
        <el-menu-item index="userReg">用户注册</el-menu-item>
        <el-menu-item index="adminLogin">管理员登录</el-menu-item>
        <el-menu-item index="logout">退出</el-menu-item>
      </el-submenu>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      activeIndex: '1',
      name: '个人中心'
    }
  },

  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      if(key == 'userReg' && keyPath[0] == 3) {
        // this.$router.push({path: '/user-reg'})
      }
    }
  }
}
</script>

<style lang="stylus">
  @import 'common/stylus/header.styl'
</style>
