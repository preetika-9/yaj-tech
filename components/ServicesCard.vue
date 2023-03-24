<template>
  <div class="">
    <div class="grid md:grid-cols-4 lg:grid-cols-4">
      <div
        class="block max-w-sm rounded-lg bg_color card"
        v-for="ci in cardItem"
      >
        <div class="py-3 px-6 dark:border-neutral-600 dark:text-neutral-50">
          <div class="d-flex justify-between items-center pt-4">
            <p class="text-lg font-medium">{{ ci.number }}</p>
            <div class="d-flex items-center">
              <p class="pr-4 text-lg font-medium">View more</p>
              <img src="../assets/img/arrow_icon.svg" />
            </div>
          </div>

          <img
            src="../assets/img/pattern (2).svg"
            alt="background image"
            class="image"
          />
        </div>
        <div
          class="text-3xl font-medium leading-8 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50"
        >
          <p>{{  ci.label }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const cardItem = ref([
  {
    number: '01',
    label: "Enterprise Solutions",
    
  },
  {
    number: '02',
    label: "Mobility Solutions",
  },
  {
    number: '03',
    label: "Data Solutions",
  },
  {
    number: '04',
    label: " QA & Testing",
  },
]);
</script>

<style lang="scss" scoped>
.card {
  width: 300px;
  height: 400px;
}

.bg_color{
  background-color: #F2F9FF;
}
</style>
