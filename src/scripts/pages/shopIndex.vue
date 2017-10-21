<template lang='html'>
	<div class="shop-m-index">
		<div class="shop-index-head">
			
		</div>
		<section>
			<div class="shop-index-nav">
				<ul>
					<router-link :to="{path: type.path}" v-for="type in types" tag='li'>{{type.name}}</router-link>
				</ul>
			</div>
			
			<router-view></router-view>
			
		</section>
		<div class="shop-index-foot">
			
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import VueRouter from 'vue-router'
	
	import { Loadmore } from 'mint-ui';

	Vue.component(Loadmore.name, Loadmore);
	export default {
		data: function() {
			return {
			types: [{'name':'首页', 'path':'/'}, {'name':'箱包', 'path':'/shopBag'}, {'name':'美妆', 'path':'/shopBag'},{'name':'服装','path':'/shopBag'},{'name':'腕表','path':'/shopBag'},{'name':'配饰','path':'/shopBag'},{'name':'鞋靴','path':'/shopBag'},{'name':'母婴','path':'/'},{'name':'美酒','path':'/'},{'name':'美食','path':'/'},{'name':'家居','path':'/'},{'name':'电子','path':'/'},{'name':'办公','path':'/'}]
			}
		},
		components: {
		    
		}
	}
</script>
