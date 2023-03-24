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
  </div>
</template>

<script setup>
import HowWeWork from "./howWeWork.vue";
import Services from "./services.vue";
import Projects from "./projects.vue";
import ToolsTechnology from "./tools&technology.vue";
</script>

<style lang="scss" scoped></style>
