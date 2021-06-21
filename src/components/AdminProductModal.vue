<template>
  <!-- productModal Template -->
  <!-- <script type="text/x-template" id="productModal"> -->
  <div
    id="adminProductModal"
    ref="adminProductModal"
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
                  v-model="product.imageUrl"
                  id="imageUrl"
                  type="text"
                  class="form-control"
                  placeholder="請輸入主要圖片網址"
                />
                <img :src="product.imageUrl" class="img-fluid" />
              </div>
              <!-- 多圖 -->
              <div class="mb-1">多圖新增</div>
              <div v-if="Array.isArray(product.imagesUrl)">
                <!-- for 渲染圖片 -->
                <div
                  v-for="(image, index) in product.imagesUrl"
                  :key="index"
                  class="mb-1"
                >
                  <div class="form-group">
                    <label for="imagesUrl">圖片網址{{ index + 1 }}</label>
                    <input
                      v-model="product.imagesUrl[index]"
                      :name="index + 1"
                      type="text"
                      class="from-control"
                      placeholder="請輸入圖片連結"
                    />
                  </div>
                  <!-- 增加刪除按鈕 -->
                  <div class="position-relative">
                    <button
                      @click="product.imagesUrl.splice(index, 1)"
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
                    !product.imagesUrl.length ||
                    product.imagesUrl[product.imagesUrl.length - 1]
                  "
                >
                  <button
                    @click="product.imagesUrl.push('')"
                    class="btn btn-outline-primary btn-sm d-block w-100"
                  >
                    新增圖片
                  </button>
                </div>
                <div v-else>
                  <button
                    title="刪除圖片"
                    @click="product.imagesUrl.pop()"
                    class="btn btn-outline-danger btn-sm d-block w-100"
                  >
                    刪除圖片
                  </button>
                </div>
              </div>
              <div v-else>
                <!-- 如沒裝 img 的 Array 就新增一組 Array -->
                <button
                  @click="createImages"
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
                  v-model="product.title"
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
                    v-model="product.category"
                    id="category"
                    type="text"
                    class="form-control"
                    placeholder="請輸入分類"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">單位</label>
                  <input
                    v-model="product.unit"
                    id="unit"
                    type="unit"
                    class="form-control"
                    placeholder="請輸入單位"
                  />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input
                    v-model.number="product.origin_price"
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
                    v-model.number="product.price"
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
                <label for="description">產品描述</label>
                <textarea
                  v-model.number="product.description"
                  id="description"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品描述"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="content">說明內容</label>
                <textarea
                  v-model="product.content"
                  id="content"
                  type="text"
                  class="form-control"
                  placeholder="請輸入產品說明內容"
                ></textarea>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    v-model="product.is_enabled"
                    id="is_enabled"
                    :true-value="1"
                    :false-value="0"
                    class="form-check-input"
                    type="checkbox"
                  />
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                  </label>
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
          <button @click="updateProduct" type="button" class="btn btn-primary">
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
  props: {
    propsProduct: {
      type: Object,
      default () {
        return {
          imagesUrl: []
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
    product () {
      this.tempProduct = this.product
    }
  },
  mounted () {
    this.modal = new Modal(this.$refs.adminProductModal, {
      keyboard: false,
      backdrop: 'static'
    })
  },
  // watch: { // 待查正確使用方法
  //   product () {
  //     this.tempProduct = this.product
  //   }
  // },
  methods: {
    // 新增/更新產品
    updateProduct (product) {
      // 新增
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.product.id}`
        httpMethod = 'put'
        this.$emit('emitUpdate')
      }
      // 使用[]物件取值
      this.http[httpMethod](url, {
        data: this.product
      })
        .then((response) => {
          if (response.data.success) {
            alert(response.data.message)
            this.hideModal()
            this.$emit('emitUpdate')
          } else {
            alert(response.data.message)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
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
