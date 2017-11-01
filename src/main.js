
import Vue from "vue";

import "./styles/App.scss";

import router from "./router/index.js";

import MintUI from "mint-ui";

import "mint-ui/lib/style.css";

import store from "./vuex/store.js";

new Vue({ 
	"el":"#App",
	router,
	store
});


