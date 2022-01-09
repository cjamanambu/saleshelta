<template>
  <div>
    <PageLoader v-if="false" />
    <div v-else>
      <Header />
      <transition name="fade" mode="out-in">
        <slot />
      </transition>
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/footer";
import PageLoader from "./components/page-loader";

export default {
  components: {
    Header,
    Footer,
    PageLoader,
  },
};
</script>
