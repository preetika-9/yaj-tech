<template>
    <div>
        <div class="bg_white">
    <div class="mr-14 ml-14 ">
      <div class="py-24 pb-16 ">
        <DynamicTitles :title="title"/>
      </div>
      <ToolsNTechnologyList/>
      
    </div>
  </div>
    </div>
</template>

<script setup>
const title = ref("Tools & Technologies we use");
</script>

<style lang="scss" scoped>

</style>