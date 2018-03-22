<template>
  <div>
    hello
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },

  created() {
    this.$http.get('books/get_data/1')
    .then(res => {
      console.log(res)
    })
  }
}
</script>

<style></style>
