<template lang="html">
	<div @click="click">
		<ul class="shopSortProduct">
			<li v-for="(value,index) in data" v-if="index<20">
				<img v-lazy="value.product_img"/>
				<div class="shopSortProductDetail">
					
					<p>{{value.brand_en_name}}</p>
					<p>{{value.name}}</p>
					<p>¥{{value.product_price}}<span>¥{{value.promote_price}}</span></p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	import Vue from 'vue';
	import axios from 'axios';
	export default {
		data(){
			return{
				prodData:[]
			}
		},
		props:[
			'data'
		],
		mounted(){
			axios.get(`http://api.restful.5lux.com.cn/good/cata_goods_list?id=${this.data.data.data.catid}&sort=${this.$store.state.products.sort}&page=&order=${this.$store.state.products.order}&is_self=${this.$store.state.products.is_self}&price=${this.$store.state.products.price}&location_id=${this.$store.state.products.location_id}&cata_id=&attr=`)
			
		    .then((res)=>{
		    	this.prodData = res.data.data.goods_list
		    	console.log(res)
    		})
		},
		methods: {
			click(){
				console.log(this.data.data)
			}
		}
	}
</script>

<style lang="css" scoped>
	span:nth-of-type(1){
		text-decoration:line-through;
	}
	
	img[lazy=loading] {
	    width: 100%;
	    height: 1.6rem;
	    background:url(../assets/images/good_load.gif) ;
	    background-size:100% 100% ;
	}
	img[lazy=error] {
	    width: 100%;
	    height: 1.6rem;
	    background:url(../assets/images/good_load.gif) ;
	    background-size:100% 100% ;
	}
</style>