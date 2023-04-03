<template>
    <div class="bg-[#F2FCFF]">
    <div class="mr-14 ml-14 pb-24">
      <div class="pt-24 pb-16 d-flex items-center">
        <div class="">
          <DynamicTitles :title="title" />
        </div>
      </div>
      <PricingPlansCard/>
    </div>
  </div>
</template>

<script setup>
const title = ref("Plans");
</script>

<style lang="scss" scoped>

</style>