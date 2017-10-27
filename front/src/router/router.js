import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let routes = [
  {
    path: '/',
    component: resolve => require(['@/components/layout'], resolve),
    children: [
      {
        path: '',
        redirect: '/login'
      },
      {
        path: '/index',
        component: resolve => require(['@/views/index'], resolve)
      }
    ]
  },
  {
    path: '/login',
    component: resolve => require(['@/views/login'], resolve)
  }
]

export default new Router({
  routes: routes,
  mode: 'history'
})
