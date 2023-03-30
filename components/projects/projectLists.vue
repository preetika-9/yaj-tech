<template>
    <div>
  <div class="grid-1 grid md:grid-cols-2 lg:grid-cols-4 items-center pt-12 ">
    <!-- <div class="flex justify-center"> -->
    <div
      class="block max-w-sm rounded-lg bg-white shadow-lg dark:bg-neutral-700 "
    >
      <NuxtLink to="/projects/ambitionguru">
        <div class="relative">
          <img
            class="rounded-t-lg"
            src="../../assets/img/innovate.svg"
            alt="image"
          />
          <div class="absolute bottom-0 left-0 p-4">
            <div class="d-flex">
              <button
                class="mt-4 mr-2 px-4 py-2 bg-white text-black rounded-full transition duration-500 ease-in-out transform hover:opacity-75 hover:scale-105"
              >
                Web
              </button>
              <button
                class="mt-4  mr-2 px-4 py-2 bg-white text-black rounded-full transition duration-500 ease-in-out transform hover:opacity-75 hover:scale-105"
              >
                Apps
              </button>
              <button
                class="mt-4 mr-2 px-4 py-2 bg-white text-black rounded-full transition duration-500 ease-in-out transform hover:opacity-75 hover:scale-105"
              >
                E-commerce
              </button>
            </div>
            <p class="text-white font_600 text-2xl">Innovative Developing</p>
          </div>
        </div>
      </NuxtLink>
    </div>

    
    <!-- </div> -->
  </div>
  <div class="d-flex justify-center">
    <button class="bg-black text-white rounded-full px-6 py-3">Load More</button>
  </div>
</div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
