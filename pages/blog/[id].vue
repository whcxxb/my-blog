<template>
  <div>
    <div class="mb-2 text-3xl font-bold">{{ title }}</div>
    <div class="text-sm text-slate-600 mb-8">{{ createTime }}</div>
    <div>在思考中</div>
  </div>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";
import detail from "@/server/api/detail";
 
const router = useRouter();
const id = router.currentRoute.value.params.id;
const { data } = await detail(id);
// const entryHTML = $renderMarkdown(data.content)
const title = data.title;
const createTime = data.createTime ? new Date(data.createTime).toLocaleString() : "";
</script>
<style lang="scss">
.md-editor {
  --md-bk-color: none !important;
  font-family: inherit !important;
  img {
    max-width: 60%;
    margin: 0;
    padding: 0;
    border-radius: 0;
    opacity: 1;
    transition: opacity 0.3s ease;
    cursor: pointer;
    border: none;
  }
}
</style>
