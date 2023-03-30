<template>
  <div>
    <div class="bg-black">
      <!-- home page -->
      <HeroSection />
      <SocialMedias />
    </div>

    <!-- Services -->
    <OurServices/>

    <!-- how we work -->
    <HowWeWork />

    <!-- projects -->
    <Projects/>

    <!-- technologies we use -->
    <Toolstechnology/>

    <!-- For whom -->
    <ForWhom/>

    <!-- who we are -->
    <WhoWeAre/>

    <!-- long term journey -->
    <LongTermJourney/>

    <!-- Testimonials -->
    <Testimonials/>

    <!-- our review on market place -->
    <OurReview/>

    <!-- contact us -->
    <ContactUs/>

    <!-- map -->
    <Map/>
  </div>
</template>

<script setup>
import HowWeWork from "../components/HowWeWork.vue";
import ForWhom from "../components/ForWhom.vue";
import WhoWeAre from "../components/WhoWeAre.vue";
import LongTermJourney from "../components/LongTermJourney.vue";
import Testimonials from "../components/Testimonials.vue";
import OurReview from "../components/OurReview.vue";
import ContactUs from "../components/contactUs.vue";
import OurServices from "~~/components/services/OurServices.vue";

</script>

<style lang="scss" scoped></style>
