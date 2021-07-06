<template>
  <!-- productModal Template -->
  <div
    id="adminProductModal"
    ref="modal"
    class="modal fade"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            {{ isNew ? '新增產品' : '編輯產品' }}
          </h5>
          <button
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <!-- modal-body -->
        <div class="modal-body">
          <div class="row">
            <!-- 圖片上傳區 -->
            <!-- left bloc -->
            <div class="col-sm-4">
              <!-- 主要圖片 -->
              <div class="form-group">
                <label for="imageUrl">主要圖片網址</label>
                <input
                  v-model.trim="tempProduct.imageUrl"
                  id="imageUrl"
                  type="text"
                  class="form-control"
                  placeholder="請輸入主要圖片網址"
                />
                <img :src="tempProduct.imageUrl" class="img-fluid" />
              </div>
              <!-- 多圖 -->
              <div class="mb-1">多圖新增</div>
              <div v-if="Array.isArray(tempProduct.imagesUrl)">
                <!-- for 渲染圖片 -->
                <div
                  v-for="(image, index) in tempProduct.imagesUrl"
                  :key="index"
                  class="mb-1"
                >
                  <div class="form-group">
                    <label for="imagesUrl">圖片網址{{ index + 1 }}</label>
                    <input
                      v-model="tempProduct.imagesUrl[index]"
                      :name="index + 1"
                      type="text"
                      class="from-control"
                      placeholder="請輸入圖片連結"
                    />
                  </div>
                  <!-- 增加刪除按鈕 -->
                  <div class="position-relative">
                    <button
                      @click.prevent="tempProduct.imagesUrl.splice(index, 1)"
                      type="button"
                      class="position-absolute bottom-0 end-0"
                      btn
                      btn-outline-danger
                    >
                      X
                    </button>

                    <img :src="image" class="img-fluid" alt="多圖預覽" />
                  </div>
                </div>

                <div
                  v-if="
                    !tempProduct.imagesUrl.length ||
                    tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]
                  "
                >
                  <button
                    @click.prevent="tempProduct.imagesUrl.push('')"
                    class="btn btn-outline-primary btn-sm d-block w-100"
                  >
                    新增圖片
                  </button>
                </div>
                <div v-else>
                  <button
                    title="刪除圖片"
                    @click.prevent="tempProduct.imagesUrl.pop()"
                    class="btn btn-outline-danger btn-sm d-block w-100"
                  >
                    刪除圖片
                  </button>
                </div>
              </div>
              <div v-else>
                <!-- 如沒裝 img 的 Array 就新增一組 Array -->
                <button
                  @click.prevent="createImages"
                  class="btn btn-outline-primary btn-sm d-block w-100"
                >
                  新增圖片
                </button>
              </div>
            </div>
            <!-- right bloc -->
            <div class="col-sm-8">
              <div class="form-group">
                <label for="title">標題</label>
                <input
                  v-model="tempProduct.title"
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入標題"
                />
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input
                    v-model="tempProduct.category"
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                  />
                </div>
                <!-- <div class="form-group col-md-6">
                  <label for="price">單位</label>
                  <input
                    v-model="tempProduct.unit"
                    id="unit"
                    type="unit"
                    class="form-control"
                    placeholder="請輸入單位"
                  />
                </div> -->
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input
                    v-model.number="tempProduct.origin_price"
                    id="origin_price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入原價"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input
                    v-model.number="tempProduct.price"
                    id="price"
                    type="number"
                    min="0"
                    class="form-control"
                    placeholder="請輸入售價"
                  />
                </div>
              </div>
              <hr />
              <div class="form-group">
                <label for="artist">藝術家</label>
                <input
                  v-model.number="tempProduct.artist"
                  id="artist"
                  type="text"
                  class="form-control"
                  placeholder="請輸入藝術加名稱"
                >
              </div>
              <div class="form-group">
                <label for="description">產品描述</label>
                <textarea
                  v-model.number="tempProduct.description"
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                ></textarea>
              </div>

              <div class="form-group">
                <label for="content">說明內容</label>
                <textarea
                  v-model="tempProduct.content"
                  id="content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品說明內容"
                ></textarea>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input class="form-check-input" type="checkbox" :id="tempProduct.id" :checked="tempProduct.is_enabled" >
                  <label class="form-check-label" :for="tempProduct.id">{{ tempProduct.is_enabled ? '已啟用' : '未啟用' }}</label>
                </div>
              </div>
            </div>
          </div>
        </div>
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
            @click="$emit('update-product', tempProduct)"
            type="button" class="btn btn-primary">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  // props: ['propsProduct', 'isNew'],
  props: {
    // 重外層取來的資料
    propsProduct: {
      type: Object,
      default () {
        return {
          imagesUrl: [],
          artist: ''
        }
      }
    },
    isNew: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      modal: '',
      tempProduct: {}
    }
  },
  watch: { // 待查正確使用方法
    propsProduct () {
      this.tempProduct = this.propsProduct
    }
  },
  emits: ['update-product'],
  mounted () {
    this.modal = new Modal(this.$refs.modal, {
      keyboard: false,
      backdrop: 'static'
    })
  },
  methods: {
    // 新增多圖片陣列
    createImages () {
      this.product.imagesUrl = [] // 複數
      this.product.imagesUrl.push('')
    },
    showModal () {
      this.modal.show()
    },
    hideModal () {
      this.modal.hide()
    }
  }
}
</script>

<style scoped></style>
