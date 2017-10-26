<template lang="html">
	<div class="picBox">
		<div class="pic">
			<img src="http://img550.5lux.com.cn/2017/10/16/lm/150812239012_750x825.jpg" />
		</div>
		<!--页面未加载出时显示-->
		<div class="yo-loading yo-loading-a" v-if="isShowloading">
	    	<i class="yo-ico"></i>
	        <div class="text">加载中...</div>
	    </div>
	</div>
</template>

<script>
//import { Loadmore } from "mint-ui";
	
	
</script>

<style lang="scss">
	.picBox{
		width:3.2rem;
		height:3.52rem;
		.pic{
			width:100%;
			height:100%;
			img{
				width:100%;
				height:100%;
			}
		}
	}
</style>