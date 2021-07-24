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
          <p class="modal-title h5" v-if="tempProduct.id === undefined">新增商品 Nouvel </p>
          <p class="modal-title h5" v-else>編輯產品 Editer</p>
          <button
            type="button"
            class="close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <!-- modal-body -->
        <Form action="" v-slot="{ errors }" ref="productForm" @submit.stop="">
        <div class="modal-body">
          <div class="row">
            <div class="col-12">
              <label for="title">標題</label>
              <Field
                v-model="tempProduct.title"
                id="title"
                name="title"
                :class="{ 'is-invalid': errors['title'] }"
                rules="required"
                type="text"
                class="form-control"
                placeholder="請輸入標題"
              />
              <error-message name="title" class="invalid-feedback"></error-message>
            </div>
            <div class="col-12">
              <label for="description">產品描述</label>
              <Field
                v-model.number="tempProduct.description"
                id="description"
                name="description"
                :class="{ 'is-invalid': errors['description'] }"
                rules="required"
                type="text"
                class="form-control"
                placeholder="請輸入產品描述"
              ></Field>
              <error-message name="description" class="invalid-feedback"></error-message>
            </div>
            <div class="col-12">
              <label for="content">說明內容</label>
              <Field
                v-model="tempProduct.content"
                id="content"
                name="content"
                :class="{ 'is-invalid': errors['content'] }"
                rules="required"
                type="text"
                class="form-control"
                placeholder="請輸入產品說明內容"
              ></Field>
              <error-message name="content" class="invalid-feedback"></error-message>
            </div>
            <div class="col-12">
              <label for="artist">藝術家</label>
              <Field
                v-model.number="tempProduct.artist"
                id="artist"
                name="artist"
                :class="{ 'is-invalid': errors['artist'] }"
                rules="required"
                type="text"
                class="form-control"
                placeholder="請輸入藝術加名稱"
              />
              <error-message name="artist" class="invalid-feedback"></error-message>
            </div>
            <div class="col-3">
                <label for="origin_price">原價</label>
                <Field
                  v-model.number="tempProduct.origin_price"
                  id="origin_price"
                  name="origin_price"
                  :class="{ 'is-invalid': errors['origin_price'] }"
                  rules="min_value:0|required"
                  type="number"
                  min="0"
                  class="form-control"
                  placeholder="請輸入原價"
                />
                <error-message name="origin_price" class="invalid-feedback"></error-message>
              </div>
              <div class="col-3">
                <label for="price">售價</label>
                <Field
                  v-model.number="tempProduct.price"
                  id="price"
                  name="price"
                  :class="{ 'is-invalid': errors['price'] }"
                  rules="min_value:0|required"
                  type="number"
                  min="0"
                  class="form-control"
                  placeholder="請輸入售價"
                />
                <error-message name="price" class="invalid-feedback"></error-message>
              </div>
              <div class="col-3">
                <label for="category">分類</label>
                <Field
                  v-model="tempProduct.category"
                  id="category"
                  name="category"
                  :class="{ 'is-invalid': errors['category'] }"
                  rules="required"
                  type="text"
                  class="form-control"
                  placeholder="請輸入分類"
                />
                <error-message name="category" class="invalid-feedback"></error-message>
              </div>
              <div class="col-3">
                <label for="price">單位</label>
                <Field
                  v-model="tempProduct.unit"
                  id="unit"
                  name="unit"
                  :class="{ 'is-invalid': errors['unit'] }"
                  rules="required"
                  type="unit"
                  class="form-control"
                  placeholder="請輸入單位"
                />
                <error-message name="unit" class="invalid-feedback"></error-message>
              </div>
              <!-- 圖片上傳區 -->
              <!-- 主要圖片 -->
              <div class="col-6">
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
                  <!-- 增加刪除圖片按鈕 -->
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
        </div>
        <div class="modal-footer">
          <button
            @click="resetForm"
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
        </Form>
      </div>
    </div>
    <loading :active.sync="isLoading"></loading>
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
          category: '',
          content: '',
          description: '',
          origin_price: 0,
          price: 0,
          title: '',
          unit: '',
          num: '',
          imageUrl: '',
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
      isLoading: false,
      tempProduct: {
        category: '',
        content: '',
        description: '',
        origin_price: 0,
        price: 0,
        title: '',
        unit: '',
        num: '',
        imageUrl: '',
        imagesUrl: [],
        artist: ''
      }
    }
  },
  emits: ['update-product'],
  watch: { // 待查正確使用方法
    propsProduct () {
      this.tempProduct = this.propsProduct
    }
  },
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
    },
    resetForm () {
      console.log('resetForm OK')
      this.$refs.productForm.resetForm()
      this.hideModal()
    }
  }
}
</script>

<style scoped></style>
