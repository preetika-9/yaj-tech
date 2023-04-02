<template>
  <div
    class="fixed top-0 right-0 max-w-[416px] h-full w-full  bg-black z-40"
    :class="{ hidden: !isActive }"
  >
    <div class="d-flex  justify-between p-8 bg-white" @click="isActive = !isActive">
      
    
    <div class="">
      <CommonIcon name="logo"></CommonIcon>
      <p>Built For Tech.</p>
    </div>

    <CommonIcon name="cross"></CommonIcon>
</div>

    <div class="">
        <nav
      class="mx-auto p-4 content-center grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
    >
      <div
        class="items-center grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2"
      >
        
        <div class="grid grid-cols-1 pt-10">
          <ul class="d-flex text-white" v-for="nl in navList" :key="nl.id">
            <li>
              <NuxtLink :to="nl.to" class="flex items-center text-xl pt-8">
                <CommonIcon name="circle"></CommonIcon>

                &nbsp; {{ nl.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
      </nav>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isActive: {
    type: Boolean,
    default: false,
  },
});

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
</script>
