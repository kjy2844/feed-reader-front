<template>
	<div>
		<h1>Feed List</h1>
		<feed-item
			v-for="feed in allFeeds"
			:key="feed.id"
			:feed="feed"
		></feed-item>
	</div>
</template>

<script>
import FeedItem from "./FeedItem";

export default {
	name: "feed-list",
	components: {
		FeedItem,
	},
	data() {
		return {
			feeds: [],
		};
	},
	created() {
		this.$store.dispatch("retrieveFeeds");
	},
	computed: {
		allFeeds() {
			return this.$store.getters.allFeeds;
		},
	},
};
</script>

<style scoped></style>
