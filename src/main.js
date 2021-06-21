import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8080"
Vue.prototype.$http = axios

const SettingStray = {
  getDeptNameAndId: axios.get('/sys/dept_setting'),
  getJobNameAndId: axios.get('/sys/job_setting'),
  getStatusNameAndCode: axios.get('/sys/authority_setting')
}

Vue.prototype.$getSysSetting = function(settingType) {
  return SettingStray[settingType];
}

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
