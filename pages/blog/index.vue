<template>
  <div class="pt-5 px-2">
    <Article
      v-for="(item, index) in articleList"
      :key="item._id"
      :id="item._id"
      :ArticleData="item"
    ></Article>
  </div>
</template>
<script setup>
import { reactive } from "vue";
import article from "@/server/api/article";
// const { data } = await $fetch("/api/articleList", {
//   method: "GET",
// });
// const articleList = reactive(data.list);
// const articleList = reactive([]);
const { data } = await article();
const articleList = reactive(data.list);
</script>
