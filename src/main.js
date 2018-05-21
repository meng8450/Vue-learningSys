// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import RightNavbar from '@/components/CircleNavbar/RightNavbar'
import VueResource from 'vue-resource';
import VueLazyload from 'vue-lazyload';
import { Notification } from 'element-ui';

Vue.prototype.$notify = Notification;
Vue.use(VueLazyload);
Vue.use(VueResource);
Vue.component('right-navbar', RightNavbar)
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
