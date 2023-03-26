<template>
  <div class="bg_color">
    <div class="mr-14 ml-14 pb-24">
      <div class="py-24 d-flex items-center">
        <img src="../assets/img/circle.svg" class="pr-2 h-6 w-6 text-red-500" />
        <p class="text-6xl text-white">Projects</p>
      </div>

      <div class="d-flex items-center">
        <div>
          <img
            src="../assets/img/project_img.svg"
            alt="project image"
            class="pl-6"
          />
        </div>
        <div class="pl-20">
          <p class="text-white text-xl font-semibold pb-4">Pocket Sports</p>
          <p class="text-white font_500 text-xl">
            We started our journey with the idea of creating<br />
            innovative products,
          </p>
        </div>
      </div>

      <div class="grid md:grid-cols-4 lg:grid-cols-6 pt-16 pl-6 " >
        <div class="d-flex items-center" v-for="sm in seeMore">
          <p class="text-white">{{ sm.label }}</p>
          <img
            src="../assets/img/arrow_icon (1).svg"
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
</script>

<style lang="scss" scoped>
.bg_color {
  background-color: #1b96b8;
}
</style>
