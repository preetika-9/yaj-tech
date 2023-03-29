<template>
    <div>
        <div class="bg_white">
    <div class="mr-14 ml-14 py-24">
      <div class="pb-24 ">
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