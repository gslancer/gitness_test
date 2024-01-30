<!--
 * @Author: horyan
 * @Date: 2022-12-19 11:34:13
 * @LastEditTime: 2024-01-30 15:12:36
 * @LastEditors: horyan
 * @Description: 
 * @FilePath: \gitness_test\src\views\Login.vue
-->
<template>
  <div class="tw-w-full tw-h-full tw-flex tw-flex-col">
    <div class="tw-w-full tw-h-[100px] tw-flex tw-justify-center tw-items-center">
      <span> 1512 登录 </span>
    </div>
    <van-row class="tw-w-full tw-flex tw-flex-col tw-flex-1">
      <van-col span="24">
        <van-form @submit="toLogin">
          <van-cell-group inset>
            <van-field
              v-model="loginState.username"
              name="用户名"
              label="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
              v-model="loginState.password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
          </van-cell-group>
          <div style="margin: 16px">
            <van-button round block type="primary" native-type="submit"> 提交 </van-button>
          </div>
        </van-form>
      </van-col>
    </van-row>
  </div>
</template>

<script setup>
import { useUserStore } from '@/store/modules/user'
import debug from '@/utils/debug'
import useLoading from '@/hooks/useLoading'
import useNotify from '@/hooks/useNotify'
import { useGeolocation } from '@vueuse/core'

const { coords } = useGeolocation()
const { startLoading, stopLoading } = useLoading()
const { openNotify } = useNotify()

const router = useRouter()
const route = useRoute()
const useStore = useUserStore()
const loginState = reactive({
  username: 'test',
  password: '123456'
})
const toLogin = async () => {
  startLoading()
  try {
    await useStore.toLogin(loginState)
    router.push('/Dashboard')
  } catch (err) {
    openNotify(3000, 'danger', err)
  }

  stopLoading()
}

onMounted(() => {
  console.log('location: ', coords)
  debug.config(route.query.debug)
})
</script>

<style lang="less" scoped></style>
