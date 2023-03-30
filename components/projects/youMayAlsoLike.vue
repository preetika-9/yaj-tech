<template>
  <div class="bg-white pl-14">
    <p class="font_500 text_27">You May Also Like</p>

    <div class="grid-1 grid md:grid-cols-2 lg:grid-cols-4 items-center pt-8">
      <div class="pb-24">
        <div class="block max-w-sm rounded-lg bg-white">
          <NuxtLink to="">
            <img class="w-full" src="../../assets/img/img.svg" alt="" />
          </NuxtLink>
          <div class="">
            <div class="d-flex pb-4">
              <div v-for="b in btns">
                <button
                  class="mt-4 mr-2 px-4 py-2 bg-white border-2 border-black text_black rounded-full transition duration-500 ease-in-out transform hover:opacity-75 hover:scale-105"
                >
                  {{ b.name }}
                </button>
              </div>
            </div>
            <h5
              class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
            >
              Ideas In Software
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident.
            </p>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script setup>
const btns = ref([
  {
    name: "Apps",
  },
  {
    name: "Website",
  },
]);
</script>

<style lang="scss" scoped></style>
