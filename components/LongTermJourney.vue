<template>
  <div class="bg_color">
    <div class="mx-14 pb-24">
      <div class="grid-1 grid md:grid-cols-2 lg:grid-cols-2 items-center">
        <div class="pt-24 pb-16 ">
          <DynamicTitlesWhite :title="title"/>
        </div>
        <div class="text-long-term-journey">
          <p class="text-white text-xl leading-8 font_500 pt-12 texts">
            We started our <b>journey</b> with the
            <b
              >idea of creating
              innovative products</b
            >, and we have been following this
            trend <b>since 2004</b> and continue to build technological
            solutions
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

.text-long-term-journey{
  width: 90%;
  height: 126px;
}
@media screen and (max-width: 600px) {
 .texts{
padding-top: 15px;
 }
.text-xl{
  font-size: 16px;
  line-height: 22px;
}
.pt-12{
  padding-top: 0px;
}

.mx-10{
margin-left: 0px;
margin-right: 0px;
}

.pt-10{
  padding-top: 25px;
}
 
}
</style>
