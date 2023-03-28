<template>
  <div class="bg-blue">
    <div class="mr-14 ml-14 pb-24">
      <div class="py-24 d-flex items-center">
        <img
          src="../assets/img/circle1.svg"
          class="pr-2 h-6 w-6 text-red-500"
        />
        <p class="text-6xl">What we offer?</p>
      </div>
      <div>
        <div class="offer-section">
          <div
            class=" grid md:grid-cols-3 lg:grid-cols-3 items-center"
            
          >
            <div v-for="l in lists" class="px-12 py-12 border-r-2">
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
      "Automating tasks such as data entry, invoice processing, customer support, marketing, inventory management, and more. By automating these tasks, organizations can increase efficiency, reduce costs, and improve accuracy, as machines are less prone to errors than humans. ",
  },
]);
</script>

<style lang="scss" scoped>
.bg-blue {
  background-color: #f2fcff;
}
.offer-section {
  height: 330px;
  width: 1710px;
  background-color: #ffffff;
  border-radius: 24px;
}
</style>
