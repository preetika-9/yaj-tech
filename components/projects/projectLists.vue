<template>
    <div>
  <div class="grid-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center pt-12 card-projects">
    <!-- <div class="flex justify-center"> -->
    <div
      class="block max-w-sm  bg-white shadow-lg dark:bg-neutral-700 mb-10"
    >
      <NuxtLink to="/projects/ambitionguru">
        <div class="relative">
          <img
            class=""
            src="../../assets/img/innovate.svg"
            alt="image"
          />
          <div class="absolute bottom-0 left-0 p-4">
            <div class="d-flex flex-wrap btns">
              <button
                class="mt-4 mr-2 px-4 py-2 bg-white text-black rounded-full transition duration-500 ease-in-out transform hover:opacity-75 hover:scale-105 sm:text-xs"
              >
                Web
              </button>
              <button
                class="mt-4  mr-2 px-4 py-2 bg-white text-black rounded-full transition duration-500 ease-in-out transform hover:opacity-75 hover:scale-105 sm:text-xs"
              >
                Apps
              </button>
              <button
                class="mt-4 mr-2 px-4 py-2 bg-white text-black rounded-full transition duration-500 ease-in-out transform hover:opacity-75 hover:scale-105 sm:text-xs"
              >
                E-commerce
              </button>
            </div>
            <p class="text-white font_600 text-2xl">Innovative Developing</p>
          </div>
        </div>
      </NuxtLink>
    </div>


    
    <div
      class="block max-w-sm  bg-white shadow-lg dark:bg-neutral-700 mb-10"
    >
      <NuxtLink to="/projects/project">
        <div class="relative">
          <img
            class=""
            src="../../assets/img/project_card_sports (1).svg"
            alt="image"
          />
         
        </div>
      </NuxtLink>
    </div>

    <div
      class="block max-w-sm  bg-white shadow-lg dark:bg-neutral-700 mb-10"
    >
      <NuxtLink to="/projects/project">
        <div class="relative">
          <img
            class=""
            src="../../assets/img/project_card_sociair.svg"
            alt="image"
          />
         
        </div>
      </NuxtLink>
    </div>

    <div
      class="block max-w-sm  bg-white shadow-lg dark:bg-neutral-700 mb-10"
    >
      <NuxtLink to="/projects/project">
        <div class="relative">
          <img
            class=""
            src="../../assets/img/project_card_better_clinics (1).svg"
            alt="image"
          />
         
        </div>
      </NuxtLink>
    </div>

    <div
      class="block max-w-sm  bg-white shadow-lg dark:bg-neutral-700 mb-10"
    >
      <NuxtLink to="/projects/project">
        <div class="relative">
          <img
            class=""
            src="../../assets/img/project_img.svg"
            alt="image"
          />
         
        </div>
      </NuxtLink>
    </div>

    <div
      class="block max-w-sm  bg-white shadow-lg dark:bg-neutral-700 mb-10"
    >
      <NuxtLink to="/projects/project">
        <div class="relative">
          <img
            class=""
            src="../../assets/img/project_card_better_clinics (1).svg"
            alt="image"
          />
         
        </div>
      </NuxtLink>
    </div>


    <!-- </div> -->
  </div>
  <div class="d-flex justify-center">
    <button class="bg-black text-white font_700 rounded-lg text-lg px-6 py-3 load-more">Load More</button>
  </div>
</div>
</template>

<script setup></script>

<style lang="scss" scoped>

@media screen and (max-width: 600px) {
.pt-12{
  padding-top: 18px;
}

.btns{
  display: none;
}

.text-2xl{
  font-size: 14px;
  line-height: 10px;
}

.card-projects{
  gap: 10px;
}
.mb-10{
  margin-bottom: 10px;
}

.load-more{
  height: 40px;
}

.px-6{
  padding-left: 10px;
  padding-right: 10px;
}

.py-3{
  padding-top: 2px;
  padding-bottom: 2px;
}

.text-lg{
  font-size: 12px;
}

}
</style>
