<template>
  <div
    @click="goDetail"
    class="mb-5 hover:-translate-y-2 duration-500 shadow-lg cursor-pointer bg-white opacity-80 w-3/5 h-2/5 mx-auto py-3 px-3 rounded"
  >
    <div :style="setBgColor" class="w-full h-64 mb-5 bg-cover bg-center rounded"></div>
    <div class="text-xl font-bold">{{ ArticleData.title }}</div>
    <div class="text-xs mb-3">⏱2023-2-1</div>
    <div class="text-base">
      相遇没法说话是为什么呢相遇没法说话是为什么呢相遇没法说话是为什么呢相遇没法说话是为什么呢相相遇没法说话是为什么呢相遇没法说话是为什么呢相遇没法说话是为什么呢相遇没法说话是为什么呢相遇没法说话是为什么呢...
    </div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router'
const props = defineProps({
  id: {
    type: String,
    required: true
  },
  ArticleData: {
    type: Object,
    required: true
  }
})
const router = useRouter()
const goDetail = () => {
  router.push('/blog/' + props.id)
}

const setBgColor = computed((e: Event) => {
  if (props.ArticleData.imgArr.length === 0) {
    return {
      backgroundImage: `url('/img/cha.jpg')`
    }
  } else {
    return {
      backgroundImage: `url('${props.ArticleData.imgArr[0]}')`
    }
  }
})
</script>
