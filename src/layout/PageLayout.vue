<!--
 * @Author: horyan
 * @Date: 2022-12-19 13:29:32
 * @LastEditTime: 2022-12-21 10:36:45
 * @LastEditors: horyan
 * @Description: 
 * @FilePath: /Framework/src/layout/PageLayout.vue
-->
<template>
  <a-layout-content class="tw-w-full tw-h-full tw-bg-white">
    <router-view
      class="tw-w-full tw-p-2 tw-overflow-hidden tw-overflow-y-auto"
      style="height: calc(100% - 46px)"
      v-slot="{ Component, route }"
    >
      <keep-alive v-if="route.meta.keepAlive">
        <component :is="Component" :key="route.path" />
      </keep-alive>
      <component :is="Component" :key="route.path" v-else />
    </router-view>
  </a-layout-content>
</template>

<script setup>
import { NextLoading } from '@/hooks/loading'
const route = useRoute()
const onClickLeft = () => history.back()
onMounted(async () => {
  NextLoading.finish()
})
</script>

<style lang="less" scoped>
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
