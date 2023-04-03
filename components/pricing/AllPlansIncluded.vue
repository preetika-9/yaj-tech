<template>
  <div class="bg-white">
    <div class="mr-14 ml-14 ">
      <div class="pt-24 pb-16 d-flex items-center">
        <div class="">
          <DynamicTitles :title="title" />
        </div>
      </div>
      <PlansList/>
    </div>
  </div>
</template>

<script setup>

import PlansList from "./PlansList.vue";

const title = ref("All plans include");
</script>

<style lang="scss" scoped></style>
