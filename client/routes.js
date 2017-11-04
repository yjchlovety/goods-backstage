import layout from './layout.vue'
import empty from './empty.vue'
import test from './view/test/routes'
import login from './view/login/login.vue'
import index from './view/index.vue'
import error404 from './view/error-404.vue'
import business from './view/business/routes'
import statistics from './view/statistics/routes'

const routes = [
  {
    path: '/',
    component: layout,
    children: [
      {
        path: '/index',
        component: index,
      },
      {
        path: '/business',
        component: empty,
        children: business,
      },
      {
        path: '/statistics',
        component: empty,
        children: statistics,
      },
      {
        path: '/test',
        component: empty,
        children: test,
      },
    ],
  },
  {
    path: '/login',
    component: login,
    meta: {
      title: '登录'
    }
  },
  {
    path: '*',
    component: error404,
    meta: {
      title: '出错了！！！'
    }
  },
]

export default routes
