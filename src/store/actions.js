import api from '../api/index'
import * as types from './mutation-types'

//start

// export const login = ({ commit }, data) => {
//   api.login(data).then(function (response) {
//     if(response.data.state === 1){
//       commit(types.LOGIN, {
//         token: response.data.token
//       });
//       console.log('state', response.data.state);
//       this.$router.push({path: '/admin/dashboard'})
//       console.log('router');
//     } else {
//       // return Promise.reject(response.data.msg)
//       console.log("response.data.msg");
//       console.log(response.data.msg);
//     }
//   }).catch(function (error) {
//     if (error.response){
//       console.log("网络故障，登录失败");
//     }
//   });
// };

export const login = ({ commit }, data) => {
	return new Promise(function(resolve,reject) {
		api.login(data).then(function (response) {
		//  commit(types.LOGIN, {
		//    token: response.data.token
		//  });
   //   resolve(response.data)
		resolve(response)
  	}).catch(function (error) {
  			console.log('网络故障，登录失败')
  			reject(error)
	  })
  })
};

export const logout = ({ commit }) => {
  commit(types.LOGOUT);
};

export const reg = ({ commit }, data) => {
  api.reg(data).then(function (response){
    commit(types.REG, {
      token: response.data.token,
    });
  }).catch(function (error) {
    if (error.response){
      console.log("注册失败");
    }
  });
};

//删除一篇文章
export const deleteArticle = ({ commit }, data) => {
    api.deleteArticle(data).then(function (response) {
        commit(types.ARTICLE, {
            article: response.data
        })
    }).catch(function (error) {
            if (error.response) {
                console.log("网络故障");
            }
        });
};

export const anArticle = ({ commit },data) => {
  api.getArticle(data).then(function (response) {
    commit(types.ARTICLE, {
      article: response.data
    })
  }).catch(function (error) {
    // commit(types.ARTICLE)
    if (error.response) {
        console.log("网络故障");
    }
  });
};

export const articleList = ({ commit }) => {
  api.getArticleList().then(function (response){
    commit(types.ARTICLE_LIST,{
      alist: response.data
    })
  }).catch(function(error){
    if(error.response){
      console.log("网络故障");
    }
  });
};

export const addArticle = ({ commit },data) => {
  api.addArticle(data).then(function(response){
    commit(types.ARTICLE, {
      article:response.data
    })
  }).catch(function(error){
    if(error.response) {
      console.log("提交失败");
    }
  });
};



export const updateArticle = ({ commit }, data) => {
    api.updateArticle(data).then(function (response) {
        commit(types.ARTICLE, {
            article: response.data
        });
    }).catch(function (error) {
            if (error.response) {
                console.log("修改失败");
            }
        });
};

export const addTag = ({ commit },data) => {
  api.addTag(data).then(function(response){
    commit(types.TAG, {
      tag:response.data
    });
  }).catch(function(error){
    if(error.response) {
      console.log("提交失败");
    }
  });
};

export const anTag = ({ commit }, data) => {
    api.getTag(data).then(function (response) {
        commit(types.TAG, {
            tag: response.data,
        })
    }).catch(function (error) {
            if (error.response) {
                console.log("网络故障");
            }
        });
};

export const tagList = ({ commit }) => {
    api.getTagList().then(function (response) {
        commit(types.TAG_LIST, {
            tagList: response.data,
        })
    }).catch(function (error) {
            if (error.response) {
                console.log("网络故障");
            }
        });
};

export const deleteTag = ({ commit }, data) => {
    api.deleteTag(data).then(function (response) {
        commit(types.TAG_DELETE, {
            tagDeleted: response.data.success
        })
    }).catch(function (error) {
            if (error.response) {
                console.log("网络故障");
            }
        });
};

export const showMsg = ({ commit }, data) => {
    const id = new Date().getTime();
    data.id = id;
    commit(types.MESSAGE, data);
    // setTimeout(() => commit(types.HIDE_MSG, id), 5000)
};

export const updateTag = ({ commit }, data) => {
    api.updateTag(data).then(function (response) {
        commit(types.TAG, {
            tag: response.data
        });
        showMsg({ commit },{
            content: '修改成功',
        })
    }).catch(function (error) {
            if (error.response) {
                console.log("修改失败");
            }
        });
};
