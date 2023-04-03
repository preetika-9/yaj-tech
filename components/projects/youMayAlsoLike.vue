<template>
  <div class="bg-white pl-14">
    <p class="font_500 text_27">You May Also Like</p>

    <div class="grid-1 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 items-center pt-8 lists">
      <div class="pb-24" v-for="d in details">
        <div class="block max-w-sm rounded-lg bg-white">
          <NuxtLink to="">
            <img class="w-full" src="../../assets/img/img.svg" alt="" />
          </NuxtLink>
          <div class="">
            <div class="d-flex pb-4">
              <div v-for="b in btns">
                <button
                  class="mt-4 mr-2 px-4 py-2 bg-white border-2 border-black text_black  text-sm rounded-full transition duration-500 ease-in-out transform hover:opacity-75 hover:scale-105 btns"
                >
                  {{ b.name }}
                </button>
              </div>
            </div>
            <div >
              <h5
              class="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
            >
              {{ d.title }}
            </h5>
            <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
              {{ d.description }}
            </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script setup>
const btns = ref([
  {
    name: "Apps",
  },
  {
    name: "Website",
  },
]);

const details = ref([
  {
    title:'Ideas In Software',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident.'
  },
  {
    title:'Ideas In Software',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident.'
  },
  {
    title:'Ideas In Software',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident.'
  },
  {
    title:'Ideas In Software',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecatcupidatat non proident.'
  },
  


])
</script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {

// .btns{
//   height: 10px;
//   width: 10px;
// }

.text-sm{
  font-size: 8px;
}
.px-4{
  padding:2px 6px;
} 
.pb-4{
  padding-bottom: 0.5rem;
}

.text-xl{
  font-size: 15px;
}
.text-base{
  font-size: 10px;
  line-height: 16px;
}

.pb-24{
  padding-bottom: 10px;
}
.lists{
  gap: 1rem;
  padding-right: 30px;
}

.text_27{
  font-size: 24px;
}
}

</style>
