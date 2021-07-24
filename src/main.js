// 匯入 vue
import { createApp } from 'vue'

// 匯入 axios
import axios from 'axios'
import VueAxios from 'vue-axios'

// 匯入 vee-validate 表單驗證、規則、語系
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import rules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'

// 匯入 bootstrap
import 'bootstrap'

// 匯入 vue-loading 讀取特效
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'

// 匯入 日期格式化
import { formatDate } from './assets/javascript/formats'

// 匯入 CKEditor 文字編輯器
import CKEditor from '@ckeditor/ckeditor5-vue'

import App from './App.vue'
import router from './router'

// 載入所有 vee-Validate 規則
Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule])
})

// 設定 vee-validate 全域規則，vee-validate 已匯入使用 configure
configure({
  generateMessage: localize({ zhTW: zhTW }), // 載入繁體中文語系
  validateOnInput: true // 調整為輸入字元立即進行驗證
})
// 設定預設語系，vee-validate/i18n 已匯入使用 setLocale
setLocale('zh_Tw')

const app = createApp(App)

// 將 formats.js 裡的方法解構出來並加入 globalProperties 使其成全域使用
app.config.globalProperties.$formats = {
  formatDate
}

app.use(VueAxios, axios)
app.use(router)

// 註冊 vee-validate 三個元件
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

// Rich text editor
app.use(CKEditor)

// Loading
app.component('Loading', Loading)

app.mount('#app')
