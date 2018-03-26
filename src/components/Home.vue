<template>
  <div>
    <div class="search">
      <el-input v-model="keyWord" placeholder="请输入关键字查询" slot="prepend">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>

      <div class="container">
        <div class="card" v-for="item in listData" :key="item._id">
          <img :src="item.img">
          <div class="info">
            <h3>{{ item.title }}</h3>
            <div class="bom">
              <span class="author">{{ item.author }}</span>
              <span class="price">{{ '￥' + item.price + '元'}}</span>
              <button>借阅</button>
            </div>
          </div>
        </div>
      </div>
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
      listData: []
    }
  },

  methods: {
    getData() {
      this.$http.get('books/get_data', {
        params: {
          page: this.page
        }
      })
      .then(resp => {
        this.listData = resp.data.data
      })
    }
  },

  created() {
    this.getData()
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .search
    width: 80%;
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
        overflow: hidden
      .bom
        height: 25px
        overflow: hidden
        line-height: 25px
      .author
        font-size: 12px
        color: #999
        padding-right: 10px
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
</style>
