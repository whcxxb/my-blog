<template>
  <div class="">
    <Article v-for="(item, index) in articleList" :key="item.id" :id="index + 1" :ArticleData="item"></Article>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
const { data } = await $fetch('http://localhost:3100/api/articleList', {
  method: 'GET'
})
const articleList = reactive(data.list)
</script>
