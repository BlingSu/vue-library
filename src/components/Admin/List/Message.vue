<template>
  <div>
    <div class="header">
      <h3>用户信息列表</h3>
    </div>

    <div class="message">
      <p>{{ '姓名:' + user.name }}</p>
      <p>{{ '用户名:' + user.user_name }}</p>
      <p>{{ '手机号:' + user.mobile }}</p>
      <p>{{ '联系地址:' + user.address }}</p>
    </div>

    <div class="table-div">
      <el-table :data="tableData" border stripe class="e-table">
        <el-table-column type="index" label="序号" width="80"></el-table-column>
        <el-table-column label="书籍" prop="book_id.title"></el-table-column>
        <el-table-column label="作者" prop="book_id.author"></el-table-column>
        <el-table-column label="借阅时间">
          <template slot-scope="scope">
            {{ getBorrowTime(scope.row.booked_date) }}
          </template>
        </el-table-column>
      </el-table>
      <el-button style="width: 100%;" type="danger" @click="$router.go(-1)">返回上一页</el-button>
    </div>

  </div>
</template>

<script>
import formatDate from 'common/js/date'

export default {
  data() {
    return {
      tableData: [],
      user: {}
    }
  },

  methods: {
    getData() {
      this.$http.get('admin/books', {params: {id: this.$router.history.current.query.id}})
      .then(resp => {
        console.log(resp)
        if (resp.data.user == null) {
          this.$message({ type: 'error', message: '登录信息过期，请重新登录' })
        } else {
          this.tableData = resp.data.data
          this.user = Object.assign({}, resp.data.user)
        }
      })
    },
    getBorrowTime(time) {
      return formatDate(time)
    }
  },

  created() {
    if (this.$router.history.current.query.id) {
      this.getData()
    } else {
      this.$message({ type: 'error', message: '登录信息过期，请重新登录' })
      this.$router.push({ path: '/admin/login' })
    }
  }
}
</script>


<style scoped lang="stylus" rel="stylesheet/stylus">
$width = 1200px

.header
  width: $width
  height: 64px
  margin: 0 auto
  overflow: hidden
.message
  width: $width
  margin: 0 auto
  color: #6C93BB
  p
    margin: 0
.table-div
  width: $width
  margin: 20px auto
</style>
