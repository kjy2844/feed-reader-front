<template>
	<div class="article" @click="openDetail">
		<!-- <a :href="this.link" target="_blank" :title="this.title"> -->
		<div
			class="image"
			v-bind:style="{ backgroundImage: 'url(' + this.image + ')' }"
		>
			<!-- <img :src="image" alt="fail" /> -->
		</div>

		<div class="text">
			<div id="title">
				{{ title }}
			</div>
			<div id="author">{{ author }}</div>
			<div id="content">{{ content.substring(0, 300) }}</div>
		</div>

		<img @click="openHome" alt="Vue logo" src="../assets/home_icon.png" />

		<!-- </a> -->
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
			window.open(this.link, "_blank");
		},
		openHome() {
			window.open(this.article.broadcastStationItem.homelink, "_blank");
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

.article:hover {
	cursor: pointer;
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
	margin-right: 10px;
}

a,
a:link,
a:visited,
a:hover,
a:active {
	color: black;
	text-decoration: none;
}

img {
	width: 40px;
	height: 40px;
	opacity: 0;
	transition: all 0.6s linear;
}
img:hover {
	opacity: 1;
}
</style>
