<template>
  <div>
    <el-dialog title="提示" :visible.sync="dialogVisible" width="30%">
      <span>确定删除本条信息？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleBtn">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  props: ['getDeleteId'],

  data() {
    return {
      dialogVisible: false,
      id: ''
    }
  },

  computed: {
    ...mapState(['dialog_visible'])
  },

  watch: {
    dialog_visible(status) {
      this.dialogVisible = status
    },
    dialogVisible(status) {
      if (!status) {
        this.$store.state.dialog_visible = false
      }
    },
    getDeleteId(id) {
      this.id = id
    }
  },

  methods: {
    handleBtn() {
      this.$http.post('admin/delete', { _id: this.id })
      .then(resp => {
        this.$message({type: 'success', message: resp.data.message})
        this.dialogVisible = false
      })
    }
  }
}
</script>
