import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);
axios.defaults.baseURL = "http://localhost:8080";

export const store = new Vuex.Store({
	state: {
		feeds: [
			//			{
			//				id: 1,
			//				title:
			//					"Mulan is heading to Disney Plus on September 4th for $30",
			//				metadata: "The Verge",
			//				summary:
			//					"Disney’s live-action adaptation of Mulan will be released on Disney+ on September 4th for $29.99 the company announced today.",
			//				visual:
			//					"https://lh3.googleusercontent.com/Ez20k84CK1tDlyKJRtoyoLy60hXF1UrfZbLxHLLPnyci6EWFix_ghw30fAlJuincvuUch6mbpM9EhMKu7aSjcuFFqTw=s130",
			//			},
			//			{
			//				id: 2,
			//				title: "27-inch iMac gets a major update",
			//				metadata: "Apple Newsroom",
			//				summary:
			//					"Apple updates the 27-inch iMac with new chips, finally makes SSDs standard Engadget",
			//				visual:
			//					"https://lh3.googleusercontent.com/Fz39aYpbmWRecg8J8xz5_fawupvXR9u9vxsCobQ5R4x_nzuYOeXO_WVm301YRdF182bOU8XoXIjE8gPTr51Vi8SU=s149",
			//			},
		],
	},
	getters: {
		nextId(state) {
			return state.feeds.length;
		},
		allFeeds(state) {
			return state.feeds;
		},
	},
	mutations: {
		addFeed(state, feed) {
			state.feeds.push({
				id: feed.id,
				title: feed.title,
				metadata: feed.metadata,
				summary: feed.summary,
				visual: feed.visual,
			});
		},
		retrieveFeeds(state, feeds) {
			state.feeds = feeds;
		},
	},
	actions: {
		async addFeed(context, feed) {
			try {
				const response = await axios.post("/add", {
					id: feed.id,
					title: feed.title,
					metadata: feed.metadata,
					summary: feed.summary,
					visual: feed.visual,
				});
				context.commit("addFeed", response.data);
			} catch (error) {
				console.log(error);
			}
		},
		async retrieveFeeds(context) {
			try {
				const response = await axios.get("/all");
				context.commit("retrieveFeeds", response.data);
			} catch (error) {
				console.log(error);
			}
		},
	},
});
