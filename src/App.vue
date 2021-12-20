<template>
  <div>
    <AppLayout id="app">
      <router-view />
    </AppLayout>
  </div>
</template>

<script>
import AppLayout from "./layouts/app-layout";

export default {
  components: { AppLayout },
  mounted() {
    console.log("App mounted.");
    const token = localStorage.getItem("token");
    console.log(token);
  },
};
</script>

<style lang="scss">
$primary: #0033ea;
$secondary: #ffffff;
$yellow: #ffb100;
@font-face {
  font-family: "Gotham-bold";
  src: local("Gotham-bold"),
    url("./assets/fonts/shelta_fonts/GothamBold.otf") format("truetype");
}
@font-face {
  font-family: "Gotham";
  src: local("Gotham"),
    url("./assets/fonts/shelta_fonts/GothamBook.otf") format("truetype");
}
@font-face {
  font-family: "Gotham-medium";
  src: local("Gotham-medium"),
    url("./assets/fonts/shelta_fonts/GothamMedium.otf") format("truetype");
}
#app {
  font-family: "Gotham";
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #333;
  background-color: #fff;
}
</style>
