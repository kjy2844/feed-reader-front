<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <feed-list></feed-list>
    <news-list></news-list>
  </div>
</template>

<script>
import FeedList from "./components/FeedList.vue";
import NewsList from "./components/NewsList.vue";

export default {
  name: "App",
  components: {
    FeedList,
    NewsList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
