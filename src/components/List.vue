<template>
  <div>
    <div class="search">
      <el-input v-model="keyWord" placeholder="请输入关键字查询" slot="prepend">
        <el-button slot="append" icon="el-icon-search" @click="getData"></el-button>
      </el-input>

      <div class="container">
        <div v-for="item in listData" :key="item._id" class="content">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.img" class="image">
            <div style="padding: 14px;">
              <span class="book-title">{{ item.title }}</span>
              <div class="bottom">
                <time class="time">{{ item.author }}</time>
                <el-button type="text" class="button">借阅</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </div>

      <el-button style="width: 100%;" type="danger" @click="getMoreData">加载更多</el-button>

      <el-dialog title="提示" :visible.sync="dialogVisible">
        <span>请先登录，方可借阅</span>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取消</el-button>
          <el-button type="primary" @click="handleLogin">登录</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyWord: '',
      page: 1,
      author: '',
      listData: [],
      dialogVisible: false
    }
  },

  methods: {
    getData() {
      if (this.keyWord  !== '') {
        this.listData = []
      }
      this.$http.get('books/get_data', {
        params: {
          page: this.page,
          keyWord: this.keyWord
        }
      })
      .then(resp => {
        let data = resp.data.data
        data.forEach(item => {
          this.listData.push({
            author: item.author,
            img: item.img,
            link: item.link,
            price: item.price,
            title: item.title,
            _v: item._v,
            _id: item._id
          })
        })
      })
    },

    getMoreData() {
      this.page = this.page + 1
      this.getData()
    },

    handleBorrow() {
      if (localStorage.getItem('user_name')) {
        console.log('成功借阅')
      } else {
        this.dialogVisible = true
      }
    },

    handleLogin() {
      this.$router.push({ path: '/user-reg' })
    }
  },

  created() {
    this.getData()
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .search
    width: 80%
    margin: 20px auto
    .container
      margin: 20px auto
      .content
        width: 20%
        display: inline-block
        .image
          width: 100%
        .book-title
          width: 100%
          display: block
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
        .time
          width: 50%
          display: inline-block
          overflow: hidden
          text-overflow: ellipsis
          white-space: nowrap
          float: left
          line-height: 40px
        .button
          float: right
</style>
