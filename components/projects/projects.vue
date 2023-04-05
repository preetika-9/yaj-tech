<template>
  <div class="bg_color">
    <div class="mx-14 pb-24">
      <div class="pt-24 pb-16">
        <DynamicTitlesWhite :title="title" />
      </div>

      <div class="grid-1 grid md:grid-cols-2 lg:grid-cols-2 items-center projects">
        <div>
          <img
            src="../../assets/img/project_img.svg"
            alt="project image"
            class="pl-6 "
          />
        </div>
        <div class="pl-20">
          <p
            class="text-white text-2xl font-semibold pb-4"
          >
            Pocket Sports
          </p>
          <p
            class="text-white font_500 text-xl"
          >
            We started our journey with the idea of creating
            innovative products,
          </p>
        </div>
      </div>

      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 pt-16 pl-6">
        <div class="d-flex items-center list" v-for="sm in seeMore">
          <p class="text-white pr-4">{{ sm.label }}</p>
          <img
            src="../../assets/img/arrow_icon (1).svg"
            alt="see more"
            class="project-icons"
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
    label: "Yahoo Sports",
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
    padding-left: 0px;
    padding-top: 10px;
  }

  .pb-4 {
    padding-bottom: 4px;
  }
  .pt-16 {
    padding-top: 20px;
  }
  
  .text-lg{
    
    line-height: 20px;
  }

  .text-xl {
    font-size: 18px;
    line-height: 22px;
}
  .pr-4{
    padding-right: 10px;
    font-size: 12px;
    line-height: 14px;
  }
  .project-icons{
    height: 20px;
    width: 20px;
  }
  .list{
   
    padding-bottom: 15px;
  }
  
}

@media screen and (max-width: 902px) {
  .project-icons{
    height: 25px;
    width: 25px;
   
  }

  .list{
   
   padding-bottom: 15px;
   padding-left: 50px;
 }
}
</style>
