/*
 * @Author: horyan
 * @Date: 2022-11-02 13:30:49
 * @LastEditTime: 2022-12-15 14:53:54
 * @LastEditors: horyan
 * @Description:
 * @FilePath: /gsunis-cloud-platform-web/src/api/index.ts
 */
const Api = {
  Login: `${import.meta.env.VITE_APP_API_URL_PREFIX}/auth/oauth/token`,
  Logout: `${import.meta.env.VITE_APP_API_URL_PREFIX}/admin/user/signOut`,
  Register: `${import.meta.env.VITE_APP_API_URL_PREFIX}/admin/user/userRegister`,
  SendMessage: `${import.meta.env.VITE_APP_API_URL_PREFIX}/admin/smsCode/sentCode`,
  ChangePassword: `${import.meta.env.VITE_APP_API_URL_PREFIX}/admin/user/resetPassword`,
  GetUserInfo: `${import.meta.env.VITE_APP_API_URL_PREFIX}/admin/sysPermission/getPermissionList`,
  UpdateFile: `${import.meta.env.VITE_APP_API_URL_PREFIX}/admin/sysFile/upload`,
  downloadFile: `${import.meta.env.VITE_APP_API_URL_PREFIX}/admin/sysFile/download`,
  SysFileView: `${import.meta.env.VITE_APP_API_URL_PREFIX}/admin/sysFile/preview`
}
export default Api
