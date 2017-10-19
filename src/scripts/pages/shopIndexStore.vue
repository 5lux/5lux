<template lang="html">
	<div class="shopIndexStore">
		<div class="sisBanner">
			
		</div>
		<ul>
			<li></li>
			<li></li>
			<li></li>
			<li></li>
		</ul>
		<div class="sisBtn"><p>查看所有旗舰店></p></div>
		<fashion></fashion>
	</div>
</template>

<script>
	import fashion from './shopIndexFashion.vue';
	export default {
		components: {
		    fashion: fashion
		}
	}
</script>

<style lang="scss">
	@charset "utf-8";
	.shopIndexStore{
		font-size: 31.25vw;
		.sisBanner{
			height: 1.7963em;
			width: 100%;
			background: gray;
		}
		ul{
			width: 502px;
			height: 121px;
			margin-top: 6px;
			background: white;
			overflow-x: scroll;
			li{
				width: 121px;
				height: 121px;
				margin-right: 6px;
				float: left;
				background: yellow;
			}
			li:last-child{
				margin: 0;
			}
		}
		.sisBtn{
			margin-bottom: 10px;
			width: 100%;
			height: 39px;
			background: white;
			padding-top: 7px;
			p{
				width: 135px;
				height: 24px;
				
				background: #333;
				color: white;
				margin: 0 auto;
				border-radius:3px ;
				font-size: 16px;
				text-align: center;
			}
		}
	}
</style>