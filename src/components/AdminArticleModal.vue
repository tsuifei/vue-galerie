<template>
<div class="modal fade" id="articleModal" ref="articleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
  aria-hidden="true" >
  <div class="modal-dialog modal-xl" role="document">
    <div class="modal-content border-0">
      <div class="modal-header bg-dark text-white">
        <h5 class="modal-title" id="exampleModalLabel">
            {{ isNew ? '新增文章' : '修改文章' }}
        </h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <div class="row">
<!-- --- -->
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="title" class="form-label">文章標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="tempArticle.title"
                  placeholder="文章請輸入標題"
                />
              </div>
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  v-model="tempArticle.imageUrl"
                  placeholder="請輸入圖片連結"
                />
              </div>
              <div class="mb-3">
                <label for="author" class="form-label">作者</label>
                <input
                  type="text"
                  class="form-control"
                  id="author"
                  v-model="tempArticle.author"
                  placeholder="請輸入作者"
                />
              </div>
              <div class="mb-3">
                <label for="create_at">文章建立日期</label>
                <input
                  type="date"
                  class="form-control"
                  id="create_at"
                  v-model="create_at"
                />
              </div>
            </div>
            <div class="col-sm-8">
              <label for="tag" class="form-label">標籤</label>
              <div class="row gx-1 mb-3">
                <div
                  class="col-md-2 mb-1"
                  v-for="(label, key) in tempArticle.tag"
                  :key="key"
                >
                  <div class="input-group input-group-sm">
                    <input
                      type="text"
                      class="form-control form-control"
                      id="tag"
                      v-model="tempArticle.tag[key]"
                      placeholder="請輸入標籤tag"
                    />
                    <button
                      type="button"
                      class="btn btn-outline-danger"
                      @click="tempArticle.tag.splice(key, 1)"
                    >
                      <i class="bi bi-x"></i>
                    </button>
                  </div>
                </div>
                <div
                  class="col-md-2 mb-1"
                  v-if="
                    tempArticle.tag[tempArticle.tag.length - 1] ||
                    !tempArticle.tag.length
                  "
                >
                  <button
                    class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="tempArticle.tag.push('')"
                  >
                    新增標籤
                  </button>
                </div>
              </div>
              <div class="mb-3">
                <label for="description" class="form-label">文章描述</label>
                <textarea
                  type="text"
                  class="form-control"
                  id="description"
                  v-model="tempArticle.description"
                  placeholder="請輸入文章描述"
                ></textarea>
              </div>
              <!-- 內容 content -->
              <!-- <div class="col-12">
                <label for="articleContent" class="form-label">
                  內容<span class="text-danger">*</span>
                </label>
                <ckeditor
                  id="articleContent"
                  name="內容"
                  :editor="editor"
                  :config="editorConfig"
                  v-model="tempArticle.content"
                ></ckeditor>
                <p v-if="!tempArticle.content" class="text-danger">
                  內容 為必填
                </p>
              </div> -->
              <!-- ---- -->
              <div class="mb-3">
                <label for="articleContent" class="form-label">
                  文章內容
                </label>
                <ckeditor
                  id="articleContent"
                  name="內容"
                  :editor="editor"
                  :config="editorConfig"
                  v-model="tempArticle.content"
                  placeholder="請輸入文章內容"
                ></ckeditor>
                <p v-if="!tempArticle.content" class="text-danger">
                  內容 為必填
                </p>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempArticle.isPublic"
                    id="isPublic"
                  />
                  <label class="form-check-label" for="isPublic">
                    是否公開
                  </label>
                </div>
              </div>
            </div>
<!-- --- -->
        <!-- modal footer -->
        <div class="modal-footer">
          <button
            @click="hideModal"
            type="button"
            class="btn btn-outline-secondary"
            data-dismiss="modal"
          >
            取消
          </button>
          <button
            @click="$emit('emit-update-article', tempArticle)"
            type="button" class="btn btn-primary">
            確認
          </button>
        </div>
        </div>
      </div>
    </div>
  </div>

</div>
          <!-- "title": "新增第一篇文章",
          "description": "文章內容",
          "image": "test.testtest",
          "tag":['tag1'],
          "content": "<p>你一現出，社這邊是是因為你真是。比較第一次開可以</p>"
          "create_at": 1555459220,
          "author": "alice",
          "isPublic": false,
          "content": "這是內容" -->

</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  name: 'ArticleModal',
  props: {
    propsArticle: {
      type: Object,
      default () {
        return {}
      }
    },
    isNew: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      articleModal: '',
      tempArticle: {
        title: '',
        author: '',
        content: '',
        description: '',
        tag: ['']
      },
      create_at: '',
      editor: ClassicEditor,
      editorData: '<p>請輸入內容。</p>',
      editorConfig: {
        toolbar: ['heading', 'bold', 'italic', '|', 'link', 'undo', 'redo', 'numberedList', 'bulletedList']
      }
    }
  },
  emits: ['emit-update-article'],
  watch: {
    // article () {
    //   this.tempArticle = this.article
    // }
    propsArticle () {
      this.tempArticle = this.propsArticle
      // 把日期轉回YYYY-MM-DD
      const isoDateTime = new Date(this.tempArticle.create_at * 1000)
        .toISOString().split('T');
      [this.create_at] = isoDateTime
      // console.log(isoDateTime)
    },
    create_at () {
      this.tempArticle.create_at = Math.floor(new Date(this.create_at) / 1000)
    }
  },
  methods: {
    showModal () {
      this.articleModal.show()
    },
    hideModal () {
      this.articleModal.hide()
    }
  },
  mounted () {
    this.articleModal = new Modal(this.$refs.articleModal, {
      keyboard: false,
      backdrop: 'static'
    })
    // console.log(this.articleModal)
  }
}

</script>

<style scoped>

</style>
