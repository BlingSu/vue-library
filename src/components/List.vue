<template>
  <div>
    <div class="search">
      <el-input v-model="keyWord" placeholder="请输入关键字查询" slot="prepend">
        <el-button slot="append" icon="el-icon-search" disabled></el-button>
      </el-input>

      <div class="container">
        <div v-for="item in listData" :key="item._id" class="content">
          <el-card :body-style="{ padding: '0px' }">
            <img :src="item.img" class="image">
            <div style="padding: 14px;">
              <span class="book-title">{{ item.title }}</span>
              <div class="bottom">
                <time class="time">{{ item.author }}</time>
                <el-button type="text" class="button" @click="handleBorrow(item)">借阅</el-button>
              </div>
            </div>
          </el-card>
        </div>
      </div>

      <el-button style="width: 100%;" type="danger" @click="getMoreData">加载更多</el-button>

    </div>
  </div>
</template>

<script>
import storage from 'common/js/store'

export default {
  data() {
    return {
      keyWord: '',
      page: 1,
      author: '',
      listData: []
    }
  },

  watch: {
    keyWord() {
      this.getData()
    }
  },

  methods: {
    getData() {
      if (this.keyWord !== '') {
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

    handleBorrow(data) {
      this.$http.post('books/pick', {
        id: data._id,
        user_id: JSON.parse(storage().get('user_id'))
      })
      .then(resp => {
        this.$message({ type: 'success', message: resp.data.message })
      })
    },

    handleLogin() {
      this.$router.push({ path: '/user-login' })
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
