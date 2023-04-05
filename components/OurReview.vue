<template>
  <div class="bg_white">
    <div class="mx-14 pb-24">
      <div class="pt-24 pb-16">
        <DynamicTitles :title="title" />
      </div>
      <div class="grid-1 grid md:grid-cols-1 lg:grid-cols-2 items-center pl-6">
        <div>
          <div class=" text-cover">
            <p clas="text-xl leading-8 font_500">
            We started our journey with the idea of creating
            innovative products, and we have been following this
            trend since 2004 and continue to build technological
            solutions for our customers.
          </p>
          </div>
          <button
            class="rounded-lg bg-[#1B96B8] px-12 py-4 text-white font_700 my-12"
          >
            read more reviews
          </button>
          <p class="font_500 text_20">
            Recognized on Clutch as a Top Web Developer In Nepal
          </p>
          <div
            class="grid-1 grid grid-cols-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 pt-10"
          >
            <div class="img-grid">
              <img src="../assets/img/Mask group.svg" />
            </div>
            <div class="img-grid">
              <img src="../assets/img/Mask group (1).svg" />
            </div>
            <div class="img-grid">
              <img src="../assets/img/logo_corporate.svg" />
            </div>
            <div class="img-grid">
              <img src="../assets/img/logo_certified.svg" />
            </div>
          </div>
        </div>
        <div class="relative">
          <img src="../assets/img/review 1.svg" alt="review" class="image"/>
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

<script setup>
const title = ref("Our review on Marketplace");
</script>

<style lang="scss" scoped>

.text-cover{
    width: 532px;
  }
@media screen and (max-width: 600px) {
  
  .text-cover{
    width: 295px;
  }
  .px-12 {
    padding-right: 16px;
    padding-left: 16px;
  }

  .py-4 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .my-12 {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .img-grid {
    padding-right: 10px;
    padding-bottom: 20px;
  }

  .text-xl {
    font-size: 18px;
  }
  .text_20 {
    font-size: 0.75rem;
  }

  .pt-10 {
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-right: 2rem;
  }

  .prev {
    left: -3rem;
    height: 40px;
  }

  .next {
    right: -3rem;
    height: 40px;
  }
}

@media screen and (max-width: 902px) {
  .text-cover[data-v-f1559b72] {
    width: 770px;
}
.my-12{
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.pt-10 {
    padding-top: 2.5rem;
    padding-bottom: 2.5rem;
    padding-left: 7rem;
  }

  .image{
    padding-left: 95px;
  }

  .px-4{
    padding-left: 7rem;
  }
  .right-48 {
    right: 1rem;
}
.text_20 {
    font-size: 1rem;
}
}
</style>
