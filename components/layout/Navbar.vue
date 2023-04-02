<template>
  <header
    class="navbar"
    :class="[bgColor, { 'pt-10': !isScrolled, 'pt-0': isScrolled }]"
  >
    <nav
      class="mx-auto p-4 content-center grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 "
    >
      <div
        class="items-center grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 small-nav"
      >
        <NuxtLink to="/" class="font-bold ml-14"
          ><img src="../../assets/img/logo.svg" alt="company logo"
        /></NuxtLink>
        <div class="grid grid-cols-4 navigation">
          <ul class="d-flex text-white" v-for="nl in navList" :key="nl.id">
            <li>
              <NuxtLink :to="nl.to" class="flex items-center">
                <CommonIcon name="circle"></CommonIcon>

                &nbsp; {{ nl.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>


        <!-- ham menu -->
      <div class="hamburger-menu" @click="isActive = !isActive">
        <img src="../../assets/img/hamburger_icon_1.svg" />
        <LayoutMiniNavbar  :isActive="isActive"/>
      </div>
      </div>






      <div class="flex items-center flex-wrap justify-end left-nav">
        <div class="relative mr-8">
          <div
            class="absolute inset-y-0 left-0 flex items-center"
            @click="isSearch = !isSearch"
          >
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
          <LayoutSearch :isSearch="isSearch" />
        </div>

        <div class="mr-14">
          <div v-if="isScrolled" @click="isOpen = !isOpen">
            <img src="../../assets/img/hamburger_icon_1.svg" />
          </div>
          <div v-else @click="isOpen = !isOpen">
            <img src="../../assets/img/hamburger_icon.svg" />
          </div>
          <LayoutSideMenu :isOpen="isOpen" />
        </div>
      </div>
    </nav>
  </header>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
const isOpen = ref(false);
const isSearch = ref(false);
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

const isActive = ref(false)

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

.hamburger-menu {
  display: none;
}

@media screen and (max-width: 1280px) {
  .hamburger-menu {
  display: block;
  
}

.small-nav{
  display: flex;
  justify-content: space-between;
  padding-right: 60px;
}

.navigation{
  display: none;
}

}
</style>
