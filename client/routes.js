import layout from './layout.vue'
import empty from './empty.vue'
import test from './view/test/routes'

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
]

export default routes
