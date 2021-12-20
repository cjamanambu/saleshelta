<template>
  <div>
    <HomeSlider />
    <b-container fluid>
      <NewListings />
      <AffordableHouses />
    </b-container>
  </div>
</template>

<script>
import HomeSlider from "./home-slider";
import NewListings from "./new-listings";
import AffordableHouses from "./affordable-houses";

export default {
  components: {
    HomeSlider,
    NewListings,
    AffordableHouses,
  },
};
</script>

<style></style>
