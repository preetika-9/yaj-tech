<template>
  <div class="bg_color">
    <div class="mr-14 ml-14 pb-24">
      <div class="grid-1 grid md:grid-cols-2 lg:grid-cols-2 items-center">
        <div class="py-24 ">
          <DynamicTitlesWhite :title="title"/>
        </div>
        <div>
          <p class="text-white text-xl leading-8 font_500">
            We started our <b>journey</b> with the
            <b
              >idea of creating<br />
              innovative products</b
            >, and we have been following this<br />
            trend <b>since 2004</b> and continue to build technological
            solutions<br />
            for <b>our customers.</b>
          </p>
        </div>
      </div>
      <div class="mx-10 pt-10">
        <img
          src="../assets/img/year_stat_group.svg"
          alt="year stat"
          class="year_stat"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
const title = ref("Long-term journey");
</script>

<style lang="scss" scoped>
.year_stat {
  width: 100%;
}
</style>
