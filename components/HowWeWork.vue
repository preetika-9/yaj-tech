<template>
  <div class="bg_white">
    <div class="mr-14 ml-14">
      <div class="pb-4">
        <DynamicTitles :title="title" />
      </div>
      <div>
        <div class="flex justify-center pb-24 relative">
          <img src="../assets/img/graph_&_detail_group_1679807997.svg" />
          <div class="absolute right-72 top-72 carousel">
            <HowWeWorkCarousel />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const title = ref("How we work");
</script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {
  .carousel {
  right: -25px;
  top:35px;
}
}

@media screen and (max-width: 902px) {
.carousel{
  top: 5rem;
  right: 1rem;
}
}
</style>
