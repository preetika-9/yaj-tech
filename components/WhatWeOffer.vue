<template>
  <div class="bg-blue">
    <div class="mr-14 ml-14 pb-24">
      <div class="py-24 d-flex items-center">
        <div class="">
        <DynamicTitles :title="title"/>
      </div>
      </div>
      <div>
        <div class="offer-section max-w-[1710px] max-h-[330px]">
          <div
            class=" grid grid-cols-3 md:grid-cols-3 lg:grid-cols-3 items-center"
            
          >
            <div v-for="l in lists" class="px-12 py-12 ">
              <p class="text-primary font_600 text-xl pb-4">{{ l.title }}</p>
              <p class="text-xl">{{ l.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const lists = ref([
  {
    title: "Enterprise Application Development",
    description:
      "Every cloud-based organization requires an application, and YAJs’ extensive experience in Enterprise application development will assist you in pushing the boundaries of technological advancement. ",
  },
  {
    title: "Microservice Architecture",
    description:
      " With well-built microservices, you can boost your software infrastructure. Using cutting-edge business intelligence tools, we provide the perfect formula for getting apps from concept to existence and, eventually, virality. ",
  },
  {
    title: "Enterprise Automation",
    description:
      "Automating tasks such as data entry, invoice processing, customer support, marketing, inventory management, and more. By automating these tasks, organizations can increase efficiency, reduce costs, and improve accuracy.",
  },
]);

const title = ref("What we Offer");
</script>

<style lang="scss" scoped>
.bg-blue {
  background-color: #f2fcff;
}
.offer-section {
  // height: 330px;
  // width: 1710px;
  background-color: #ffffff;
  border-radius: 24px;
}
@media screen and (max-width: 600px) {

.mr-14{
margin-right: 35px;
}

.py-12{
  padding-top: 0.25rem;
    padding-bottom: 0.25rem;
}

.text-xl {
    font-size: 10px;
    line-height: 10px;
}
.px-12 {
    padding-left: 0.25rem;
    padding-right: 0.25rem;
}

.pb-4{
  padding-bottom: 0.5rem;
}

.offer-section {
  padding: 10px;
}
}
</style>
