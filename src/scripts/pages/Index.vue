<template lang="html">
	<div class="container">
		<div class="banner">
			<router-view></router-view>
		</div>
		<footer>
				<ul>
					<router-link to="/myPosition" tag="li">
						<i class="iconfont">&#xe606;</i>
						<span>首页</span>
					</router-link>
					<router-link to="/myMall" tag="li">
						<i class="iconfont">&#xe629;</i>
						<span>商城</span>
					</router-link>
					<router-link to="/myGoshop" tag="li">
						<i class="iconfont">&#xe60a;</i>
						<span>到店</span>
					</router-link>
					<router-link to="/myFaction" tag="li">
						<i class="iconfont">&#xe61d;</i>
						<span>时尚圈</span>
					</router-link>
					<router-link to="/Mine" tag="li">
						<i class="iconfont">&#xe61e;</i>
						<span>我的</span>
					</router-link>
				</ul>
		</footer>
	</div>
</template>

<script>
	import "../../media/iconfont/iconfont.ttf";
	import "../../media/iconfont/iconfont.woff";
	import VueRouter from "vue-router";
	export default{
		data(){
			return{
//				posid:3,
//				isActive:true,
//				errorClass:"error"
			}
		},
		updated(){
			
		}
	}
</script>

<style lang="scss">



</style>