<template lang="html">
	
	<div class="posContainer">
		
		<!--下拉刷新-->
		<mt-loadmore v-bind:top-method="loadRefresh" v-bind:bottom-method="loadBottom"  ref="loadmore">
			<!--下拉刷新，可不加，有默认-->
			<div class="mint-loadmore-top">
				<span class="mint-loadmore-text">下拉刷新页面</span>
			</div>
			<!--下拉刷新结束-->
		
		<my-search></my-search>
		<mt-swipe :auto="10000" :style="'background:#fff;'">
		  <mt-swipe-item v-for="(swiimg,index) in dataList"><img   v-lazy="swiimg.silde_original" /></mt-swipe-item>
		</mt-swipe>
		<!--轮播图下方的菜单导航-->
		<ul class="menuList">
			<li>
				<i class="iconfont">&#xe63f;</i>
				<span>上新</span>
			</li>
			<li>
				<i class="iconfont">&#xe66f;</i>
				<span>海外馆</span>
			</li>
			<li>
				<i class="iconfont">&#xe60c;</i>
				<span>值得买</span>
			</li>
			<li>
				<i class="iconfont">&#xe61a;</i>
				<span>闪购</span>
			</li>
			<li>
				<i class="iconfont">&#xe604;</i>
				<span>品牌</span>
			</li>
		</ul>
		<ul class="memberList">
			<li v-for="val in memberList"><img v-lazy="val.ad_code" src="../assets/images/good_load.gif" alt="" /></li>
		</ul>
		<!--会员尊享-->
		<div class="shareList">
			<div class="bigShare"><a href="#"><img v-lazy="shareImg" src="../assets/images/good_load.gif"/></a></div>
			<ul class="sLists">
				<li v-for="val in shareList"><a href="#"><img v-lazy="val.ad_code" src="../assets/images/good_load.gif" /></a></li>
			</ul>
		</div>
		<!--第五大道8年0假货及下方一张图片-->
		<div class="imgA"><img v-lazy="imgA" src="../assets/images/good_load.gif" /></div>
		<div class="imgB"><img v-lazy="imgB" src="../assets/images/good_load.gif" /></div>
		<!--article_list块-->
		<div class="article_list" v-for="val in article_list" >
			<div class="articleImg">
				<img src="../assets/images/good_load.gif" v-lazy="val.ads_info.ad_code" />
				<span></span>
			</div>
			<div class="article_box">
				<p class="p1">{{val.ads_info.ad_name}}</p>
				<p class="p2">{{val.ads_info.ad_title}}</p>
			</div>
			<div class="articleBorder"></div>
			<div class="argoodsBox" v-show="val.ads_info.product_info.length">
				<ul class="argoodsList">
					<li v-for="spi in val.ads_info.product_info">
						<img v-lazy="spi.product_thumb" src="../assets/images/good_load.gif" />
						<span class="span1">{{spi.ad_title}}</span>
						<span class="span2">{{spi.ad_subtitle}}</span>
					</li>
				</ul>
			</div>
		</div>
		
		
		
		
		</mt-loadmore>
		<!--上拉加载-->
	</div>
</template>

<script>
	import Vue from "vue";
	import mySearch from "./mySearch.vue";
  	import axios from "axios";
  	import { Loadmore } from 'mint-ui'
	Vue.component(Loadmore.name, Loadmore);
  	import { Swipe, SwipeItem } from 'mint-ui';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	import { Lazyload } from 'mint-ui';
	Vue.use(Lazyload)
	export default {
		data(){
			return {
				dataList:[],
				memberList:[],
				shareList:[],
				shareImg:"",
				imgA:"",
				imgB:"",
				article_list:[],
				bacsrc:"./assets/images/good_load.gif",
				myScroll:"",
				imgSrc:""
			}
		},
		components:{
			mySearch:mySearch
		},
		methods:{
			loadRefresh(){
				window.location.reload();
				this.$refs.loadmore.onTopLoaded();
			},
			loadBottom(){
				axios.get('/ghi')
			    .then((res)=>{
			    	this.article_list=this.article_list.concat(res.data.data.article_list);
			      	this.$refs.loadmore.onBottomLoaded();
			    });
				
			}
		},
		mounted() {
//			轮播图
	    	axios.get('/def')
		    	.then((res)=>{
		      	const dataList = res.data.data;
		        this.dataList = dataList;
		       	this.imgSrc=dataList[0].silde_original;

				
	      	});
//	      	四张小图
	      axios.get('/abc')
	      	.then((res)=>{
		        const memberData = res.data.data;
		        this.memberList = memberData;
//	        this.isShowloading = false
	      	});
//	      	会员尊享及下方四张小图片
	      	axios.get('/ghi')
	      	.then((res)=>{
		    	const thisList=res.data.data.vip_member;
		    	this.shareImg=thisList[0].ad_code;
		    	this.shareList=thisList.slice(1);
		    	this.imgA=res.data.data.buy_list[0].ad_code;
		    	this.imgB=res.data.data.current_topic[0].ad_code;
//		    	商品描述列表等页面块
				this.article_list=res.data.data.article_list;
				console.log(this.article_list);
	//	        this.isShowloading = false
	      	});
	      	
	 },
	 beforeUpdate(){
	 	
			
	 },
	 updated(){

	 }
	}
</script>

<style lang="scss">
	.mint-loadmore-top:nth-of-type(1){
		display:none;
	}
	.mint-loadmore-top:nth-of-type(2){
		width:100%;
		height:50px;
	}
	
	
</style>