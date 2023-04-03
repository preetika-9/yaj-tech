<template>
  <div class="bg_white">
    <div class="mr-14">
      <div class="d-flex items-center py-auto">
        <img src="../../assets/img/pattern.svg" class="pattern-img" />
        <div class="ml-96 mr-80 description">
          <p class="text-lg leading-8 pb-6">
            <b>With 18 years of experience in enterprise </b> application
            development, Microservice
            architecture, Enterprise automation, Big Data Service &
            Predictive Analytics. Blockchain, and
            E-commerce, <b>YAJ Tech can help you achieve your goals.</b>
          </p>
          <p class="text-lg leading-8">
            By re-engineering solutions of various
            complexity, we assist enterprises in becoming a
            worldwide success.
          </p>
        </div>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>

// .description{
//   width: 412px;
//   height: auto;
// }
@media screen and (max-width: 600px) {
  .pattern-img {
    display: none;
  }

  .ml-96 {
    margin-left: 56px;
    padding-top: 20px;
    padding-bottom: 20px;
  }

  .mr-80 {
    margin-right: 0px;
  }

  .mr-14{
    margin-right: 40px;
  }
  .pb-6{
    padding-bottom: 10px;
  }
  .leading-8{
    line-height: 1.5rem;
  }
}
</style>
