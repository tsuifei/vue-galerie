<template>
  <div class="login">
    <h1>login 頁面</h1>
    <Form v-slot="{ errors }" @submit="signIn">
      <div class="mb3">
        <label for="email" class="form-label">Email</label>
        <Field
          id="email"
          name="email"
          type="email"
          class="form-control"
          :class="{ 'is-invalid': errors['email'] }"
          placeholder="請輸入 Email"
          rules="email|required"
          v-model="user.username"
        ></Field>
        <ErrorMessage name="email" class="invalid-feedback"></ErrorMessage>
      </div>
      <div class="mb3">
        <label for="password" class="form-label">Password</label>
        <Field
          id="password"
          name="password"
          type="password"
          class="form-control"
          :class="{ 'is-invalid': errors['password'] }"
          placeholder="請輸入 password"
          rules="required"
          v-model="user.password"
        ></Field>
        <ErrorMessage name="password" class="invalid-feedback"></ErrorMessage>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </Form>
    <!-- loading -->
    <loading :active.sync="isLoading"></loading>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: '',
        password: ''
      },
      isLoading: false
    }
  },
  methods: {
    signIn () {
      this.isLoading = true
      const apiUrl = `${process.env.VUE_APP_API}admin/signin`
      this.$http.post(apiUrl, this.user)
        .then((response) => {
          if (response.data.success) {
            alert(response.data.message)
            // success 取 token 存入 cookie
            const { token, expired } = response.data
            // console.log(token, expired)
            // 寫入cookie 紀錄期限
            document.cookie = `hexToken=${token}; expires=${new Date(expired)}`
            // 轉至後台產品頁
            this.$router.push('/admin/products')
          } else {
            alert(response.data.message)
            this.$router.push('/admin/login')
            this.isLoading = false
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
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
