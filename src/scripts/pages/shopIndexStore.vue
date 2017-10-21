<template lang="html">
	<div class="shopIndexStore">
		<div class="shop-index-banner">
			<mt-swipe :auto="4000">
			  <mt-swipe-item>1</mt-swipe-item>
			  <mt-swipe-item>2</mt-swipe-item>
			  <mt-swipe-item>3</mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="shop-index-sort">
			<ul>
				<li>分类</li>
				<li>专柜自提</li>
				<li>会员特权</li>
				<li>礼品</li>
			</ul>
		</div>
		<div class="sisBanner">
			
		</div>
		<div class="shProUL">
			<ul>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>
		</div>
		<div class="sisBtn"><p>查看所有旗舰店></p></div>
	</div>
</template>

<script>
	import fashion from './ShopIndexFashion.vue';
	import Vue from 'vue';
	import { Swipe, SwipeItem } from 'mint-ui';

	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	export default {
		components: {
		    
		}
	}
</script>