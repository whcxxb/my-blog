<template>
  <div class="bg-gray-200 w-full relative overflow-auto h-screen">
    <!-- <video
      autoplay
      muted
      loop
      class="w-screen h-screen fixed left-0 right-0 top-0 transition-opacity opacity-70"
      src="./assets/video/4.mp4 "
    ></video> -->
    <nav
      class="text-black h-20 px-5 fixed top-0 left-0 right-0 z-10 flex items-center justify-between flex-wrap bg-white backdrop-blur-md bg-white/30"
    >
      <div class="flex items-center flex-shrink-0 mr-6 cursor-pointer">
        <NuxtLink to="/" class="font-semibold text-xl tracking-tight">保持理智</NuxtLink>
      </div>
      <!-- <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded hover:text-pink-500 hover:text-pink-40"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div> -->
      <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div class="text-base lg:flex-grow">
          <NuxtLink
            to="/blog"
            class="first-letter: mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-pink-500"
          >
            随记
          </NuxtLink>
          <NuxtLink to="/about" class="mt-4 lg:inline-block lg:mt-0 mr-4 hover:text-pink-500">
            音乐
          </NuxtLink>
          <NuxtLink to="/about" class="mt-4 lg:inline-block lg:mt-0 hover:text-pink-500">
            关于
          </NuxtLink>
        </div>
        <div>
          <!-- <a
            href="#"
            class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
            >Download</a
          > -->
        </div>
      </div>
    </nav>
    <NuxtPage class="mt-20 blog-container container mx-auto relative px-3 pt-5"></NuxtPage>
    <footer class="text-black h-16 z-20 relative flex items-center">
      <div class="container mx-auto flex justify-center">
        <p class="text-center mr-3">
          Copyright © 2022-{{ new Date().getFullYear() }}
          <span class="hover:text-pink-400 underline decoration-2">xiaobai</span>
        </p>
        <p class="text-center hover:text-pink-400 underline decoration-2">
          <NuxtLink to="https://github.com" target="_blank">GitHub</NuxtLink>
        </p>
      </div>
    </footer>
  </div>
</template>
<script setup lang="ts">
import { ref, reactive } from "vue";
const isOpen = ref<boolean>(true);
</script>
<style lang="scss">
.blog-container {
  min-height: calc(100vh - 5rem - 4rem);
}
</style>
