<template>
    <div>
        <LandingPage  :title="title"/>
       <OurServices/>
       <ContactUs/>
       <Map/>
    </div>
</template>

<script setup>
import OurServices from '~~/components/services/OurServices.vue';
import ContactUs from '../../components/contactUs.vue';
const title = ref("Services that we serve");

</script>

<style lang="scss" scoped>

</style>