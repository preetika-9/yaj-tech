<template>
  <div class="bg_white">
    <div class="mr-14 ml-14">
      <div class="pb-8">
        <DynamicTitles :title="title" />
      </div>

      <div
        class="grid-1 grid md:grid-cols-1 lg:grid-cols-2 items-center pb-12 pl-6"
      >
        <div class="left-text">
          <p class="text-xl  font_500 leading-8">
            <b> YAJ Tech </b>has worked with more than <b>1900 business</b> (and
            counting) in the past <b>18 years</b> and we offer our experience
            with best expert talent pool in the industry to fulfill all your
            application development needs.
          </p>
          <p class="text-xl  font_500 pt-6 leading-8">
            We deploy best practices, proven development methodologies and
            <b>time-tested optimum delivery</b> models for developing and
            building application on a <b>fixed time & cost basis</b>.
          </p>
        </div>
        <div
          class="grid-1 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 box-grid"
        >
          <div class="boxes mb-8 p-8" v-for="l in lists">
            <p class=" text-white font-bold text-2xl">
              {{ l.number }}
            </p>
            <p class="pl-4 text-white text-sm font-normal">
              {{ l.label }}
            </p>
          </div>
        </div>

        <div class="d-flex items-center pt-20">
          <p class="text-xl pr-4 font-bold">Learn More</p>
          <img
            src="../assets/img/arrow_icon (2).svg"
            alt="arrow up"
            class="arrow-up"
          />
        </div>
      </div>

      <div class="pb-20 grid-1 lg:grid-cols-7">
        <img
          src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
          class="w-16 rounded-full profiles"
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

const title = ref("Who we are");
</script>

<style lang="scss" scoped>
.boxes {
  background-color: #1b96b8;
  height: 136px;
  width: 292px;
  border-radius: 16px;
}

.left-text {
  width: 540px;
}

@media screen and (max-width: 600px) {
  .boxes {
    height: 70px;
    width: 100px;
    border-radius: 16px;
    // margin-left: 20px;
  }

  .box-grid {
    margin-top: 20px;
  }
  .left-text {
    width: 300px;
  }

  .mb-8 {
    margin-bottom: 8px;
  }

  

  .text-xl {
    font-size: 14px;
    line-height: 24px;
  }

  .text-2xl {
    font-size: 0.875rem;
    line-height: 1rem;
  }

  .text-sm {
    font-size: 10px;
    line-height: 15px;
  }
  .pb-12 {
    padding-bottom: 10px;
  }

  .pb-20 {
    padding-bottom: 30px;
  }

  .pr-4 {
    padding-right: 4px;
  }

  .arrow-up {
    height: 20px;
    width: 20px;
  }

  .profiles {
    height: 60px;
    width: 60px;
  }

  .pt-20 {
    padding-top: 2rem;
  }

  .p-8{
    padding: 0.8rem;
  }
}

@media screen and (max-width: 902px) {
  .boxes {
    height: 90px;
    width: 180px;
  }

  .pt-10 {
    padding-top: 20px;
  }

  .left-text {
    width: 780px;
    padding-bottom: 2rem;
  }
  .pt-6{
    padding-top: 16px;
  }

  .p-8{
    padding: 1rem;
  }
  .pl-4{
    padding-left: 0px;
  }
  .pt-20 {
    padding-top: 3rem;
}

.text-xl{
  font-size: 1rem;
  line-height: 24px;
}

.text-2xl{
  font-size: 1.2rem;
  line-height: 1rem;
}

.pb-12{
  padding-bottom: 20px;
}

.pb-20{
  padding-bottom: 3rem;
}
}
</style>
