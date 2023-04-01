<template>
   <div class=" d-flex items-center">
        <img src="../assets/img/circle.svg" class="pr-2 h-6 w-6 text-red-500" />
        <p class="sm:text-4xl md:text-4xl lg:text-4xl xl:text-6xl text-white">{{ title }}</p>
      </div>
</template>

<script setup>
const props = defineProps({
    title:{
        type:String,
        required: true
    }
})
</script>

<style lang="scss" scoped>

</style>