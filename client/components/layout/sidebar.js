export default {
  sideBar1: [ // admin管理员
    {
      name: '商家管理', // 菜单名称
      icon: 'business', // 菜单图标
      level: 1, // 菜单级别
      link: '',
      subMenu: [// 子级菜单
        { name: '商家列表', link: '/business/list', level: 2, operate: ['add', 'edit', 'delete'] },
        { name: '分类管理', link: '/business/type', level: 2, operate: ['add', 'edit', 'delete'] },
      ]
    },
    {
      name: '统计', // 菜单名称
      icon: 'statistics', // 菜单图标
      level: 1, // 菜单级别
      link: '/statistics/info',
      subMenu: [],
    },
    {
      name: '账户设置', // 菜单名称
      icon: 'shezhi', // 菜单图标
      level: 1, // 菜单级别
      link: '/index2',
      subMenu: [],
    },
  ],
  sideBar2: [ // shop商户
  ]
}