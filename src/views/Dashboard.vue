<!--
 * @Author: horyan
 * @Date: 2022-12-19 11:50:54
 * @LastEditTime: 2023-02-23 14:35:17
 * @LastEditors: horyan
 * @Description: 
 * @FilePath: /20221223-init/src/views/Dashboard.vue
-->
<template>
  <div class="tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center">
    <img class="tw-w-[60px] tw-h-[60px] tw-m-4" :src="getAssetsFile('images', 'logo.png')" />
    <van-row class="">
      <van-col span="24">
        <van-grid>
          <van-grid-item icon="photo-o" text="产品" to="/Product" />
          <van-grid-item icon="photo-o" text="个人中心" to="/Account" />
          <van-grid-item icon="photo-o" text="其他" to="/Other" />
          <van-grid-item icon="photo-o" text="1" />
          <van-grid-item icon="photo-o" text="2" />
          <van-grid-item icon="photo-o" text="3" />
          <van-grid-item icon="photo-o" text="4" />
          <van-grid-item icon="photo-o" text="5" />
        </van-grid>
      </van-col>
    </van-row>
  </div>
</template>

<script setup>
import useAssets from '@/hooks/useAssets'

const { getAssetsFile } = useAssets()
</script>

<style lang="less" scoped></style>
