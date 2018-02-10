// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import Store from './store/store'
import VueGoodTable from 'vue-good-table';
import DataTablee from 'vue-data-tablee'
import _ from 'underscore'
import VModal from 'vue-js-modal'
Vue.use(require('vue-moment'));
require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');
require('bootstrap/dist/js/bootstrap.min.js');
require('vue-bootstrap-datetimepicker') ;
require('./assets/styles.css')
require('vue2-highcharts')

Vue.use(VModal, { dialog: true })
Vue.use(DataTablee)
Vue.use(VueResource)
Vue.use(VueGoodTable);
window.jQuery = require('jquery');
window.$ = window.jQuery;
Vue.config.productionTip = false

/* eslint-disable no-new */
router.beforeEach((to, from, next) => {
  const whiteListedRoutes = ['Home','New','View'];
  if (to.name === 'Login') {
    next();
  } else {
    if (whiteListedRoutes.indexOf(to.name) < 0) {
      next(false)
    } else {
      if (localStorage.getItem('token')) {
        next()
      } else {
        next(false);
      }
    }
  }
})
new Vue({
  el: '#app',
  router,
  Store,
  components: { App , 'bootstrap-modal': require('vue2-bootstrap-modal')},
  template: '<App/>'
})
