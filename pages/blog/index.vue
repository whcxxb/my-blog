<template>
  <div class=" pt-5">
    <Article v-for="(item, index) in articleList" :key="item._id" :id="item._id" :ArticleData="item"> </Article>
  </div>
</template>
<script setup>
import { reactive } from 'vue'
const { data } = await $fetch('http://localhost:3100/api/articleList', {
  method: 'GET'
})
const articleList = reactive(data.list)
</script>
