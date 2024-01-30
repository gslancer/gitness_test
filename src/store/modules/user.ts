/*
 * @Author: horyan
 * @Date: 2022-12-19 09:04:51
 * @LastEditTime: 2023-02-23 14:34:53
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /20221223-init/src/store/modules/user.ts
 */
import { defineStore } from 'pinia'
import { resetRouter } from '@/router'
import { Login, Logout, getUserInfo } from '@/api/modules/user'
import { Storage } from '@/utils/storage'
import constantRoutes from '@/router/constant-router'
import { stringify, parse } from 'zipson'
import { listTree } from '@/utils/index'

export const useUserStore = defineStore('user', {
  state: () => {
    return {
      loginLoading: false,
      uId: '',
      uName: '',
      token: '',
      orgId: '',
      orgName: '',
      org: [],
      userInfo: {},
      button: [],
      menu: [], // 服务端返回的菜单数据
      addRoutes: [], // 构造的服务端返回的路由菜单数据
      routes: [] // 所有路由菜单数据
    }
  },
  actions: {
    async RESET_USER_STATE() {
      this.$reset()
    },
    async changeLoginLoading(val: boolean) {
      this.loginLoading = val
    },
    clearLoginInfo() {
      this.RESET_USER_STATE()
      Storage.clear()
      resetRouter()
    },
    async toLogin(params: any) {
      try {
        // const res = await Login(params)
        console.log('store.user.toLogin')
        const res = { userId: '1', access_token: 'token', orgId: '1' }
        this.uId = res.userId
        this.token = res.access_token
        this.orgId = res.orgId
        Storage.set('TOKEN', res.access_token)
        return true
      } catch (err) {
        return false
      }
    },
    async getUserInfo() {
      try {
        // const res = await getUserInfo({
        //   tenantId: this.tenantId,
        //   userId: this.uId,
        //   orgId: this.orgId
        // })
        const res: any = {
          code: 0,
          data: {
            org: '1',
            userInfo: { userName: 'dev', actualName: '开发' },
            menu: [
              {
                id: 1001,
                parentId: 0,
                path: '/Dashboard',
                name: 'Dashboard',
                redirect: '',
                component: 'Dashboard.vue',
                meta: { title: '首页', hidden: false, keepAlive: true, sort: 1 }
              },
              {
                id: 2001,
                parentId: 0,
                path: '/Product',
                component: 'BaseLayout',
                redirect: '/Product/Index',
                name: 'Product',
                meta: {
                  hidden: false,
                  title: '商品页',
                  keepAlive: true,
                  sort: 2
                }
              },
              {
                id: 2002,
                parentId: 2001,
                path: '/Product/Index',
                name: 'ProductIndex',
                redirect: '',
                component: 'Product/Index.vue',
                meta: { title: '商品首页', hidden: false, keepAlive: true, sort: 3 }
              },
              {
                id: 2003,
                parentId: 2001,
                path: '/Product/Detail',
                name: 'ProductDetail',
                redirect: '',
                component: 'Product/Detail.vue',
                meta: { title: '商品详情', hidden: false, keepAlive: true, sort: 4 }
              }
            ],
            button: []
          }
        }
        const { data } = res
        this.org = data.org
        this.userInfo = data.userInfo
        this.uName = data.userInfo.actualName
        this.menu = data.menu ?? []
        this.button = data.button
        return data.menu
      } catch (err) {
        return err
      }
    },
    setRoutes(routes: any) {
      this.addRoutes = routes
      this.routes = constantRoutes.concat(routes)
    },
    async Logout() {
      try {
        // await Logout()
        await this.clearLoginInfo()
        return true
      } catch (err) {
        return false
      }
    }
  },
  persist: {
    serializer: {
      deserialize: parse,
      serialize: stringify
    },
    storage: sessionStorage,
    paths: ['uId', 'orgId']
  }
})
