import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'
Vue.use(Vuex)
Vue.use(VueResource)
const http=Vue.http
export default new Vuex.Store({
  state:{
    userDetails: {
       'username':'',
       'password':'',
    },
    name:'',
    requestDetails:[
        {id:1, name:"John",age:20,createdAt: '20111031',score: 0.03343},
        {id:2, name:"Jane",age:24,createdAt: '20111030',score: 0.03343},
        {id:3, name:"Susan",age:16,createdAt: '20111029',score: 0.03343},
        {id:4, name:"Chris",age:55,createdAt: '20111028',score: 0.03343},
        {id:5, name:"Dan",age:40,createdAt:   '20111027',score: 0.03343},
        {id:6, name:"John",age:20,createdAt: '20111026',score: 0.03343},
        {id:7, name:"Jane",age:24,createdAt: '20111025'},
        {id:8, name:"Susan",age:16,createdAt: '20111024',score: 0.03343},
        {id:9, name:"Chris",age:55,createdAt: '20111009',score: 0.03343},
        {id:10, name:"Dan",age:40,createdAt: '20111009',score: 0.03343},
        {id:11, name:"John",age:20,createdAt: '20111009',score: 0.03343},
        {id:12, name:"Jane",age:24,createdAt: '20111023',score: 0.03343},
        {id:13, name:"Susan",age:16,createdAt: '20111023',score: 0.03343},
        {id:14, name:"Chris",age:55,createdAt: '20111023',score: 0.03343},
        {id:15, name:"Dan",age:40,createdAt: '20111024',score: 0.03343},
        {id:19, name:"Chris",age:55,createdAt: '20111025',score: 0.03343},
        {id:20, name:"Dan",age:40,createdAt: '20111025',score: 0.03343},
      ]
  },
  mutations:{
    updatename(state,name) {
       state.name = name  ;
    },
    updateUserDetails(state,data) {
     state.userDetails.username = data.username ;
     state.userDetails.password = data.password ;
    },
    saveNewRequest(state,data) {
      state.requestDetails.push(data);
    }
  },
  actions:{
    updatenameAction({commit},payload){
        commit('updatename', payload)
    },
    updateUserDetailsAction({commit},payload){
        commit('updateUserDetails', payload)
    },
    saveNewRequestAction({commit},payload) {
         commit('saveNewRequest',payload) ;
    }
  },
  getters:{
    doneTodos: state => {
        return state.name ;
    },
    getReqDetails: state => {
        return state.requestDetails ;
    }
 }
})