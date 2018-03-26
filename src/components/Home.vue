<template>
  <div>
    <div class="search">
      <el-input v-model="keyWord" placeholder="请输入关键字查询" slot="prepend">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyWord: '',
      page: 1
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
        console.log(resp, 'resp')
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
</style>
