/*
 * @Author: horyan
 * @Date: 2022-12-23 09:59:11
 * @LastEditTime: 2022-12-23 09:59:12
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /20221223-init/src/axios/result.d.ts
 */
export interface Result<T = any> {
  code: number
  msg: string
  data: T
}
