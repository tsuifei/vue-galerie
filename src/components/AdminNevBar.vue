<template>
<!-- Admin NavBar -->
    <nav class="navbar navbar-expand-md navbar-dark bg-dark border-bottom">
      <div class="container">
        <!-- RWD Nav -->
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

        <router-link to="/admin" class="navbar-brand nav-link">
          <h1>Dashboard</h1>
        </router-link>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <router-link to="/" class="nav-link"> 回到前台 </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/products" class="nav-link">
                產品列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/orders" class="nav-link">
                訂單列表
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/coupons" class="nav-link">
                優惠卷列表
              </router-link>
            </li>
            <li class="nav-item">
              <a href="#" @click.prevent="signOut" class="nav-link"> 登出 </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    signOut () {
      document.cookie = 'hexToken=;expires=;'
      alert('Token 已清除，你已登出')
      this.$router.push('/login')
    }
  }
}
</script>
<style scoped>
</style>
