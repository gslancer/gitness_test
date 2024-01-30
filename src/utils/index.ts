/*
 * @Author: horyan
 * @Date: 2022-12-19 13:57:35
 * @LastEditTime: 2022-12-30 12:43:43
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /20221223-init/src/utils/index.ts
 */
import dayjs from 'dayjs'

/**
 * @desc  格式化时间
 * @param {(Object|string|number)} time
 * @param {string} format
 * @returns {string | null}
 */
export const formatDateTime = (time = undefined, format = 'YYYY-MM-DD HH:mm:ss') => {
  return dayjs(time).format(format)
}

export const formatDate = (date = undefined, format = 'YYYY-MM-DD') => {
  return formatDateTime(date, format)
}
export const getNowTime = () => {
  const date = new Date()
  const vYear = date.getFullYear()
  const vMon = date.getMonth() + 1
  const vDay = date.getDate()
  const vHours = date.getHours()
  const vMinutes = date.getMinutes()
  const vSenconds = date.getSeconds()
  return (
    vYear +
    '' +
    (vMon < 10 ? '0' + vMon : vMon) +
    (vDay < 10 ? '0' + vDay : vDay) +
    vHours +
    vMinutes +
    vSenconds
  )
}

export const listTree = (list: any, pId: number) => {
  const result = []
  const itemMap: any = {}
  for (const item of list) {
    const id = item.id
    const parentId = item.parentId

    if (!itemMap[id]) {
      itemMap[id] = {
        children: []
      }
    }

    itemMap[id] = {
      ...item,
      children: itemMap[id]['children']
    }

    const treeItem = itemMap[id]

    if (parentId === pId) {
      result.push(treeItem)
    } else {
      if (!itemMap[parentId]) {
        itemMap[parentId] = {
          children: []
        }
      }
      itemMap[parentId].children.push(treeItem)
    }
  }
  return result
}
