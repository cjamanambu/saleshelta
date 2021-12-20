<template>
  <div>
    <HomeSlider />
    <b-container fluid>
      <NewListings />
      <AffordableHouses />
      <RentPayer />
      <BlogList />
    </b-container>
  </div>
</template>

<script>
import HomeSlider from "./home-slider";
import NewListings from "./new-listings";
import AffordableHouses from "./affordable-houses";
import RentPayer from "./rent-payer";
import BlogList from "./blog-list";

export default {
  components: {
    HomeSlider,
    NewListings,
    AffordableHouses,
    RentPayer,
    BlogList,
  },
};
</script>

<style></style>
