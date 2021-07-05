<template>
  <div class="front">
    <NavBar></NavBar>
    <router-view class="container"></router-view>
  </div>
</template>

<script>
import NavBar from '../components/NavBar.vue'
// @ is an alias to /src
export default {
  name: 'Front',
  data () {
    return {
    }
  },
  components: {
    NavBar
  }
}
</script>
<style scoped>
  *{
    /* border: 1px solid rgb(231, 231, 231); */
  }
</style>
