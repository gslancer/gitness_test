/*
 * @Author: horyan
 * @Date: 2022-12-19 09:08:55
 * @LastEditTime: 2022-12-19 13:26:46
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /Framework/src/router/index.js
 */
import { createRouter, createWebHistory } from 'vue-router'
import whiteNameList from '@/router/whiteName'
import constantRoutes from '@/router/constant-router'

const router = createRouter({
  history: createWebHistory(`/${import.meta.env.VITE_PUBLIC_PATH}`),
  routes: constantRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 })
})

export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !whiteNameList.some((n) => n === name)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export default router
