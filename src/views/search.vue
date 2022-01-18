<template>
  <b-container fluid id="search-result">
    <Controls />
    <p
      style="font-size: 2.25em; letter-spacing: -0.05em"
      class="text-lg-left text-center mb-4"
    >
      Search Results
    </p>
    <b-row v-if="listings.length">
      <b-col lg="3" md="4" v-for="listing in listings" :key="listing.id">
        <Listing
          :img-src="listing.oneimageurl"
          :type="listing.businesstype"
          :name="listing.title"
          :price="listing.price"
          :beds="listing.bedrooms"
          :baths="listing.bathrooms"
          :toilets="listing.toilets"
          :address="listing.address"
          :old-price="listing.oldPrice"
          :listing="listing"
          class="mb-lg-0 mb-5"
        />
      </b-col>
    </b-row>
    <Loader v-else />
    <!--    <p-->
    <!--      style="font-size: 2.25em; letter-spacing: -0.05em"-->
    <!--      class="text-lg-left text-center mb-4"-->
    <!--    >-->
    <!--      Similar Results-->
    <!--    </p>-->
    <!--    <b-row v-if="listings.length">-->
    <!--      <b-col lg="3" md="4" v-for="listing in listings" :key="listing.id">-->
    <!--        <Listing-->
    <!--          :img-src="listing.oneimageurl"-->
    <!--          :type="listing.businesstype"-->
    <!--          :name="listing.name"-->
    <!--          :price="listing.price"-->
    <!--          :beds="listing.bedrooms"-->
    <!--          :baths="listing.bathrooms"-->
    <!--          :toilets="listing.toilets"-->
    <!--          :address="listing.address"-->
    <!--          :old-price="listing.oldPrice"-->
    <!--          class="mb-lg-0 mb-5"-->
    <!--        />-->
    <!--      </b-col>-->
    <!--    </b-row>-->
    <!--    <Loader v-else />-->
  </b-container>
</template>

<script>
import Controls from "./components/controls";
import Listing from "./components/listing";

export default {
  components: {
    Controls,
    Listing,
  },
  data() {
    return {
      listings: [],
    };
  },
  mounted() {
    this.search();
  },
  methods: {
    search() {
      if (this.$route.query.search_param) {
        if (this.$route.query.search_param === "advanced") {
          const data = {
            businesstype: localStorage.getItem("businesstype"),
            cityid: localStorage.getItem("cityid"),
            type: localStorage.getItem("type"),
            price: localStorage.getItem("price"),
          };
          this.apiPost(this.ROUTES.advancedSearch, data).then((res) => {
            if (res.data.success) {
              this.listings = res.data.properties;
            }
          });
        } else {
          const data = {
            string: this.$route.query.search_param,
          };
          this.apiPost(this.ROUTES.wildSearch, data).then((res) => {
            if (res.data.success) {
              this.listings = res.data.result;
            }
          });
        }
      }
    },
  },
};
</script>

<style>
#search-result {
  margin-top: 10em;
}
</style>
