<template>
  <div id="blog-list" class="mt-4">
    <p class="bl-title mb-5">Shelta Blog</p>
    <div class="d-flex justify-content-between flex-lg-row flex-column">
      <BlogPost class="mr-lg-4 mb-lg-0 mb-4" />
      <BlogPost class="mr-lg-4 mb-lg-0 mb-4" />
      <BlogPost class="mr-lg-4 mb-lg-0 mb-4" />
      <BlogPost />
    </div>
  </div>
</template>

<script>
import BlogPost from "./components/blog-post";
export default {
  components: {
    BlogPost,
  },
};
</script>

<style>
#blog-list {
  margin-bottom: 5em;
}
.bl-title {
  font-size: 2.25em;
  letter-spacing: -0.05em;
}
</style>
