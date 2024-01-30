/*
 * @Author: horyan
 * @Date: 2022-12-19 11:37:45
 * @LastEditTime: 2022-12-23 10:52:36
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /20221223-init/src/axios/index.ts
 */
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { Storage } from '@/utils/storage'
import useNotify from '@/hooks/useNotify'
import { Result } from '@/axios/result'

const { openNotify } = useNotify()
const service: AxiosInstance = axios.create({
  baseURL: '',
  timeout: 30000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' },
  withCredentials: true
})

service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = Storage.get('TOKEN', null)
    if (token) {
      config.headers = {
        Authorization: `bearer ${token}`
      }
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (res: AxiosResponse) => {
    console.log('res: ', res)
    if (res.request.responseType === 'blob') {
      return Promise.resolve(res)
    } else {
      return Promise.resolve(res.data)
    }
  },
  (error: AxiosError) => {
    let errMsg = ''

    const { response } = error
    console.log('response: ', error)
    const result = response.data as Result
    if (response) {
      switch (response.status) {
        case 400:
          errMsg = '请求错误'
          break
        case 401:
          errMsg = '用户没有权限'
          break
        case 403:
          errMsg = '拒绝访问'
          break
        case 404:
          errMsg = '未找到该资源'
          break
        case 405:
          errMsg = '请求方法未允许'
          break
        case 406:
          errMsg = '请求的格式不可得'
          break
        case 408:
          errMsg = '请求超时'
          break
        case 410:
          errMsg = '资源不存在'
          break
        case 422:
          errMsg = '验证错误'
          break
        case 429:
          errMsg = '请求超限'
          break
        case 500:
          errMsg = `服务异常 ${result.msg || ''}`
          break
        case 501:
          errMsg = '网络未实现'
          break
        case 502:
          errMsg = '网络错误'
          break
        case 503:
          errMsg = '服务不可用'
          break
        case 504:
          errMsg = '网络超时'
          break
        case 505:
          errMsg = '请求版本不支持'
          break
        default:
          errMsg = '服务异常,请稍后再试!'
      }
    } else {
      errMsg = '服务异常,请稍后再试!'
    }
    openNotify(5000, 'danger', err)
    return Promise.reject(errMsg)
  }
)

export default service
