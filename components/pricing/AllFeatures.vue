<template>
  <div class="bg-white">
    <div
      class="grid-1 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 py-32 mx-24"
    >
      <div class="d-flex justify-center items-center">
        <div class="">
            <p class="text-black font_500 pb-4 text-4xl">
          All core features included
        </p>
        <p class="text-black pb-12 text-xl">
          Vesti bulum suscipit dignis quam. Sed sit amet condim entum<br> dolor,
          vitae commodo metus.
        </p>
        <button
          class="rounded-lg bg-black py-4 px-6 text-white mb-3 font_700 text-lg"
        >
          View Pricing
        </button>
        </div>
      </div>

      <div>
        <div
          class="grid-1 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 py-32 mx-24"
        >
          <div class="d-flex pb-12" v-for="f in features">
            <div class="pr-4">
                <!-- <img src="../../assets/img/check_icon.svg"> -->
                <CommonIcon name="check" class="icon"></CommonIcon>
            </div>
            <div >
              <p class="text-black font_500 text-xl pb-2">{{ f.title }}</p>

              <p class="text-black text-base">
                {{ f.desc }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const features = ref([
    {
        title: 'Multiple Accounts',
        desc: 'Sed rhoncus sem et massa posuere faucibus.'
    },
    {
        title: 'Distinct user levels',
        desc: 'Aliquam erat volutpat duis suspen disse.'
    },
    {
        title: 'Full admin access',
        desc: 'Mauris euismod quam arcu vivamus porta.'
    },
    {
        title: 'Export anytime',
        desc: 'Semper nulla, tempor suscipit purus efficitur.'
    },
])
</script>

<style lang="scss" scoped>

@media screen and (max-width: 600px) {
  .text-xl{
    font-size: 14px;
    line-height: 15px;
  }
  .text-base{
    font-size: 10px;
    line-height: 15px;
  }
  .pr-4{
    padding-right: 2px;
  }

  .mx-24{
    margin-right: 20px;
    margin-left: 20px;
  }

  .text-4xl{
    font-size: 18px;
    line-height: 20px;
  }
  .py-32{
    padding-top: 20px;
    padding-bottom: 0px;
  }

  .py-4{
    padding-top: 5px;
    padding-bottom: 5px;
  } 
  .px-6{
    padding-right: 15px;
    padding-left: 15px;
  }
  .icon{
    display: none;
  }
}
</style>
