<template>
  <div class="d-flex bg-white">
    <div class="">
      <img src="../../assets/img/img (4).svg" class="left-img" />
    </div>
    <div class="right-card bg-black  pl-24 py-36 w-3/5">
     <div class="ml-2">
      <button class="rounded-sm bg-[#1B96B8] px-2 py-1 text-white mb-3">
        Our Approach
      </button>
      <p class="text-white font_500 pb-4 text-4xl">Results oriented</p>
      <div class="text-area">
        <p class="text-white text-lg">
        Orci varius natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus. Donec ac enim ante. Aliquam eu congue
        justo, in varius diam fusce tellus.
      </p>
      </div>
      <button
        class="rounded-sm bg_white btn mt-12 px-6 py-3 text-primary font_700 text-lg"
      >
        Find Out More
      </button>
     </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.right-card {
  height: 573px;
}

.text-area{
  width: 586px;
}

@media screen and (max-width: 600px) {
  .py-36 {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
  .pl-24 {
    padding-left: 0rem;
  }
  .text-4xl {
    font-size: 20px;
    line-height: 20px;
  }
  .text-lg {
    font-size: 15px;
    line-height: 22px;
  }
  .mt-12 {
    margin-top: 1rem;
}

.text-area{
  width: 300px;
}

.ml-2 {
  margin-left: 2.5rem;
  margin-right: 2.5rem;
}
.d-flex{
  flex-direction: column;
}

.mb-3{
  margin-bottom: 24px;
}

.right-card{
  width: 100%;
  height: 330px;
}
}
</style>
