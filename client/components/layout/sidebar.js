export default {
  sideBar: [
    {
      name: '商品', // 菜单名称
      icon: 'shezhi', // 菜单图标
      level: 1, // 菜单级别
      subMenu: [// 子级菜单
        { name: '商品列表', icon: 'shanghu', link: '/test/tect', level: 2, operate: ['add', 'edit', 'delete'] },
        { name: '商品分类', icon: 'hy', link: '', level: 2, operate: ['add', 'edit', 'delete'] },
        { name: '库存-入库', icon: 'order', link: '', level: 2, operate: ['add', 'edit', 'delete'] },
        { name: '库存-出库', icon: 'order', link: '', level: 2, operate: ['add', 'edit', 'delete'] },
      ]
    },
    {
      name: '订单', // 菜单名称
      icon: 'shezhi', // 菜单图标
      level: 1, // 菜单级别
      subMenu: [// 子级菜单
        { name: '订单列表', icon: 'shanghu', link: '', level: 2, operate: ['add', 'edit', 'delete'] },
        { name: '订单统计', icon: 'order', link: '', level: 2, operate: ['add', 'edit', 'delete'] },
      ]
    },
    {
      name: '会员', // 菜单名称
      icon: 'shezhi', // 菜单图标
      level: 1, // 菜单级别
      subMenu: [// 子级菜单
        { name: '会员列表', icon: 'shanghu', link: '', level: 2, operate: ['add', 'edit', 'delete'] },
        { name: '会员积分', icon: 'hy', link: '', level: 2, operate: ['add', 'edit', 'delete'] },
        { name: '会员等级', icon: 'order', link: '', level: 2, operate: ['add', 'edit', 'delete'] },
      ]
    },
    {
      name: '统计', // 菜单名称
      icon: 'shezhi', // 菜单图标
      level: 1, // 菜单级别
      subMenu: [// 子级菜单
        { name: '商品出入库', icon: 'shanghu', link: '', level: 2, operate: ['add', 'edit', 'delete'] },
        { name: '会员统计', icon: 'hy', link: '', level: 2, operate: ['add', 'edit', 'delete'] },
        { name: '订单统计', icon: 'order', link: '', level: 2, operate: ['add', 'edit', 'delete'] },
      ]
    },
    {
      name: '设置', // 菜单名称
      icon: 'shezhi', // 菜单图标
      level: 1, // 菜单级别
      subMenu: [// 子级菜单
        { name: '商品出入库', icon: 'shanghu', link: '', level: 2, operate: ['add', 'edit', 'delete'] },
        { name: '会员统计', icon: 'hy', link: '', level: 2, operate: ['add', 'edit', 'delete'] },
        { name: '订单统计', icon: 'order', link: '', level: 2, operate: ['add', 'edit', 'delete'] },
      ]
    },
  ]
}