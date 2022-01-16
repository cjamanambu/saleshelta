<template>
  <div class="loader_container">
    <div class="loader">
      <img src="@/assets/images/blue-logo.svg" alt="" />
    </div>
  </div>
</template>

<script>
export default {
  name: "PageLoader",
}
</script>

<style scoped>
.loader_container {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
}
.loader img {
  height: 5rem;
  width: 5rem;
}
@keyframes rotate {
  100% {
    transform: rotate(1turn);
  }
}

.loader {
  position: relative;
  z-index: 0;
  width: 155px;
  height: 155px;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  padding: 2rem;
  box-sizing: border-box;
}
.loader::after {
  content: "";
  position: absolute;
  z-index: -1;
  left: 3px;
  top: 3px;
  width: 150px;
  height: 150px;
  background: white;
  border-radius: 50%;
  box-sizing: border-box;
}
.loader::before {
  content: "";
  position: absolute;
  z-index: -2;
  left: -50%;
  top: -50%;
  width: 200%;
  height: 200%;
  background-color: #505050;
  background-repeat: no-repeat;
  background-size: 50% 50%, 50% 50%;
  background-position: 0 0, 100% 0, 100% 100%, 0 100%;
  background-image: linear-gradient(#00c9e8, #00c9e8),
  linear-gradient(#0033EA, #0033EA), linear-gradient(#6f34bc, #6f34bc),
  linear-gradient(#fff, #fff);
  animation: rotate 1.5s linear infinite;
  box-sizing: border-box;
}
/* Loader ends */
</style>