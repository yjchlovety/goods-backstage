import layout from './layout.vue'
import empty from './empty.vue'
import test from './view/test/routes'
import login from './view/login/login.vue'

const routes = [
  {
    path: '/',
    component: layout,
    children: [
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
]

export default routes
