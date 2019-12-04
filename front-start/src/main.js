import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

import axios from 'axios';
import '@/util/veevalidate.js';
// import zh from 'vee-validate/dist/locale/zh_CN'

// method2 to zh-cn
// import './local/index';
// method1 to zh-cn
// Validator.localize('zh-CN', zh)

// method2 to zh-cn
Vue.config.productionTip = false

axios.defaults.baseURL =
  process.env.NODE_ENV !== 'production'
    ? 'http://localhost:3000'
    : 'http://your.domain.com';

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
