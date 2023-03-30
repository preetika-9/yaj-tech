<template>
    <div>
<LandingPage  :title="title"/>
<Project/>
<ContactUs/>
<Map/>
    </div>
</template>

<script setup>
import Project from '~~/components/projects/project.vue';
const title = ref("Projects that we've done");
</script>

<style lang="scss" scoped>

</style>