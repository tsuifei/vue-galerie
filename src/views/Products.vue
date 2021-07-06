<template>
  <section class="products">
    <h1>前台產品列表</h1>
    <!-- 產品列表  -->
    <ProductBlock :products='products'></ProductBlock>
    <!-- pagination bloc  -->
    <div class="col-6">
      <pagination :page="pagination" @get-data="getProducts"></pagination>
    </div>
      <!-- 單一產品Modal  -->
      <!-- <product-modal ref="productModal" :product="product" @add-to-cart="addToCart"></product-modal> -->
      <!-- loading -->
      <loading :active.sync="isLoading"></loading>
  </section>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
// import productModal from '@/components/ProductModal.vue'
import ProductBlock from '@/components/ProductBlock.vue'
// import emitter from '../assets/javascript/emitter'
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
    }
    // Get 單一商品(Modal)
    // getModalProduct (id) {
    //   this.isLoading = true
    //   const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${id}`
    //   this.$http
    //     .get(url)
    //     .then((res) => {
    //       if (res.data.success) {
    //         this.product = res.data.product
    //         this.isLoading = false
    //         this.$refs.productModal.showModal()
    //       } else {
    //         alert(res.data.message)
    //       }
    //     }).catch((err) => {
    //       console.log(err)
    //     })
    // }
    // // Post 增加購物車
    // addToCart (id, qty = 1) {
    //   this.isLoading = true
    //   const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
    //   const cart = {
    //     product_id: id,
    //     qty: qty
    //   }
    //   this.$http
    //     .post(url, {
    //       data: cart
    //     })
    //     .then((res) => {
    //       if (res.data.success) {
    //         emitter.emit('update-cart')
    //         alert(res.data.message)
    //         this.isLoading = false
    //         this.$refs.productModal.hideModal()
    //       } else {
    //         alert(res.data.message)
    //       }
    //     }).catch((err) => {
    //       console.log(err)
    //     })
    // }
  },
  components: {
    // productModal,
    Pagination,
    ProductBlock
  },
  created () {
    this.getProducts()
  }
}
</script>

<style scoped>
/* .list-image {
  width: 200px;
} */
</style>
