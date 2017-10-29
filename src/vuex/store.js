//状态管理
import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/products.js"
Vue.use(Vuex);

const store=new Vuex.Store({
	state:{
		tabIndex:0,
		store_list:[],
		list:[],
		brand_list:[],
		isAllcityshow:false,
		cityName:"所有城市",
		brandName:"所有品牌",
		correctUser:[13912345689,18912345567],
		correctPass:[123456,123456],
	},
	modules: {
	    products,
	},
	getters:{
		
	},
	mutations:{
		changeIndex(state,payload){
			state.tabIndex=payload;
		},
		changeStorelist(state,payload){
			state.store_list=payload;
		},
		changePlacelist(state,payload){
			state.list=payload;
		},
		changeBrandlist(state,payload){
			state.brand_list=payload;
		},
		changeAllcityshow(state,payload){
			state.isAllcityshow=payload;
		},
		changeCityname(state,payload){
			state.cityName=payload;
		},
		changeBrandname(state,payload){
			state.brandName=payload;
		}
	}
});
export default store;
