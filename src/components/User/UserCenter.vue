<template>
  <div>
    <h3>用户个人中心</h3>
    <el-table :data="tableData" border stripe class="e-table">
      <el-table-column type="index" label="序号" width="80"></el-table-column>
      <el-table-column label="书名" prop="book_id.title"></el-table-column>
      <el-table-column label="作者" prop="book_id.author"></el-table-column>
      <el-table-column label="借阅时间">
        <template slot-scope="scope">
          {{ formatDate(scope.row.booked_date) }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import storage from 'common/js/store'
import {mapState} from 'vuex'

export default {
  data() {
    return {
      tableData: []
    }
  },

  computed: {
    ...mapState(['logout_status'])
  },

  watch: {
    logout_status(v) {
      if (v) {
        this.$router.push({path: '/'})
        this.$store.dispatch('user_name')
      }
    }
  },

  methods: {
    formatDate(val) {
      let d = new Date(val)
      let year = d.getFullYear()
      let month = d.getMonth() +1 < 10 ? `0${d.getMonth() + 1}` : d.getMonth() +1
      let day = d.getDate() < 10 ? `0${d.getDate()}` : d.getDate()
      let hour = d.getHours() < 10 ? `0${d.getHours()}` : d.getHours()
      let minute = d.getMinutes() < 10 ? `0${d.getMinutes()}` : d.getMinutes()
      let second = d.getSeconds() < 10 ? `0${d.getSeconds()}` : d.getSeconds()
      return `${year}-${month}-${day} ${hour}:${minute}:${second}`
    },
    getTableData() {
      this.$http.get('user/user_info', {
        params: {
          user_id: JSON.parse(storage().get('user_id'))
        }
      })
      .then(resp => {
        this.tableData = resp.data.books
      })
    }
  },

  created () {
    this.getTableData()
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.e-table
  width: 80%;
  margin: 20px auto
h3
  margin-left: 120px
</style>
