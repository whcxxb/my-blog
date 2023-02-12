<template>
  <div>
    <div class="w-3/4 mx-auto">
      <div class="text-xl font-bold">{{ title }}</div>
      <div>{{ createTime }}</div>
      <div>{{ doc }}</div>
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const id = router.currentRoute.value.params.id
const { data } = await $fetch(`http://localhost:3100/api/articleDetail/${id}`, {
  method: 'GET'
})
console.log(data)
const title = '想到什么说什么呢'
const createTime = '⏱2023-2-1'
const doc =
  '### 相遇没法说话是为什么呢相遇没法说话是为什么呢相遇没法说话是为什么呢相遇没法说话是为什么呢相相遇没法说话是为什么呢相遇没法说话是为什么呢相遇没法说话是为什么呢相遇没法说话是为什么呢相遇没法说话是为什么呢...'
</script>
