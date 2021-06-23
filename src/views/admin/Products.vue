<template>
  <div class="products">
    <h1>Admin - Products List</h1>
    <div class="text-end mt-4">
      <!-- 新增 Button trigger modal -->
      <button
        @click="openModal(true)"
        type="button"
        class="btn btn-primary"
      >
        建立新產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>分類</th>
          <th>產品名稱</th>
          <th width="120">原價</th>
          <th width="120">售價</th>
          <th width="150">啟用狀態</th>
          <th width="120">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{item.category}}</td>
          <th>{{item.title}}</th>
          <td width="120">{{item.origin_price}}</td>
          <td width="120">{{item.price}}</td>
          <td width="100">
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span class="" v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group" width="120">
              <button
                @click="openModal(false, item)"
                type="button"
                class="btn btn-sm btn-outline-primary btn-sm"
              >
                編輯
              </button>
              <button
                @click="deleteProduct(item) "
                type="button"
                class="btn btn-sm btn-outline-danger btn-sm"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  <!-- pagination bloc  -->
    <div class="col-6">
      <Pagination :page="pagination" @get-products="getProducts"></Pagination>
    </div>
    <!-- Admin Product Modal  -->
    <Admin-product-modal
      @update-product="updateProduct"
      ref="adminProductModal"
      :propsProduct = "tempProduct"
      :is-new= "isNew"/>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import AdminProductModal from '@/components/AdminProductModal.vue'
export default {
  name: 'Products',
  data () {
    return {
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      modal: {

      },
      isNew: false,
      // isLoading: true,
      pagination: {},
      page: 1
    }
  },
  components: {
    AdminProductModal,
    Pagination
  },
  methods: {
    // 取得產品列表
    getProducts (page = 1) {
      // console.log('進來getProducts')
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.$http.get(url)
        .then((response) => {
          // console.log('取得產品列表')
          if (response.data.success) {
            this.products = response.data.products
            // console.log(this.products)
            this.pagination = response.data.pagination
          } else {
            alert(response.data.message)
            // window.location = 'login.html';
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 新增/更新產品
    updateProduct (item) {
      this.tempProduct = item
      // 新增
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`
      let httpMethod = 'post'
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`
        httpMethod = 'put'
        // this.$emit('emitUpdate')
      }
      // 使用[]物件取值
      this.http[httpMethod](url, {
        data: this.tempProduct
      })
        .then((response) => {
          if (response.data.success) {
            alert(response.data.message)
            this.$refs.AdminProductModal.hideModal()
            this.getProducts(this.page)
            // this.$emit('emitUpdate')
          } else {
            alert(response.data.message)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // Modal 狀態切換
    openModal (isNew, item) { // 參數帶(狀態,產品)
      console.log('openModal OK')
      // 狀態: new
      if (isNew) {
        // 新增清空暫存物件
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
      } else {
        // 以解構 淺拷貝一份出來修改，不然會直接修改原資料
        this.tempProduct = {
          ...item
        }
        this.isNew = false
      }
      console.log(`this.$refs:${this.$refs}`)
      this.$refs.adminProductModal.openModal()
    },
    // 刪除產品
    deleteProduct (product) {
      if (confirm(`確認刪除此${product.title}產品?`)) {
        const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${product.id}`
        this.$http.delete(url)
          .then((response) => {
            console.log(response.data.message)
            if (response.data.success) {
              // alert(response.data.message);
              this.getProducts()
            } else {
              alert(response.data.message)
            }
          })
          // .catch((error) => {
          //   console.log(error)
          // })
      }
    }
  },
  mounted () {
    // 取出token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      '$1'
    )
    if (!token || token === '') {
      alert('你尚未登入，請重新登入')
      // window.location = "login.html"
      this.$router.push('/login')
    }
    this.$http.defaults.headers.common.Authorization = `${token}`
  },
  created () {
    console.log('created')
    this.getProducts()
  }
}
</script>

<style scoped></style>
