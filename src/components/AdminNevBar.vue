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
              <router-link to="/" class="nav-link"> Front | </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/products" class="nav-link">
                Products
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/orders" class="nav-link">
                Orders
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/coupons" class="nav-link">
                Coupons
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/admin/articles" class="nav-link">
                Articles
              </router-link>
            </li>
            <li class="nav-item">
              <a href="#" @click.prevent="signOut" class="nav-link"> Sign Out </a>
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
