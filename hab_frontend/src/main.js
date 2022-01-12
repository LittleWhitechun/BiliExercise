import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import dataV from '@jiaminghi/data-view'

import App from './App.vue'

require('./mock.js')
Vue.use(ElementUI)
Vue.use(dataV)

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})
