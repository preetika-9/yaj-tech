<template>
    <div class="bg-white">
    <div class="mx-14 py-20 ">
      <div class="text-center text-white">
        <p class="text-black text-xl pb-14">Trusted By</p>
        <div class="container p-6">
            
          <div class="grid gap-x-60 sm:gap-x-60  md:grid-cols-5 lg:grid-cols-5">
              <!-- <div class="d-flex justify-between"> -->
            <div class="mb-6 lg:mb-0">
              <img
                src="../../assets/img/airbnb (1).svg"
                class=" "
              />
            </div>
            <div class="mb-6 lg:mb-0">
              <img
                src="../../assets/img/spotify (1).svg"
                class=""
              />
            </div>
            <div class="mb-6 lg:mb-0">
              <img
                src="../../assets/img/linkedin (1).svg"
                class=""
              />
            </div>
            <div class="mb-6 lg:mb-0">
              <img
                src="../../assets/img/google (1).svg"
                class=""
              />
            </div>
            <div class="mb-6 lg:mb-0">
              <img
                src="../../assets/img/uber (1).svg"
                class=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
</div>
  </template>
  
  <script setup></script>
  
  <style lang="scss" scoped>
  @media screen and (max-width: 600px) {
    div >img{
      height: 20px;
    }
  
    .py-20 {
      padding-top: 1rem ;
      padding-bottom: 1rem ;
  }
  .text-xl{
    font-size: 16px;
  }
  .pb-14{
    padding-bottom: 24px;
  }
  }
  
  </style>
  