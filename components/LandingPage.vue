<template>
  <div relative>
    <div class="d-flex justify-between">
      <div class="ml-14 pt-56">
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

      <div class="hero_height">
        <div class="absolute bottom-20 right-0">
          <CommonIcon name="pattern"></CommonIcon>
        </div>
      </div>
    </div>
    <div class="absolute bottom-40 left-0 w-full">
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
</style>
