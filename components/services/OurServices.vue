<template>
  <div class="bg_white">
    <div class="mr-14 ml-14 pb-20">
      <div class="pt-24 pb-16">
        <DynamicTitles :title="title" />
      </div>

      <div>
        <ServicesCard class="ml-8" />
      </div>
    </div>
  </div>
</template>

<script setup>
const title = ref("Our Services");
</script>

<style lang="scss" scoped>
.pb-20 {
  padding-bottom: 1rem;
}
@media screen and (max-width: 600px) {
  .ml-14 {
    margin-right: 1rem;
  }
}


</style>
