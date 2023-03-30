<template>
  <div>
    <div class="d-flex justify-between">
      <div class="d-flex justify-between ml-14 pt-56">
        <p class="text-white text-6xl hero_left_div pb-16">Resources</p>
      </div>

      <div class="">
        <div class="hero_height relative">
          <nav class="w-full rounded-md pt-60">
            <ol class="pt-2 list-reset d-flex justify-end mr-14 text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600">
              <li>
                <a
                  href="#"
                  class="text-black transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                  >Home</a
                >
              </li>
              <li>
                <span class="mx-2 text-black dark:text-neutral-400"
                  >/</span
                >
              </li>
              <li class="text-black dark:text-neutral-400">Resources</li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.hero_left_div {
  line-height: 90px;
}
.img_hero {
  top: 10rem;
  right: 4rem;
}
</style>
