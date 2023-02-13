<template>
  <div class="bg-zinc-100 w-screen h-screen relative overflow-auto">
    <title>小白的小小窝</title>
    <!-- <header
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
    </header> -->
    <nav
      class="fixed top-0 left-0 right-0 z-10 flex items-center justify-between flex-wrap bg-white backdrop-blur-md bg-white/30 p-6"
    >
      <div class="flex items-center flex-shrink-0 mr-6">
        <span class="font-semibold text-xl tracking-tight">Tailwind CSS</span>
      </div>
      <div class="block lg:hidden">
        <button class="flex items-center px-3 py-2 border rounded border-teal-400 hover:text-white hover:border-white">
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-sm lg:flex-grow">
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"> Features </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white mr-4"> Pricing </a>
          <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 hover:text-white"> Blog </a>
        </div>
        <div>
          <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >Download</a
          >
        </div>
      </div>
    </nav>
    <div class="max-md:hidden transition-opacity opacity-60 fixed top-0 left-0 right-0 w-screen h-screen">
      <!-- <div class="max-md:hidden transition-opacity opacity-60 fixed top-0 left-0 right-0 container mx-auto"> -->
      <video autoplay muted loop class="w-full max-h-full mx-auto" src="./assets/video/4.mp4 "></video>
    </div>
    <NuxtPage class="container mx-auto mt-28 relative"></NuxtPage>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
const router = useRouter()
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
  router.push(menuList[index].path)
}
</script>
<style></style>
