<template>
    <div>
      <input ref="searchBox" type="text" placeholder="Search for a place" />
      <ul>
        <li v-for="place in places" :key="place.place_id">{{ place.name }}</li>
      </ul>
    </div>
  </template>
  
  <script>
  import { defineComponent } from "vue";
  import { load } from "google-maps-api-loader";  
  export default defineComponent({
  name: "Places",
  data() {
    return {
      places: [],
    };
  },
  mounted() {
    load({
      apiKey: "YOUR_API_KEY",
      libraries: ["places"],
    }).then((google) => {
      const searchBox = new google.maps.places.SearchBox(this.$refs.searchBox, {
        types: ["establishment"],
      });

      searchBox.addListener("places_changed", () => {
        const places = searchBox.getPlaces();
        this.places = places;
      });
    });
  },
});

  </script>
  
  <style>
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  li {
    margin-bottom: 4px;
  }
  </style>
  