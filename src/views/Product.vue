<template>
  <div class="product">
    <h1>Product 單頁面</h1>
    <div class="row align-items-center">
        <div class="col-md-7">
          <img :src="product.imageUrl" class="img-fluid" alt="">
        </div>
        <div class="col-md-5">
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb bg-white px-0 mb-0 py-3">
              <li class="breadcrumb-item"><a class="text-muted" href="./index.html">Home</a></li>
              <li class="breadcrumb-item"><a class="text-muted" href="./product.html">Product</a></li>
              <li class="breadcrumb-item active" aria-current="page">Detail</li>
            </ol>
          </nav>
          <h2 class="fw-bold h1 mb-1">{{product.title}}</h2>
          <p class="mb-0 text-muted text-end"><del>NT${{product.origin_price}}</del></p>
          <p class="h4 fw-bold text-end">NT${{product.price}}</p>
          <div class="row align-items-center">
            <div class="col-12">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quo, doloremque earum impedit maiores, ab et laudantium, facere aliquid expedita quasi numquam! Molestias nam quo quaerat, nemo sint consequatur cumque?
              </p>
            </div>
          </div>
          <div class="row align-items-center">
            <div class="col-6">
              <!-- ---- -->
              <div class="input-group my-3 bg-light rounded">
                <div class="input-group-prepend">
                  <button @click="modifyQty('decrease')" class="btn btn-outline-dark border-0 py-2" width="16" type="button" id="button-addon1">
                    <i class="bi bi-dash"></i>
                  </button>
                </div>
                <input type="number" class="form-control border-0 text-center my-auto shadow-none bg-light" v-model.number="qty" aria-label="Example text with button addon" aria-describedby="button-addon1" min="1">
                <div class="input-group-append">
                  <button @click="modifyQty('add')" class="btn btn-outline-dark border-0 py-2" width="16" type="button" id="button-addon2">
                    <i class="bi bi-plus"></i>
                  </button>
                </div>
              </div>
            </div>
            <div class="col-6">
              <button type="button" @click="addToCart(product.id,qty)" class="text-nowrap btn btn-dark w-100 py-2">Add Cart</button>
            </div>
          </div>
        </div>
      </div>
    <!-- loading -->
    <loading :active.sync="isLoading"></loading>
  </div>
</template>

<script>
import emitter from '../assets/javascript/emitter'
export default {
  // name: 'Product',
  data () {
    return {
      product: {},
      id: '',
      qty: 1,
      isLoading: false
    }
  },
  methods: {
    // Get 單一商品
    getProduct () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`
      this.$http.get(url).then((res) => {
        this.product = res.data.product
        this.isLoading = false
      }).catch((err) => {
        console.log(err)
      })
      // const { id } = this.$route.params
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
            emitter.emit('update-cart')
            alert(res.data.message)
            this.isLoading = false
          } else {
            alert(res.data.message)
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    modifyQty (action) {
      if (action === 'decrease') {
        if (this.qty > 1) {
          this.qty--
        } else {
          return this.qty
        }
      } else if (action === 'add') {
        this.qty++
      }
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getProduct()
  },
  created () {
    // console.log(this.$route) // 路由屬性 網址參數
    // console.log(this.$router) // 路由方法
  }
}
</script>
