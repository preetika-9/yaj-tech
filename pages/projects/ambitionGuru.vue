<template>
  <div>
    <ProjectsProjectNavigation :details="details" />
    <ProjectsYouMayAlsoLike/>
    <ContactUs />
  </div>
</template>

<script setup>
const details = ref([
    {
        name:'Ambition Guru',
        description:"Ambition.guru'is an AI-driven ed-tech platform that guides learners to be the best at anything they desire. We aspire and motivate students of any age group in every possible way to achieve their innate potential. We strive to create a pedagogical structure that provides students with a comprehensive and accessible learning experience online."
    }
]);
</script>

<style lang="scss" scoped></style>
