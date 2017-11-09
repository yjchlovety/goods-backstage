import shopSet from './shop-set.vue'

const routes = [
  {
    path: 'shop-set',
    name: 'shopSet',
    component: shopSet,
    meta: {
      title: '店铺设置',
      sidebarLink: '/setting/shop-set'
    },
  },
]

export default routes
