<template>
  <div class="h-96" ref="mapContainer" >
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.2121154691463!2d85.31763021553427!3d27.710736382790355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1906af60fffb%3A0x5673ff7f98360e14!2sLandmark%20Hotel%20Apartments!5e0!3m2!1sen!2snp!4v1680165046820!5m2!1sen!2snp" width="100%" height="450px" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue';


export default defineComponent({
  name: 'Map',
  setup() {
    const mapContainer = ref(null);

    onMounted(() => {
     
    });

    return { mapContainer };
  }
});
</script>

<style>
.map {
  height: 100%;
}
</style>
