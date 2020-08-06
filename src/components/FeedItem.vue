<template>
  <div class="feed-item" @click="openDetail">
    <div>Feed Item</div>
    <div>{{title}}</div>
    <div>{{metadata}}</div>
    <div>{{summary}}</div>
    <img :src="visual" alt="fail" />
  </div>
</template>

<script>
export default {
  name: "feed-item",
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
  methods: {
    openDetail() {
      alert(this.id);
    },
  },
};
</script>

<style scoped>
.feed-item {
  width: auto;
  margin: 40px;
  padding: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;

  font-size: 1.5rem;

  box-shadow: 4px 4px 10px 1px gray;
}
</style>