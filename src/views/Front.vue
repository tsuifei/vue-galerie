<template>
  <div class="front">
    <!-- <NavBar /> -->
    <nav class="navbar navbar-expand-md navbar-light bg-white border-bottom">
      <div class="container">
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
        <router-link to="/" class="navbar-brand">
          <img
            src="../assets/imgs/palette.svg"
            alt="Bootstrap"
            width="32"
            height="32"
          />
        </router-link>
        <router-link to="/carts" class="nav-link d-flex align-items-center order-md-1">
        <img
            src="../assets/imgs/shop.svg"
            alt="Bootstrap"
            width="32"
            height="32"
          />
        </router-link>
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
      </div>
    </nav>

    <router-view class="container"></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'Front'
}
</script>
<style scoped>
  *{
    border: 1px solid blueviolet;
  }
</style>
