<template>
  <div class="products">
    <h1>Admin - Products List</h1>
    <div class="text-end mt-4">
      <!-- 新增 Button trigger modal -->
      <button
        @click="openModal('new')"
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#adminProductModal"
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
              <!-- <button
                @click="openModal('edit', item)"
                type="button"
                class="btn btn-sm btn-outline-primary btn-sm"
              >
                編輯
              </button> -->
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
      <pagination :page="pagination" @get-products="getProducts"></pagination>
    </div>
    <!-- Admin Product Modal  -->
    <!-- <admin-product-modal ref="adminProductModal" :propsProduct = "tempProduct"
        @emit-update="getProduct" :is-new= "isNew"></admin-product-modal>-->
  </div>
</template>

<script>
import pagination from '@/components/Pagination.vue'
// import adminProductModal from '@/components/AdminProductModal.vue'
export default {
  name: 'Products',
  data () {
    return {
      products: [],
      tempProduct: {
        imagesUrl: []
      },
      isNew: false,
      // isLoading: true,
      pagination: {}
    }
  },
  components: {
    // adminProductModal,
    pagination
  },
  methods: {
    // 取得產品列表
    getProducts (page = 1) {
      console.log('進來getProducts')
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`
      this.$http.get(url)
        .then((response) => {
          console.log('取得產品列表')
          if (response.data.success) {
            this.products = response.data.products
            console.log(this.products)
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
    // Get 單一商品(Modal)
    getModalProduct (id) {
      console.log('ok?')
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product
            this.$refs.adminProductModal.showModal()
          } else {
            alert(res.data.message)
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    // Modal 狀態切換
    openModal (isNew, item) { // 參數帶(狀態,產品)
      // 狀態: new
      if (isNew === 'new') {
        // 新增清空暫存物件
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
      } else if (isNew === 'edit') {
        // 以解構 淺拷貝一份出來修改，不然會直接修改原資料
        this.tempProduct = {
          ...item
        }
        this.isNew = false
        this.$refs.adminProductModal.openModal()
      }
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
          //   console.log(error, response.data.message)
          // })
      }
    },
    mounted () {
      this.getProducts()
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
    }
  }
}
</script>

<style scoped></style>
