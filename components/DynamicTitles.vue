<template>
    <div class="d-flex items-center">
        <img
          src="../assets/img/circle1.svg"
          class="pr-2 h-6 w-6 text-red-500"
        />
        <p class="text-6xl xs:text-xl sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl">{{ title }}</p>
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