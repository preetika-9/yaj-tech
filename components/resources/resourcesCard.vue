<template>
  <div class="mr-14 ">
    <div class="max-w-72 bg-white dark:bg-neutral-700 mb-20 ">
      <NuxtLink to="/">
        <img class="r" src="../../assets/img/image 13 (1).svg" alt="" />
      </NuxtLink>
      <div class="p-10">
        <p class="pb-4 text-sm">February 28, 2023 / By Swagat Nepal</p>
        <h5
          class="mb-2 text-4xl font_500 pb-4"
        >
          Getting AI to Reason: Using Neuro-<br />Symbolic Question Answering
        </h5>
        <p
          clas="mb-4  max-w-72 font_400 text-lg card"
        >
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo<br />
          conseq duis aute irure dolor in reprehenderit consectetur adipiscing
          elit, sed do eiusmod tempor<br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation<br />
          ullamco consequat.
        </p>
        <!-- category -->
        <div class="pt-10">
          <div class="d-flex flex-wrap">
            <div v-for="b in btns">
              <button
                class="mt-4 mr-2 px-4 py-2 bg-white border-2 border-black text_black text-sm rounded-full transition duration-500 ease-in-out transform hover:opacity-75 hover:scale-105"
              >
                {{ b.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="max-w-72 bg-white dark:bg-neutral-700 mb-20 ">
      <NuxtLink to="/">
        <img class="" src="../../assets/img/image 13 (1).svg" alt="" />
      </NuxtLink>
      <div class="p-10 ">
        <p class="pb-4 text-sm">February 28, 2023 / By Swagat Nepal</p>
        <h5
          class="mb-2 text-4xl font_500 pb-4"
        >
          Getting AI to Reason: Using Neuro-<br />Symbolic Question Answering
        </h5>
        <p clas="mb-4  max-w-72 font_400 text-lg">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
          nisi ut aliquip ex ea commodo<br />
          conseq duis aute irure dolor in reprehenderit consectetur adipiscing
          elit, sed do eiusmod tempor<br />
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation<br />
          ullamco consequat.
        </p>
        <!-- category -->
        <div class="pt-10">
          <div class="d-flex flex-wrap">
            <div v-for="b in btns">
              <button
                class="mt-4 mr-2 px-4 py-2 bg-white border-2 border-black text_black text-sm rounded-full transition duration-500 ease-in-out transform hover:opacity-75 hover:scale-105"
              >
                {{ b.name }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const btns = [
  {
    name: "web",
  },
  {
    name: "Apps",
  },
  {
    name: "E-commerce",
  },
];
</script>

<style lang="scss" scoped>
// .card-resources {
//   height: 936px;
// }
.card{
  width: 896;
}
@media screen and (max-width: 600px) {
.p-10{
  padding: 1.5rem;
}

.pt-10{
  padding-top: 0.5rem;
}

.text-4xl{
  font-size: 18px;
  line-height: 20px;
}

.text-lg{
  font-size: 14px;
}

.text-sm{
  font-size: 10px;
}

.pb-4{
  padding-bottom: 5px;
}

.px-4{
  padding-left: 6px;
  padding-right: 6px;
} 


.py-2{
  padding-top: 2px;
  padding-bottom: 2px;
}

.mt-4{
  margin-top: 0px;
}
.p-10{
  padding: 15px;
}


}

</style>
