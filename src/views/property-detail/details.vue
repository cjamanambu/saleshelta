<template>
  <div class="details">
    <vueper-slides fade autoplay :duration="6000" fixed-height="502px">
      <vueper-slide :image="require('@/assets/images/property-details.svg')">
        <template #content>
          <div class="action-wrapper d-lg-flex d-none">
            <div
              v-if="activeAction === 'pic'"
              @click="toggleAction('pic')"
              class="dp-action-active"
            >
              <b-img fluid :src="require('@/assets/images/details-pic.svg')" />
            </div>
            <div v-else @click="toggleAction('pic')" class="dp-action">
              <b-img fluid :src="require('@/assets/images/details-pic.svg')" />
            </div>
            <div
              v-if="activeAction === 'vid'"
              @click="toggleAction('vid')"
              class="dp-action-active"
            >
              <b-img fluid :src="require('@/assets/images/details-vid.svg')" />
            </div>
            <div v-else @click="toggleAction('vid')" class="dp-action">
              <b-img fluid :src="require('@/assets/images/details-vid.svg')" />
            </div>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
    <div
      class="d-flex align-items-start justify-content-between flex-lg-row flex-column mt-5"
    >
      <div>
        <p style="font-size: 1.875em; letter-spacing: -0.05em">Duplex</p>
        <p style="font-size: 2.5em; letter-spacing: -0.05em">
          <span style="font-family: 'Gotham-medium', sans-serif">
            &#8358; 35 </span
          >m
        </p>
        <div class="d-flex justify-content-between" style="max-width: 20em">
          <div class="text-center">
            <b-img :src="require('@/assets/images/bed.svg')" />
            <p class="" style="font-size: 1.125em; letter-spacing: -0.05em">
              <span style="font-family: 'Gotham-medium', sans-serif">3</span>
              beds
            </p>
          </div>
          <div class="text-center">
            <b-img :src="require('@/assets/images/bathroom.svg')" />
            <p class="" style="font-size: 1.125em; letter-spacing: -0.05em">
              <span style="font-family: 'Gotham-medium', sans-serif">2</span>
              baths
            </p>
          </div>
          <div class="text-center">
            <b-img :src="require('@/assets/images/parking.svg')" />
            <p style="font-size: 1.125em; letter-spacing: -0.05em">
              <span style="font-family: 'Gotham-medium', sans-serif">
                1,307
              </span>
              sqft
            </p>
          </div>
        </div>
        <p style="font-size: 1.25em; letter-spacing: -0.05em">
          No 4 Amurie Babale street, Maitama Abuja
        </p>
        <div class="d-flex flex-wrap mb-5" style="max-width: 40em">
          <DetailFeature />
          <DetailFeature />
          <DetailFeature />
          <DetailFeature />
          <DetailFeature />
          <DetailFeature />
          <DetailFeature />
          <DetailFeature />
          <DetailFeature />
          <DetailFeature />
          <DetailFeature />
          <DetailFeature />
        </div>
        <b-button
          class="primary-btn px-5 mb-5"
          style="border-radius: 40px"
          @click="$refs['private-visit'].show()"
        >
          Request a private showing
        </b-button>
      </div>
      <div class="d-flex align-items-center">
        <div class="mr-4">
          <p
            class="mt-4 mb-0"
            style="font-size: 0.875em; letter-spacing: -0.05em"
          >
            Developers
          </p>
          <p
            style="
              font-family: 'Gotham-medium', sans-serif;
              font-size: 1.5em;
              letter-spacing: -0.05em;
            "
          >
            Brains and Hammers
          </p>
        </div>
        <b-img fluid :src="require('@/assets/images/brains-hammer.svg')" />
      </div>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import DetailFeature from "./components/detail-feature";
export default {
  components: {
    VueperSlides,
    VueperSlide,
    DetailFeature,
  },
  data: () => ({
    activeAction: "pic",
  }),
  methods: {
    toggleAction(action) {
      this.activeAction = action;
    },
  },
};
</script>

<style>
.details {
  position: relative;
}
.dp-action-active {
  background: rgba(80, 80, 80, 0.5);
  display: inline-block;
  padding: 1em;
  transition: 0.5s ease;
}
.dp-action:hover {
  cursor: pointer;
  background: rgba(0, 0, 0, 0.5);
}
.dp-action {
  background: rgba(0, 0, 0, 0.5);
  display: inline-block;
  padding: 1em;
}
.pv-input {
  border-radius: 50px;
  height: 3.75em;
}
.action-wrapper {
  position: absolute;
  top: 85%;
}
</style>
