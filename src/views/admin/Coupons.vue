<template>
<div class="coupon">
  <h1>優惠券列表</h1>
  <section>
    <div class="text-end mt-4">
      <!-- 新增 Button trigger modal -->
      <button
        @click="openModal(true)"
        type="button"
        class="btn btn-primary"
      >
        建立新產品
      </button>
    </div>
    <table class="table">
  <thead>
    <tr>
      <th scope="col">Coupon Name</th>
      <th scope="col">Discount Code</th>
      <th scope="col">Discount % </th>
      <th scope="col">Expiration date</th>
      <th scope="col">Status</th>
      <th scope="col">Operation</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="coupon in coupons" :key="coupon.id">
      <th scope="row">{{coupon.title}}</th>
      <td>{{ coupon.code}}</td>
      <td>{{coupon.percent}} %</td>
      <td>{{$formats.formatDate(coupon.due_date)}}</td>
      <td>
        <span v-if="coupon.is_enabled" class="text-success">啟用</span>
        <span class="" v-else>未啟用</span>
      </td>
      <td>
        <button
          @click="openModal(false, coupon)"
          type="button"
          class="btn btn-sm btn-outline-primary btn-sm"
        >
          修改
        </button>
      </td>
      <td>
        <button
          type="button"
          class="btn btn-sm btn-outline-danger btn-sm"
        >
        刪除
        </button>
      </td>
    </tr>
  </tbody>
</table>
  </section>
  <!-- pagination bloc  -->
    <div class="col-6">
      <Pagination :page="pagination"></Pagination>
    </div>
    <!-- loading -->
    <loading :active.sync="isLoading"></loading>
    <!-- couponModal -->
    <AdminCouponModal
      @emit-update-coupon="updateCoupon"
      ref="adminCouponModal"
      :propsCoupon = "tempCoupon"
      :is-new= "isNew"
    />
</div>
</template>

<script>
import Pagination from '@/components/Pagination.vue'
import AdminCouponModal from '@/components/AdminCouponModal.vue'
export default {
  name: 'Coupons',
  data () {
    return {
      coupons: [],
      tempCoupon: {},
      isLoading: false,
      couponModal: '',
      isNew: false,
      pagination: {},
      page: 1
    }
  },
  components: {
    Pagination,
    AdminCouponModal
  },
  methods: {
  // 取得產品列表
    getCoupons (page = 1) {
      console.log('進來getCoupons')
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`
      this.$http.get(url)
        .then((response) => {
          this.isLoading = true
          console.log('取得coupon列表')
          if (response.data.success) {
            this.coupons = response.data.coupons
            console.log(this.coupons)
            this.pagination = response.data.pagination
            this.isLoading = false
          } else {
            alert(response.data.message)
            // window.location = 'login.html';
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // 新增/更新Coupon
    updateCoupont (item) {
      console.log('updateCoupont ok')
      this.tempCoupon = item
      // 新增
      let url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`
      let httpMethod = 'post'
      if (!this.isNew) {
        url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${this.tempCoupon.id}`
        httpMethod = 'put'
        // this.$emit('emitUpdate')
      }
      // 使用[]物件取值
      this.$http[httpMethod](url, {
        data: this.tempCoupon
      })
        .then((response) => {
          if (response.data.success) {
            alert(response.data.message)
            this.$refs.adminCouponModal.hideModal()
            this.getCoupon(this.page)
            // this.$emit('emitUpdate')
          } else {
            alert(response.data.message)
          }
        })
        .catch((error) => {
          console.log(error)
        })
    },
    // Modal 狀態切換
    openModal (isNew, item) { // 參數帶(狀態,產品)
      console.log('openModal OK')
      this.isNew = isNew
      // 狀態: new
      if (this.isNew) {
        // 新增清空暫存物件
        this.tempCoupon = {
          due_date: new Date().getTime() / 1000
        }
        this.isNew = true
      } else {
        // 以解構 淺拷貝一份出來修改，不然會直接修改原資料
        console.log(this.tempCoupon)
        this.tempCoupon = {
          ...item
        }
        this.isNew = false
      }
      // console.log(`this.$refs:${this.$refs}`)
      this.$refs.adminCouponModal.showModal()
    }
  },
  mounted () {
    this.getCoupons()
  }
}
/*
[API]: /api/:api_path/admin/coupons?page=:page
[方法]: get
[說明]:
  @api_path = 'thisismycourse2'
  @page 當前第幾頁(分頁參數)
  title(String)、is_enabled(Number)、percent(Number)、due_date(Number)、code(String) 為必填欄位
[成功回傳]:
  {
    "success": true,
    "coupons": [
      {
          "due_date": 1555459200,
          "id": "-L9u5Cgodczattv-7i8D",
          "is_enabled": 1,
          "percent": 70,
          "title": "超級特惠價格2",
      },
      {
          "due_date": 6547658,
          "is_enabled": 1,
          "percent": 80,
          "title": "超級特惠價格",
      }
    ],
    "pagination": {
        "total_pages": 1,
        "current_page": 1,
        "has_pre": false,
        "has_next": false,
        "category": null
    },
    "messages": []
  }
  */

</script>

<style scoped>

</style>
