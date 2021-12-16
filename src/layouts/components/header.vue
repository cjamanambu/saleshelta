<template>
  <div class="nav_holder">
    <div class="blue_nav">
      <div class="blue_child">
        <p>
          <a href="mailto:hello@myshelta.com">
            <img src="@/assets/images/envelop-white.svg" alt="" />
            hello@myshelta.com
          </a>
        </p>
        <p>
          <a href="https://api.whatsapp.com/send?phone=+2348061796909">
            <img src="@/assets/images/whatsApp-white.svg" alt="" />
            (+234) 0806 179 6909
          </a>
        </p>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg">
      <a class="navbar-brand" @click="routeTo()">
        <img src="@/assets/images/logo-yellow.svg" alt="logo" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <!-- <span class="navbar-toggler-icon"></span> -->
        <img src="@/assets/images/menu-icon.svg" alt="menu" />
      </button>

      <div
        class="collapse navbar-collapse justify-content-end"
        id="navbarSupportedContent"
      >
        <form class="form-inline my-2 my-lg-0">
          <ul class="navbar-nav m-auto">
            <li class="nav-item active">
              <a class="nav-link">
                <router-link to="/shelta" class="router-link-active">
                  Home
                </router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/aboutus" class="router-link-active">
                  About us
                </router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/contactus" class="router-link-active">
                  Contact us
                </router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/blogs" class="router-link-active">
                  Blog
                </router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link">
                <router-link to="/propertylist" class="router-link-active">
                  Properties
                </router-link>
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                How it works
              </a>
              <div
                class="dropdown-menu"
                id="bg_color"
                aria-labelledby="navbarDropdown"
              >
                <a class="dropdown-item" href="#">
                  <router-link to="/tenant" class="router-link-active">
                    Tenant
                  </router-link>
                </a>
                <a class="dropdown-item" href="#">
                  <router-link to="/landlord" class="router-link-active">
                    Landlord
                  </router-link>
                </a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Facility Management</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                <router-link to="/faq" class="router-link-active">
                  FAQs
                </router-link>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="https://myshelta.com/careers/">
                Careers
              </a>
            </li>
            <div class="register_btn">
              <button v-if="loggedIn" class="btn">
                <router-link to="/login">Login</router-link>
              </button>
              <button class="btn">
                <router-link to="/signup">Sign up</router-link>
              </button>
            </div>
          </ul>
        </form>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      loggedIn: "",
    };
  },
  mounted() {
    if (localStorage.getItem("shelta")) {
      this.loggedIn = false;
    } else {
      this.loggedIn = true;
    }
  },
  methods: {
    routeTo: function () {
      this.$router.push("/shelta");
    },
  },
};
</script>

<style lang="scss" scoped>
$primary: #0033ea;
$secondary: #ffffff;
$yellow: #ffb100;
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

.blue_nav {
  // z-index: 1000;
  // position: fixed;
  // top: 0;
  background: blue;
  width: 100%;
  padding: 6px 20px;
}
a {
  color: inherit;
  text-decoration: none;
}
a:hover {
  text-decoration: none;
  color: inherit;
}

.navbar-brand {
  img {
    cursor: pointer;
  }
}

.blue_child {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin: 2px 10px;
  p {
    color: $secondary;
    font-family: Gotham;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 25px;
    letter-spacing: -0.05em;
    margin-bottom: 0;
    a {
      color: inherit;
      text-decoration: none;
    }
    a:hover {
      color: #e4dede;
    }
  }
}

.navbar-toggler:focus {
  outline: 1px solid $primary !important;
}

.nav_holder {
  // margin-bottom: 9rem;
  position: fixed;
  z-index: 2000;
  top: 0;
  width: 100%;
  nav {
    // position: fixed;
    width: 100%;
    // z-index: 1000;
    // top: 7%;
    background: $secondary;
    // box-shadow: 0 2px 4px 0 rgba(0,0,0,.2);
    box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.15);
  }
}

.register_btn {
  button:first-child {
    background: $yellow;
    color: $secondary;
    margin-right: 15px;
    font-family: Gotham;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.05em;
  }
  button:nth-child(2) {
    background: $primary;
    color: $secondary;
    font-family: Gotham;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    letter-spacing: -0.05em;
  }
}
.nav-link {
  font-family: Gotham;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: -0.05em;
  color: #000000;
}

// .router-link-active {
//   color: #8a8686;
//   font-size: 15px;
//   font-weight: bold;
//   text-decoration: none;
// }

@media screen and (min-device-width: 320px) and (max-device-width: 640px) and (-webkit-min-device-pixel-ratio: 1) {
}

@media screen and (min-device-width: 360px) and (max-device-width: 640px) and (-webkit-min-device-pixel-ratio: 1) {
}

@media only screen and (min-width: 991px) {
  .nav_holder {
    // margin-bottom: 6rem;
    width: 100%;
    margin-bottom: 9rem;
    height: fit-content;
    // position: fixed;
    // z-index: 2000;
    // top: 0;
  }
}

// @media only screen and (max-width: 789px) {
//   .shelta-img-div2 > img {
//     top: 12%;
//     position: absolute;
//     // left: 2.2rem;
//     // left: 27rem;
//   }
// }

@media only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (-webkit-min-device-pixel-ratio: 1) {
  .navbar-brand {
    img {
      width: 67%;
    }
  }
}
@media only screen and (max-width: 599px) {
  .navbar-brand {
    img {
      width: 70%;
    }
  }
  .blue_nav {
    padding: 6px 6px;
  }
  .blue_child {
    p {
      margin-bottom: 0;
      font-size: 10px;
    }
  }
  .nav_holder,
  nav {
    // top: 5% !important;
  }

  #bg_color {
    background: #a2b0e3 !important;
  }
}

// @media only screen and (max-width: 375px) {

//   .nav_holder, nav {
//     top: 4% !important;
//   }

// }

// @media only screen and (max-width: 414px) {
//   .ovarlay-logo-div > div[data-v-d9ae3272]:nth-child(2) {
//     top: 11%;
//     left: 36%;
//   }
// }
// @media only screen and (max-width: 375px) {
//   .ovarlay-logo-div > div[data-v-d9ae3272]:nth-child(2) {
//     top: 11%;
//     left: 35%;
//   }
// }
</style>
