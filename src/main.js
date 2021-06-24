import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import http from './httpSetting';

Vue.prototype.$http = http;

const SettingStray = {
  getDeptNameAndId: http.get('/sys/dept_setting'),
  getJobNameAndId: http.get('/sys/job_setting'),
  getStatusNameAndCode: http.get('/sys/authority_setting')
}

Vue.prototype.$getSysSetting = function(settingType) {
  return SettingStray[settingType];
}
Vue.prototype.$STATICE_SETTING = Object.freeze({
  pageSize: 10,
})

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
