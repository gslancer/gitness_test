/*
 * @Author: horyan
 * @Date: 2022-12-20 15:04:03
 * @LastEditTime: 2022-12-23 10:13:06
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /20221223-init/src/hooks/useNotify.ts
 */
import { showNotify, NotifyType } from 'vant'
import 'vant/es/notify/style'

export default function useNotify() {
  const openNotify = (duration = 3000, type: NotifyType, msg: string) => {
    showNotify({ duration, type, message: `${msg}` })
  }

  return { openNotify }
}
