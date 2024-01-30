/*
 * @Author: horyan
 * @Date: 2022-12-19 09:09:28
 * @LastEditTime: 2022-12-26 15:47:00
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /20221223-init/src/router/constant-router.ts
 */

const constantRoutes: any = [
  {
    path: '/',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/Other',
    name: 'Other',
    component: () => import('@/views/Other.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('@/views/404.vue')
  },
  {
    path: '/Account',
    name: 'Account',
    redirect: '/Account/Index',
    component: () => import('@/layout/BaseLayout.vue'),
    children: [
      {
        path: '/Account/Index',
        name: 'AccountIndex',
        component: () => import('@/views/Account.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)',
    component: () => import('@/views/404.vue')
  }
]

export default constantRoutes
