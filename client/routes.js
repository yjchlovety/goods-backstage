import layout from './layout.vue'
import empty from './empty.vue'
import test from './view/test/routes'
import login from './view/login/login.vue'
import index from './view/index.vue'
import error404 from './view/error-404.vue'

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
