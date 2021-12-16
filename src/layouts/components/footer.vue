<template>
  <div>
    <footer class="footer_holder">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-6 col-lg-8">
            <div class="feedback_holder">
              <div class="footer_logo">
                <img src="@/assets/images/logo-yellow.svg" alt="" />
              </div>
              <div class="news_letter">
                <h6>Sign up to our newsletters</h6>
                <p>
                  Be one of the first to know about product launches, promotions
                  and more.
                </p>
                <div class="newsletter_holder">
                  <input
                    v-model="email"
                    class="form-control"
                    type="text"
                    placeholder="Enter your email"
                  />
                  <button
                    @click.prevent="newsLetter()"
                    class="btn newsletter_btn"
                  >
                    <img src="@/assets/images/arrow-black.svg" alt="feedback" />
                    <i
                      class="fa fa-spinner fa-spin ml-3 f-12 btn-loader"
                      v-if="loader"
                    ></i>
                  </button>
                </div>
                <div v-if="errors.length">
                  <ul class="error-ul">
                    <li
                      v-for="error in errors"
                      :key="error.error"
                      class="errorMessage"
                    >
                      {{ error }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-lg-4">
            <div class="links_holder">
              <div class="row">
                <div class="col-md-6">
                  <ul class="ulist">
                    <p>COMPANY</p>
                    <li>
                      <router-link to="/blogs" class="router-link-active">
                        Blog
                      </router-link>
                    </li>
                    <li>
                      <router-link to="/aboutus" class="router-link-active"
                        >About us</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/tenant" class="router-link-active"
                        >Tenant</router-link
                      >
                    </li>
                    <li>
                      <router-link to="/landlord" class="router-link-active"
                        >Landlord</router-link
                      >
                    </li>
                    <li>
                      <a href="https://myshelta.com/careers/">Careers</a>
                      <!-- <router-link to="/career" class="router-link-active"></router-link> -->
                    </li>
                    <li>
                      <router-link to="/shelta" class="router-link-active"
                        >Property management</router-link
                      >
                    </li>
                  </ul>
                </div>
                <div class="col-md-6">
                  <ul class="ulist">
                    <p>SUPPORT</p>
                    <li>
                      <router-link to="/faq" class="router-link-active">
                        Help & FAQ
                      </router-link>
                    </li>
                    <li>
                      <a href="mailto:hello@myshelta.com">
                        hello@myshelta.com
                      </a>
                    </li>
                    <li>
                      <a href="sheltaoffice@gmail.com">
                        sheltaoffice@gmail.com
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://api.whatsapp.com/send?phone=+2348061796909"
                      >
                        (+234) 0806 179 6909
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <div class="footer_bottom">
      <div class="footer_bottom_holder">
        <h6>
          &copy;{{ year }} A product of
          <img class="abl-logo" src="@/assets/images/abella-logo.svg" alt="" />
        </h6>
        <div class="social-icon-div">
          <a
            href="https://www.facebook.com/myshelta"
            class="fa fa-facebook"
          ></a>
          <a
            href="https://www.instagram.com/myshelta"
            class="fa fa-instagram"
          ></a>
          <a href="https://www.twitter.com/myshelta" class="fa fa-twitter"></a>
          <a
            href="https://www.linkedin.com/company/myshelta"
            class="fa fa-linkedin"
          ></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: "",
      email: "",
      errors: [],
      loader: false,
    };
  },

  mounted() {
    this.year = new Date().getFullYear();
    // console.log('Year in full', this.year);
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
$primary: #0033ea;
$white: #ffffff;
$yellow: #ffb100;
$black: #000000;
// $fontFamily: url("https://fonts.googleapis.com/css2?family=Gotham:wght@100&display=swap");
@font-face {
  font-family: "Gotham-bold";
  src: local("Gotham-bold"),
    url("../../assets/fonts/shelta_fonts/GothamBold.otf") format("truetype");
}
@font-face {
  font-family: "Gotham";
  src: local("Gotham"),
    url("../../assets/fonts/shelta_fonts/GothamBook.otf") format("truetype");
}
@font-face {
  font-family: "Gotham-medium";
  src: local("Gotham-medium"),
    url("../../assets/fonts/shelta_fonts/GothamMedium.otf") format("truetype");
}

a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
  color: inherit;
}

.footer_holder {
  margin: 20px 30px 30px 30px;
}

.feedback_holder {
  text-align: left;
}
.links_holder {
  text-align: left;
  padding-top: 5rem;
}

.news_letter {
  margin-top: 25px;
  h6 {
    font-family: Gotham;
    font-style: normal;
    font-weight: 500;
    font-size: 30px;
    line-height: 37px;
    letter-spacing: -0.05em;
    color: $primary;
    margin-bottom: 0;
  }
  p {
    font-family: Gotham;
    font-style: normal;
    font-weight: 300;
    font-size: 14px;
    line-height: 37px;
    letter-spacing: -0.05em;
    color: $black;
  }
}

.newsletter_holder {
  position: relative;
  input {
    border-top: 0;
    width: 57%;
    border-left: 0;
    border-right: 0;
    border-bottom: 1px solid #cabfbf;
    box-shadow: none;
    border-radius: 0;
    outline: none;

    font-family: Gotham;
    font-style: normal;
    font-weight: normal;
    line-height: 25px;
    font-size: 13px;
    color: rgba(0, 0, 0, 0.49);
  }
  .newsletter_btn {
    position: absolute;
    background: $yellow;
    border-radius: 0;
    box-shadow: none;
    outline: none;
    bottom: 8%;
    left: 49.4%;
  }
}

.errorHeader {
  font-family: Gotham;
  font-weight: normal;
  font-size: 17px;
  list-style: none;
  text-align: center;
  margin-bottom: 0;
  // margin-left: 1em;
}
.errorMessage {
  font-family: Gotham;
  font-weight: normal;
  color: #dc3545;
  font-size: 14px;
  list-style: none;
  text-align: center;
  padding-inline-start: 0;
}
.error-ul {
  padding-inline-start: 0;
}

.ulist {
  list-style-type: none;
  padding-left: 0;
  p {
    font-family: Gotham;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 25px;
    letter-spacing: -0.05em;
    text-transform: uppercase;
    color: $black;
    margin-bottom: 0;
    padding-left: 5px;
  }
  li {
    font-family: Gotham;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: -0.05em;
    color: $black;
    margin: 6px;
  }
}

.footer_bottom {
  background-color: $primary;
}
.footer_bottom_holder {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 30px;
  h6 {
    font-family: Gotham;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 42px;
    letter-spacing: -0.05em;
    padding-top: 11px;
    color: $white;
  }
}
.abl-logo {
  margin-bottom: 4px;
}

.fa-facebook,
.fa-instagram,
.fa-twitter,
.fa-linkedin {
  padding: 15px;
  font-size: 30px;
  width: 13.55px !important;
  height: 13.55px !important;
  text-align: center;
  text-decoration: none;
  margin: 15px 2px 5px 2px;
  position: relative;
}

.fa:hover {
  opacity: 0.7;
}

.fa-facebook {
  // background: #3b5998;
  color: white;
  border: 1px solid #fff;
  border-radius: 3px;
}
.fa-facebook::before {
  position: absolute;
  left: 33%;
  top: 23%;
  font-size: 1.2rem;
}

.fa-twitter {
  // background: #55acee;
  color: white;
  border: 1px solid #fff;
  border-radius: 3px;
}
.fa-twitter::before {
  position: absolute;
  left: 26%;
  top: 24%;
  font-size: 1.2rem;
}

.fa-linkedin {
  // background: #007bb5;
  color: white;
  border: 1px solid #fff;
  border-radius: 3px;
}
.fa-linkedin::before {
  position: absolute;
  left: 27%;
  top: 20%;
  font-size: 1.2rem;
}

.fa-instagram {
  // background: #125688;
  border: 1px solid #fff;
  color: white;
  border-radius: 3px;
}
.fa-instagram::before {
  position: absolute;
  left: 27%;
  top: 20%;
  font-size: 1.2rem;
}

::-webkit-input-placeholder {
  /* Edge */
  font-family: Gotham;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: -0.05em;
  color: rgba(0, 0, 0, 0.49);
}

:-ms-input-placeholder {
  /* Internet Explorer 10-11 */
  font-family: Gotham;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: -0.05em;
  color: rgba(0, 0, 0, 0.49);
}

::placeholder {
  font-family: Gotham;
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 25px;
  letter-spacing: -0.05em;
  color: rgba(0, 0, 0, 0.49);
}

@media only screen and (max-width: 599px) {
  .footer_bottom_holder {
    padding: 0 6px;
  }
  .footer_logo {
    img {
      width: 22%;
    }
  }
  .news_letter {
    h6 {
      font-size: 22px;
    }
  }
  .newsletter_holder {
    input {
      width: 100%;
    }
    .newsletter_btn {
      left: 77%;
    }
  }
  .ulist {
    padding-left: 0;
  }
}

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
  .footer_logo {
    img {
      width: 17%;
    }
  }
  .news_letter {
    h6 {
      font-size: 26px;
    }
  }
  .newsletter_holder {
    input {
      width: 100%;
    }
    .newsletter_btn {
      left: 81%;
    }
  }

  .ulist {
    padding-left: 0;
  }
  .links_holder {
    padding-top: 0px;
  }
}
</style>
