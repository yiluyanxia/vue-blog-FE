import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'


Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production';
// const isLoginIn = function(){
//   const token = localStorage.getItem('user');
//   if(token){
//     const payload = JSON.parse(window.atob(token.split('.')[1]));
//     if(payload.exp > Date.now() / 1000){
//       return JSON.parse(localStorage.getItem('user'))
//     }else{
//       localStorage.removeItem('user');
//     }
//   }else{
//     return false;
//   }
// };

const state = {
  alist:[],
  article: {}, //page
  // articleDeleted:false,
  tagList:[],
  tag:{},
  tagDeleted:false,
  message: {},
  userinfo:{},
  authinfo:null,
  // token: isLoginIn() || null,

};

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  // strict: debug
})
