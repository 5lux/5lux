//状态管理
import Vue from "vue";
import Vuex from "vuex";
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
		isShopshow:true,
		is_bespeak:"0",
		region_id:"",
		brand_id:""
	},
	mutations:{
		changeBrandId(state,payload){
			state.brand_id=payload;
		},
		changeRegionId(state,payload){
			state.region_id=payload;
		},
		changeBespeak(state,payload){
			state.is_bespeak=payload;
		},
		changeShopshow(state,payload){
			state.isShopshow=payload;
		},
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
