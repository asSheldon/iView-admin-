import Main from '@/components/main'
// import parentView from '@/components/parent-view'

/**
 * iview-admin中meta除了原生参数外可配置的参数:
 * meta: {
 *  title: { String|Number|Function }
 *         显示在侧边栏、面包屑和标签栏的文字
 *         使用'{{ 多语言字段 }}'形式结合多语言使用，例子看多语言的路由配置;
 *         可以传入一个回调函数，参数是当前路由对象，例子看动态路由和带参路由
 *  hideInBread: (false) 设为true后此级路由将不会出现在面包屑中，示例看QQ群路由配置
 *  hideInMenu: (false) 设为true后在左侧菜单不会显示该页面选项
 *  notCache: (false) 设为true后页面在切换标签后不会缓存，如果需要缓存，无需设置这个字段，而且需要设置页面组件name属性和路由配置的name一致
 *  access: (null) 可访问该页面的权限数组，当前路由设置的权限会影响子路由
 *  icon: (-) 该页面在左侧菜单、面包屑和标签导航处显示的图标，如果是自定义图标，需要在图标名称前加下划线'_'
 *  beforeCloseName: (-) 设置该字段，则在关闭当前tab页时会去'@/router/before-close.js'里寻找该字段名对应的方法，作为关闭前的钩子函数
 * }
 */

export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
      hideInMenu: true
    },
    component: () => import('@/view/login/login.vue')
  },
  {
    path: '/',
    name: '_home',
    redirect: '/home',
    component: Main,
    meta: {
      hideInMenu: true,
      notCache: true
    },
    children: [
      {
        path: '/home',
        name: 'home',
        meta: {
          hideInMenu: true,
          title: '首页',
          notCache: true,
          icon: 'md-home'
        },
        component: () => import('@/view/single-page/home')
      }
    ]
  },
  {
    path: '/article',
    name: '文章管理',
    component: Main,
    meta: {
      icon: 'logo-buffer',
      title: '文章管理'
    },
    children: [
      {
        path: 'carousel',
        name: '轮播图',
        meta: {
          title: '轮播图'
        },
        component: () => import('@/view/Article/Carousel.vue')
      },
      {
        path: 'notice',
        name: '竞赛通知',
        meta: {
          // icon: '_qq',
          title: '竞赛通知'
        },
        component: () => import('@/view/Article/Notice.vue')
      },
      {
        path: 'trend',
        name: '竞赛动态',
        meta: {
          // icon: '_qq',
          title: '竞赛动态'
        },
        component: () => import('@/view/Article/Trend.vue')
      },
      {
        path: '/event',
        name: '竞赛项目',
        meta: {
          // icon: '_qq',
          title: '竞赛项目'
        },
        component: () => import('@/view/Article/Event.vue')
      },
      {
        path: '/question',
        name: '常见问题',
        meta: {
          // icon: '_qq',
          title: '常见问题'
        },
        component: () => import('@/view/Article/Question.vue')
      }
      // {
      //   path: '/about_us',
      //   name: '关于我们',
      //   meta: {
      //     title: '关于我们'
      //   },
      //   component: () => import('@/view/AboutUs/AboutUs.vue')
      // }
    ]
  },

  {
    path: '/user',
    name: '用户管理',
    component: Main,
    meta: {
      icon: 'logo-buffer',
      title: '用户管理'
    },
    children: [
      {
        path: 'user_administrators',
        name: '管理员',
        meta: {
          // icon: '_qq',
          title: '管理员'
        },
        component: () => import('@/view/User/Administrators.vue')
      },
      {
        path: 'user_competitors',
        name: '选手管理',
        meta: {
          // icon: '_qq',
          title: '选手管理'
        },
        component: () => import('@/view/User/Competitors.vue')
      },
      {
        path: 'user_judges',
        name: '评委老师',
        meta: {
          // icon: '_qq',
          title: '评委老师'
        },
        component: () => import('@/view/User/Judges.vue')
      }
    ]
  }
]
