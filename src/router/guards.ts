/*
 * @Author: horyan
 * @Date: 2022-12-19 09:11:10
 * @LastEditTime: 2022-12-23 10:39:03
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /20221223-init/src/router/guards.ts
 */

import router, { resetRouter } from '@/router'
import { useUserStore } from '@/store/modules/user'
import { useAppStore } from '@/store/modules/app'
import { Storage } from '@/utils/storage'
import whiteNameList from '@/router/whiteName'
import { NextLoading } from '@/hooks/loading'

router.beforeEach(async (to, from, next) => {
  // NProgress.start()
  if (window.nextLoading === undefined) NextLoading.start()

  const token = Storage.get('TOKEN', null)
  if (token) {
    if (to.path === '/') {
      next()
    } else {
      const useUser = useUserStore()
      if (useUser.routes.length <= 0) {
        try {
          const menus: any = await useUser.getUserInfo()
          if (menus && menus.length > 0) {
            const useApp = useAppStore()
            const mData: any = await useApp.GenerateRoutes(menus)
            mData.forEach((route: any) => {
              router.addRoute(route)
            })
            next({ ...to, replace: true })
          } else {
            await useUser.clearLoginInfo()
            // notification.error({
            //   message: '登录失败!',
            //   description: '没有权限,请联系管理员赋权!'
            // })
            next('/')
            // NProgress.done()
            NextLoading.finish()
          }
        } catch (err) {
          await useUser.clearLoginInfo()
          // notification.error({
          //   message: '登录失败!',
          //   description: `${err}`
          // })
          next('/')
          // NProgress.done()
          NextLoading.finish()
        }
      } else {
        next()
      }
    }
  } else {
    if (whiteNameList.some((n) => n === to.name)) {
      next()
    } else {
      next('/')
      // NProgress.done()
      NextLoading.finish()
    }
  }
})

router.afterEach(() => {
  // NProgress.done()
  NextLoading.finish()
})
