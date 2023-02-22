<template>
  <div
    @click="goDetail"
    class="lg:w-3/5 mb-5 hover:-translate-y-2 duration-500 shadow-lg cursor-pointer bg-white opacity-80 w-full mx-auto py-3 px-3 rounded"
  >
    <div :style="setBgColor" class="lg:h-64 w-full h-40 mb-5 bg-cover bg-center rounded"></div>
    <div class="text-2xl font-bold">{{ ArticleData.title }}</div>
    <div class="text-sm text-slate-500 mb-3">{{ time }}</div>
    <div class="text-base">{{ desc }}</div>
  </div>
</template>
<script setup lang="ts">
import { useRouter } from "vue-router";
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
  ArticleData: {
    type: Object,
    required: true,
  },
});
const router = useRouter();
const goDetail = () => {
  router.push("/blog/" + props.id);
};
const time = computed(() => {
  const date = new Date(props.ArticleData.createTime);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
});
const desc = computed(() => {
  return props.ArticleData.content.slice(0, 20) + "...";
});
const setBgColor = computed((e: Event) => {
  if (props.ArticleData.imgArr.length === 0) {
    return {
      backgroundImage: `url('/img/cha.jpg')`,
    };
  } else {
    return {
      backgroundImage: `url('${props.ArticleData.imgArr[0]}')`,
    };
  }
});
</script>
