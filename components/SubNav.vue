<template>
  <div class="bg-grey-light w-full rounded-md">
    <ol class="list-reset flex text-white gap-x-8 sm:gap-x-8">
      <li>
        <NuxtLink to="/" class="flex items-center"
          ><img
            src="../assets/img/container_circle.svg"
            class="pr-2 h-6 w-6"
          />Home</NuxtLink
        >
      </li>
      <li>
        <NuxtLink to="/services" class="flex items-center"
          ><img
            src="../assets/img/container_circle.svg"
            class="pr-2 h-6 w-6"
          />Services</NuxtLink
        >
      </li>
      <li class="text-neutral-500 dark:text-neutral-400">
        <NuxtLink to="/" class="flex items-center"
          ><img
            src="../assets/img/container_circle.svg"
            class="pr-2 h-6 w-6"
          />Home</NuxtLink
        >
      </li>
    </ol>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
