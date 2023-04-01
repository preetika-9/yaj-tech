<template>
  <div class="bg_color">
    <div class="mx-14 pb-24">
      <div class="pt-24 pb-16">
        <DynamicTitlesWhite :title="title" />
      </div>

      <div class="grid-1 grid md:grid-cols-2 lg:grid-cols-2 items-center">
        <div>
          <img
            src="../../assets/img/project_img.svg"
            alt="project image"
            class="pl-6"
          />
        </div>
        <div class="pl-20">
          <p
            class="text-white sm:text-lg md:text-lg lg:text-xl xl:text-xl font-semibold pb-4"
          >
            Pocket Sports
          </p>
          <p
            class="text-white font_500 sm:text-lg md:text-lg lg:text-xl xl:text-xl"
          >
            We started our journey with the idea of creating<br />
            innovative products,
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-4 lg:grid-cols-6 pt-16 pl-6">
        <div class="d-flex items-center" v-for="sm in seeMore">
          <p class="text-white pr-4">{{ sm.label }}</p>
          <img
            src="../../assets/img/arrow_icon (1).svg"
            alt="see more"
            class="6"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const seeMore = ref([
  {
    label: "Better clinics",
  },
  {
    label: "Yahoo Speerts",
  },
  {
    label: "Keep change",
  },
  {
    label: "King cobra Pro",
  },
  {
    label: "Ambition Guru",
  },
  {
    label: "Sociar",
  },
]);

const title = ref("Projects");
</script>

<style lang="scss" scoped>
.bg_color {
  background-color: #1b96b8;
}
@media screen and (max-width: 600px) {
  .pl-20 {
    padding-left: 22px;
    padding-top: 10px;
  }

  .pb-4 {
    padding-bottom: 4px;
  }
  .pt-16 {
    padding-top: 20px;
  }
  
}
</style>
