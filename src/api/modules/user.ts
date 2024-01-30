/*
 * @Author: horyan
 * @Date: 2022-05-06 09:51:24
 * @LastEditTime: 2022-12-23 09:56:27
 * @LastEditors: horyan
 * @Description: horyan@foxmail.com
 * @FilePath: /20221223-init/src/api/modules/user.ts
 */
import request from '@/axios/index'
import Api from '@/api'

export const Register = (parameter: any) => {
  return request({
    url: Api.Register,
    method: 'post',
    data: parameter
  })
}
// 账号登录 短信登录
export const Login = (parameter: any) => {
  return request({
    url: Api.Login,
    method: 'post',
    params: parameter
  })
}
// 发送短信
export const SendMessage = (parameter: any) => {
  return request({
    url: `${Api.SendMessage}/${parameter}/2`,
    method: 'get'
  })
}

// 登出
export const Logout = () => {
  return request({
    url: Api.Logout,
    method: 'get'
  })
}

// 重置密码
export const changePassword = (parameter: any) => {
  return request({
    url: Api.ChangePassword,
    method: 'post',
    data: parameter
  })
}

export function getUserInfo(params: any) {
  return request({
    url: Api.GetUserInfo,
    method: 'post',
    data: params
  })
}
