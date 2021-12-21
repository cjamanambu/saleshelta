<template>
  <b-container fluid id="property-details">
    <Controls />
    <b-row>
      <b-col xl="8">
        <Details />
      </b-col>
      <b-col xl="4" class="mt-lg-0 mt-5 mb-lg-0 mb-5"> <InquiryForm /> </b-col>
    </b-row>
  </b-container>
</template>

<script>
import Controls from "../components/controls";
import Details from "./details";
import InquiryForm from "./components/inquiry-form";
export default {
  components: {
    Controls,
    Details,
    InquiryForm,
  },
};
</script>

<style>
#property-details {
  margin-top: 10em;
}
</style>
