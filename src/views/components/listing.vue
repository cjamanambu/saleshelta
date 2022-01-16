<template>
  <b-card
    id="listing"
    :img-src="imgSrc"
    img-alt="Card image"
    img-top
    class="d-inline-block w-100"
    @click="viewListing"
    img-height="250"
  >
    <b-card-text>
      <p style="font-size: 1.25em; letter-spacing: -0.05em">{{ name }}</p>
      <div v-if="type === '6'">
        <p
          style="
            letter-spacing: -0.05em;
            color: #91958f;
            text-decoration: line-through;
            margin-bottom: -0.2em;
          "
        >
          &#8358;
          {{ parseFloat(listing.price).toLocaleString() }}
        </p>
        <p
          style="
            font-family: 'Gotham-medium', sans-serif;
            font-size: 1.375em;
            letter-spacing: -0.05em;
          "
        >
          &#8358;
          {{ parseFloat(listing.discountedprice).toLocaleString() }}
        </p>
      </div>

      <p
        v-if="type === '5'"
        style="
          font-family: 'Gotham-medium', sans-serif;
          font-size: 1.375em;
          letter-spacing: -0.05em;
        "
      >
        &#8358;
        {{ parseFloat(price).toLocaleString() }}
      </p>
      <p
        v-if="type === '7'"
        style="
          font-family: 'Gotham-medium', sans-serif;

          letter-spacing: -0.05em;
        "
      >
        <span style="font-size: 1.375em">
          &#8358;
          {{ parseFloat(listing.installmentpayment).toLocaleString() }}
        </span>
        <span style="font-size: 0.9em">{{ listing.modeofpayment }}</span>

        <span style="font-family: 'Gotham Book', sans-serif"></span>
      </p>
      <div class="d-flex justify-content-between">
        <div class="text-center">
          <b-img :src="require('@/assets/images/bed.svg')" />
          <p
            style="
              font-family: 'Gotham-medium', sans-serif;
              font-size: 1.125em;
              letter-spacing: -0.05em;
            "
          >
            {{ beds }}
            <span style="font-family: 'Gotham', sans-serif">beds</span>
          </p>
        </div>
        <div class="text-center">
          <b-img :src="require('@/assets/images/bathroom.svg')" />
          <p
            style="
              font-family: 'Gotham-medium', sans-serif;
              font-size: 1.125em;
              letter-spacing: -0.05em;
            "
          >
            {{ baths }}
            <span style="font-family: 'Gotham', sans-serif">baths</span>
          </p>
        </div>
        <div class="text-center">
          <b-img :src="require('@/assets/images/toilet.svg')" />
          <p
            style="
              font-family: 'Gotham-medium', sans-serif;
              font-size: 1.125em;
              letter-spacing: -0.05em;
            "
          >
            {{ toilets }}
            <span style="font-family: 'Gotham', sans-serif">toilets</span>
          </p>
        </div>
      </div>
      <p style="letter-spacing: -0.05em; font-size: 1.125em">
        {{ address }}
      </p>
      <div v-if="type === '5'" class="badge outright-badge">
        Outright Purchase
      </div>
      <div v-else-if="type === '7'" class="badge mortgage-badge">Mortgage</div>
      <div v-else class="badge distress-badge">Distress Sale</div>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    imgSrc: {},
    name: {
      type: String,
    },
    type: {
      type: String,
    },
    price: {
      type: String,
    },
    oldPrice: {
      type: String,
    },
    address: {
      type: String,
    },
    beds: {
      type: String,
    },
    baths: {
      type: String,
    },
    toilets: {
      type: String,
    },
    pin: {},
    listing: {
      type: Object,
    },
  },
  methods: {
    viewListing() {
      this.$router.push({
        name: "property-details",
        params: { property: this.listing.pin },
      });
    },
  },
};
</script>

<style>
#listing {
  transition: 0.5s ease;
  font-family: "Gotham", sans-serif;
  border: none;
}
#listing:hover {
  cursor: pointer;
  box-shadow: 6px 6px 22px rgba(0, 0, 0, 0.15);
}
.outright-badge {
  background: rgba(255, 177, 0, 0.5);
  color: #6c6c6c;
  font-size: 1.125em;
  letter-spacing: -0.05em;
  display: inline-block;
  padding: 0.5em 1em;
  border: 0.01em solid #ffb100;
  border-radius: 50px;
}
.mortgage-badge {
  background: rgba(47, 198, 67, 0.5);
  color: #6c6c6c;
  font-size: 1.125em;
  letter-spacing: -0.05em;
  display: inline-block;
  padding: 0.5em 1em;
  border: 0.01em solid #2fc643;
  border-radius: 50px;
}
.distress-badge {
  background: rgba(236, 86, 86, 0.5);
  color: #6c6c6c;
  font-size: 1.125em;
  letter-spacing: -0.05em;
  display: inline-block;
  padding: 0.5em 1em;
  border: 1px solid #ea0000;
  border-radius: 50px;
}
.badge:hover {
  cursor: pointer;
}
</style>
