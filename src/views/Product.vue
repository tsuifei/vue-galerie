<template>
  <div class="product">
    <h1>Products 單頁面</h1>
  </div>
</template>

<script>
export default {
  // name: "Products",
  data () {
    return {
      product: {}
    }
  },
  created () {
    // const url = `${process.env.VUE_APP_API}${process.env.VUE_APP_PATH}/products`;
    // this.$http.get(url).then((res) => {
    //   console.log(res);
    // });
    // const { id } = this.$route.params
    console.log(this.$route) // 路由屬性 網址參數
    console.log(this.$router) // 路由方法
  }
}
</script>
