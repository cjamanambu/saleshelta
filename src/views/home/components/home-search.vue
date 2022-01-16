<template>
  <div id="home-search">
    <p id="home-search-title">Discovers houses for sale near you</p>
    <p id="home-search-subtitle">
      Find homes for sale near you. View photos, open house information and
      property details.
    </p>
    <form @submit.prevent="search" id="home-search-wrapper">
      <b-form-input
        id="home-search-input"
        placeholder="Location, property type..."
        size="lg"
        v-model="searchTerm"
      />
      <b-button class="secondary-btn home-search-btn" type="submit">
        <i class="fa fa-search" style="font-size: 2em"></i>
      </b-button>
    </form>
    <p id="home-search-advanced" @click="$refs['advanced-search'].show()">
      Advanced Search <i class="fa fa-chevron-down ml-2" />
    </p>
    <b-modal ref="advanced-search" hide-footer size="lg" centered>
      <div class="advanced-search-form px-4 py-2">
        <b-form-group v-slot="{ ariaDescribedby }">
          <b-form-radio-group
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            name="radio-inline"
          />
        </b-form-group>
        <label class="mt-3" for="input-live">Location</label>
        <b-form-select
          id="input-live"
          class="advanced-form-input"
          :options="locations"
          v-model="location"
        />
        <div class="mt-4 d-flex">
          <b-form-group class="w-100 mr-4">
            <label for="type">Property Type</label>
            <b-form-select
              id="type"
              placeholder="Property Type"
              class="advanced-form-input"
              :options="propertyTypes"
              v-model="propertyType"
            />
          </b-form-group>
          <b-form-group class="w-100">
            <label for="type">Price</label>
            <b-form-input
              id="type"
              class="advanced-form-input"
              v-model="price"
              type="number"
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
      location: null,
      locations: [],
      propertyType: null,
      propertyTypes: [],
      price: 1000000,
    };
  },
  mounted() {
    this.fetchLocations();
    this.fetchPropertyTypes();
  },
  methods: {
    search() {
      this.$router.push({
        name: "search",
        query: { search_param: this.searchTerm },
      });
    },
    fetchLocations() {
      this.apiGet(this.ROUTES.locations).then((res) => {
        console.log(res);
        this.locations = [{ text: "Please select a location", value: null }];
        if (res.data.success) {
          const { cities } = res.data;
          cities.forEach((city) => {
            this.locations.push({ text: city.name, value: city.id });
          });
        }
      });
    },
    fetchPropertyTypes() {
      this.apiGet(this.ROUTES.propertyTypes).then((res) => {
        console.log(res);
        this.propertyTypes = [
          { text: "Please select a property type", value: null },
        ];
        if (res.data.success) {
          const { propertytypes } = res.data;
          propertytypes.forEach((type) => {
            this.propertyTypes.push({ text: type.type, value: type.id });
          });
        }
      });
    },
  },
};
</script>

<style>
#home-search {
  //margin-bottom: 10%;
  text-align: center;
}
#home-search-title {
  color: #ffffff;
  font-size: 3.75em;
  letter-spacing: -0.05em;
}
#home-search-subtitle {
  color: #ffffff;
  font-size: 1.25em;
  letter-spacing: -0.05em;
}
#home-search-wrapper {
  margin-top: 2em;
  position: relative;
  display: inline-block;
}
#home-search-input {
  margin: 0 auto;
  width: 33.5em;
  height: 5em;
  border-radius: 3.75em;
  padding-left: 2.375em;
  color: #c4c4c4;
}
.home-search-btn {
  position: absolute;
  padding: 1.5em 2.5em 1.5em 2.5em;
  border-radius: 3.75em;
  top: 8%;
  left: 81.5%;
}
#home-search-advanced {
  font-size: 1.125em;
  margin-top: 2em;
  letter-spacing: -0.05em;
  transition: 0.5s ease;
  color: #ffffff;
}
#home-search-advanced:hover {
  cursor: pointer;
  opacity: 0.6;
}
.advanced-form-input {
  height: 3.75em;
  border-radius: 60px;
  padding-left: 2em;
}
.advanced-form-spin {
  height: 3.75em;
  border-radius: 60px;
}
.advanced-search-form {
  font-family: "Gotham", sans-serif;
}
</style>
