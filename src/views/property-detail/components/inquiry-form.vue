<template>
  <b-card
    class="p-lg-4 p-3"
    :class="[seeMore ? 'inquiry-form-longer' : 'inquiry-form']"
    no-body
  >
    <p style="font-size: 1.4375em; letter-spacing: -0.05em">
      More about this property
    </p>
    <form @submit.prevent="submit">
      <b-form-group>
        <b-form-input
          style="height: 3.75em; border-radius: 50px; padding-left: 2em"
          placeholder="Fullname"
          :class="{ 'form-error': submitted && $v.fullname.$error }"
          v-model.trim="$v.fullname.$model"
        />
        <div class="invalid-prompt" v-if="submitted && !$v.fullname.required">
          <p class="invalid-text">Your full name is required</p>
        </div>
      </b-form-group>
      <b-form-group>
        <b-form-input
          style="height: 3.75em; border-radius: 50px; padding-left: 2em"
          placeholder="Email"
          :class="{ 'form-error': submitted && $v.email.$error }"
          v-model.trim="$v.email.$model"
        />
        <div class="invalid-prompt" v-if="submitted && !$v.email.required">
          <p class="invalid-text">Your email is required</p>
        </div>
        <div class="invalid-prompt" v-if="submitted && !$v.email.email">
          <p class="invalid-text">Your email must be a valid email</p>
        </div>
      </b-form-group>
      <b-form-group>
        <b-form-input
          style="height: 3.75em; border-radius: 50px; padding-left: 2em"
          placeholder="Phone"
          :class="{ 'form-error': submitted && $v.phone.$error }"
          v-model.trim="$v.phone.$model"
        />
        <div class="invalid-prompt" v-if="submitted && !$v.phone.required">
          <p class="invalid-text">Your phone number is required</p>
        </div>
      </b-form-group>

      <b-form-textarea
        class="mt-3"
        style="border-radius: 10px; height: 9em"
        no-resize
        placeholder="Message"
        :class="{ 'form-error': submitted && $v.message.$error }"
        v-model.trim="$v.message.$model"
      />
      <div class="invalid-prompt" v-if="submitted && !$v.message.required">
        <p class="invalid-text">Your message is required</p>
      </div>
      <transition name="slide-fade">
        <p
          v-if="!seeMore"
          class="mt-3"
          style="
            font-family: 'Gotham Light', sans-serif;
            font-size: 0.6875em;
            letter-spacing: -0.05em;
          "
        >
          By proceeding, you consent to receive calls and texts at the number
          you provided, including marketing by autodialer and prerecorded and
          artificial voice,...
        </p>
      </transition>
      <transition name="slide-fade">
        <p v-if="!seeMore" class="see-more" @click="seeMore = !seeMore">
          See more
        </p>
      </transition>
      <transition name="slide-fade">
        <p
          v-if="seeMore"
          class="mt-3"
          style="
            font-family: 'Gotham Light', sans-serif;
            font-size: 0.6875em;
            letter-spacing: -0.05em;
          "
        >
          By proceeding, you consent to receive calls and texts at the number
          you provided, including marketing by autodialer and prerecorded and
          artificial voice. By proceeding, you consent to receive calls and
          texts at the number you provided, including marketing by autodialer
          and prerecorded and artificial voice, and email, from
          <span style="color: #0033ea">myshelta.com</span> about your inquiry
          but not as a condition of any purchase; this applies regardless of
          whether you check, or leave un-checked, any box above. You also agree
          to our Terms of Use, and to our Privacy Policy regarding the
          information relating to you. Msg/data rates may apply. <br />
          <span style="color: #0033ea">
            This consent applies even if you are on a corporate, state or small
            holding.
          </span>
        </p>
      </transition>
      <transition name="slide-fade">
        <p v-if="seeMore" class="see-more" @click="seeMore = !seeMore">
          See less
        </p>
      </transition>
      <b-button
        v-if="!apiSubmitting"
        type="submit"
        class="secondary-btn btn-block mt-3"
        style="border-radius: 60px; height: 2.8125em"
      >
        Submit
      </b-button>
      <b-button
        v-else
        type="submit"
        class="secondary-btn btn-block mt-3"
        style="border-radius: 60px; height: 2.8125em"
        disabled
      >
        Submitting...
      </b-button>
    </form>
  </b-card>
</template>

<script>
import { required, email } from "vuelidate/lib/validators";
export default {
  validations: {
    phone: { required },
    fullname: { required },
    email: { required, email },
    message: { required },
  },
  data() {
    return {
      seeMore: false,
      phoneOptions: {
        showSearchBox: true,
        showFlags: true,
        showDialCodeInList: true,
        width: "270px",
        disabled: true,
      },
      phone: null,
      fullname: null,
      email: null,
      message: null,
      submitted: null,
    };
  },
  methods: {
    submit() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.apiInvalidForm();
      } else {
        const data = {
          fullname: this.fullname,
          email: this.email,
          phone: this.phone,
          pin: this.$route.params.property,
          message: this.message,
        };
        this.apiPost(this.ROUTES.requestSale, data)
          .then((res) => {
            const { success } = res.data;
            if (success) {
              this.apiSuccess("Thank You", "We will get back to you shortly");
            }
          })
          .finally(() => this.formReset());
      }
    },
    formReset() {
      this.phone = null;
      this.fullname = null;
      this.email = null;
      this.message = null;
      this.submitted = false;
      this.$v.reset();
    },
  },
};
</script>

<style>
.inquiry-form {
  border-radius: 10px;
  max-height: 700px;
  max-width: 400px;
  transition: 0.2s ease;
}
.form-error {
  border-color: red;
}
.invalid-prompt {
  height: 1em;
  text-align: center;
  margin: 0;
}
.invalid-text {
  font-size: 0.8em;
  margin-top: 0.3em;
  color: #ff0000;
  opacity: 0.6;
}
.inquiry-form-longer {
  border-radius: 10px;
  max-height: 800px;
  max-width: 400px;
  transition: 0.2s ease;
}
.see-more {
  font-size: 0.6875em;
  color: #0033ea;
  text-decoration: underline;
  transition: 0.5s ease;
}
.see-more:hover {
  cursor: pointer;
  opacity: 0.8;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.01s ease;
}
.slide-fade-leave-active {
  transition: all 0.01s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
  /* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
