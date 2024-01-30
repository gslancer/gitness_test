<!--
 * @Author: horyan
 * @Date: 2022-12-19 11:53:57
 * @LastEditTime: 2022-12-20 10:29:26
 * @LastEditors: horyan
 * @Description: 
 * @FilePath: /Framework/src/layout/BaseLayout.vue
-->
<template>
  <div class="app-main">
    <van-nav-bar :title="route.meta.title" left-text="返回" left-arrow @click-left="onClickLeft" />
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
  </div>
</template>

<script setup>
const route = useRoute()
const onClickLeft = () => history.back()
</script>

<style lang="less" scoped>
.app-main {
  width: 100%;
  height: 100%;
}
</style>
