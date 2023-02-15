<template>
  <div>
    <div class="w-3/4 mx-auto">
      <div class="mb-2 text-3xl font-bold">{{ title }}</div>
      <div class="text-sm text-slate-600 mb-8">{{ createTime }}</div>
      <md-editor previewTheme="default" v-model="data.content" preview-only />
    </div>
  </div>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'
import MdEditor from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
const text = ref('# 测试')
const router = useRouter()
const id = router.currentRoute.value.params.id
const { data } = await $fetch(`http://localhost:3100/api/articleDetail/${id}`, {
  method: 'GET'
})
// const entryHTML = $renderMarkdown(data.content)
const title = data.title
const createTime = data.createTime ? new Date(data.createTime).toLocaleString() : ''
</script>
<style lang="scss">
.md-editor {
  --md-bk-color: none !important;
  // 使用父级的字体
  font-family: inherit !important;
  img {
    opacity: 1;
    transition: opacity 0.3s ease;
    cursor: pointer;
    border: none;
  }
}
</style>
