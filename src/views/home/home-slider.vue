<template>
  <div id="home-slider">
    <div class="slider d-lg-block d-none">
      <vueper-slides fade autoplay :duration="6000">
        <vueper-slide
          class="v-slide"
          :image="require('@/assets/images/home-header-1.svg')"
        >
          <template #content>
            <HomeSearch />
          </template>
        </vueper-slide>
        <vueper-slide
          class="v-slide"
          :image="require('@/assets/images/home-header-2.svg')"
        >
          <template #content>
            <HomeSearch />
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
    <div class="d-lg-none mt-n3">
      <vueper-slides
        fade
        autoplay
        :duration="6000"
        :arrows="false"
        :bullets="false"
        fixed-height="500px"
      >
        <vueper-slide
          class="v-slide"
          :image="require('@/assets/images/home-header-1.svg')"
        >
          <template #content>
            <MobileHomeSearch />
          </template>
        </vueper-slide>
        <vueper-slide
          class="v-slide"
          :image="require('@/assets/images/home-header-2.svg')"
        >
          <template #content>
            <MobileHomeSearch />
          </template>
        </vueper-slide>
      </vueper-slides>
    </div>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import HomeSearch from "./components/home-search.vue";
import MobileHomeSearch from "./components/mobile-home-search.vue";
export default {
  components: { VueperSlides, VueperSlide, HomeSearch, MobileHomeSearch },
};
</script>

<style>
#home-slider {
  margin-top: 7em;
}
.slider {
  position: relative;
}
.v-slide {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
