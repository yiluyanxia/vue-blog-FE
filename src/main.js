// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './assets/css/reset.css'
import './assets/css/style.css'
// import './assets/js/items.js'
import store from './store'
import {currency} from './currency'
// import store from './store/store'
import VueMasonryPlugin from 'vue-masonry'

Vue.config.productionTip = false


Vue.use(iView)
Vue.use(VueMasonryPlugin)

/* eslint-disable no-new */
Vue.filter('currency', currency)
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
