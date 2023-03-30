<template>
  <div relative>
    <div class="d-flex justify-between">
      <div class="ml-14 pt-48 project-detail" v-for="d in details">
        <p class="text_white text-6xl hero_left_div pb-2 pt-3">
          {{ d.name }}
        </p>
        <div class="">
          <p class="text_gray text-xl pb-16 font_500 leading-8">
            {{ d.description }}
          </p>
        </div>
        <div>
          <p class="text_white font_500 text-xl">Category:</p>
          <div class="d-flex">
            <div v-for="b in btns">
              <button
                class="mt-4 mr-2 px-4 py-2 bg-black border-2 border-white text_white rounded-full transition duration-500 ease-in-out transform hover:opacity-75 hover:scale-105"
              >
                {{ b.name }}
              </button>
            </div>
          </div>
          <div class="pt-4">
            <p class="text_white font_500 text-xl">Date:</p>
            <p class="text_white">March 28, 2023</p>
          </div>
          <div class="pt-4">
            <p class="text_white font_500 text-xl">Tags:</p>
            <nav class="w-full rounded-md">
              <ol class="list-reset flex">
                <li>
                  <NuxtLink
                    to="/"
                    class="text_white transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    >Augumented</NuxtLink
                  >
                </li>
                <li>
                  <span class="mx-2 text-neutral-500 dark:text-neutral-400"
                    >/</span
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/"
                    class="text_white transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    >Business</NuxtLink
                  >
                </li>
                <li>
                  <span class="mx-2 text-neutral-500 dark:text-neutral-400"
                    >/</span
                  >
                </li>
                <li>
                  <NuxtLink
                    to="/"
                    class="text_white transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    >Tech</NuxtLink
                  >
                </li>
              </ol>
            </nav>
          </div>
        </div>
      </div>

      <div class="hero_height">
        <div class="absolute bottom-20 right-0">
          <CommonIcon name="pattern"></CommonIcon>
        </div>
      </div>
    </div>

    <div class="bg_white py-12">
      <div class="d-flex justify-between px-20">
        <div class="d-flex items-center font_500 text_16">
          <CommonIcon name="leftArrow"></CommonIcon>
          <a
            class="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            href="#"
            >Prev Project</a
          >
        </div>

        <div class="d-flex items-center font_500 text-base">
          <a
            class="relative block rounded bg-transparent py-1.5 px-3 text-sm text-neutral-600 transition-all duration-300 hover:bg-neutral-100 dark:text-white dark:hover:bg-neutral-700 dark:hover:text-white"
            href="#"
            >Next Project</a
          ><CommonIcon name="rightArrow"></CommonIcon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  details: {
    type: Object,
    required: true,
  },
});

const btns = ref([
  {
    name: "web",
  },
  {
    name: "Apps",
  },
  {
    name: "E-commerce",
  },
]);
</script>

<style lang="scss" scoped>
.hero_left_div {
  line-height: 90px;
}
.img_hero {
  width: 540px;
}
.border-list {
  border-top: 0.1px solid rgba(255, 255, 255, 0.8);
}

.project-detail {
  height: 200px;
  width: 675px;
}
</style>
