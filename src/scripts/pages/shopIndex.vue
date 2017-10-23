<template lang='html'>
	<div class="shop-m-index">
		<div class="shop-index-head" v-if="isShow">
			
		</div>
		<div class="shop-index-nav">
			<ul>
				<router-link :to="{path: type.path}" v-for="type in types" tag='li'>{{type.name}}</router-link>
			</ul>
		</div>
		<section @scroll="handleScroll">
			
			<router-view></router-view>
			
		</section>
		<div class="shop-index-foot">
			
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import VueRouter from 'vue-router';
	
	import { Loadmore } from 'mint-ui';

	Vue.component(Loadmore.name, Loadmore);
	export default {
		data: function() {
			return {
			types: [{'name':'首页', 'path':'/shopIndexFashion'}, {'name':'箱包', 'path':'/shopBag'}, {'name':'美妆', 'path':'/shopBeauty'},{'name':'服装','path':'/shopClothes'},{'name':'腕表','path':'/shopWatch'},{'name':'配饰','path':'/shopOrnament'},{'name':'鞋靴','path':'/shopShoes'},{'name':'母婴','path':'/shopMaB'},{'name':'美酒','path':'/shopWine'},{'name':'美食','path':'/shopFood'},{'name':'家居','path':'/shopHouse'},{'name':'电子','path':'/shopElec'},{'name':'办公','path':'/shopOffice'}],
			isShow: true
			}
		},
		methods: {
			handleScroll () {
				var section = document.querySelector('section')
			    this.isShow = section.scrollTop <= 0;
			}
		},
		components: {
		    
		}
	}
</script>
