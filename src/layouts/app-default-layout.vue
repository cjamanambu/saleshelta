<template>
  <div>
    <Header />
    <transition name="fade" mode="out-in">
      <slot />
    </transition>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/header";
import Footer from "./components/footer";

export default {
  components: {
    Header,
    Footer,
  },
};
</script>
