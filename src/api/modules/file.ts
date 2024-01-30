/*
 * @Author: horyan
 * @Date: 2022-11-13 09:25:38
 * @LastEditTime: 2022-12-23 09:56:44
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /20221223-init/src/api/modules/file.ts
 */
import request from '@/axios/index'
import Api from '@/api'
/**
 * 文件上传
 * @param parameter
 * @returns
 */
export function toUploadFile(parameter: any) {
  return request({
    url: `${Api.UpdateFile}`,
    method: 'post',
    data: parameter
  })
}
export function downloadFile(parameter: any) {
  return request({
    url: Api.downloadFile,
    method: 'get',
    responseType: 'arraybuffer',
    params: parameter
  })
}

export function viewFile(id: string | number) {
  return request({
    url: `${Api.SysFileView}/${id}`,
    method: 'get'
  })
}
