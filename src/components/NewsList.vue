<template>
  <div @scroll="onScroll">
    <h1>News List</h1>
    <news-item v-for="article in allNews" :key="article.link" :article="article"></news-item>
    <div>loading</div>
    <!-- <button @click="moreNews()">more articles</button> -->
  </div>
</template>

<script>
import NewsItem from "./NewsItem";

export default {
  name: "news-list",
  components: {
    NewsItem,
  },
  data() {
    return {
      news: [],
    };
  },
  created() {
    this.$store.dispatch("retrieveNews");
  },
  computed: {
    allNews() {
      return this.$store.getters.allNews;
    },
  },
  mounted() {
    window.addEventListener("scroll", this.onScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    moreNews() {
      this.$store.dispatch("moreNews");
    },
    onScroll() {
      if (
        window.scrollY + document.documentElement.clientHeight >=
        document.documentElement.scrollHeight
      ) {
        if (this.$store.state.loaded) {
          this.moreNews();
        }
      }
    },
  },
};
</script>

<style scoped></style>
