/*
 * @Author: horyan
 * @Date: 2022-12-19 09:10:43
 * @LastEditTime: 2022-12-23 10:33:41
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /20221223-init/src/router/generator-router.ts
 */

import { BaseLayout, PageLayout } from '@/layout'
import { useUserStore } from '@/store/modules/user'

const modules = import.meta.glob('../views/**/*.vue')

export const generatorDynamicRouter = (mData: any) => {
  return new Promise((resolve, reject) => {
    try {
      const childrenNav: never[] = []
      listToTree(mData, childrenNav)
      const accessedRoutes = generator(childrenNav)
      const userStore = useUserStore()
      userStore.setRoutes(accessedRoutes)
      resolve(accessedRoutes)
    } catch (err) {
      reject(err)
    }
  })
}

/**
 * 数组转树形结构
 * @param list 源数组
 * @param tree 树
 * @param parentId 父ID
 */
const listToTree = (list: [], tree: any, parentId = 0) => {
  list.forEach((item: any) => {
    if (item.parentId === parentId) {
      const child = {
        ...item,
        children: []
      }
      listToTree(list, child.children, item.id)
      if (child.children.length <= 0) {
        delete child.children
      }
      tree.push(child)
    }
  })
}

export const generator = (routerMap: any) => {
  return routerMap.map((item: any) => {
    const currentRouter: any = {
      path: item.path,
      name: item.name,
      redirect: item.redirect ? item.redirect : '',
      meta: {
        id: item.id,
        title: item.meta.title,
        sort: item.meta.sort,
        hidden: item.meta.hidden,
        keepAlive: item.meta.keepAlive
      }
    }
    if (item.component === 'BaseLayout') {
      currentRouter.component = BaseLayout
    } else if (item.component === 'PageLayout') {
      currentRouter.component = PageLayout
    } else {
      item.component ? (currentRouter.component = modules[`../views/${item.component}`]) : ''
    }

    if (item.children && item.children.length > 0) {
      currentRouter.children = generator(item.children)
    }
    return currentRouter
  })
}
