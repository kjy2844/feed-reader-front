import Vue from "vue";
import VueRouter from "vue-router";
// import routes from "./routes";
import App from "./App.vue";
import { store } from "./store/store.js";

Vue.config.productionTip = false;
Vue.use(VueRouter);

const router = new VueRouter({
	// routes,
	// mode: "history",
});

new Vue({
	render: (h) => h(App),
	store: store,
	router: router,
}).$mount("#app");
