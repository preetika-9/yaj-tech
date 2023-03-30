<template>
  <div class="bg_white">
    <div class="mr-14 ml-14 pb-24">
      <div class="pt-24 pb-16 ">
        <DynamicTitles :title="title"/>
      </div>
     
      <div>
        <ServicesCard class="ml-8" />
      </div>
    </div>
  </div>
</template>

<script setup>
const title = ref('Our Services')
</script>

<style lang="scss" scoped></style>
