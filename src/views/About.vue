<script>
import Cart from '@/components/Cart.vue'

export default {
  components: {
    Cart
  },
  created () {
    // axios.get
    // this.$http.get()
    // console.log(this.$http)
    // console.log(process.env.VUE_APP_API)
    // console.log(process.env.VUE_APP_PATH)
  }
}
</script>
<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Cart>Cart</Cart>
  </div>
</template>

<style scoped></style>
