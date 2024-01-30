/*
 * @Author: horyan
 * @Date: 2022-12-23 09:11:06
 * @LastEditTime: 2022-12-23 10:50:12
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /20221223-init/src/vite-env.d.ts
 */
/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}
declare module 'echarts/lib/echarts'
declare module 'crypto-js'
declare module 'ant-design-vue/es'

interface Window {
  nextLoading: boolean
}
