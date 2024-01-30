/*
 * @Author: horyan
 * @Date: 2022-12-19 10:28:14
 * @LastEditTime: 2022-12-23 10:01:01
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /20221223-init/src/hooks/loading.ts
 */
import '@/style/loading.less'

export const NextLoading = {
  start: () => {
    const imgUrl = new URL('../assets/images/logo.png', import.meta.url).href
    const bodys: Element = document.body
    const div = <HTMLElement>document.createElement('div')
    div.setAttribute('class', 'loading-next')
    const htmls = `
    <div class="app-loading">
        <div class="app-loading-container">
          <img src="${imgUrl}" class="app-loading-logo" alt="Logo" />
          <div class="app-loading-dots">
            <span class="dot dot-spin"><i></i><i></i><i></i><i></i></span>
          </div>
          <div class="app-loading-title">${import.meta.env.VITE_APP_TITLE}</div>
        </div>
      </div>`
    div.innerHTML = htmls
    bodys.insertBefore(div, bodys.childNodes[0])
    window.nextLoading = true
  },
  finish: () => {
    nextTick(() => {
      window.nextLoading = false
      const el = <HTMLElement>document.querySelector('.loading-next')
      el?.parentNode?.removeChild(el)
    })
  }
}
