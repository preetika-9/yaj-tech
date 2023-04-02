<template>
  <div class="mx-14 py-20">
    <div class="text-center text-white">
      <div class="container p-6">
        <div class="grid gap-x-60 sm:gap-x-60  md:grid-cols-5 lg:grid-cols-5">
            <!-- <div class="d-flex justify-between"> -->
          <div class="mb-6 lg:mb-0">
            <img
              src="../assets/img/airbnb.svg"
              class="rounded-md shadow-lg "
            />
          </div>
          <div class="mb-6 lg:mb-0">
            <img
              src="../assets/img/spotify.svg"
              class="rounded-md shadow-lg"
            />
          </div>
          <div class="mb-6 lg:mb-0">
            <img
              src="../assets/img/linkedin.svg"
              class="rounded-md shadow-lg"
            />
          </div>
          <div class="mb-6 lg:mb-0">
            <img
              src="../assets/img/google.svg"
              class="rounded-md shadow-lg"
            />
          </div>
          <div class="mb-6 lg:mb-0">
            <img
              src="../assets/img/uber.svg"
              class="rounded-md shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {
  div >img{
    height: 20px;
  }

  .py-20 {
    padding-top: 1rem ;
    padding-bottom: 1rem ;
}
}

</style>
