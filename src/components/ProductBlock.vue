<template>
<div>
<section class="container">
      <div class="py-3">
        <ul class="row">
  <li
    class="col-sm-6 col-lg-4 col-xl-3 my-2"
    v-for="item in products"
    :key="item.id"
  >
    <div class="card text-dark border shadow-sm bg-light p-2">
      <router-link :to="`/product/${item.id}`">
        <div class="card-img-top">
          <img class="card-img-top" :src="item.imageUrl" alt="'商品圖" />
        </div>
      </router-link>
      <div
        class="
          row
          card-body
          rounded-bottom
          px-2
          py-3
          m-0
          d-flex
          justify-content-between
          align-items-center
        "
      >
        <router-link
          class="col-9 p-0 text-dark border-0"
          :to="`/product/${item.id}`"
        >
          <h1 class="h4 m-0 text-truncate">
            {{ item.title }} <br />
            <span class="h6 fst-italic"> ${{ item.price }} </span>
          </h1>
        </router-link>
        <!-- <span class="col-3 p-0">
          <span
            class="btn btn_outline_green fs-4 ms-1"
            @click="addToCart(item.id)"
          >
            <i class="bi bi-cart-plus-fill"></i>
          </span>
        </span> -->
        <!-- 2 boutton -->
        <!-- 使用 Modal 開啟單一商品 -->
        <!-- <span class="col-3 p-0"> -->
          <div class="btn-group btn-group-sm">
            <button
              @click="getModalProduct(item.id)"
              type="button"
              class="btn btn-outline-secondary"
              alt="產品細節"
            >
              Détail
            </button>
            <button
              @click="addToCart(item.id)"
              type="button"
              class="btn btn-outline-danger"
              alt="加入購物車"
            >
              Ajouter
            </button>
          </div>
        <!-- </span> -->
        <!-- 2 boutton -->
      </div>
    </div>
  </li>
          </ul>
      </div>
    </section>
  <!-- loading -->
  <loading :active.sync="isLoading" />
  <!-- 單一產品Modal  -->
  <product-modal
    ref="productModal"
    :product="product"
    @add-to-cart="addToCart"
  />
  </div>
</template>
<script>
import emitter from '../assets/javascript/emitter'
import productModal from '@/components/ProductModal.vue'
export default {
  name: 'ProductBlock',
  props: ['products'],
  data () {
    return {
      tempProduct: {},
      isLoading: false,
      modal: '',
      qty: 1
    }
  },
  components: {
    productModal
  },
  methods: {
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
            emitter.emit('update-cart')
            alert(res.data.message)
            this.isLoading = false
            this.$refs.productModal.hideModal()
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
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {}
}
</script>
<style scoped>
.img-box {
  border: 1px solid #000;
}
img {
  object-fit: contain;
  height: 300px;
}
</style>
