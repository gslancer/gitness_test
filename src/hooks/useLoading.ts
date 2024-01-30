/*
 * @Author: horyan
 * @Date: 2022-12-20 14:50:47
 * @LastEditTime: 2022-12-23 10:13:31
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /20221223-init/src/hooks/useLoading.ts
 */
import { showLoadingToast, ToastType } from 'vant'
import 'vant/es/toast/style'

export default function useLoading() {
  let toast = null as any

  const startLoading = () => {
    toast = showLoadingToast({
      duration: 0,
      forbidClick: true,
      message: '加载中...'
    })
  }
  const stopLoading = () => {
    toast && toast.close()
  }

  onBeforeUnmount(stopLoading)

  return { startLoading, stopLoading }
}
