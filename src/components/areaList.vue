<template>
	<div class="posWrap">
		<div class="areaBoxwrap" v-show="this.$store.state.isAllcityshow">
			<div class="allCity" @click="storeCityname('所有城市')">所有城市</div>
			<div class="areaBox" v-for="val in this.$store.state.list">
				<div class="choice">{{val.first_name}}</div>
				<ul class="choiceArea">
					<li v-for="spi in val.child" @click="storeCityname(spi.region_name)">{{spi.region_name}}</li>
				</ul>
			</div>
		</div>
		<div class="areaBoxwrap" v-show="!this.$store.state.isAllcityshow">
			<div class="allCity" @click="storeBrandname('所有品牌')">所有品牌</div>
			<div class="areaBox" v-for="val in this.$store.state.brand_list">
				<div class="choice">{{val.first_name}}</div>
				<ul class="choiceArea">
					<li v-for="spi in val.child" @click="storeBrandname(spi.brand_name)">{{spi.brand_name}}</li>
				</ul>
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
		  	list:{
		  		type:Array,
		  		required:true
		  	}
	  },
	  methods:{
	  	storeCityname(str){
	  		this.$store.commit("changeCityname",str);
	  	},
	  	storeBrandname(str){
	  		this.$store.commit("changeBrandname",str);
	  	}
	  }
	}
</script>

<style lang="scss">
	
</style>