<template>
  <div class="bg_white">
    <div class="mr-14 ml-14 pb-24">
      <div class="py-24 d-flex items-center">
        <img
          src="../assets/img/circle1.svg"
          class="pr-2 h-6 w-6 text-red-500"
        />
        <p class="text-6xl">Our review on Marketplaces</p>
      </div>
      <div class="grid-1 grid md:grid-cols-2 lg:grid-cols-2 items-center pl-6">
        <div>
          <p clas="text-xl leading-8 font_500">
            We started our journey with the idea of creating<br />
            innovative products, and we have been following this<br />
            trend since 2004 and continue to build technological<br />
            solutions for our customers.
          </p>
          <button
            class="rounded-lg bg-[#1B96B8] px-12 py-4 text-white font_700 my-12"
          >
            read more reviews
          </button>
          <p class="font_500 text_20">
            Recognized on Clutch as a Top Web Developer In Nepal
          </p>
          <div class="grid-1 grid md:grid-cols-2 lg:grid-cols-8 pt-10">
            <div>
              <img src="../assets/img/Mask group.svg" />
            </div>
            <div>
              <img src="../assets/img/Mask group (1).svg" />
            </div>
            <div>
              <img src="../assets/img/logo_corporate.svg" />
            </div>
            <div>
              <img src="../assets/img/logo_certified.svg" />
            </div>
          </div>
        </div>
        <div class="relative">
            <img src="../assets/img/review 1.svg" ref="review">
            <img
      src="../assets/img/arrow_icon (3).svg"
      class="prev absolute top-1/2 -left-24 transform -translate-y-1/2 py-2 px-4 z-10"
    />
    <img
      src="../assets/img/arrow_icon (4).svg"
      class="next absolute top-1/2 right-48 transform -translate-y-1/2 py-2 px-4 z-10"
    />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
