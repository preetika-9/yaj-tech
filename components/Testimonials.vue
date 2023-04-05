<template>
  <div class="bg_black ">
    <div class="mr-14 ml-14 pb-24">
      <div class="pt-24 pb-16 d-flex items-center">
        <DynamicTitlesWhite :title="title"/>
      </div>
      <div class="grid-1 grid md:grid-cols-3 lg:grid-cols-3 items-center cards">
        <div v-for="p in peoples" class="mx-20 cards">
          <div class="d-flex items-center pb-10">
            <img
              src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
              class="w-16 rounded-full pr-4"
              alt="Avatar"
            />
            <div>
              <p class="text-white font-semibold text-xl">{{ p.name }}</p>
              <p class="text-gray-300 text-sm">{{ p.post }}</p>
            </div>
          </div>
          <p class="text-gray-300">{{ p.description }}</p>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script setup>
const peoples = ref([
  {
    name: "Kamalesh Shrestha",
    post: "CEO @ Nepal Media House",
    description:
      "Thank you YAJ for your continued tireless efforts in making sure were productive. And you always do it with a smile!!! Many thanks.",
  },
  {
    name: "Abisha Pokharel",
    post: "Executive Director, Medical Industry",
    description:
      "Your engineer makes things easy for me. He is thorough and polite. I know things are going to get fixed in a timely matter.",
  },
  {
    name: "Sobit Nepal",
    post: "Construction Industry Client",
    description:
      "All you guys are awesome! Thanks for always helping me. Always very nice and friendly.",
  },
]);

const title = ref("Testimonials");
</script>

<style lang="scss" scoped>
@media screen and (max-width: 600px) {

.text-xl{
font-size: 18px;
}

.pb-10{
  padding-bottom: 0px;
}

.mx-20{
  margin-left: 10px;
  margin-right: 10px;
}
.cards{
  padding-bottom: 30px;
}
.pb-24{
  padding-bottom: 8px;
}

.text-sm{
  font-size: 10px;
}
}

@media screen and (max-width: 902px) {
.mx-20{
margin-left: 15px;
margin-right: 15px;
}

.pb-10{
  padding-bottom: 10px;
}

}
</style>
