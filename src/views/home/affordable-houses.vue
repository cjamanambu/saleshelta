<template>
  <div id="new-listings" class="mt-5 mb-lg-4 mb-3" style="padding-bottom: 5em">
    <p
      style="font-size: 2.25em; letter-spacing: -0.05em"
      class="text-lg-left text-center mb-4"
    >
      Affordable Houses
    </p>
    <b-row v-if="listings.length">
      <b-col lg="3" md="4" v-for="listing in listings" :key="listing.id">
        <Listing
          :img-src="listing.oneimageurl"
          :type="listing.businesstype"
          :name="listing.name"
          :price="listing.price"
          :beds="listing.bedrooms"
          :baths="listing.bathrooms"
          :toilets="listing.toilets"
          :address="listing.address"
          :old-price="listing.oldPrice"
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
      listings: [
        {
          id: 0,
          oneimageurl: require("@/assets/images/listing-1.svg"),
          businesstype: "5",
          name: "Duplex",
          price: "35000000",
          address: "No 4 Amurie Babale street, Maitama....",
          bedrooms: "2",
          bathrooms: "2",
          toilets: "2",
        },
        {
          id: 1,
          oneimageurl: require("@/assets/images/listing-2.svg"),
          businesstype: "7",
          name: "Semi-Detached Bungalow",
          price: "35000000",
          address: "No 4 Amurie Babale street, Maitama....",
          bedrooms: "2",
          bathrooms: "2",
          toilets: "2",
        },
        {
          id: 2,
          oneimageurl: require("@/assets/images/listing-3.svg"),
          businesstype: "7",
          name: "Studio Apartment",
          price: "8000000",
          address: "No 4 Amurie Babale street, Maitama....",
          bedrooms: "2",
          bathrooms: "2",
          toilets: "2",
        },
        {
          id: 3,
          oneimageurl: require("@/assets/images/listing-4.svg"),
          businesstype: "6",
          name: "Luxurious Villa",
          price: "1900000",
          oldPrice: "2500000",
          address: "No 2 Musa yahaya street, Asokoro....",
          bedrooms: "2",
          bathrooms: "2",
          toilets: "2",
        },
      ],
    };
  },
};
</script>

<style></style>
