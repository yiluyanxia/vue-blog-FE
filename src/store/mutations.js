import * as types from './mutation-types'

export default {
  //注册登录
  [types.LOGIN](state, data){
    localStorage.setItem('user', JSON.stringify(data.token));
    state.token = data.token;
  },
  [types.REG](state, data){
    localStorage.setItem('user',JSON.stringify(data.token));
    state.token = data.token;
  },
  [types.LOGOUT](state, data){
    localStorage.removeItem('user');
    state.token = null;
    state.authinfo = null;
  },
  [types.MESSAGE](state, data){
    state.message = data
  },

// 文章
  [types.ARTICLE](state, data){
    // state.article = data.article;
    state.article = data;
  },
  [types.ARTICLE_LIST](state, data){
    // state.alist = state.alist.concat(data.alist)
    state.alist = data
  },
  [types.TAG](state, data){
    state.tag = data
  },
  [types.TAG_LIST](state, data){
    state.tagList = data;
  },
  [types.TAG_DELETE](state, data){
    state.tagDeleted = data.tagDeleted
  }

}
