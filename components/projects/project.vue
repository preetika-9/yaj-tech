<template>
  <div class="bg_white">
    <div class="mr-14 ml-14 pb-16">
      <div class="pt-24 pb-16 d-flex items-center">
        <DynamicTitles :title="title" />
      </div>
      <div class="d-flex flex-wrap gap-20 justify-center">
        <ul class="d-flex  text-black text-base font_500" v-for="n in navs">
          <li>
            <NuxtLink to="/" class="flex items-center"
              >&nbsp; {{ n.label }}
            </NuxtLink>
          </li>
        </ul>
      </div>

      <ProjectsProjectLists/>
    </div>
  </div>
</template>

<script setup>
const navs = ref([
  {
    label: "ShowAll",
  },
  {
    label: "Website",
  },
  {
    label: "Web App",
  },
  {
    label: "App",
  },
  {
    label: "E-commerce",
  },
  {
    label: "Videos",
  },
]);

const title = ref("Projects");
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1280px) {
.gap-20{
gap: 10px;
}
.mr-14{
  margin-right: 30px;
}
}
</style>
