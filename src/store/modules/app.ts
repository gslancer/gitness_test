/*
 * @Author: horyan
 * @Date: 2022-12-19 11:48:20
 * @LastEditTime: 2022-12-23 10:35:12
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /20221223-init/src/store/modules/app.ts
 */
import { defineStore } from 'pinia'
import { generatorDynamicRouter } from '@/router/generator-router'

export const useAppStore = defineStore('app', {
  state: () => ({
    themes: 'light', // 主题: light 亮色； dark 暗黑
    windowHeight:
      (window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight) -
        350 ?? 370
  }),
  actions: {
    async RESET_APP_STATE() {
      this.$reset()
    },
    async GenerateRoutes(data: any) {
      return new Promise((resolve, reject) => {
        generatorDynamicRouter(data)
          .then((routers) => {
            resolve(routers)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
})
