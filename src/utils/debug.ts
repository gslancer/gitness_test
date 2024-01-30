/*
 * @Author: horyan
 * @Date: 2022-12-18 10:18:13
 * @LastEditTime: 2022-12-23 09:52:28
 * @LastEditors: horyan
 * @Description: http://127.0.0.1:10086/gsunis-h5/?debug=1
 * @FilePath: /20221223-init/src/utils/debug.ts
 */
import { Storage } from '@/utils/storage'

const { MODE, VITE_APP_VCONSOLE } = import.meta.env

const config = (debug: any) => {
  if (debug && debug === '1') {
    Storage.set('debug', debug)
  } else {
    Storage.remove('debug')
  }
  init()
}

const init = () => {
  const vc = <HTMLElement>document.querySelector('#__vconsole')
  const debug = Storage.get('debug')
  if (Boolean(VITE_APP_VCONSOLE) && MODE === 'development' && vc) {
    vc.style.display = debug === '1' ? '' : 'none'
  }
}

export default { init, config }
