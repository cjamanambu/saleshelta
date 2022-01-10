<template>
  <div id="blog-list" class="mt-4">
    <p class="bl-title mb-5">Shelta Blog</p>
    <b-row v-if="blogs.length">
      <b-col
        class="mb-4"
        lg="3"
        md="4"
        v-for="(blog, index) in blogs"
        :key="index"
      >
        <BlogPost v-if="index < 4" :blog="blog" class="mb-lg-0 mb-4" />
      </b-col>
    </b-row>
    <Loader v-else />
  </div>
</template>

<script>
import BlogPost from "./components/blog-post";
export default {
  components: {
    BlogPost,
  },
  data() {
    return {
      blogs: [],
    };
  },
  mounted() {
    this.fetchBlogs();
  },
  methods: {
    fetchBlogs() {
      this.apiGet(this.ROUTES.blogs).then((res) => {
        if (res.data.success) {
          this.blogs = res.data.blogs;
        }
      });
    },
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
