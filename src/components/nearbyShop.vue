<template>
	<div class="nearbyWrap">
		<div class="nearbyHeader">
			<!--箭头，用于返回-->
			<div class="arrow" @click="backShop"><img src="../assets/images/arrow.png" /></div>
			<div class="nearname">附近门店</div>
			<div class="iconWrap iconLeft"><router-link to="/hotSearch" tag="span"><i class="iconfont">&#xe60b;</i></router-link></div>
			<div class="iconWrap iconRight"><p>2</p><i class="iconfont">&#xe60c;</i></div>
		</div>
		<shop-list></shop-list>
	</div>
</template>
<script>
	import axios from "axios";
	import shopList from "./shopList.vue";
	export default{
		data(){
			return {
				store_list:[]
			}
		},
		components:{
			shopList:shopList
		},
		methods:{
			backShop(){
				this.$router.push("/myGoshop");
			}
		},
		mounted(){
			axios.get("http://api.restful.5lux.com.cn/good/storelist?is_nearby=1&page=1")
	      	.then((res)=>{
	      		console.log(res);
		      	this.store_list=res.data.data.store_list;
			    this.$store.commit("changeStorelist",this.store_list);
			    
	      	});
		}
	}
</script>
<style lang="scss">
	
</style>