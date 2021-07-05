<template>
  <header class="">
<!-- <NavBar /> -->
    <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom">
      <div class="container">
        <!-- RWD 漢堡按鈕 -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <button
          class="navbar-toggler d-md-none d-flex align-items-center"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i class="material-icons"> menu </i>
        </button>
        <!-- RWD 漢堡按鈕 Fin -->
        <div class="navbar-brand">
          <router-link to="/" class="navbar-brand">
            <!-- <img
              src="../assets/imgs/palette.svg"
              alt="Bootstrap"
              width="32"
              height="32"
            /> -->
            <img class="vue-logo" src="../assets/imgs/vue-logo.png" alt="Vue Galerie">
          </router-link>
        </div>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/about" class="nav-link"> About </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/products" class="nav-link">
                Products
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link"> Login </router-link>
            </li>
          </ul>
        </div>
        <div class="d-flex position-relative">
          <router-link to="/carts" class="nav-link d-flex align-items-center order-md-1">
          <img
              src="../assets/imgs/shop.svg"
              alt="Bootstrap"
              width="32"
              height="32"
            />
            <div class="cart-num rounded-pill bg-danger text-white position-absolute px-1">{{ cart.carts.length }}</div>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import emitter from '@/assets/javascript/emitter'
export default {
  data () {
    return {
      cart: {
        carts: {}
      }
      // cartsLength: 0
    }
  },
  methods: {
    getCart () {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.cart = res.data.data
            // this.cartsLength = this.cart.carts.length
            // console.log(this.cartsLength)
          } else {
            alert(res.data.message)
          }
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    this.getCart()
    emitter.on('update-cart', () => {
      this.getCart()
    })
    // emitter.on('*', () => {
    //   this.getCart()
    // })
    // listen to all events
    // emitter.on('*', (type, e) => console.log(type, e) )
  }
}
</script>
<style scoped>
.cart-num {
  top:0px;
  right: 5px;
  font-size: 0.8rem;
}
*{
  /* border: 1px solid gold; */
}
header{
  background: #edecf2;
}
.vue-logo{
  width: 11rem;
}

</style>
