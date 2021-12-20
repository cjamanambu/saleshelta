<template>
  <div id="home-search-mobile">
    <p id="home-search-title-mobile">Discovers houses for sale near you</p>
    <p id="home-search-subtitle-mobile">
      Find homes for sale near you. View photos, open house information and
      property details.
    </p>
    <form @submit.prevent="search" id="home-search-wrapper-mobile">
      <b-form-input
        id="home-search-input-mobile"
        placeholder="Location, type..."
        size="lg"
        v-model="searchTerm"
      />
      <b-button class="secondary-btn home-search-btn-mobile" type="submit">
        <i class="fa fa-search search"></i>
      </b-button>
    </form>
    <p
      id="home-search-advanced-mobile"
      @click="$refs['advanced-search'].show()"
    >
      Advanced Search <i class="fa fa-chevron-down ml-2" />
    </p>
    <b-modal ref="advanced-search" hide-footer size="lg" centered>
      <div class="advanced-search-form-mobile px-4 py-2">
        <b-form-group v-slot="{ ariaDescribedby }">
          <b-form-radio-group
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            name="radio-inline"
          />
        </b-form-group>
        <label class="mt-3" for="input-live">Location</label>
        <b-form-input
          id="input-live"
          placeholder="Location"
          class="advanced-form-input-mobile"
        />
        <div class="mt-4 d-flex">
          <b-form-group class="w-100 mr-4">
            <label for="type">Property Type</label>
            <b-form-input
              id="type"
              placeholder="Property Type"
              class="advanced-form-input-mobile"
            />
          </b-form-group>
          <b-form-group class="w-50 mr-2">
            <label for="type">Price</label>
            <b-form-input
              id="type"
              placeholder="No max"
              class="advanced-form-input-mobile"
            />
          </b-form-group>
          <b-form-group class="w-50">
            <label for="type" style="visibility: hidden">Price</label>
            <b-form-input
              id="type"
              placeholder="No max"
              class="advanced-form-input-mobile"
            />
          </b-form-group>
        </div>
        <b-button
          class="mt-4 mb-4 secondary-btn w-100"
          style="height: 3.75em; border-radius: 60px"
        >
          Search
        </b-button>
      </div>
    </b-modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
      selected: "distress",
      options: [
        { text: "Distress sale", value: "distress" },
        { text: "Mortgage", value: "mortgage" },
        { text: "Outright purchase", value: "outright" },
      ],
    };
  },
  methods: {
    search() {
      this.$router.push({
        name: "Search",
        query: { search_param: this.searchTerm },
      });
    },
  },
};
</script>

<style>
#home-search-mobile {
  width: 95%;
  text-align: center;
}
#home-search-title-mobile {
  color: #ffffff;
  font-size: 2.5em;
  margin-top: 0.6em;
  letter-spacing: -0.05em;
}
#home-search-subtitle-mobile {
  color: #ffffff;
  font-size: 1em;
  letter-spacing: -0.05em;
}
#home-search-wrapper-mobile {
  margin-top: 1em;
  width: 100%;
  position: relative;
  display: inline-block;
}
#home-search-input-mobile {
  margin: 0 auto;
  width: 100%;
  height: 3em;
  border-radius: 2em;
  padding-left: 1em;
  color: #c4c4c4;
}
.home-search-btn-mobile {
  position: absolute;
  padding: 0.7em 1.4em 0.7em 1.4em;
  border-radius: 1.5em;
  top: 10%;
  left: 75%;
}
.search {
  font-size: 1em;
}
@media only screen and (min-width: 300px) {
  .home-search-btn-mobile {
    left: 77%;
  }
}
@media only screen and (min-width: 340px) {
  .home-search-btn-mobile {
    left: 79%;
  }
}
@media only screen and (min-width: 380px) {
  .home-search-btn-mobile {
    left: 81%;
  }
}
@media only screen and (min-width: 400px) {
  .home-search-btn-mobile {
    left: 83%;
  }
}
@media only screen and (min-width: 430px) {
  .home-search-btn-mobile {
    left: 84.5%;
  }
}

#home-search-advanced-mobile {
  font-size: 0.8em;
  margin-top: 2em;
  letter-spacing: -0.05em;
  transition: 0.5s ease;
  color: #ffffff;
}
#home-search-advanced-mobile:hover {
  cursor: pointer;
  opacity: 0.6;
}
.advanced-form-input-mobile {
  height: 3.75em;
  border-radius: 60px;
  padding-left: 2em;
}
</style>
