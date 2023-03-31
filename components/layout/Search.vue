<template>
  <div
    class="fixed top-0 right-0 w-full h-full bg-black"
    :class="{ hidden: !isSearch }"
  >
    <div
      @click="isSearch = !isSearch"
      class="py-8 px-12 grid grid-cols-2 relative"
    >
      <CommonIcon name="logo"></CommonIcon>
      <CommonIcon name="whiteCross" class="d-flex justify-end"></CommonIcon>
    </div>

    <div class="flex justify-center items-center h-2/3 w-full">
      <input
        type="text"
        placeholder="Type your Search"
        class="bg-transparent py-3 pl-10 text-white placeholder-white outline-none"
      />
      <button type="submit">
        <img
          src="../../assets/img/search_icon_1.svg"
          alt="search"
          class="h-8 w-8 text-black-600"
        />
      </button>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  isSearch: {
    type: Boolean,
    default: false,
  },
});
</script>

<style lang="scss" scoped></style>
