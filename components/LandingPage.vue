<template>
  <div class="relative project-herosection">
    <div class="d-flex flex-wrap justify-between">
      <div class="mx-14 pt-56 relative">
        <SubNav />
        <p class="text-white text-6xl hero_left_div pb-16 pt-3">
          {{title}}
        </p>
        <div>
          <p class="text-white text-xl pb-16">
            Trusted by over 200 start ups and other business. <br />An agile
            shop for excellence in enterprise solutions.
          </p>
        </div>
        <button class="rounded-lg bg_white py-4 px-8 mb-40">
          Get an estimate
        </button>
      </div>

      <div class="">
        <div
          class="hero_height  relative "
        >
          <img
            src="../assets/img/service_img 1.svg"
            alt="hero image"
            class="absolute img_hero top-40 right-20"
          />
          <div class="absolute bottom-20 right-0">
          <CommonIcon name="pattern"></CommonIcon>
        </div>
        </div>
      </div>
    </div>
    <div class="absolute bottom-28 left-0 w-full services-list">
      <div class="border-list pb-10 ml-10 mr-14"></div>
      <ServicesList />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<style lang="scss" scoped>
.hero_left_div {
  line-height: 90px;
}
.img_hero {
  width: 540px;
}
.border-list {
  border-top: 0.1px solid rgba(255, 255, 255, 0.8);
}
@media screen and (max-width: 1280px) {
.py-4{
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
} 

.px-8{
  padding-left: 1rem;
  padding-right: 1rem;
}

.mb-40{
  margin-bottom: 10rem;
}
.mr-14{
  margin-right: 25px;
}


    // display: none;
    .bottom-28{
      position: absolute;
      bottom: 3rem;
    }

    .border-list {
      padding-bottom: 14px;
    }
  

}
</style>
