<template>
  <div class="d-flex bg-white">
    <div class="">
      <img src="../../assets/img/img (4).svg" class="left-img" />
    </div>
    <div class="right-card bg-black ml-2 pl-24 py-36 w-3/5">
      <button class="rounded-sm bg-[#1B96B8] px-2 py-1 text-white mb-3">
        Our Approach
      </button>
      <p class="text-white font_500 pb-4 text-4xl">Results oriented</p>
      <p class="text-white text-lg">
        Orci varius natoque penatibus et magnis dis parturient montes,<br />
        nascetur ridiculus mus. Donec ac enim ante. Aliquam eu congue<br />
        justo, in varius diam fusce tellus.
      </p>
      <button
        class="rounded-sm bg_white btn mt-12 px-6 py-3 text-primary font_700 text-lg"
      >
        Find Out More
      </button>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.right-card {
  height: 573px;
}

@media screen and (max-width: 600px) {
  .py-36 {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .pl-24 {
    padding-left: 1rem;
  }
  .text-4xl {
    font-size: 16px;
    line-height: 20px;
  }
  .text-lg {
    font-size: 12px;
    line-height: 15px;
  }
  .mt-12 {
    margin-top: 1rem;
}
}
</style>
