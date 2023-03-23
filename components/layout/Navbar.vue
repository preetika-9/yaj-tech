<template>
  <header class="navbar" :class="[bgColor, {'pt-10': !isScrolled, 'pt-0':isScrolled}]">
    <nav class="mx-auto p-4 d-flex justify-between  content-center">
      <div class="flex items-center gap-80">
      <NuxtLink to="/" class="font-bold ml-14"
        ><img src="../../assets/img/logo.svg" alt="company logo"
      /></NuxtLink>
      <div class="d-flex gap-9">
      <ul class="d-flex  text-white" v-for="nl in navList">
        <li>
          <NuxtLink to="/" class="flex items-center"
            ><img src="../../assets/img/circle.svg" class="pr-2 h-4 w-4" />{{
              nl.label
            }}</NuxtLink
          >
        </li>
      </ul>
    </div>
      </div>
      <div class="flex">
        <div class="relative mr-8">
          <div class="absolute inset-y-0 left-0 flex items-center">
            <img
              src="../../assets/img/search_icon.svg"
              alt="search"
              class="h-8 w-8 text-black-600"
            />
          </div>
          <input
            class="bg-transparent border-b py-3 pl-10 text-black placeholder-black focus:outline-none focus:border-grey-500"
            type="text"
            placeholder="Search"
          />
        </div>
        <div class="mr-14 ">
          <img src="../../assets/img/hamburger_icon.svg" />
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import {ref, onMounted, computed} from 'vue'
const navList = ref([
  {
    label: "Home",
  },
  {
    label: "Services",
  },
  {
    label: "Projects",
  },
  {
    label: "Resources",
  },
]);
const isScrolled = ref(false)

const handleScroll = () =>{
  isScrolled.value = window.pageYOffset >0
}
onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

const bgColor = computed(() => {
  return isScrolled.value ? 'bg-black' : ''
})

</script>
<style scoped lang="scss">
.navbar{
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9999999;
  width: 100%;
}
</style>
