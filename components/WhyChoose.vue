<template>
  <div class="bg_color">
    <div class="ml-14">
      <div class="d-flex justify-between">
        <div>
          <div class="py-24 d-flex">
            <img
              src="../assets/img/circle.svg"
              class="pr-2 h-6 w-6 text-red-500"
            />
            <p class="text-6xl text-white">
              Why choose YAJ Tech <br />for enterprise solutions?
            </p>
          </div>
          <div class="grid md:grid-cols-3 lg:grid-cols-3 items-center">
            <div class="pb-8 mr-60" v-for="l in lists">
              <p class="text-color pb-2 text-lg">{{ l.number }}</p>
              <p class="text_white text-lg">{{ l.description }}</p>
            </div>
          </div>
        </div>

        <div class="right-image">
          <img src="../assets/img/img.svg" alt="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const lists = ref([
  {
    number: "01",
    description: "State of the art development  platforms & tools",
  },
  {
    number: "02",
    description:
      "Domain knowledge & domain related investments at the start of each project",
  },
  {
    number: "03",
    description:
      "Mature & continuously improving design and programming techniques",
  },
  {
    number: "04",
    description:
      "Continuous & complete project management     working in concert  with client",
  },
  {
    number: "05",
    description:
      "Expert core committee to preview design & programming activites",
  },
]);
</script>

<style lang="scss" scoped>
.right-image {
  width: 1111px;
}
.text-color {
  color: #adedff;
}
</style>
