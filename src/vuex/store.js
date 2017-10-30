//状态管理
import Vue from "vue";
import Vuex from "vuex";
import products from "./modules/products.js";

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
		brand_id:"",
		correctUser:[13912345689,18912345567],
		correctPass:[123456,123456],
		cartProduct:[
		[{brand: 'YOOX集合店',name: 'SCERVINO',pname:'SCERVINO', type:'铅灰色',num:1,price:456, img:'../assets/images/150606971460_750x586.jpg'},
		{brand: 'YOOX集合店',name: 'SCERVINO',pname:'SCERVINO', type:'铅灰色',num:5,price:146, img:'../assets/images/150606971460_750x586.jpg'},
		{brand: 'YOOX集合店',name: 'SCERVINO',pname:'SCERVINO', type:'铅灰色',num:4,price:56, img:'../assets/images/150606971460_750x586.jpg'}],
		[{brand: 'Zimmerli 齐穆里 旗舰店',name: 'SCERVINO',pname:'SCERVINO', type:'铅灰色',num:3,price:1789, img:'../assets/images/150606971460_750x586.jpg'},
		{brand: 'Zimmerli 齐穆里 旗舰店',name: 'SCERVINO',pname:'SCERVINO', type:'铅灰色',num:2,price:656, img:'../assets/images/150606971460_750x586.jpg'}]]

	},
	modules: {
	    products,
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
