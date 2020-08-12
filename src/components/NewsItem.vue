<template>
  <div class="article" @click="openDetail">
    <div class="image" v-bind:style="{ backgroundImage: 'url(' + this.image + ')'}">
      <!-- <img :src="image" alt="fail" /> -->
    </div>

    <div class="text">
      <div id="title">{{title}}</div>
      <div id="author">{{author}}</div>
      <div id="content">{{content.substring(0, 300)}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "news-item",
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      title: this.article.title,
      link: this.article.link,
      author: this.article.author,
      content: this.article.content,
      image: this.article.image,
    };
  },
  methods: {
    openDetail() {
      alert(this.link);
    },
  },
};
</script>

<style scoped>
.article {
  width: auto;
  margin: 40px;
  padding: 20px;

  display: flex;
  align-items: stretch;

  box-shadow: 4px 4px 10px 1px gray;
}

.text {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#title {
  font-size: 1.7rem;
  font-weight: bold;
}

#author {
  font-size: 1.2rem;
  margin-bottom: 10px;
}

#content {
  font-size: 1.3rem;
}

.image {
  width: 100%;
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: cover;
}
</style>