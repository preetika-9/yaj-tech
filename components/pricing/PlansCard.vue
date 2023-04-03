<template>
  <div class="grid-1 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
    <div class="bg-white cards rounded-lg py-14 px-7">
      <div class="text-center">
        <p class="text-primary pb-4 font_600 text-2xl">Lite Plan</p>

        <p class="text-5xl pb-1">Rs <span class="font_600">0</span></p>
        <p class="font_600 text-lg pb-10">per month</p>

        <hr />

        <p class="pt-10 pb-3 font_600 text-lg">Unlimited layouts</p>
        <p class="pb-3 font_600 text-lg">Save and post</p>
        <p class="pb-3 font_600 text-lg text-grey">Custom domain</p>
        <p class="pb-3 font_600 text-lg text-grey">Online storage</p>
        <p class="pb-3 font_600 text-lg text-grey">High speed bandwidth</p>
        <p class="pb-14 font_600 text-lg text-grey">Premium designs</p>

        <button class="rounded-sm bg-[#1B96B8] py-3 text-white mb-3 w-full font_700 text-lg">
          Go Lite
        </button>
      </div>
    </div>

    <div class="bg-white cards rounded-lg py-14 px-7">
      <div class="text-center">
        <p class="text-primary pb-4 font_600 text-2xl">Premium Plan</p>

        <p class="text-5xl pb-1">Rs <span class="font_600">10000 /-</span></p>
        <p class="font_600 text-lg pb-10">per month</p>

        <hr />

        <p class="pt-10 pb-3 font_600 text-lg">Unlimited layouts</p>
        <p class="pb-3 font_600 text-lg">Save and post</p>
        <p class="pb-3 font_600 text-lg">Custom domain</p>
        <p class="pb-3 font_600 text-lg">Online storage</p>
        <p class="pb-3 font_600 text-lg">High speed bandwidth</p>
        <p class="pb-14 font_600 text-lg">Premium designs</p>

        <button class="rounded-sm bg-[#1B96B8] py-3 text-white mb-3 w-full font_700 text-lg">
          Go Premium
        </button>
      </div>
    </div>

    <div class="bg-white cards rounded-lg py-14 px-7">
      <div class="text-center">
        <p class="text-primary pb-4 font_600 text-2xl">Pro Plan</p>

        <p class="text-5xl pb-1">Rs <span class="font_600">20000/-</span></p>
        <p class="font_600 text-lg pb-10">per month</p>

        <hr />

        <p class="pt-10 pb-3 font_600 text-lg">Unlimited layouts</p>
        <p class="pb-3 font_600 text-lg">Save and post</p>
        <p class="pb-3 font_600 text-lg">Custom domain</p>
        <p class="pb-3 font_600 text-lg">Online storage</p>
        <p class="pb-3 font_600 text-lg">High speed bandwidth</p>
        <p class="pb-14 font_600 text-lg">Premium designs</p>

        <button class="rounded-sm bg-[#1B96B8] py-3 text-white mb-3 w-full font_700 text-lg">
          Go Pro
        </button>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.cards {
  width: 400px;
  height: 634px;
  border: 0.2px solid #bebebe;
}

@media screen and (max-width: 600px) {
  .cards {
    height: 195px;
    width: 90px;

    // height: 400px;
    // width: 300px;
    // margin-bottom: 20px;
  }

  .text-5xl{
    font-size: 10px;
  }

  .text-2xl{
    font-size: 10px;
    line-height: 10px;
  }
  .py-14{
    padding-top: 8px;
    padding-bottom: 8px;
  }

  .pb-4{
    padding-bottom: 10px;
  }
  .text-lg{
    font-size: 8px;
    line-height: 10px;
  }
  .pb-10{
    padding-bottom: 5px;
  }

  .pt-10{
    padding-top: 5px;
  }

  .pb-3{
    padding-bottom: 3px;
  }
  .pb-14{
    padding-bottom: 3px;
  }
  .py-3{
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .px-7{
    padding-left: 10px;
    padding-right: 10px;
  }

  .mr-14{
    margin-right: 2rem;
  }
}
</style>
