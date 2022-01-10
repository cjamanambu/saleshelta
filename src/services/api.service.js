import { ROUTES, API } from "@/api";

export default {
  data() {
    return {
      apiBusy: false,
      ROUTES,
    };
  },
  methods: {
    apiGet(url) {
      this.apiBusy = true;
      return new Promise((resolve) => {
        API.get(`${url}`)
          .then((res) => resolve(res))
          .catch((err) => console.log({ err }))
          .finally(() => (this.apiBusy = false));
      });
    },
  },
};
