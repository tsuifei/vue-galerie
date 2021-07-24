<template>
  <section class="products">
    <h1>前台產品列表</h1>
    <!-- 產品列表  -->
    <ProductBlock :products='products'></ProductBlock>
    <!-- pagination bloc  -->
    <div class="col-6">
      <pagination :page="pagination" @get-data="getProducts"></pagination>
    </div>
      <loading :active.sync="isLoading"></loading>
  </section>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import ProductBlock from '@/components/ProductBlock.vue'
export default {
  name: 'Products',
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
