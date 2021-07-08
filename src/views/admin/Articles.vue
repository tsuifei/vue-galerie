<template>
<section></section>
</template>

<script>
export default {
  name: 'AdminArticles',
  data () {
    return {

    }
  },
  methods: {
    // 刪除 Article
    deleteArticle (article) {
      if (confirm(`確認刪除此${article.title} article?`)) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${article.id}`
        this.$http.delete(url)
          .then((response) => {
            console.log(response.data.message)
            if (response.data.success) {
              // alert(response.data.message);
              this.getArticles()
            } else {
              alert(response.data.message)
            }
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }
  }
}

</script>

<style scoped>

</style>
