import { ROUTES, API } from "@/api";

export default {
  data() {
    return {
      apiSubmitting: false,
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
    apiPost(url, data) {
      this.apiSubmitting = true;
      return new Promise((resolve) => {
        API.post(`${url}`, data)
          .then((res) => resolve(res))
          .catch((err) => console.log({ err }))
          .finally(() => (this.apiSubmitting = false));
      });
    },
    apiInvalidForm() {
      this.$notify({
        title: "Invalid Form Submission",
        text: "Please fill in all fields correctly",
        type: "error",
      });
    },
    apiSuccess(title, text) {
      this.$notify({
        title,
        text,
        type: "success",
      });
    },
  },
};
