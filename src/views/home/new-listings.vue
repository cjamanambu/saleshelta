<template>
  <div
    id="new-listings"
    class="mt-5 mb-5"
    style="border-bottom: 0.01em solid #c4c4c4; padding-bottom: 5em"
  >
    <p
      style="font-size: 2.25em; letter-spacing: -0.05em"
      class="text-lg-left text-center mb-5"
    >
      New Listings
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
  </div>
</template>

<script>
import Listing from "@/views/components/listing";
export default {
  components: {
    Listing,
  },
  data() {
    return {
      listings: [],
    };
  },
  mounted() {
    this.fetchListings();
  },
  methods: {
    fetchListings() {
      this.apiGet(this.ROUTES.properties).then((res) => {
        console.log({ res });
        if (res.data.success) {
          this.listings = res.data.properties;
        }
      });
    },
  },
};
</script>

<style></style>
