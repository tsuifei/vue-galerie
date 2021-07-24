<template>
  <div
    class="modal fade"
    id="AdminOrderModal"
    ref="orderModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <!-- modal-header -->
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            訂單細節
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <!-- modal-body -->
        <div class="modal-body">
          <div class="row">
            <div class="col-md-4">
              <h3>訂單用戶資料</h3>
              <table class="table">
                <tbody v-if="tempOrder.user">
                  <tr>
                    <th style="width: 100px">姓名</th>
                    <td>{{ tempOrder.user.name }}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{{ tempOrder.user.email }}</td>
                  </tr>
                  <tr>
                    <th>電話</th>
                    <td>{{ tempOrder.user.tel }}</td>
                  </tr>
                  <tr>
                    <th>地址</th>
                    <td>{{ tempOrder.user.address }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="col-md-8">
              <h3>訂單細節</h3>
              <table class="table">
                <tbody>
                  <tr>
                    <th style="width: 100px">訂單編號</th>
                    <td>{{ tempOrder.id }}</td>
                  </tr>
                  <tr>
                    <th>下單時間</th>
                    <td>{{ $formats.formatDate(tempOrder.create_at) }}</td>
                  </tr>
                  <tr>
                    <th>付款狀態</th>
                    <td>
                      <strong v-if="tempOrder.is_paid" class="text-success"
                        >已付款</strong
                      >
                      <span v-else class="text-muted">尚未付款</span>
                    </td>
                  </tr>
                  <tr>
                    <th>總金額</th>
                    <td>
                      {{ tempOrder.total}}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h3>選購商品列表</h3>
              <table class="table">
                <thead>
                  <tr></tr>
                </thead>
                <tbody>
                  <tr v-for="item in tempOrder.products" :key="item.id">
                    <th>
                      {{ item.product.title }}
                    </th>
                    <td>{{ item.qty }} / {{ item.product.unit }}</td>
                    <td class="text-end">
                      {{ item.final_total }}
                    </td>
                  </tr>
                </tbody>
              </table>
              <div class="d-flex justify-content-end">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                    v-model="tempOrder.is_paid"
                  />
                  <label class="form-check-label" for="flexCheckDefault">
                    <span v-if="tempOrder.is_paid">已付款</span>
                    <span v-else>未付款</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- modal footer -->
        <div class="modal-footer">
          <button
            @click="hideModal"
            type="button"
            class="btn btn-outline-secondary"
            data-dismiss="modal"
          >
            取消
          </button>
          <button
            @click="$emit('emit-update-order', tempOrder)"
            type="button" class="btn btn-primary">
            確認
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal'
export default {
  // 外層取來的資料
  // props: ['propsCoupon', 'isNew'],
  props: {
    propsOrder: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      orderModal: '',
      tempOrder: {}
    }
  },
  emits: ['emit-update-order'],
  watch: { // 待查正確使用方法
    propsOrder () {
      this.tempOrder = this.propsOrder
      // console.log(this.tempCoupon)
      // 把日期轉回YYYY-MM-DD
      const isoDateTime = new Date(this.tempOrder.create_at * 1000)
        .toISOString().split('T');
      [this.create_at] = isoDateTime
      // console.log(isoDateTime)
    },
    create_at () {
      this.tempOrder.create_at = Math.floor(new Date(this.create_at) / 1000)
    }
  },
  methods: {
    showModal () {
      this.orderModal.show()
    },
    hideModal () {
      this.orderModal.hide()
    }
  },
  mounted () {
    // 實例化 couponModal
    this.orderModal = new Modal(this.$refs.orderModal, {
      keyboard: false,
      backdrop: 'static'
    })
  }
}

</script>

<style scoped>

</style>
