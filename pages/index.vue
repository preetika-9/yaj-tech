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
  </div>
</template>

<script setup>
import HowWeWork from "../components/howWeWork.vue";
import ForWhom from "../components/forWhom.vue";
import WhoWeAre from "../components/whoWeAre.vue";
import LongTermJourney from "../components/longTermJourney.vue";
import Testimonials from "../components/testimonials.vue";
import OurReview from "../components/ourReview.vue";
import ContactUs from "../components/contactUs.vue";
import OurServices from "~~/components/services/OurServices.vue";

</script>

<style lang="scss" scoped></style>
