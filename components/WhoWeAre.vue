<template>
  <div class="bg_white">
    <div class="mr-14 ml-14">
      <div class="pb-8">
        <DynamicTitles :title="title"/>
      </div>

      <div
        class="grid-1 grid md:grid-cols-2 lg:grid-cols-2 items-center pb-12 pl-6"
      >
        <div>
          <p class="text-xl font_500 leading-8">
            <b> YAJ Tech </b>has worked with more than <b>1900 business</b>
            <br />(and counting) in the past <b>18 years</b> and we offer our<br />
            experience with best expert talent pool in the<br />
            industry to fulfill all your application development needs.
          </p>
          <p class="text-xl font_500 pt-6 leading-8">
            We deploy best practices, proven development<br />
            methodologies and <b>time-tested optimum delivery</b> <br />models
            for developing and building application on a<br />
            <b>fixed time & cost basis</b>.
          </p>
        </div>
        <div class="grid-1 grid  lg:grid-cols-2 " >
          <div class="boxes mb-8 pt-10" v-for="l in lists" >
            <p class="text-center text-white font-bold text-2xl">{{ l.number}}</p>
            <p class="text-center text-white text-sm font-normal">{{ l.label }}</p>
          </div>
          
        </div>

        <div class="d-flex items-center pt-20">
          <p class="text-xl pr-4 font-bold">Learn More</p>
          <img src="../assets/img/arrow_icon (2).svg" alt="arrow up" />
        </div>
      </div>

      <div class="pb-20 grid-1  lg:grid-cols-7">
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
          class="w-16 rounded-full"
          alt="Avatar"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const lists = ref([
  { number: "18", label: " Years in Industry" },
  { number: "1900+", label: "Clients worldwide" },
  { number: "150+", label: "Strong designers & developers" },
  { number: "8-10", label: "Weels project take with development" },
]);

const title = ref("Who we are")
</script>

<style lang="scss" scoped>
.boxes {
  background-color: #1b96b8;
  height: 136px;
  width: 292px;
  border-radius: 16px;
}
</style>
