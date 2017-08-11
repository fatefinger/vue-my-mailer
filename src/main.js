// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import {
  Button,
  Select,
  Col,
  Row,
  Form,
  FormItem,
  Input,
  Table,
  TableColumn,
  Upload,
  Dialog,
  TimePicker,
  Icon
} from 'element-ui'
import App from './App'
import router from './router'

Vue.use(Select)
Vue.use(Button)
Vue.use(Col)
Vue.use(Row)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Upload)
Vue.use(Dialog)
Vue.use(TimePicker)
Vue.use(Icon)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
