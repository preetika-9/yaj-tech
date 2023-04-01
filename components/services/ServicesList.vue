<template>
  <div class="grid1 grid md:grid-cols-6 lg:grid-cols-6 pl-12 gap-6 sm:gap-6">
    <!-- <div class="d-flex items-center"> -->

    <div class="d-flex items-center" v-for="l in list">
      <div
        class="bg-white text-white w-8 h-8 rounded-full flex justify-center items-center"
      >
        <p class="text-black">{{ l.number }}</p>
      </div>
      <p class="text-white pl-2">{{ l.label }}</p>
    </div>
    <!-- <p class="text-white pr-4">{{ sm.label }}</p> -->
  </div>
  <!-- </div> -->
</template>

<script setup>
const list = ref([
  {
    number: "1",
    label: "Development",
  },
  {
    number: "2",
    label: "IT Management",
  },
  {
    number: "3",
    label: "Tech Support",
  },
  {
    number: "4",
    label: "Web Applications",
  },
  {
    number: "5",
    label: "Mobile Services",
  },
  {
    number: "6",
    label: "Information Desk",
  },
]);
</script>

<style lang="scss" scoped>

</style>
