<template>
  <footer
    class="text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 bg-black lg:text-left pl-8 pt-16"
  >
    <div class="mx-6 py-10 text-center md:text-left">
      <div class="grid-1 grid gap-8  sm:gap-8  md:grid-cols-2 lg:grid-cols-5">
        <div class="footer-top">
          <img src="../../assets/img/logo.svg" class="logo"/>
          <p class="text-white pt-4 text">Build for Tech.</p>
        </div>

        <div class="footer">
          <div class="d-flex">
            <img src="../../assets/img/circle.svg" class="pr-2 pt-2 h-5 w-5" />
            <p
              class="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white 
              text-lg"
            >
              Focus Areas
            </p>
          </div>
          <div class="links ">
            <p class="mb-4 text-base " v-for="fl in footerLeft">
            <NuxtLink :to="`{{ fl.to }}`" class="text_gray ">{{
              fl.label
            }}</NuxtLink>
          </p>
          </div>
        </div>
        <div class="footer">
          <div class="d-flex">
            <img src="../../assets/img/circle.svg" class="pr-2 pt-2 h-5 w-5" />
            <p
              class="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white text-lg"
            >
              Quick Links
            </p>
          </div>
          <div class="links ">
            <p class="mb-4 text-base" v-for="fr in footerRight">
            <NuxtLink :to="`{{ fr.to }}`" class="text_gray">{{
              fr.label
            }}</NuxtLink>
          </p>
          </div>
        </div>
        <div class="footer">
          <div class="d-flex">
            <img src="../../assets/img/circle.svg" class="pr-2 pt-2 h-5 w-5" />
            <p
              class="mb-4 flex justify-center font-semibold uppercase md:justify-start text-white text-lg"
            >
              Social
            </p>
          </div>
          <div class="d-flex">
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
            class="mb-8 flex justify-center font-semibold uppercase md:justify-start text-white text-lg"
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
          <p class="mb-4 ">
            <NuxtLink
              to="/"
              class="font-semibold text_gray underline decoration-solid"
              >Term & Conditions
            </NuxtLink>
          </p>
        </div>
        <div class="">
          <p class="mb-4">
            <NuxtLink
              to="/"
              class="font-semibold text_gray underline decoration-solid"
              >Privacy Policy</NuxtLink
            >
          </p>
        </div>
        <div class="">
          <p class="mb-4">
            <NuxtLink
              to="/"
              class="font-semibold text_gray underline decoration-solid"
              >Cookies Preferences</NuxtLink
            >
          </p>
        </div>
        <div class="yaj-link">
          <div>
          <span class="text_gray">© 2023 </span>
          <NuxtLink
            to="/"
            class="text-white"
            href="https://tailwind-elements.com/"
            >YAJ Technologies.</NuxtLink
          ></div>
          <p class="text_gray">All Rights Reserved</p>
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
@media screen and (max-width: 600px) {

  .footer-top{
   padding-bottom: 25px;
   display: flex;
   flex-direction: column;
   justify-items: center;
  }

  .footer{
    padding-bottom: 20px;
  }

  .d-flex{
    display: flex;
    justify-content: center;
    padding-bottom: 10px;
  }
  .logo{
    height: 48px;
  }

  .text{
    float: left;
  }
  .gap-8 {
    gap: 0rem;
  }
  .mb-4{
    margin-bottom: 0.5rem;
  }
  .pt-4{
    padding-top: 1rem;
  }

  .px-12{
    padding-left: 1rem;
    padding-right: 1rem;
  } 
  
  .py-4{
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .text-lg{
    font-size: 14px;
    line-height: 20px;
  }

  .text-base{
    font-size: 0.9rem;
    line-height: 0.5rem;
  }

  .right-20{
    right: 1rem;
  }

  .links{
    // display: flex;
    // flex-wrap: wrap;
   p{
    padding-right: 9px;
    padding-bottom: 8px;
   }
  }

  .mx-6{
    margin-left: 0px;
  }

  
  // .yaj-link{
  //   display: flex;
  // }
}
</style>

