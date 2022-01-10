import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import apiService from "@/services/api.service";
import innerLoader from "@/layouts/components/inner-loader";

import BootstrapVue from "bootstrap-vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import "font-awesome/css/font-awesome.min.css";
Vue.component(
  "VueFontawesome",
  require("vue-fontawesome-icon/VueFontawesome.vue").default
);
Vue.component("Loader", innerLoader);
Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.mixin(apiService);

import("@/assets/css/main.css");

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
