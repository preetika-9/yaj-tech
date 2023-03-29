<template>
  <header
    class="navbar"
    :class="[bgColor, { 'pt-10': !isScrolled, 'pt-0': isScrolled }]"
  >
    <nav class="mx-auto p-4 d-flex justify-between content-center">
      <div class="flex items-center gap-80">
        <NuxtLink to="/" class="font-bold ml-14"
          ><img src="../../assets/img/logo.svg" alt="company logo"
        /></NuxtLink>
        <div class="d-flex gap-9 ">
          <ul class="d-flex text-white" v-for="nl in navList" :key="nl.id" >
            <li>
              <NuxtLink :to="nl.to" class="flex items-center"
                >

                <CommonIcon name="circle"></CommonIcon>

                &nbsp; {{ nl.label }}
                </NuxtLink
              >
            </li>
          </ul>
        </div>
      </div>
      <div class="flex items-center">
        <div class="relative mr-8">
          <div class="absolute inset-y-0 left-0 flex items-center">
            <img
              src="../../assets/img/search_icon_1.svg"
              alt="search"
              class="h-8 w-8 text-black-600"
              v-if="isScrolled"
            />
            <img
              src="../../assets/img/search_icon.svg"
              alt="search"
              class="h-8 w-8 text-black-600"
              v-else
            />
          </div>
          <input
            class="bg-transparent py-3 pl-10 text-black placeholder-black outline-none"
            type="text"
            placeholder="Search"
            :class="[textColor]"
          />
        </div>
        <div class="mr-14">
          <img src="../../assets/img/hamburger_icon_1.svg" v-if="isScrolled" />
          <img src="../../assets/img/hamburger_icon.svg" v-else />
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
const navList = ref([
  {
    label: "Home",
    to: "/",
  },
  {
    label: "Services",
    to: "/services",
  },
  {
    label: "Projects",
    to: "/projects",
  },
  {
    label: "Resources",
    to: "/resources",
  },
]);
const isScrolled = ref(false);

const handleScroll = () => {
  isScrolled.value = window.pageYOffset > 0;
};
onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

const bgColor = computed(() => {
  return isScrolled.value ? "bg-black" : "";
});

const textColor = computed(() => {
  return isScrolled.value ? "placeholder-white" : "";
});
</script>
<style scoped lang="scss">
.navbar {
  position: fixed;
  top: 0px;
  left: 0px;
  z-index: 9999999;
  width: 100%;
}


</style>
