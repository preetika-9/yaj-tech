<template>
  <div>
    <div class="bg-black">
      <!-- home page -->
      <HeroSection />
      <SocialMedias />
    </div>

    <!-- Services -->
    <Services />

    <!-- how we work -->
    <HowWeWork />

    <!-- projects -->
    <Projects/>

    <!-- technologies we use -->
    <ToolsTechnology/>

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
import HowWeWork from "./howWeWork.vue";
import Services from "../components/OurServices.vue";
import Projects from "./projects.vue";
import ToolsTechnology from "./tools&technology.vue";
import ForWhom from "./forWhom.vue";
import WhoWeAre from "./whoWeAre.vue";
import LongTermJourney from "./longTermJourney.vue";
import Testimonials from "./testimonials.vue";
import OurReview from "./ourReview.vue";
import ContactUs from "./contactUs.vue";
</script>

<style lang="scss" scoped></style>
