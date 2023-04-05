<template>
    <div class="pl-6">
  <div class="grid-1 grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 items-center pb-12 ">
    <div>
      <p class="text-xl  font-semibold">For Startups</p>
    </div>

    <div>
      <img src="../assets/img/arrow.svg" class="images"/>
    </div>
    <div class="">
      <img src="../assets/img/circle (2).svg" class="images"/>
      <p class="pt-4 font_500 text-lg">Greater flexibility</p>
    </div>
    <div class="">
      <img src="../assets/img/grid.svg" class="images"/>
      <p class="pt-4 font_500 text-lg">Focus on core business</p>
    </div>
    <div>
      <img src="../assets/img/grid (1).svg" class="images"/>
      <p class="pt-4 font_500 text-lg">
        Reduced development<br />
        time and cost
      </p>
    </div>
  </div>

  <div class="grid-1 grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 items-center pb-12">
    <div>
      <p class="text-xl font-semibold">For SMB</p>
    </div>

    <div>
      <img src="../assets/img/arrow.svg" class="images"/>
    </div>
    <div class="">
      <img src="../assets/img/grid (2).svg" class="images"/>
      <p class="pt-4 font_500 text-lg">In-house management</p>
    </div>
    <div class="">
      <img src="../assets/img/grid (3).svg" class="images"/>
      <p class="pt-4 font_500 text-lg">Regulation compliance</p>
    </div>
    <div>
      <img src="../assets/img/grid (4).svg" class="images"/>
      <p class="pt-4 font_500 text-lg">
        Technical support
      </p>
    </div>
  </div>
  <div class="grid-1 grid grid-cols-5 md:grid-cols-5 lg:grid-cols-5 items-center pb-24">
        <div>
            <p class="text-xl font-semibold">For Enterprise</p>
        </div>

        <div>
          <img src="../assets/img/arrow.svg" class="images"/>
         
        </div>
        <div class="">
          <img src="../assets/img/grid (5).svg" class="images"/>
          <p class="pt-4 font_500 text-lg">Mitigating<br> organisation risk</p>
        </div>
        <div class="">
          <img src="../assets/img/grid (6).svg" class="images"/>
          <p class="pt-4 font_500 text-lg">Certified engineers</p>

        </div>
        <div>
          <img src="../assets/img/grid (7).svg" class="images"/>
          <p class="pt-4 font_500 text-lg">Experience in long-term <br> projects</p>

        </div>
        
      </div>
    </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {
.text-xl {
  font-size:14px;
}

.images{
  height: 40px;
  width: 40px;
}

.text-lg{
  font-size: 10px;
  line-height: 15px;
}
.pb-12{
  padding-bottom: 1rem;
}

}


@media screen and (max-width: 902px) {
.images{
  height: 55px;
  width: 55px;
}

.text-lg{
  font-size: 0.9rem;
  line-height: 22px;
}
}
</style>
