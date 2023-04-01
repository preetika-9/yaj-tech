<template>
  <div class="">
    <div class="grid md:grid-cols-4 lg:grid-cols-4">
      <div
        class="block max-w-sm rounded-lg bg_colors card mb-6"
        v-for="ci in cardItem"
      >
        <div class="py-3 px-6 dark:border-neutral-600 dark:text-neutral-50">
          <div class="d-flex justify-between items-center pt-4">
            <p class="sm:text-base md:text-base lg:text-lg xl:text-lg font_500">{{ ci.number }}</p>
            <NuxtLink :to="ci.to" > <div class="d-flex items-center">
             <p class="pr-4 sm:text-base md:text-base lg:text-lg xl:text-lg font_500"> View more</p>
              <img src="../../assets/img/arrow_icon.svg" />
            </div></NuxtLink>
          </div>

          <img
            src="../../assets/img/pattern (2).svg"
            alt="background image"
            class="image"
          />
        </div>
        <div
          class="sm:text-2xl md:text-2xl lg:text-3xl xl:text-3xl font_500 leading-8 py-3 px-6 dark:border-neutral-600 dark:text-neutral-50"
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
    to:'/services/enterprisesolutions'
    
  },
  {
    number: '02',
    label: "Mobility Solutions",
    to:'/services/mobilitysolutions'
  },
  {
    number: '03',
    label: "Data Solutions",
    to:'/services/datasolutions'
  },
  {
    number: '04',
    label: " QA & Testing",
    to:'/services/qatesting'
  },
]);
</script>

<style lang="scss" scoped>
.card {
  width: 300px;
  height: 400px;
}

.bg_colors{
  background-color: #F2F9FF;
}

@media screen and (max-width: 600px) {
  .card {
  width: 230px;
  height: 300px;
}
}

</style>
