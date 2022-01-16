<template>
  <div class="detail-feature">{{ feature }}</div>
</template>

<script>
export default {
  props: {
    feature: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.detail-feature {
  box-shadow: 3px 4px 7px 1px rgba(0, 0, 0, 0.15);
  border: 0.01em solid #cecece;
  display: inline-block;
  padding: 1em;
  border-radius: 10px;
  margin-right: 1em;
  margin-top: 1em;
}
</style>
