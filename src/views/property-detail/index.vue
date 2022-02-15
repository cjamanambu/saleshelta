<template>
  <b-container fluid id="property-details">
    <Controls />
    <b-row>
      <b-col xl="8">
        <Loader v-if="jquery.isEmptyObject(property)" class="mb-5" />
        <Details :property="property" v-else />
      </b-col>
      <b-col xl="4" class="mt-lg-0 mt-5 mb-lg-0 mb-5"> <InquiryForm /> </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Controls from "../components/controls";
import Details from "./details";
import InquiryForm from "./components/inquiry-form";
import jquery from "jquery";
export default {
  mounted() {
    this.fetchProperty();
    this.handleAffiliate();
  },
  components: {
    Controls,
    Details,
    InquiryForm,
  },
  data() {
    return {
      property: {},
      jquery,
    };
  },
  methods: {
    fetchProperty() {
      const { property } = this.$route.params;
      const url = `${this.ROUTES.property}/${property}`;
      this.apiGet(url).then((res) => {
        this.property = res.data.property;
      });
    },
    handleAffiliate() {
      const { realtorID } = this.$route.params;
      if (realtorID) {
        let existingRealtorID = this.$cookies.get("realtor-id");
        if (
          !existingRealtorID ||
          (existingRealtorID && existingRealtorID !== realtorID)
        ) {
          this.$cookies.set("realtor-id", realtorID, "3d", "/", "myshelta.com");
        }
      }
      console.log(this.$cookies.get("realtor-id"));
    },
  },
};
</script>

<style>
#property-details {
  margin-top: 10em;
}
</style>
