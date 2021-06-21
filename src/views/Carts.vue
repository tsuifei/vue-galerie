<template>
  <div class="carts">
    <!-- 購物車列表 -->
    <div class="text-end">
        <button @click="deleteAllCarts" type="button" class="btn btn-outline-danger">
          清空購物車
        </button>
    </div>
    <div>
      <table class="table align-middle">
        <thead>
          <tr>
            <th></th>
            <th>品名</th>
            <th>數量</th>
            <th>單價</th>
            <th>金額</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in cartsData.carts" :key="item.id">
            <td>
              <button @click="deleteCart(item.id)" type="button" class="btn btn-outline-danger btn-sm">
                X
              </button>
            </td>
            <td>{{item.product.title}}</td>
            <td width="100">
            <!-- 修改數量------ -->
            <div class="input-group">
              <input @blur="updateCart(item)" type="number" class="form-control m-0 p-1 text-center fw-bold border" v-model.number="item.qty" min="1">
            </div>
          </td>
            <td>{{item.product.price}}</td>
            <td class="text-end">{{item.total}}</td>
          </tr>
        </tbody>
        <tfoot>
          <td colspan="4" class="text-end">總計 :</td>
          <td class="text-end">{{cartsData.final_total}}</td>
        </tfoot>
      </table>
    </div>
    <!-- 訂單客戶資料表單 -->
    <h2>客戶資料表單</h2>
    <div class="my-5 row justify-content-center">
      <Form v-slot="{ errors }" @submit="addOrder" ref="form" class="col-md-6">
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <Field
            id="email"
            name="email"
            type="email"
            class="form-control"
            :class="{ 'is-invalid':errors['email'] }"
            rules="email|required"
            placeholder="請輸入 Email"
            v-model="form.user.email"
          ></Field>
          <ErrorMessage
          name="email"
          class="invalid-feedback"
        ></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="name" class="form-label">收件人姓名</label>
          <Field id="name" name="姓名" type="text" class="form-control" :class="{ 'is-invalid': errors['姓名'] }"
            placeholder="請輸入姓名" rules="required" v-model="form.user.name"></Field>
          <ErrorMessage name="姓名" class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="tel" class="form-label">收件人電話</label
          ><Field
            v-model="form.user.tel"
            id="tel"
            name="電話"
            rules="required|min:8|max:10"
            type="text"
            :class="{ 'is-invalid':errors['電話'] }"
            class="form-control"
            placeholder="請輸入電話"
          ></Field>
          <ErrorMessage
          name="電話"
          class="invalid-feedback"></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="address" class="form-label">收件人地址</label>
          <Field
            v-model="form.user.address"
            id="address"
            name="地址"
            rules="required"
            type="text"
            :class="{'is-invalid':errors['地址']}"
            class="form-control"
            placeholder="請輸入地址"
          ></Field>
          <ErrorMessage
            name="地址"
            class="invalid-feedback"
          ></ErrorMessage>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label">留言</label
          ><textarea
          id="message"
            name="留言"
            v-model="form.message"
            :class="{'is-invalid':errors['留言']}"
            class="form-control"
            cols="30"
            rows="10"
            placeholder="請輸入留言"
            rules=""
          ></textarea>
        </div>

        <div class="text-end">
          <button type="submit" class="btn btn-danger">送出訂單</button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cartsData: {},
      isLoading: true,
      form: {
        user: {
          email: '',
          name: '',
          tel: '',
          address: ''
        },
        message: ''
      }
    }
  },
  methods: {
    // Post 增加購物車
    addToCart (id, qty = 1) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      const cart = {
        product_id: id,
        qty: qty
      }
      this.$http
        .post(url, {
          data: cart
        })
        .then((res) => {
          if (res.data.success) {
            alert(res.data.message)
            this.isLoading = false
            this.$refs.productModal.hideModal()
            this.getAllCart()
          } else {
            alert(res.data.message)
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    // Put 修改購物車 待補充 未完
    updateCart (item) {
      this.isLoading = true
      console.log('updateCart_OK')
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`
      const newQty = {
        product_id: item.id,
        qty: item.qty
      }
      this.$http
        .put(url, {
          data: newQty
        })
        .then((res) => {
          if (res.data.success) {
            alert(res.data.message)
            this.isLoading = false
            this.getAllCart()
          } else {
            alert(res.data.message)
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    // Delete 全部刪除購物車
    deleteAllCarts () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`
      this.$http.delete(url)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            this.getAllCart()
          } else {
            alert(res.data.message)
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    // get 取得全部購物車
    getAllCart () {
      console.log('getAllCart_OK')
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`
      this.$http.get(url)
        .then((res) => {
          if (res.data.success) {
            this.cartsData = res.data.data
          } else {
            alert(res.data.message)
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    // delete 刪除單筆購物車
    deleteCart (id) {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`
      this.$http.delete(url)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            alert(res.data.message)
            this.getAllCart()
          } else {
            alert(res.data.message)
          }
        }).catch((err) => {
          console.log(err)
        })
    },
    // post 新增訂單/送出表單
    addOrder () {
      this.isLoading = true
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`
      const order = this.form
      console.log(order)
      this.$http.post(url, {
        data: order
      })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false
            alert(res.data.message)
            console.log(this.form)
            this.$refs.form.resetForm() // 為什麼一定要 $refs
            this.form.message = ''
            this.getAllCart()
          } else {
            alert(res.data.message)
          }
        }).catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {

  },
  created () {
    this.getAllCart()
  }

}

</script>

<style scoped>

</style>
