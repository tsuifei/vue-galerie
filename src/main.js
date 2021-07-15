import { createApp } from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
// import 使用解構 載入vee-Validate、規則、語系
import { Field, Form, ErrorMessage, defineRule, configure } from 'vee-validate'
import rules from '@vee-validate/rules'
import { localize, setLocale } from '@vee-validate/i18n'
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json'
// ES Module site Effect 方式導入
import 'bootstrap'
// Loading component
import Loading from 'vue-loading-overlay'
// Loading style
import 'vue-loading-overlay/dist/vue-loading.css'
// Formats
import { formatDate } from './assets/javascript/formats'
// Rich text editor
import CKEditor from '@ckeditor/ckeditor5-vue'
import App from './App.vue'
import router from './router'

// 載入所有 vee-Validate 規則
Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule])
})

// Activate the locale
configure({
  generateMessage: localize({ zhTW: zhTW }),
  validateOnInput: true // 調整為輸入字元立即進行驗證
})
setLocale('zh_Tw')

const app = createApp(App)

// 將 formats.js 裡的方法解構出來並加入 globalProperties 使其成全域使用
app.config.globalProperties.$formats = {
  formatDate
}

app.use(VueAxios, axios)
app.use(router)
// 表單驗證
app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)
// Rich text editor
app.use(CKEditor)
// Loading
app.component('Loading', Loading)

app.mount('#app')
