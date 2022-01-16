<template>
  <div class="details">
    <vueper-slides
      ref="main"
      fade
      autoplay
      :duration="6000"
      fixed-height="502px"
      :bullets="false"
      @slide="
        $refs.mini.goToSlide($event.currentSlide.index, {
          emit: false,
        })
      "
    >
      <vueper-slide
        v-for="(image, index) in images"
        :key="index"
        :image="image"
      >
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
    <vueper-slides
      class="no-shadow thumbnails mt-3 d-lg-block d-none"
      ref="mini"
      @slide="
        $refs.main.goToSlide($event.currentSlide.index, {
          emit: false,
        })
      "
      :visible-slides="images.length - images.length / 2"
      fixed-height="75px"
      :bullets="false"
      :touchable="false"
      :gap="1.2"
      :arrows="false"
    >
      <vueper-slide
        v-for="(image, i) in images"
        :key="i"
        :image="image"
        @click.native="$refs.main.goToSlide(i)"
      >
      </vueper-slide>
    </vueper-slides>
    <vueper-slides
      class="no-shadow thumbnails mt-3 d-lg-none"
      ref="mini"
      @slide="
        $refs.main.goToSlide($event.currentSlide.index, {
          emit: false,
        })
      "
      :visible-slides="images.length - images.length / 1.25"
      autoplay
      :duration="6000"
      fixed-height="75px"
      :bullets="false"
      :touchable="false"
      :gap="1.2"
      :arrows="false"
    >
      <vueper-slide
        v-for="(image, i) in images"
        :key="i"
        :image="image"
        @click.native="$refs.main.goToSlide(i)"
      >
      </vueper-slide>
    </vueper-slides>
    <b-row>
      <b-col lg="8">
        <div>
          <p style="font-size: 1.875em; letter-spacing: -0.05em">
            {{ property.title }}
          </p>
          <div v-if="property.businesstype === '6'">
            <p
              style="
                font-size: 1.5em;
                letter-spacing: -0.05em;
                color: #91958f;
                margin-bottom: 0;
              "
            >
              <span
                style="
                  font-family: 'Gotham-medium', sans-serif;
                  text-decoration: line-through;
                "
              >
                &#8358; {{ parseFloat(property.price).toLocaleString() }}
              </span>
            </p>
            <p style="font-size: 2.5em; letter-spacing: -0.05em">
              <span style="font-family: 'Gotham-medium', sans-serif">
                &#8358;
                {{ parseFloat(property.discountedprice).toLocaleString() }}
              </span>
            </p>
          </div>
          <p
            v-if="property.businesstype === '5'"
            style="font-size: 2.5em; letter-spacing: -0.05em"
          >
            <span style="font-family: 'Gotham-medium', sans-serif">
              &#8358; {{ parseFloat(property.price).toLocaleString() }}
            </span>
          </p>
          <p
            v-if="property.businesstype === '7'"
            style="letter-spacing: -0.05em"
          >
            <span
              style="font-family: 'Gotham-medium', sans-serif; font-size: 2.5em"
            >
              &#8358;
              {{ parseFloat(property.installmentpayment).toLocaleString() }}
            </span>
            <span style="font-size: 1.25em">{{ property.modeofpayment }}</span>
          </p>
          <div class="d-flex justify-content-between" style="max-width: 40em">
            <div class="text-center">
              <b-img :src="require('@/assets/images/bed.svg')" />
              <p class="" style="font-size: 1.125em; letter-spacing: -0.05em">
                <span style="font-family: 'Gotham-medium', sans-serif">
                  {{ property.bedrooms }}
                </span>
                beds
              </p>
            </div>
            <div class="text-center">
              <b-img :src="require('@/assets/images/bathroom.svg')" />
              <p class="" style="font-size: 1.125em; letter-spacing: -0.05em">
                <span style="font-family: 'Gotham-medium', sans-serif">
                  {{ property.bathrooms }}
                </span>
                baths
              </p>
            </div>
            <div class="text-center">
              <b-img :src="require('@/assets/images/toilet.svg')" />
              <p class="" style="font-size: 1.125em; letter-spacing: -0.05em">
                <span style="font-family: 'Gotham-medium', sans-serif">
                  {{ property.toilets }}
                </span>
                toilets
              </p>
            </div>
            <div class="text-center">
              <b-img :src="require('@/assets/images/parking.svg')" />
              <p style="font-size: 1.125em; letter-spacing: -0.05em">
                <span style="font-family: 'Gotham-medium', sans-serif">
                  {{ parseFloat(property.squarefootage).toLocaleString() }}
                </span>
                sqft
              </p>
            </div>
          </div>
          <p
            style="font-size: 1.25em; letter-spacing: -0.05em; margin-bottom: 0"
          >
            {{ property.address }}
          </p>
          <p style="font-size: 1em; letter-spacing: -0.05em">
            {{ property.city + ", " + property.state }}
          </p>
          <div class="mt-4">
            <p style="letter-spacing: -0.05em">{{ property.description }}</p>
            <div class="d-flex justify-content-between">
              <p>Type</p>
              <p style="letter-spacing: -0.05em">
                {{ property.typename }}
              </p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Sub-type</p>
              <p style="letter-spacing: -0.05em">
                {{ property.subtypename }}
              </p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Category</p>
              <p style="letter-spacing: -0.05em">
                {{ property.businesstypename }}
              </p>
            </div>
            <div
              v-if="property.businesstype === '6'"
              class="d-flex justify-content-between"
            >
              <p>Sale Discount</p>
              <p style="letter-spacing: -0.05em">
                {{
                  ((parseFloat(property.price) -
                    parseFloat(property.discountedprice)) /
                    parseFloat(property.price)) *
                  100
                }}
                %
              </p>
            </div>
            <div
              v-if="property.businesstype === '7'"
              class="d-flex justify-content-between"
            >
              <p>Mortgage Initial Payment</p>
              <p style="letter-spacing: -0.05em">
                &#8358; {{ parseFloat(property.initialprice).toLocaleString() }}
              </p>
            </div>
            <div
              v-if="property.businesstype === '7'"
              class="d-flex justify-content-between"
            >
              <p>Mortgage Duration</p>
              <p style="letter-spacing: -0.05em">
                {{ property.duration }} years
              </p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Occupancy</p>
              <p style="letter-spacing: -0.05em">
                {{ property.status }}
              </p>
            </div>
            <div class="d-flex justify-content-between">
              <p>Status</p>
              <p
                v-if="property.verified === '1'"
                style="letter-spacing: -0.05em"
              >
                Verified
              </p>
            </div>
          </div>
          <div class="d-flex flex-wrap mb-5">
            <DetailFeature
              v-for="(feature, index) in facilities"
              :key="index"
              :feature="feature"
            />
          </div>
        </div>
      </b-col>
      <b-col lg="4">
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
              {{ property.developer }}
            </p>
          </div>
        </div>
      </b-col>
    </b-row>
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
    images: [],
    facilities: [],
  }),
  mounted() {
    console.log(this.property);
    this.facilities = JSON.parse(this.property.facilities);
    this.images = [this.property.oneimageurl, ...this.property.images];
  },
  props: {
    property: {
      type: Object,
      required: true,
    },
  },
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

<style>
/*.thumbnails {*/
/*  margin: auto;*/
/*  max-width: 300px;*/
/*}*/

/*.thumbnails .vueperslide {*/
/*  box-sizing: border-box;*/
/*  border: 1px solid #fff;*/
/*  transition: 0.3s ease-in-out;*/
/*  opacity: 0.7;*/
/*  cursor: pointer;*/
/*}*/

/*.thumbnails .vueperslide--active {*/
/*  box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);*/
/*  opacity: 1;*/
/*  border-color: #000;*/
/*}*/
</style>
