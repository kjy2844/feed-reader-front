<template>
  <div>
    <div>Feed Item</div>
    <div>{{title}}</div>
    <div>{{metadata}}</div>
    <div>{{summary}}</div>
    <img :src="visual" alt="fail" />
  </div>
</template>

<script>
export default {
  name: "feed-detail",
  props: {
    feed: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      id: this.feed.id,
      title: this.feed.title,
      metadata: this.feed.metadata,
      summary: this.feed.summary,
      visual: this.feed.visual,
    };
  },
};
</script>

<style scoped>
</style>