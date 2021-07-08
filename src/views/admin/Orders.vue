<template>
  <div class="orders">
    <h1>後台訂單</h1>
    <table class="table">
    <thead>
      <tr>
        <th width="100" class="text-center border-secondary">訂購人</th>
        <th class="border-secondary">聯絡信箱</th>
        <th class="border-secondary">連絡電話</th>
        <th class="border-secondary">住址</th>
        <th class="border-secondary">商品</th>
        <th class="text-end border-secondary">總金額</th>
        <th width="200" class="border-secondary">付款狀態</th>
        <th class="border-secondary">操作</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="order in orders" :key="order.id">
      <th width="100" class="text-center border-secondary">{{order.user.name}}</th>
        <th class="border-secondary">{{order.user.email}}</th>
        <th class="border-secondary">{{order.user.tel}}</th>
        <th class="border-secondary">{{order.user.address}}</th>
        <!-- <th class="border-secondary">{{order.products}}</th> -->
        <th class="border-secondary">
        <ul>
          <li v-for="item in order.products" :key="item.id">{{item.product.title}}</li>
        </ul>
        </th>
        <th class="text-end border-secondary">{{order.total}}</th>
        <th width="200" class="border-secondary">{{order.is_paid}}</th>
        <!-- ------ -->
        <th width="200" class="border-secondary">
          <div class="form-check form-switch">
              <input class="form-check-input" type="checkbox" :id="order.id" :checked="order.is_paid" >
              <label class="form-check-label" :for="order.id">{{ order.is_paid ? '已付款' : '未付款' }}</label>
          </div>
        </th>
        <!-- ------ -->
        <th class="border-secondary">
          <div class="btn-group">
            <button
              class="btn btn-outline-primary btn-sm"
              type="button"
            >
              檢視
            </button>
            <button
              class="btn btn-outline-danger btn-sm"
              type="button"
            >
              刪除
            </button>
          </div>
        </th>
      </tr>
    </tbody>
  </table>
  <!-- pagination bloc  -->
    <div class="col-6">
      <Pagination :page="pagination" @get-data="getOrders"/>
    </div>
  </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
export default {
  name: 'AdminOrders',
  data () {
    return {
      orders: [],
      tempOrder: {},
      pagination: {},
      page: 1
    }
  },
  components: {
    Pagination
  },
  methods: {
    getOrders (page = 1) {
      this.page = page
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.orders = res.data.orders
            this.pagination = res.data.pagination
            // console.log(res.data.orders)
          } else {
            alert(`為取得訂單資料 ${res.data.messages}`)
          }
        })
        .catch((error) => {
          alert(error)
        })
    }
  },
  mounted () {
  },
  created () {
    this.getOrders()
  }
}
</script>

<style scoped></style>
