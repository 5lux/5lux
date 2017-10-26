<template lang="html">
	<div class="container">
		<!--<my-search></my-search>-->
		<div class="banner" id="banner">
			<router-view></router-view>
		</div>
		<footer>
				<ul>
					<router-link to="/myPosition" tag="li">
						<i class="iconfont">&#xe606;</i>
						<span>首页</span>
					</router-link>
					<router-link to="/ShopIndexFashion" tag="li">
						<i class="iconfont">&#xe629;</i>
						<span>商城</span>
					</router-link>
					<router-link to="/myGoshop" tag="li">
						<i class="iconfont">&#xe60a;</i>
						<span>到店</span>
					</router-link>
					<router-link to="/myFaction" tag="li">
						<i class="iconfont">&#xe61d;</i>
						<span>时尚圈</span>
					</router-link>
					<router-link to="/Mine" tag="li">
						<i class="iconfont">&#xe61e;</i>
						<span>我的</span>
					</router-link>
				</ul>
		</footer>
	</div>
</template>

<script>
	import "./assets/iconfont/iconfont.ttf";
	import "./assets/iconfont/iconfont.woff";
	import axios from "axios";
	import mySearch from "./components/mySearch.vue";
	export default{
			data(){
				return{
					
				}
			},
		
			components:{
				mySearch:mySearch
			}
		
	}
</script>

