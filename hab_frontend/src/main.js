import Vue from 'vue'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import dataV from '@jiaminghi/data-view'
import Vant from 'vant';
import 'vant/lib/index.css';
import store from './store.js'

import App from './App.vue'

require('./mock.js')
Vue.use(ElementUI)
Vue.use(dataV)
Vue.use(Vant)

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
