<template>
  <div>
    <h1>404</h1>
    <p>將自動轉至首頁</p>
  </div>
</template>

<script>
export default {
  mounted () {
    setTimeout(() => {
      this.$router.push('/')
    }, 1000)
  }
}
</script>

<style scoped>

</style>
