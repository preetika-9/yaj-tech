<template>
  <div class="grid1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 pl-12 gap-6 sm:gap-6">
    <!-- <div class="d-flex items-center"> -->

    <div class="d-flex items-center  num" v-for="l in list">
      <div
        class="bg-white text-white w-8 h-8 rounded-full flex justify-center items-center"
      >
        <p class="text-black text-base">{{ l.number }}</p>
      </div>
      <p class="text-white pl-2 text-lg">{{ l.label }}</p>
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
@media screen and (max-width: 600px) {

// .num{
//     display: none;
//   }
  .text-lg{
    font-size: 14px;
  }
  .gap-6{
    gap: 0rem;
  }

  .w-8{
    width: 1rem;
  }
  .h-8{
    height: 1rem;
  }
  .text-base{
    font-size: 0.5rem;
  }

  .num{
    padding-bottom: 0.7rem;
  }
}
</style>
