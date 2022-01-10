<template>
  <b-card
    id="blog-post"
    :img-src="blog.images[0].imageurl"
    img-alt="Card image"
    img-top
    class="d-inline-block w-100"
    img-height="240"
  >
    <p style="opacity: 0.8; letter-spacing: -0.05em">
      {{ blog.title | stringToHtml }}
    </p>
    <div class="d-flex justify-content-between">
      <p class="bp-action" @click="readArticle(blog.code)">Read article</p>
      <p class="bp-author d-flex">
        <b-img
          fluid
          class="mr-2"
          style="height: 1.2em"
          :src="require('@/assets/images/blog-avatar.svg')"
        />
        Admin
      </p>
    </div>
  </b-card>
</template>

<script>
const maxTitleLength = 35;
export default {
  props: {
    blog: {
      type: Object,
      required: true,
    },
  },
  methods: {
    readArticle(code) {
      location.href = `https://myshelta.com/blog/${code}`;
    },
  },
  filters: {
    stringToHtml(str) {
      let parser = new DOMParser();
      let doc = parser.parseFromString(str, "text/html");
      let text = doc.body.innerText;
      if (text.length > maxTitleLength) {
        text = text.substring(0, maxTitleLength);
        text += "...";
      }
      return text;
    },
  },
};
</script>

<style>
#blog-post {
  box-shadow: 6px 6px 22px rgba(0, 0, 0, 0.15);
}
.bp-action {
  font-size: 0.9em;
  letter-spacing: -0.05em;
  color: #0033ea;
  transition: 0.5s ease;
}
.bp-action:hover {
  cursor: pointer;
  opacity: 0.8;
}
.bp-author {
  font-size: 0.9em;
  letter-spacing: -0.05em;
  color: #6c6c6c;
}
</style>
