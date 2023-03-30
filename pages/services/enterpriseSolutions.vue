<template>
  <div>
    <LandingPage :title="title"/>
   <ServicesServiceDescription/>
    <WhyChoose/>
    <WhatWeOffer />
    <ContactUs />
    <Map/>
  </div>
</template>

<script setup>
import WhyChoose from '~~/components/services/WhyChoose.vue';
const title = ref("Enterprise Solutions");

</script>

<style lang="scss" scoped>

</style>
