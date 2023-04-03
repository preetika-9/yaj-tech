<template>
  <div class="bg_white">
    <div class="mr-14 ml-14">
      <div class="pb-16 pt-24">
        <DynamicTitles :title="title" />
      </div>
      <ForWhomElements />
    </div>
  </div>
</template>

<script setup>
const title = ref("For Whom");
</script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {

.mr-14{
  margin-right: 1rem;
}
}
</style>
