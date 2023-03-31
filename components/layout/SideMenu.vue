<template>
  <div
    class="fixed top-0 right-0 max-w-[416px] h-2/3 bg-gray-900 bg-white z-40"
    :class="{ hidden: !isOpen }"
  >
    <div class="d-flex justify-end pt-8 pr-16" @click="isOpen = !isOpen">
      <CommonIcon name="cross"></CommonIcon>
    </div>
    <div class="pl-16 pt-11">
      <CommonIcon name="logo"></CommonIcon>
      <p>Built For Tech.</p>

      <div class="pt-10">
        <p class="text_black font_500 text-xl">Contact Info:</p>
        <div class="">
          <p>Kamaladi, Laldurbar<br> Kathmandu <br> Nepal</p>

        </div>
      </div>

      <div class="pt-10">
        <p class="text_black font_500 text-xl">Instagram:</p>
        <div class="">
          <button
            class="rounded-lg bg-[#418BD2] px-4 py-1.5 ml-12 mr-6 mt-4 text-white text-sm d-flex items-center"
          >
            <CommonIcon name="instagramWhite" class="mr-4"></CommonIcon>
            Follow on Instagram
          </button>
        </div>
      </div>

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
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false,
  },
});
</script>
