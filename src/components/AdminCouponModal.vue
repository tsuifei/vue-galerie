<template>
  <div
    class="modal fade"
    id="AdminCouponModal"
    ref="couponModal"
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
            {{ isNew ? '新增優惠券' : '修改優惠券' }}
          </h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <!-- modal-body -->
        <div class="modal-body">
          <div class="row">
            <div class="">
              <div class="form-group">
                <label for="title">Coupon Name</label>
                <input
                  v-model="tempCoupon.title"
                  id="title"
                  type="text"
                  class="form-control"
                  placeholder="請輸入優惠名稱"
                />
                <label for="code">Coupon Code</label>
                <input
                  v-model="tempCoupon.code"
                  id="code"
                  type="text"
                  class="form-control"
                  placeholder="請輸入優惠碼"
                />
                <label for="percent">Coupon Discount %</label>
                <input
                  v-model.number="tempCoupon.percent"
                  id="percent"
                  type="number"
                  min="1"
                  class="form-control"
                  placeholder="請輸入折扣"
                />
                <label for="due_date">Expiration date</label>
                <input
                  v-model="due_date"
                  id="due_date"
                  type="date"
                  class="form-control"
                  placeholder="請輸入到期日"
                />
              <!-- <div class="form-group"> -->
                <div class="form-check form-switch">
                  <input
                    v-model="tempCoupon.is_enabled"
                    :id="tempCoupon.id"
                    :true-value="1"
                    :false-value="0"
                    class="form-check-input"
                    type="checkbox"
                  />
                  <label class="form-check-label"
                  :for="tempCoupon.id">{{ tempCoupon.is_enabled ? '已啟用' : '未啟用' }}
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
            @click="$emit('emit-update-coupon', tempCoupon)"
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
    propsCoupon: {
      type: Object,
      default () {
        return {}
      }
    },
    isNew: {
      type: Boolean,
      default: false
    },
    is_enabled: {
      type: Number,
      default: 1
    }
  },
  data () {
    return {
      couponModal: '',
      tempCoupon: {},
      due_date: ''
    }
  },
  emits: ['emit-update-coupon'],
  watch: { // 待查正確使用方法
    propsCoupon () {
      this.tempCoupon = this.propsCoupon
      // console.log(this.tempCoupon)
      // 把日期轉回YYYY-MM-DD
      const isoDateTime = new Date(this.tempCoupon.due_date * 1000)
        .toISOString().split('T');
      [this.due_date] = isoDateTime
      // console.log(isoDateTime)
    },
    due_date () {
      this.tempCoupon.due_date = Math.floor(new Date(this.due_date) / 1000)
    }
  },
  methods: {
    showModal () {
      this.couponModal.show()
    },
    hideModal () {
      this.couponModal.hide()
    }
  },
  mounted () {
    // 實例化 couponModal
    this.couponModal = new Modal(this.$refs.couponModal, {
      keyboard: false,
      backdrop: 'static'
    })
  }
}

</script>

<style scoped>

</style>
