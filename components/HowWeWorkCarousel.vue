<!-- <template>
  <div class="carsouel-card">
    <p></p>
  </div> 
</template>-->
<template>
  <div class="carousel relative">
    <div class="slides flex transition-transform duration-500 ease-in-out">
      <div class="slide">
        <div class="carsouel-card p-7 ">
          <p class="text-white font_600 text_27">Elicitation</p>
          <p class="text-white font_500 text-xl texts">
            We started our journey with the idea of creating innovative
            products,
          </p>
        </div>
      </div>
    </div>
    <img
      src="../assets/img/arrow_icon (3).svg"
      class="prev absolute top-1/2 -left-24 arrow-left transform -translate-y-1/2 py-2 px-4 z-10"
    />
    <img
      src="../assets/img/arrow_icon (4).svg"
      class="next absolute top-1/2 right-11 transform -translate-y-1/2 py-2 px-4 z-10"
    />
  </div>
</template>

<script>
import { onMounted, ref } from "vue";

export default {
  setup() {
    const slideIndex = ref(1);

    // Next/previous controls
    const plusSlides = (n) => {
      showSlides((slideIndex.value += n));
    };

    // Thumbnail image controls
    const currentSlide = (n) => {
      showSlides((slideIndex.value = n));
    };

    const showSlides = (n) => {
      let i;
      const slides = document.getElementsByClassName("slide");
      if (n > slides.length) {
        slideIndex.value = 1;
      }
      if (n < 1) {
        slideIndex.value = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      slides[slideIndex.value - 1].style.display = "block";
    };

    onMounted(() => {
      showSlides(slideIndex.value);
    });

    return {
      slideIndex,
      plusSlides,
      currentSlide,
    };
  },
};
</script>

<style lang="scss" scoped>
.carsouel-card {
  width: 414px;
  height: 168px;
  border-radius: 16px;
  background-color: #081316;
}

.carousel {
  width: 550px;
}

.slides {
  width: 50%; /* Set the width of the slide container to 3 times the slide width */
}

.slide {
  width: 33.33333%; /* Set the width of each slide to 1/3 of the slide container width */
}

@media screen and (max-width: 600px) {
  .carsouel-card  {
  width: 115px;
  height: 60px;
  padding: 8px;
}
.carousel {
  width: 215px;
}
.arrow-left{
  padding-left: 3.5rem;
}

.text_27{
  font-size: 12px;
}
.texts{
  font-size: 8px;
  line-height: 8px;
}
}
</style>
