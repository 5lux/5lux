<template>
	<div class="hotSearch">
		<!--未加载出来之前块-->
		<div class="bacImg" v-if="isBacshow"><img src="../assets/images/Star_Ring_loading-01-05.png" /></div>
		<!--加载出来之后块-->
		<div class="searchBox" v-show="!isBacshow">
			<!--搜索块-->
			<div class="searchB">
				<div class="searchLeft"><i class="iconfont">&#xe60b;</i><input  type="text" placeholder="VIP线下内购会" v-model="inputMsg" @keyup="searchgood" /></div>
				<router-link to="/nearbyShop" tag="div" class="searchCancle">取消</router-link>
			</div>
			<!--推荐块-->
			<div class="suggestionWrap" v-show="!isSearchresult">
				<div class="searchSugges">
					<div class="suggesTop">
						<p>热门搜索</p>
						<ul>
							<li v-for="val in hot_search">{{val.keyword}}</li>
						</ul>
					</div>
					<div class="suggesBottom">
						<p class="bottomTip">--为您推荐--</p>
						<ul class="bottomList">
							<li v-for="val in recommend_products" @click="pushId(val.product_id)">
								<img v-lazy="val.product_thumb" />
								<p class="p1">{{val.brand_name}}</p>
								<p class="p2"><span>￥</span>{{val.product_price}}</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<!--搜索块-->
			<div class="searchGoods" v-show="isSearchresult">
				<div class="haveNo" v-show="isHaveno">暂无搜索结果</div>
				<div class="searchGoodspos" v-show="!isHaveno">
					<div class="searchGtop" v-if="isFlagshipshow">
						<p class="p1">"{{inputMsg}}"相关旗舰店</p>
						<p class="p2">进店></p>
					</div>
					<div v-if="isStoreshow" class="searchGtop" v-for="val in store_info">
						<p class="p1">搜索"{{inputMsg}}"相关专柜</p>
						<p class="p2">约{{val.store_total}}家门店</p>
					</div>
					
					<ul class="searchGbottom">
						<li v-for="val in other_info">
							<p class="p1">{{val.label}}</p>
							<p class="p2">约{{val.total}}件商品</p>
						</li>
					</ul>
				</div>
			</div>
			
		</div>
		
	</div>
</template>

<script>
	import Vue from "vue";
	import axios from "axios";
	import { Lazyload } from 'mint-ui';
	Vue.use(Lazyload);
	export default{
		data(){
			return{
				isBacshow:true,
				hot_search:[],
				recommend_products:[],
				isSearchresult:false,
				inputMsg:"",
				brandStore_info:[],
				store_info:[],
				other_info:[],
				isHaveno:true,
				isFlagshipshow:false,
				isStoreshow:false
				
			}
		},
		methods:{
			searchgood(){
				axios.get("http://t1.restful.5lux.com.cn/rpcsearchnew/getkey?pid=2&search="+this.inputMsg)
				.then((res)=>{
					this.isSearchresult=true;
					console.log(res);
					if(res.data.data==null||res.data.data.store_info.length==0){
						this.isHaveno=true;
						this.isStoreshow=false;
					}else{
						this.isHaveno=false;
						this.isStoreshow=true;
						if(res.data.data.store_info.length==1){
							this.isFlagshipshow=false;
							this.store_info=res.data.data.store_info;
						}else{
							this.isFlagshipshow=true;
							this.brandStore_info.push(res.data.data.store_info[0]);
							this.store_info=[];
							this.store_info.push(res.data.data.store_info[1]);
						}
						this.other_info=res.data.data.other_info;
						
					}
				});
			},
			pushId(product_id){
				this.$router.push({name:'myDetail',query:{product_id:product_id}});
			}
		},
		mounted(){
			axios.get("http://api.restful.5lux.com.cn/search/recommend_list")
			.then((res)=>{
				this.isBacshow=false;
				this.hot_search=res.data.data.hot_search;
				this.recommend_products=res.data.data.recommend_products;
				console.log(res.data.data);
			})
		},
		updated(){
			if(this.inputMsg==""){
				this.isSearchresult=false;
			}
		}
	}
	
</script>
