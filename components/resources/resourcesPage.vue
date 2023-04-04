<template>
  <div class=" relative"  >
    <div class="d-flex flex-wrap justify-around " >
      <ResourcesLeft class=" resources-left mb-10"/>
      <ResourcesCard class=" resources-right"/>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {
.d-flex{
//  flex-direction: column-reverse;
justify-content: center;
}
}
</style>
