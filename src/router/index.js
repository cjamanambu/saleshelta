import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/home/index"),
    meta: {
      title: "Shelta Sales - Property Financing & Management Company",
    },
  },
  {
    path: "/search",
    name: "search",
    component: () => import("@/views/search"),
    meta: {
      title:
        "Search Results - Shelta Sales - Property Financing & Management Company",
    },
  },
  {
    path: "/property-details/:property",
    name: "property-details",
    component: () => import("@/views/property-detail/index"),
    meta: {
      title:
        "Property Details - Shelta Sales - Property Financing & Management Company",
    },
  },
  {
    path: "/property-details/:property/:realtorID",
    name: "property-details",
    component: () => import("@/views/property-detail/index"),
    meta: {
      title:
        "Property Details - Shelta Sales - Property Financing & Management Company",
    },
  },
  {
    path: "/faqs",
    name: "faqs",
    component: () => import("@/views/faq"),
    meta: {
      title: "FAQs - Shelta Sales - Property Financing & Management Company",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { x: 0, y: 0, behavior: "smooth" };
    }
  },
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  return next();
});

export default router;
