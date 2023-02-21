<template>
  <div class="pt-5 px-2">
    <Article v-for="(item, index) in articleList" :key="item._id" :id="item._id" :ArticleData="item"></Article>
  </div>
</template>
<script setup>
import { reactive } from "vue";
const { data } = await $fetch("http://101.42.17.104:3100/api/articleList", {
  method: "GET",
});
const articleList = reactive(data.list);
</script>
