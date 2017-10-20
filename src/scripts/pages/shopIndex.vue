<template lang='html'>
	<div class="shop-m-index">
		<div class="shop-index-head">
			
		</div>
		<section>
			<div class="shop-index-nav">
				<ul>
					<li v-for="type in types">{{type}}</li>
				</ul>
			</div>
			<div class="shop-index-banner">
				
			</div>
			<div class="shop-index-sort">
				<ul>
					<li>分类</li>
					<li>专柜自提</li>
					<li>会员特权</li>
					<li>礼品</li>
				</ul>
			</div>
			<div id="store">
				<shop></shop>
				
			</div>
		</section>
		<div class="shop-index-foot">
			
		</div>
	</div>
</template>

<script>
	import shop from './shopIndexStore.vue';
	export default {
		data: function() {
			return {
			types: ['首页','箱包','美妆','服装','腕表','配饰','鞋靴','母婴','美酒','美食','家居','电子','办公']}
		},
		components: {
		    shop: shop
		}
	}
</script>

<style lang='scss'>
	@charset "utf-8";
	@import "../../styles/app";
	.shop-m-index {
		@include flexbox();
		@include flex-direction(column);
		height: 100%;
		width: 100%;
		font-size: 31.25vw;
		.shop-index-head{
			width: 100%;
			height: .44em;
			background: black;
		}
		section {
			width: 100%;
			overflow-y: scroll;
			overflow-x: hidden;
			/*flex: 1;*/
			@include flex(1,column);
			
			.shop-index-nav {
				height: 39px;
				background: white;
				ul{
					
					@include flexbox()
					width: 800px;
					height: 39px;
					li{
						flex: 1;
						font-size: 15px;
						line-height: 39px;
						height: 39px;
						width: 30px;
						margin-right: 25px;
						color: #7e8c8d;
						text-align: center;
					}
					li:nth-child(1){
						margin-left:25px ;
						color: black;
						@include border(0 0 2px 0,black,solid);
					}
				}
			}
			.shop-index-banner{
				width: 100%;
				height: 2.39em;
				background: black;
			}
			.shop-index-sort{
				width: 100%;
				height: .6827em;
				background: yellow;
				ul{
					@include flexbox();
					width: 100%;
					height: .6827em;
					li{
						@include flex(1);
						height: .6827em;
						color: #7e8c8d;
						font-size: .12rem;
						text-align: center;
					}
				}
			}
		}
		
		.shop-index-foot {
			width: 100%;
			height: .44rem;
			background: black;
		}
	}
	
</style>