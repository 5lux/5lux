<template lang="html">
	<div class="shopFashion">
		<shop-fashion></shop-fashion>
		<div class="fashion_video">
			<h4>时尚发布厅</h4>
			<h5>—— FASHION&nbsp;TV —— </h5>
			<ul>
				<li v-for="value in dataList">
					<a :href="value.ad_link">
						<img v-lazy="value.ad_code"/>
					</a>
					
					<p>{{value.ad_name}}</p>
				</li>
			</ul>
		</div>
		<div class="sameAsFamous">
			<h4>明星同款</h4>
			<h5>—— STAR&nbsp;OUTFITS —— </h5>
			<a :href="data['star_outfits'].list.ad_link">
				<img v-lazy="data['star_outfits'].list.ad_code"/></a>
			<p>{{data.star_outfits.list.ad_name}}</p>
		</div>
		<div class="fashion_video">
			<h4>海外馆</h4>
			<h5>—— OVERSEAS —— </h5>
			<ul>
				<li v-for="value in data['oversea_recommend'].list">
					<a :href="value.ad_link">
						<img v-lazy="value.ad_code"/>
					</a>
					<p>{{value.ad_name}}</p>
				</li>
			</ul>
		</div>
		<div class="fashion_video">
			<h4>会员专场</h4>
			<h5>—— VIP&nbsp;SPECIAL —— </h5>
			<ul>
				<li v-for="value in data.vip_special.list">
					<a :href="value.ad_link">
						<img v-lazy="value.ad_code"/>
					</a>
					<p>{{value['ad_name']}}</p>
				</li>
			</ul>
		</div>
		<div class="fashionLatest">
			<h4>最新上架</h4>
			<h5>—— LATEST —— </h5>
			<ul>
				<li v-for="value in data.new_recommend.list">
					<a :href="value.ad_link">
						<img v-lazy="value.ad_code"/>
					</a>
					<p>{{value.ad_name}}</p>
				</li>
			</ul>
		</div>
		<div class="fashionFlagship">
			<h4>旗舰店</h4>
			<h5>—— FLAGSHIP&nbsp;STORES —— </h5>
			<ul>
				<li v-for="value in data.top5flag.list">
					<a :href="value.ad_link">
						<img v-lazy="value.ad_code"/>
					</a>
					<img v-lazy="value.brand_logo"/>
					<p>{{value.ad_name}}</p>
				</li>
			</ul>
		</div>
		<div class="flagshipStore" v-for="(value,index) in data.fashion_guide.list">
			<h4 v-if="index==0">时尚指南</h4>
			<h5 v-if="index==0">—— FLAGSHIP&nbsp;STORES</h5>
			<a :href="value.ad_top.ad_link">
				<img v-lazy="value.ad_top.ad_code"/>
			</a>
			<div >
				
				<ul>
					<li v-for="product in value.product_info">
						<img v-lazy="product.product_thumb"/>
						<p>{{product.ad_subtitle}}</p>
						<p>{{product.ad_title}}</p>
					</li>
					<li>
						<img style="border:1px solid black" src="http://img550.5lux.com.cn/2017/05/05/pq/149398682373_160x160.png"/>
					</li>
				</ul>
			</div>
		</div>
		<div class="fashionHot">
			<h4>大家都在买</h4>
			<h5>—— HOT&nbsp;SALES —— </h5>
			<ul>
				<li v-for="value in hot">
					<img v-lazy="value.product_img"/>
					
					<p>{{value.brand_name}}</p>
					<p>¥{{value.product_price}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import Vue from 'vue';
	import { Swipe, SwipeItem } from 'mint-ui';
	import shopFashion from "./ShopIndexStore.vue";
	
	export default {
		data(){
			return {
				dataList:[],
				data: [],
				hot: [],
				page: 1
			}
		},
		components:{
			shopFashion
		},
		mounted() {
		    axios.get('http://api.restful.5lux.com.cn/shop/home_all_info')
		    .then((res)=>{
		    	this.data = res.data.data
		        const data = res.data.data['fashion_video'].list
		        this.dataList = data
		    }),
		   axios.get('http://api.restful.5lux.com.cn/shop/theirchose/?shop%2Ftheirchose=&page='+this.page)
		    .then((res)=>{
		    	this.hot = res.data.data.theirchose
		    })
		}
	}
</script>