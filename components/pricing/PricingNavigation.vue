<template>
  <div>
    <div class="d-flex flex-wrap justify-between">
      <div class="relative ml-14 hero-section">
        <div class=" pb-20">
            <p class="text-white text-6xl pt-56 hero_left_div">
          Pricing
        </p>
        <p class="text-white text-xl pt-2">Various different packages to fit all price points. Start with a trial and upgrade any time.</p>
        </div>
        
        <div class="pb-16">
          <img src="../../assets/img/Union.svg" class="pb-2 " />
          <p class="text-white text-base">
            Kamaladi, Laldurbar <br />Kathmandu <br />Nepal
          </p>
        </div>

        <div>
          <p class="text-white text-xl text ">
            Trusted by over 200 start ups and other business. <br />An agile
            shop for excellence in enterprise solutions.
          </p>
        </div>
      </div>
      <!-- right section -->

      <div class="hero_height relative">
        <img
          src="../../assets/img/hero_img (1).svg"
          alt="hero image"
          class="absolute img_hero"
        />
        <div class="absolute bottom-20 right-0">
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

@media screen and (max-width: 1280px) {
  .py-4 {
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .px-8 {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .mb-40 {
    margin-bottom: 2rem;
  }

  .py-16 {
    padding-top: 2rem;
    padding-bottom: 2rem;
  }
  .pb-20 {
    padding-bottom: 2rem;
  }
  .hero-section {
    margin-right: 2.5rem;
  }

  .text-xl{
    font-size: 16px;
    line-height: 23px;
  }
  .text-base{
    font-size: 14px;
    line-height: 20px;
  }

  .text{
    padding-bottom: 28px;
  }
}
</style>
