<template>
  <div class="bg-zinc-100 w-screen h-screen relative overflow-auto">
    <title>小白的小小窝</title>
    <!-- <header
      class="h-20 flex center z-10 items-center text-xl font-semibold bg-white w-full fixed top-0 left-0 right-0 backdrop-opacity-10 backdrop-invert bg-white/30"
    > -->
    <header
      class="h-20 flex center z-10 items-center text-xl font-semibold bg-white w-full fixed top-0 left-0 right-0 backdrop-blur-md bg-white/30"
    >
      <div
        v-for="(item, index) in menuList"
        @click="selectChange(index)"
        :class="active === index ? 'text-pink-400' : ''"
        class="w-28 text-center cursor-pointer hover:text-pink-400"
      >
        {{ item.name }}
      </div>
    </header>
    <!-- <div class="max-md:hidden opacity-70 fixed top-0 left-0 right-0 w-screen h-screen"> -->
    <div class="max-md:hidden transition-opacity opacity-60 fixed top-0 left-0 right-0 container mx-auto">
      <video autoplay muted loop class="w-full max-h-full mx-auto" src="./assets/video/4.mp4 "></video>
    </div>
    <NuxtPage></NuxtPage>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
const active = ref<number>(0)
const menuList = reactive([
  {
    name: '随记',
    path: '/'
  },
  {
    name: '关于我',
    path: '/about'
  }
])
const selectChange = (index: number) => {
  active.value = index
}
</script>
<style></style>
