<template lang="html">
	<div class="myHeader">
		<div class="headsearch">
			<i class="iconfont">&#xe60b;</i>
			<input class="search" type="text" placeholder="5LUX.COM" />
		</div>
		<div class="headicon" @click="goToCart"><i class="iconfont">&#xe60c;</i></div>
	</div>
</template>
<script>
	import "../assets/iconfont/iconfont.ttf";
	import "../assets/iconfont/iconfont.woff";
	export default{
		data(){
			return {
				
			}
		},
		methods: {
			goToCart(){
				this.$router.push('/cart')
			}
		}
	}
	
</script>

