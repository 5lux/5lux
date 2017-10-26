<template>
	<div class="shopSpecial">
		<img :src="msg.ads_list[0].ad_code"/>
		<ul class="shopSortTitle">
			<li @click="select">综合</li>
			<li @click="select" :class="{hideIn:true}">品牌</li>
			<li @click="select" :class="{hideIn:true}">分类</li>
			<li @click="select" :class="{hideIn:true}">筛选</li>
		</ul>
		<div class="shopSortShadow" v-if="isShow">
			<div class="shopSortShadowLeft">
				
			</div>
			<div class="shopSortShadowRight">
				<div class="shopbackbutton" @click="back">
					
				</div>
			</div>
		</div>
		<shop-product></shop-product>
	</div>
</template>

<script>
	import Vue from 'vue';
	import axios from 'axios';
	import shopProduct from './ShopSortProduct.vue';
	export default {
		data(){
			return {
				
				isShow: false
			}
		},
		props: [
			'msg'
		],
		components: {
			shopProduct
		},
		methods:{
			select(){
				this.isShow = true
				axios.get(`http://api.restful.5lux.com.cn/good/cata_goods_list?id=${this.msg.cata_id}&sort=&page=3&order=&is_self=&price=&location_id=&cata_id=&attr=`)
			    .then((res)=>{
			    	console.log(res.data.data.goods_list)
			    })
			},
			back(){
				this.isShow = false 
			}
		}
	}
</script>
