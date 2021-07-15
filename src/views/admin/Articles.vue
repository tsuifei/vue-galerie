<template>
<section><h1>Articles admin 文章列表</h1>
  <div>
    <div class="text-end mt-4">
      <button class="btn btn-primary" type="button" @click="openArticleModal(true)">
        建立新的文章
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th style="width: 200px">標題</th>
          <th style="width: 100px">作者</th>
          <th>描述</th>
          <th style="width: 100px">建立時間</th>
          <th style="width: 150px">是否公開</th>
          <th style="width: 120px">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles" :key="article.id">
          <td>{{ article.title }}</td>
          <td>{{ article.author }}</td>
          <td>{{ article.description }}</td>
          <td>{{ $formats.formatDate(article.create_at) }}</td>
          <td>{{ article.isPublic ? '已公開' : '未公開' }}</td>
          <td>
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                type="button"
                @click="getArticle(article.id)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                type="button"
                @click="deleteArticle(article)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <AdminArticleModal
      ref="adminArticleModal"
      :is-new="isNew"
      @emit-update-article="updateArticle"
      :propsArticle = "tempArticle"
    />
    <div class="col-6">
      <Pagination :page="pagination"
      @get-data="getArticles"/>
    </div>
  </div>
</section>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import AdminArticleModal from '@/components/AdminArticleModal.vue'

export default {
  name: 'AdminArticles',
  data () {
    return {
      articles: [],
      tempArticle: {
        isPublic: 0
      },
      pagination: {},
      page: 1,
      isNew: false
    }
  },
  components: {
    Pagination,
    AdminArticleModal
  },
  methods: {
    // Get All Article
    getArticles (page = 1) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/articles?page=${page}`
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            // console.log(res.data.articles)
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
    // Get Article
    getArticle (id) {
      console.log(id)
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${id}`
      this.$http.get(url).then((res) => {
        if (res.data.success) {
          console.log(res.data.article)
          this.openArticleModal(false, res.data.article)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    // 新增 /更新 Article
    updateArticle (item) {
      console.log('updateArticle OK1')
      this.tempArticle = item
      console.log(item)
      console.log(this.tempArticle)
      // 新增
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article`
      let httpMethod = 'post'
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/article/${this.tempArticle.id}`
        httpMethod = 'put'
      }
      const articleModalComponent = this.$refs.adminArticleModal
      // 使用[]物件取值 更新
      this.$http[httpMethod](url, {
        data: this.tempArticle
      })
        .then((response) => {
          if (response.data.success) {
            alert(response.data.message)
            // console.log(this.$refs)
            articleModalComponent.hideModal()
            this.getArticles(this.page)
          } else {
            alert(response.data.message)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
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
    },
    // Modal 狀態切換
    openArticleModal (isNew, item) { // 參數帶(狀態,產品)
      console.log('openModal OK')
      this.isNew = isNew
      // 狀態: new
      if (isNew) {
        this.tempArticle = {
          isPublic: false,
          create_at: Math.floor(Date.now() / 1000),
          tag: []
        }
        this.isNew = true
      } else {
        this.tempArticle = {
          ...item
        }
        this.isNew = false
      }
      console.log(this.$refs)
      const articleModalComponent = this.$refs.adminArticleModal
      articleModalComponent.showModal()
    }
  },
  mounted () {
    this.getArticles()
  }
}

</script>

<style scoped>

</style>
