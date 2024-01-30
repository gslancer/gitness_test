<!--
 * @Author: horyan
 * @Date: 2022-12-19 11:57:18
 * @LastEditTime: 2022-12-20 10:28:32
 * @LastEditors: horyan
 * @Description: 
 * @FilePath: /Framework/src/views/Product/Index.vue
-->
<template>
  <div class="tw-w-full tw-h-full">
    <van-list
      class="tw-w-full tw-h-full"
      v-model:loading="loading"
      :finished="finished"
      finished-text="没有更多了"
      @load="onLoad"
    >
      <van-cell v-for="item in list" :key="item" :title="item" @click="toDetail(item)" />
    </van-list>
  </div>
</template>

<script setup>
const router = useRouter()
const list = ref([])
const loading = ref(false)
const finished = ref(false)

const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1)
    }

    // 加载状态结束
    loading.value = false

    // 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true
    }
  }, 1000)
}
const toDetail = (e) => {
  router.push('/Product/Detail')
}
onLoad()
</script>

<style lang="less" scoped></style>
