<template>
  <div>
    <div class="d-flex flex-wrap justify-between">
      <div class="relative ml-14 hero-section">
        <p class="text-white text-6xl pt-56 hero_left_div pb-20">
          Code & craft innovation <br />
          empowering technology <br />
          for your business
        </p>
        <NuxtLink to="/pricing">  <button class="rounded-lg bg_white py-4 px-8">Get an estimate</button></NuxtLink>
        <div class="py-16">
          <img src="../assets/img/Union.svg" class="pb-2" />
          <p class="text-white">
            Kamaladi, Laldurbar <br />Kathmandu <br />Nepal
          </p>
        </div>

        <div>
          <p class="text-white text-xl bottom-txt">
            Trusted by over 200 start ups and other business. An agile
            shop for excellence in enterprise solutions.
          </p>
        </div>
      </div>
      <!-- right section -->

      <div class="hero_height relative">
        <img
          src="../assets/img/hero_img.svg"
          alt="hero image"
          class="absolute img_hero"
        />
        <div class="absolute bottom-20 right-0">
          <div class="d-flex absolute pr-8 right-0 bottom-0">
            <img src="../assets/img/shield.svg" alt="images" class="pr-8" />
            <img
              src="../assets/img/security_badge.svg"
              alt="images"
              class="pr-8"
            />
          </div>

          <div
            class="absolute right-10 bottom-4 left-0 z-[2] mx-[15%] mb-4 flex list-none justify-center p-0"
            data-te-carousel-indicators
          >
            <button
              type="button"
              data-te-slide-to="0"
              data-te-carousel-active
              class="pr-2"
              aria-current="true"
            >
              <CommonIcon name="circle1"></CommonIcon>
            </button>
            <button type="button" data-te-slide-to="1" class="pr-2">
              <CommonIcon name="circleDark"></CommonIcon> 
            </button>
            <button type="button" data-te-slide-to="2" class="pr-2">
              <CommonIcon name="circle1"></CommonIcon> 
            </button>
          </div>
          <CommonIcon name="pattern"></CommonIcon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.hero_left_div {
  line-height: 90px;
}
.img_hero {
  top: 10rem;
  right: 4rem;
}

// .bottom-txt{
//   width: 484px;
// }

@media screen and (max-width: 600px) {
.py-4{
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
} 
.bottom-txt{
  width: 350px;
}
.px-8{
  padding-left: 1rem;
  padding-right: 1rem;
}

.mb-40{
  margin-bottom: 2rem;
}

.py-16{
  padding-top: 2rem;
  padding-bottom: 2rem;
}
.pb-20{
  padding-bottom: 2rem;
}
.hero-section{
  margin-right: 2.5rem;
}

}

@media screen and (max-width: 600px) {
  .text-xl{
    font-size: 16px;
    line-height: 23px;
  }
}

@media screen and (max-width: 902px) {

//   .bottom-txt{
//   width: 760px;
// }
.pb-20{
  padding-bottom: 2rem;
}

.hero-section{
  margin-right: 2.5rem;
}

}

</style>
