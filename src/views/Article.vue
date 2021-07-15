<template>
  <section class="article">
    <h1>Article 單頁</h1>
    <!-- 麵包屑 breadcrumb -->
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb">
        <li class="breadcrumb-item"><router-link to="/articles">Articles List</router-link></li>
        <li class="breadcrumb-item active" aria-current="page">{{ article.title }}</li>
      </ol>
    </nav>
    <!-- Article body -->
    <div class="row justify-content-center">
      <article class="col-8">
        <h2>{{ article.title }}</h2>
        <p>
          <small class="text-muted">{{ $formats.formatDate(article.create_at) }}</small> -
          <small class="text-muted">Auteur：{{ article.author }}</small>
        </p>
        <img :src="article.imageUrl" alt="" class="img-fluid mb-3">
        <div v-html="article.content"></div>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Article',
  data () {
    return {
      article: {},
      id: ''
    }
  },
  methods: {
    getArticle () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/article/${this.id}`
      this.$http.get(url).then((res) => {
        console.log(res.data.article)
        this.article = res.data.article
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getArticle()
  }
}

</script>

<style scoped>

</style>
