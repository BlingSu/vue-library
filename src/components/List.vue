<template>
  <div>
    <div class="search">
      <el-input v-model="keyWord" placeholder="请输入关键字查询" slot="prepend">
        <el-button slot="append" icon="el-icon-search" @click="getData"></el-button>
      </el-input>

      <div class="container">
        <div class="card" v-for="item in listData" :key="item._id">
          <img :src="item.img">
          <div class="info">
            <h3>{{ item.title }}</h3>
            <div class="bom">
              <span class="author">{{ item.author }}</span>
              <span class="price">{{ '￥' + item.price}}</span>
              <button @click="handleBorrow">借阅</button>
            </div>
          </div>
        </div>
      </div>

      <div class="load-more">
        <el-button type="danger" @click="getMoreData">加载更多</el-button>
      </div>


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
      margin:20px 0
    .card
      box-shadow: 0 2px 12px 0 rgba(0,0,0,.1)
      width: 220px
      display: inline-block
      float: left
      margin: 0 20px 20px 0
      img
        display: block
        width: 220px
        height: 200px
      .info
        padding: 12px
      h3
        margin: 0
        color: #303133
        font-weight: normal
        font-size: 14px
        margin-bottom: 6px
        height: 22px
        line-height: 22px
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
      .bom
        height: 25px
        overflow: hidden
        line-height: 25px
      .author
        font-size: 12px
        color: #999
        padding-right: 7px
        max-width: 70px
        height: 25px
        display: inline-block
        float: left
        text-overflow: ellipsis
        white-space: nowrap
        overflow: hidden
      .price
        font-size: 14px
        color: #fd005b
      button
        background: #5b97fc
        color: #fff
        font-size: 14px
        border: 0
        border-radius: 3px
        padding: 3px 8px
        float: right
        cursor: pointer
</style>
