import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import index from '@/components/pages/index'
import articles from '@/components/pages/articles'
import articleDetail from '@/components/pages/articleDetail'
import photographs from '@/components/pages/photographs'
import collections from '@/components/pages/collections'
import about from '@/components/pages/about'

import users from '@/components/admin/users'
import dashboard from '@/components/admin/dashboard'
import tagList from '@/components/admin/tagList'
import articleList from '@/components/admin/articleList'
import article from '@/components/admin/article'
import articleEdit from '@/components/admin/articleEdit'
import articleUpdate from '@/components/admin/articleUpdate'
import tagEdit from '@/components/admin/tagEdit'

import login from '@/components/admin/login'
import reg from '@/components/admin/reg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/reg',
      name: 'reg',
      component: reg
    },
    {
      path: '/',
      component: resolve => require(['../components/common/home.vue'], resolve),
      children:[
          {
              path: '/',
              name:'index',
              component: index,
          },
          {
              path: '/index',
              name:'index',
              component: index,
          },
          {
              path: '/articles',
              name:'articles',
              component: articles,
          },
          {
              path: '/articleDetail',
              name:'articleDetail',
              component: articleDetail,
          },
          {
              path: '/photographs',
              name:'photographs',
              component: photographs,
          },
          {
              path: '/collections',
              name:'collections',
              component: collections,
          },
          {
              path: '/about',
              name:'about',
              component: about,
          },
        ]
      },
      {
        path: '/admin',
        component: resolve => require(['../components/admin/admHome.vue'], resolve),
        children:[
            {
                path: '/admin/dashboard',
                name: 'dashboard',
                component: dashboard,
            },
            {
                path: '/admin/users',
                name: 'users',
                component: users,
            },
            {
                path: '/admin/tagList',
                name: 'tagList',
                component: tagList,
            },
            {
                path: '/admin/tagEdit',
                name: 'tagEdit',
                component: tagEdit,
            },

            {
                path: '/admin/articleList',
                name: 'articleList',
                component: articleList,
            },
            {
                path: '/admin/articleEdit',
                name: 'articleEdit',
                component: articleEdit,
            },
            {
                path: '/admin/articleUpdate',
                name: 'articleUpdate',
                component: articleUpdate,
            },
            {
                path: '/admin/article',
                name: 'article',
                component: article,
            }
          ]
      }



  ]
})
