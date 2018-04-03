<template>
  <div>
    <el-menu
      v-show="showMenu"
      :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">图书借阅系统</el-menu-item>
      <el-menu-item index="user-center">个人中心</el-menu-item>
      <el-submenu index="3" class="userInfo">
        <template slot="title">{{ name }}</template>
        <el-menu-item v-show="name == '用户'" index="user-login">用户登录</el-menu-item>
        <el-menu-item v-show="name == '用户'" index="user-reg">用户注册</el-menu-item>
        <el-menu-item index="logout" @click="logout">退出</el-menu-item>
      </el-submenu>
    </el-menu>
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
      name: '用户',
      showMenu: true
    }
  },

  watch: {
    login_status(val) {
      if (val) {
        this.$router.push({path: '/'})
        this.name = JSON.parse(storage().get('user_name'))
      }
    },
    user_name(name) {
      this.name = name
    },
    admin_login(v) {
      this.showMenu = !v
    }
  },

  computed: {
    ...mapState(['login_status', 'user_name', 'admin_login'])
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
        this.$message({type: 'info', message: '退出成功～'})
        this.$store.dispatch('logout_status')
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

</style>
