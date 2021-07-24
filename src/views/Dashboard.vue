<template>
  <!-- 後台 -->
  <div>
    <!-- Admin NavBar
    <nav class="navbar navbar-expand-md navbar-dark bg-dark border-bottom">
      <div class="container">
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
              <a href="#" @click.prevent="signOut" class="nav-link"> 登出 </a>
            </li>
          </ul>
        </div>
      </div>
    </nav> -->
    <admin-nav-bar></admin-nav-bar>
    <router-view class="container" />
  </div>
</template>

<script>
import AdminNavBar from '../components/AdminNevBar.vue'
export default {
  name: 'Dashboard',
  data () {
    return {
      api_token: ''
    }
  },
  components: {
    AdminNavBar
  },
  methods: {
    checkLogin () {
      // 取出token
      const token = document.cookie.replace(
        /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
        '$1'
      )
      this.$http.defaults.headers.common.Authorization = `${token}`
      if (token) {
        const apiUrl = `${process.env.VUE_APP_API}api/user/check`
        this.$http.post(apiUrl, { api_token: this.token })
          .then((response) => {
            if (response.data.success) {
              console.log('成功登入')
              this.$router.push('/admin/products')
            } else {
              alert(response.data.message)
              console.log('登入失敗')
              this.$router.push('/login')
            }
          })
          .catch((err) => {
            console.dir('尚未登入喔', err)
            this.$router.push('/login')
          })
      } else {
        alert('尚未登入喔')
        this.$router.push('/login')
        // this.$router.replace({ name: 'Login' })
      }
    }
  },
  created () {
    this.checkLogin()
  }
}
</script>

<style scoped></style>
