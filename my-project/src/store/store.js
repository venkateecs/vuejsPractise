import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
import state from './state';
import mutation from './mutation';
import action from './action';
import getters from './getters';
Vue.use(Vuex)
Vue.use(VueResource)
const http=Vue.http
export default new Vuex.Store({
  state:state,
  mutations:mutation,
  actions:action,
  getters:getters
})