<template>
  <div class="products">
    <h1>W6 產品列表 購物車 表單驗證</h1>
    <!-- 產品列表  -->
    <table class="table align-middle mt-4">
      <thead class="table align-middle">
        <tr>
          <th>圖片</th>
          <th>商品名稱</th>
          <th>價格</th>
          <th>商品介紹</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>
            <a href="#" @click="getModalProduct(item.id)"
              ><img
                :src="item.imageUrl"
                :alt="`${item.title}圖片`"
                class="list-image"
            /></a>
          </td>
          <td>
            <!-- 以頁面顯示單一產品頁 -->
            <router-link :to="`/product/${item.id}`">{{ item.title }}</router-link>
          </td>
          <td>
            <del>原價：{{ item.origin_price }}元</del>
            <div>優惠價：{{ item.price }}元</div>
          </td>
          <td>
            <!-- 使用 Modal 開啟單一商品 -->
            <div class="btn-group btn-group-sm">
              <button
                @click="getModalProduct(item.id)"
                type="button"
                class="btn btn-outline-secondary"
              >
                查看商品資訊
              </button>
              <button
                @click="addToCart(item.id)"
                type="button"
                class="btn btn-outline-danger"
              >
                加到購物車
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
      <!-- 單一產品Modal  -->
      <product-modal ref="productModal" :product="product" @add-to-cart="addToCart"></product-modal>
      <!-- loading -->
      <loading :active.sync="isLoading"></loading>
  </div>
</template>

<script>
import pagination from '@/components/Pagination.vue'
import productModal from '@/components/ProductModal.vue'
import emitter from '../assets/javascript/emitter'
export default {
  // name: "Products",
  data () {
    return {
      products: [],
      product: {},
      cartsData: {},
      isLoading: false,
      pagination: {}
    }
  },
  methods: {
    // Get 所有商品
    getProducts (page = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.products = res.data.products
            this.pagination = res.data.pagination
          } else {
            alert(res.data.message)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },
    // Get 單一商品(Modal)
    getModalProduct (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
      this.$http
        .get(url)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product
            this.isLoading = false
            this.$refs.productModal.showModal()
          } else {
            alert(res.data.message)
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    // Post 增加購物車
    addToCart (id, qty = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: qty
      }
      this.$http
        .post(url, {
          data: cart
        })
        .then((res) => {
          if (res.data.success) {
            emitter.emit('updata-cart')
            alert(res.data.message)
            this.isLoading = false
            this.$refs.productModal.hideModal()
          } else {
            alert(res.data.message)
          }
        }).catch((err) => {
          console.log(err)
        })
    }
    // addLoading () {
    //   const loader = this.$Loading.show()
    //   setTimeout(() => {
    //     loader = hide()
    //   }, 3000)
    // }
  },
  components: {
    productModal,
    pagination
  },
  created () {
    this.getProducts()
  }
}
</script>

<style scoped>
.list-image {
  width: 200px;
}
</style>
