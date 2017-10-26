<template>
	<div class="arriveBannerwrap">
			<div class="arriveBanner">
				<div class="arrBanbox" v-for="val in this.$store.state.store_list">
					<div class="div1"><img v-lazy="val.store_thumb" /></div>
					<div class="div2">{{val.title}}</div>
					<div class="div3">
						<div class="dLeft">新店</div>
						<div class="dRight">{{val.introduction}}</div>
					</div>
					<div class="div4">
						<span class="spanLeft"><i class="iconfont">&#xe60a;</i>{{val.city_name}}</span>
						<span class="spanRight">门店详情</span>
					</div>
				</div>
			</div>
		</div>
</template>

<script>
	import Vue from "vue";
	
	export default{
		data(){
			return {
				
			}
		},
		props: {
		  	store_list:{
		  		type:Array,
		  		required:true
		  	}
	  }
	}
</script>

<style>
</style>