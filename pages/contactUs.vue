<template>
  <div class="bg_color">
    <div class="mr-14 ml-14 pb-24 ">
      <div class="grid-1 grid md:grid-cols-2 lg:grid-cols-2 items-center">
        <div>
          <div class="py-24 d-flex items-center">
            <img
              src="../assets/img/circle.svg"
              class="pr-2 h-6 w-6 text-red-500"
            />
            <p class="text-6xl text-white">Contact US</p>
          </div>

          <div class=" pl-6">
            <p class="text-white font_500 text_27">Address</p>
            <p class="text-white font_500 text_18">
              Laldarbur, Kathmandu, Nepal <br />
              +977 01 4485456 <br />
              info@yajtechnologies.com <br />
              Open 9am to 6pm
            </p>
          </div>
        </div>
        <!-- form -->
        <div class="contact_form">

        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.contact_form{
    height: 440px;
    width: 660px;
    background-color: rgba(255, 255, 255, 0.05);
}
</style>
