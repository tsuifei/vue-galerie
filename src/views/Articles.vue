<template>
  <section class="articles">
  <h1>Articles</h1>
    <div class="row mb-2">
      <div class="col-md-6" v-for="article in articles" :key="article.id">
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <strong class="d-inline-block mb-2 text-success">{{article.tag}}</strong>
            <h3 class="mb-0">{{article.title}}</h3>
            <div class="mb-1 text-muted">{{$formats.formatDate(article.create_at)}}</div>
            <p>{{article.description}}</p>
            <p class="mb-auto">{{article.content}}</p>
            <router-link :to="`/article/${article.id}`">Continue reading</router-link>
          </div>
          <div class="col-auto d-none d-lg-block float-end col-4">
            <img :src="article.image" alt="" class="img-fluid float-end">
          </div>
      </div>
    </div>
  </div>
  <!-- pagination bloc  -->
  <div class="col-6">
    <Pagination :page="pagination"
    @get-data="getArticles"/>
  </div>
    <!-- 單一文章Modal  -->
  <ArticleModal
    ref="articleModal"
    :article="article"
  />
  </section>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
export default {
  name: 'Articles',
  data () {
    return {
      articles: [],
      tempArticle: {},
      isLoading: false,
      pagination: {}
    }
  },
  components: {
    Pagination
  },
  methods: {
    // Get All Article
    getArticles (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/articles?page=${page}`
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            console.log(res.data.articles)
            this.isLoading = false
            this.articles = res.data.articles
            this.pagination = res.data.pagination
          } else {
            alert(res.data.message)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // Get 單一文章(Modal)
    getModalArticle (id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/article/${id}`
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.article = res.data.article
            console.log(this.article)
            console.dir(this.$refs.articleModal)
          } else {
            alert(res.data.message)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    addArticle () {
      // 方便 快速新增 Article
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article`
      this.$http.post(url, {
        data: {
          // title: 'Thanksgiving Day',
          // percent: 10,
          // is_enabled: 1,
          // code: 'HappyDay',
          // due_date: Math.floor(Date.now() / 1000)
          title: '已公開 文章',
          description: '文章內容',
          image: 'http://www.galerie.tsuifei.com/files/oeuvres/121.jpg',
          tag: ['tag1', 'tag2'],
          create_at: Math.floor(Date.now() / 1000),
          author: 'alice',
          isPublic: true,
          content: '這是內容這是內容這是內容這是內容這是內容這是內容這是內容'
        }
      })
        .then((response) => {
          if (response.data.success) {
            alert(response.data.message)
            this.getArticles(this.page)
            // this.$emit('emitUpdate')
          } else {
            alert(response.data.message)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },

  created () {
    // this.addArticle()
    this.getArticles()
  }
}
</script>

<style scoped>

</style>
