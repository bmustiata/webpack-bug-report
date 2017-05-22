// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import * as Vue from 'vue'
import * as App from './App'
//import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //router: <any>router,
  template: '<App/>',
  components: { App }
})
