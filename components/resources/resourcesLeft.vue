<template>
  <div class="left-card ml-14">
    <div class="mx-10">
      <div class=" mr-10 pt-12 w-full">
        <div class="relative">
          <div
            class="absolute inset-y-0 right-0.5 flex items-center justify-center "
          >
            <img
              src="../../assets/img/search_icon.svg"
              alt="search"
              class="h-8 w-8 text-black-600"
            />
          </div>
          <input
            class="bg-transparent py-3 text-black placeholder-black outline-none border-b-2 w-full search"
            type="text"
            placeholder="Search"
          />
        </div>
      </div>
      <!-- category -->
      <div class="pt-10">
        <p class="text_black font_500 text-xl">Category:</p>
        <div class="d-flex flex-wrap">
          <div v-for="b in btns">
            <button
              class="mt-4 mr-2 px-4 py-2 bg-white border-2 btns text_black text-sm rounded-full transition duration-500 ease-in-out transform hover:opacity-75 hover:scale-105"
            >
              {{ b.name }}
            </button>
          </div>
        </div>
      </div>
      <!-- read next -->
      <div class="pt-10">
        <p class="text_black font_500 text-xl">Read next:</p>
        <div class="d-flex pt-4" v-for="rl in readNextList">
          <div class="pr-4">
            <img src="../../assets/img/resource_img.svg" />
          </div>
          <div>
            <p class="text-gray">{{ rl.date }}</p>
            <p class="text-xl font_500">{{ rl.title }}</p>
          </div>
        </div>
      </div>
      <!-- tags -->
      <div class="pt-10">
        <p class="text_black font_500 text-xl">Tags:</p>
        <nav class="w-full rounded-md">
          <ol
            class="pt-2 list-reset d-flex flex-wrap text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            <li>
              <a
                href="#"
                class="text-black transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >WebApp</a
              >
            </li>
            <li>
              <span class="mx-2 text-black dark:text-neutral-400">/</span>
            </li>
            <li>
              <a
                href="#"
                class="text-black transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >Apps</a
              >
            </li>
            <li>
              <span class="mx-2 text-black dark:text-neutral-400">/</span>
            </li>

            <li>
              <a
                href="#"
                class="text-black transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >Software</a
              >
            </li>
            <li>
              <span class="mx-2 text-black dark:text-neutral-400">/</span>
            </li>
            <li>
              <a
                href="#"
                class="text-black transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >UI/UX</a
              >
            </li>
            <li>
              <span class="mx-2 text-black dark:text-neutral-400">/</span>
            </li>
            <li>
              <a
                href="#"
                class="text-black transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >Web</a
              >
            </li>
            <li>
              <span class="mx-2 text-black dark:text-neutral-400">/</span>
            </li>
            <li>
              <a
                href="#"
                class="text-black transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                >Computer</a
              >
            </li>
          </ol>
        </nav>
      </div>

      <!-- instagram -->

      <div class="pt-10">
        <p class="text_black font_500 text-xl">Instagram:</p>
        <div class="">
          <button
            class="rounded-lg bg-[#418BD2] px-4 py-1.5 ml-20 mt-4 text-white text-sm d-flex items-center"
          >
            <CommonIcon name="instagramWhite" class="mr-4"></CommonIcon>
            Follow on Instagram
          </button>
        </div>
      </div>

      <!-- follow us -->
      <div class="pt-10">
        <p class="text_black font_500 text-xl">Follow us:</p>
        <div class="d-flex pt-4">
          <CommonIcon name="facebook" class="pr-7"></CommonIcon>
          <CommonIcon name="instagramBlack" class="pr-7"></CommonIcon>
          <CommonIcon name="twitter" class="pr-7"></CommonIcon>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const btns = ref([
  {
    name: "web",
  },
  {
    name: "Apps",
  },
  {
    name: "E-commerce",
  },
  {
    name: "Innovation",
  },
  {
    name: "Tech",
  },
  {
    name: "UI",
  },
  {
    name: "Videos",
  },
]);

const readNextList = ref([
  {
    date: "March 28, 2023",
    title: "Our Newest Software Is On",
  },
  {
    date: "March 02,  2023",
    title: "Create High Performance",
  },
  {
    date: "February 28, 2023",
    title: "Cyber Safety Rules To Know",
  },
]);
</script>

<style lang="scss" scoped>
.left-card {
  width: 400px;
  height: 1115px;

  background: #ffffff;  
}

.search{
  border-bottom: 0.2px solid #525252;
}

.btns{
  border: 0.5px solid #424242;
}

@media screen and (max-width: 600px) {

.ml-14{
  margin-left: 0rem;
}

.left-card {
  width: 310px;
  height: 1115px;

 
}}
</style>
