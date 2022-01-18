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
      <form
        @submit.prevent="advancedSearch"
        class="advanced-search-form px-1 pt-5"
      >
        <b-form-group v-slot="{ ariaDescribedby }">
          <b-form-radio-group
            v-model="selected"
            :options="options"
            :aria-describedby="ariaDescribedby"
            name="radio-inline"
          />
        </b-form-group>
        <b-form-group>
          <label class="mt-3" for="input-live">Location</label>
          <b-form-select
            id="input-live"
            class="advanced-form-input"
            :options="locations"
            v-model="location"
          />
        </b-form-group>
        <b-form-group class="mt-4">
          <label for="type">Property Type</label>
          <b-form-select
            id="type"
            placeholder="Property Type"
            class="advanced-form-input"
            :options="propertyTypes"
            v-model="propertyType"
          />
        </b-form-group>
        <b-form-group>
          <label for="type">Price</label>
          <b-form-input
            id="type"
            class="advanced-form-input"
            v-model="price"
            type="number"
          />
        </b-form-group>
        <b-button
          type="submit"
          class="mt-4 mb-4 secondary-btn w-100"
          style="height: 3.75em; border-radius: 60px"
        >
          Search
        </b-button>
      </form>
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
        { text: "Distress", value: "6" },
        { text: "Mortgage", value: "7" },
        { text: "Outright", value: "5" },
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
    advancedSearch() {
      localStorage.setItem("businesstype", this.selected);
      localStorage.setItem("cityid", this.location);
      localStorage.setItem("type", this.propertyType);
      localStorage.setItem("price", this.price);
      this.$router.push({
        name: "search",
        query: { search_param: "advanced" },
      });
    },
    fetchLocations() {
      this.apiGet(this.ROUTES.locations).then((res) => {
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
.advanced-search-form {
  font-family: "Gotham", sans-serif;
}
</style>
