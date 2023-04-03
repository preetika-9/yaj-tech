<template>
  <div class="grid-1 grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3">
    <div class="card p-8 mb-6">
      <div class="">
        <CommonIcon name="computer" class="icon"></CommonIcon>
        <p class="text-black font_600 text-2xl pb-2">Personal Dashboard</p>
      </div>
      <P class="text-black text-base leading-6"
        >Suspendisse sagittis vel lacinia. Integer sit amet ante elit. Praesent
        pulvinar congue risus, in tristique.</P
      >
    </div>

    <div class="card p-8 mb-6">
      <div class="">
        <CommonIcon name="brush" class="icon"></CommonIcon>
        <p class="text-black font_600 text-2xl pb-2">Modern Designs</p>
      </div>
      <P class="text-black text-base leading-6"
        >Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget
        urna mollis ornare vel eu.</P
      >
    </div>
    <div class="card p-8 mb-6">
      <div class="">
        <CommonIcon name="gifts" class="icon"></CommonIcon>
        <p class="text-black font_600 text-2xl pb-2">Marketing Package</p>
      </div>
      <P class="text-black text-base leading-6"
        >Suspendisse sagittis vel lacinia. Integer sit amet ante elit. Praesent
        pulvinar congue risus, in tristique.</P
      >
    </div>
    <div class="card p-8 mb-6">
      <div class="">
        <CommonIcon name="diamond" class="icon"></CommonIcon>
        <p class="text-black font_600 text-2xl pb-2">Branding Materials</p>
      </div>
      <P class="text-black text-base leading-6"
        >Aliquam mollis quam sed mattis sodales. Morbi accumsan posuere iaculis.
        Donec a scelerisque magna.</P
      >
    </div>
    <div class="card p-8 mb-6">
      <div class="">
        <CommonIcon name="video" class="icon"></CommonIcon>
        <p class="text-black font_600 text-2xl pb-2">Video Tutorials</p>
      </div>
      <P class="text-black text-base leading-6"
        >Suspendisse sagittis vel lacinia. Integer sit amet ante elit. Praesent
        pulvinar congue risus, in tristique.</P
      >
    </div>
    <div class="card p-8 mb-6">
      <div class="">
        <CommonIcon name="support" class="icon"></CommonIcon>
        <p class="text-black font_600 text-2xl pb-2">Live Support</p>
      </div>
      <P class="text-black text-base leading-6"
        >Vestibulum id ligula porta felis euismod semper. Nullam quis risus eget
        urna mollis ornare vel eu.</P
      >
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.card {
  height: 284px;
  width: 400px;
  background-color: #f2fcff;
}

.icon {
  padding-bottom: 24px;
}

svg {
  height: 48px;
  width: 48px;
}

@media screen and (max-width: 600px) {
  .card {
    height: 225px;
    width: 120px;
  }
}
</style>
