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
};
</script>
