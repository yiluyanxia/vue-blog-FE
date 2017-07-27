import axios from 'axios'

const ROOT = (process.env.NODE_ENV === 'production')
    ? 'http://localhost:3000'
    :'http://localhost:3000';

function config() {
    const base = {
        baseURL: ROOT
    };
    // if(localStorage.getItem('user') && !base.headers) {
    //     base.headers = {Authorization: 'Bearer ' + localStorage.getItem('user').replace(/(^\")|(\"$)/g, '')};
    // }
    return base
}

//增删改查
export default {
  login: function (data) {
    return axios.post('/user/login', data , config())
  },
  reg: function (data) {
    return axios.post('/user/reg', data , config())
  },

  addArticle: function (data) {
    return axios.post('/article/addArticle', data, config())
  },
  deleteArticle: function(data) {
    return axios.delete('/article/deleteArticle/' + data , config())
  },
  updateArticle: function(data) {
    return axios.put('/article/updateArticle/'+ data.id, data, config())
  },
  //获取一篇文章
  getArticle: function (data) {
    return axios.get('/article/getArticle/' + data , config())
  },
  getArticleList: function() {
    return axios.get('/article/getArticleList', config())
  },

  addTag: function (data) {
    return axios.post('/tag/addTag', data, config())
  },
  deleteTag: function(data){
    return axios.delete('/tag/'+ data, config())
  },
  updateTag: function(data) {
    return axios.put('/tag/updateTag/'+ data.id, data, config())
  },
  getTag: function (data) {
    return axios.get('/tag/getTag/' + data, config())
  },
  getTagList: function () {
    return axios.get('/tag/getTagList', config())
  },

}
