<template>
	<div class="arriveWrap">
		<div class="arriveHead">
			<ul class="headList">
				<li @click="changeActive" :class="{liActive:isActive}">推荐专柜</li>
				<li @click="changeActive" :class="{liActive:!isActive}">支持预约</li>
			</ul>
			<div class="iconWrap iconLeft"><i class="iconfont">&#xe60b;</i></div>
			<div class="iconWrap iconRight"><i class="iconfont">&#xe60c;</i></div>
		</div>
		<div class="arriveMenu">
			<ul class="arrmenuList">
				<li @click="changeShow">{{this.$store.state.cityName}}<img  :class="{className2:isShopshow}" src="../assets/images/xia.png" /></li>
				<li @click="changeBrand">{{this.$store.state.brandName}}<img src="../assets/images/xia.png" /></li>
				<li>附近<span class="nearBy">></span></li>
			</ul>
		</div>
		<shop-list v-show="isShopshow" v-bind:store_list="store_list"></shop-list>
		<area-list v-show="!isShopshow" v-bind:list="list"></area-list>
		
		<!--<area-list v-show="!isShopshow" v-bind:list="list"></area-list>-->
	</div>
</template>

<script>
	import Vue from "vue";
  	import axios from "axios";
	import { Lazyload } from 'mint-ui';
	import shopList from "./shopList.vue";
	import areaList from "./areaList.vue";
	Vue.use(Lazyload);
	
	export default{
		data(){
			return {
				isActive:true,
				isShopshow:true,
				isBrandshow:false,
				store_list:[],
				list:[],
				className2:"rotate2",
				className1:"rotate1"
			}
		},
		components:{
			shopList:shopList,
			areaList:areaList
		},
		methods:{
			changeActive(){
				this.isActive=!this.isActive;
			},
			changeShow(){
				this.isShopshow=!this.isShopshow;
				this.className="rotate1";
				this.$store.commit("changeAllcityshow",true);
			},
			changeBrand(){
				this.isShopshow=!this.isShopshow;
//				this.$store.commit("changePlacelist",this.list);
				this.$store.commit("changeAllcityshow",false);
			}
		},
		mounted(){
//			门店
			axios.get('/tse')
		    	.then((res)=>{
		      	this.store_list=res.data.data.store_list;
//		      	console.log(res.data.data.store_list);
		      	this.$store.commit("changeStorelist",this.store_list);
	      	});
//	      	城市
	      	axios.get("http://api.restful.5lux.com.cn/good/filter_city?is_bespeak=0")
	      	.then((res)=>{
//		      	console.log(res);
		      	this.list=res.data.data.list;
		      	this.$store.commit("changePlacelist",this.list);
	      	});
//	      	品牌
	      	axios.get("http://api.restful.5lux.com.cn/good/filter_brand")
	      	.then((res)=>{
		      	console.log(res.data.data.list);
		      	this.$store.commit("changeBrandlist",res.data.data.list);
//		      	this.list=res.data.data.list;
//		      	this.$store.commit("changePlacelist",this.list);
	      	});
		}
		
	}
</script>

<style>
	.rotate1{
		transform:rotate(-180deg);
		transition: all 0.5s; 
	}
	.rotate2{
		transform:rotate(0deg);
		transition: all 0.5s; 
	}
</style>