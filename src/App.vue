<!--
 * @Author: horyan
 * @Date: 2022-12-23 09:11:06
 * @LastEditTime: 2022-12-23 10:14:07
 * @LastEditors: horyan
 * @Description: 
 * @FilePath: /20221223-init/src/App.vue
-->
<template>
  <van-config-provider
    :class="[
      useApp.themes === 'dark' ? 'darks' : 'lights',
      'tw-w-full tw-h-full tw-overflow-hidden tw-overflow-y-auto'
    ]"
    :theme="useApp.themes"
  >
    <router-view v-slot="{ Component, route }">
      <transition name="scale" mode="out-in">
        <component :is="Component" :key="route.path" />
      </transition>
    </router-view>
  </van-config-provider>
</template>

<script setup>
import debug from '@/utils/debug'
import { useAppStore } from '@/store/modules/app'
const useApp = useAppStore()

onMounted(() => {
  debug.init()
})
</script>

<style scoped lang="less">
.lights {
  color: var(--theme-light-color);
  background: var(--theme-light-background);
}
.darks {
  color: var(--theme-dark-color);
  background: var(--theme-dark-background);
}
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}
.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
