<template>
  <footer
    class="text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 bg-black lg:text-left pl-8 pt-16"
  >
    <div class="mx-6 py-10 text-center md:text-left">
      <div class="grid-1 grid gap-8 sm:gap-8 md:grid-cols-2 lg:grid-cols-5">
        <div >
          <img src="../../assets/img/logo.svg" />
          <p class="text-white pt-4">Build for Tech.</p>
        </div>

        <div>
          <div class="flex">
            <img src="../../assets/img/circle.svg" class="pr-2 pt-2 h-5 w-5" />
            <p
              class="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white sm:text-lg md:text-lg lg:text-xl xl:text-xl"
            >
              Focus Areas
            </p>
          </div>
          <p class="mb-4" v-for="fl in footerLeft">
            <NuxtLink :to="`{{ fl.to }}`" class="text-white">{{
              fl.label
            }}</NuxtLink>
          </p>
        </div>
        <div class="">
          <div class="flex">
            <img src="../../assets/img/circle.svg" class="pr-2 pt-2 h-5 w-5" />
            <p
              class="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white sm:text-base md:text-base lg:text-lg xl:text-lg"
            >
              Quick Links
            </p>
          </div>
          <p class="mb-4" v-for="fr in footerRight">
            <NuxtLink :to="`{{ fr.to }}`" class="text-white">{{
              fr.label
            }}</NuxtLink>
          </p>
        </div>
        <div class="">
          <div class="flex">
            <img src="../../assets/img/circle.svg" class="pr-2 pt-2 h-5 w-5" />
            <p
              class="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white sm:text-base md:text-base lg:text-lg xl:text-lg"
            >
              Social
            </p>
          </div>
          <div class="flex">
            <NuxtLink to="https://www.facebook.com/yajtechnologies/"
              ><img
                src="../../assets/img/facebook_icon.svg"
                class="pr-2 h-9 w-9"
            /></NuxtLink>
            <NuxtLink to="https://np.linkedin.com/company/yajtech"
              ><img
                src="../../assets/img/instagram_icon.svg"
                class="pr-2 h-9 w-9"
            /></NuxtLink>
            <NuxtLink to="/"
              ><img
                src="../../assets/img/twitter_icon.svg"
                class="pr-2 h-9 w-9"
            /></NuxtLink>
          </div>
        </div>
        <div class="relative">
          <p
            class="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white sm:text-base md:text-base lg:text-lg xl:text-lg"
          >
            Get Our Latest <br />
            News in Your Inbox
          </p>
          <button class="rounded-lg bg-[#1B96B8] px-12 py-4 text-white">
            subscribe
          </button>
          <img
            src="../../assets/img/arrow_up_icon.svg"
            alt="arrow up"
            class="absolute right-20"
          />
        </div>
      </div>
    </div>

    <div class="mx-6 py-10 text-center md:text-left">
      <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-5">
        <div></div>

        <div>
          <div class="flex"></div>
          <p class="mb-4">
            <NuxtLink
              to="/"
              class="font-semibold text-grey underline decoration-solid"
              >Term & Conditions
            </NuxtLink>
          </p>
        </div>
        <div class="">
          <p class="mb-4">
            <NuxtLink
              to="/"
              class="font-semibold text-grey underline decoration-solid"
              >Privacy Policy</NuxtLink
            >
          </p>
        </div>
        <div class="">
          <p class="mb-4">
            <NuxtLink
              to="/"
              class="font-semibold text-grey underline decoration-solid"
              >Cookies Preferences</NuxtLink
            >
          </p>
        </div>
        <div class="yaj-link">
          <div>
          <span>© 2023 </span>
          <NuxtLink
            to="/"
            class="text-white"
            href="https://tailwind-elements.com/"
            >YAJ Technologies.</NuxtLink
          ></div>
          <p>All Rights Reserved</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const footerLeft = ref([
  {
    label: "Hybrid Cloud",
    to: "/hybridcloud",
  },
  {
    label: "Artificial Intelligence",
    to: "artificialIntelligence",
  },
  {
    label: "Quantum Computing",
    to: "quantumcomputing",
  },
  {
    label: "Science",
    to: "science",
  },
]);

const footerRight = ref([
  {
    label: "Experiments",
    to: "/experiments",
  },
  {
    label: "Careers",
    to: "/careers",
  },
  {
    label: "Collaborate With Us",
    to: "/collobrate",
  },
  {
    label: "About Us",
    to: "/aboutus",
  },
]);
</script>

<style lang="scss" scoped>
@media screen and (max-width: 1280px) {
  .gap-8 {
    gap: 0rem;
  }
  .mb-4{
    margin-bottom: 0.5rem;
  }

  .px-12{
    padding-left: 1rem;
    padding-right: 1rem;
  } 
  
  .py-4{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  // .yaj-link{
  //   display: flex;
  // }
}
</style>

