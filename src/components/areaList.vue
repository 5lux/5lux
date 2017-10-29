<template>
	<div class="posWrap">
		<div class="areaBoxwrap" v-show="this.$store.state.isAllcityshow">
			<div class="allCity" @click="storeCityname('所有城市','')" :region_id="''">所有城市</div>
			<div class="areaBox" v-for="val in this.$store.state.list">
				<div class="choice">{{val.first_name}}</div>
				<ul class="choiceArea">
					<li v-for="spi in val.child" :region_id="spi.region_id" @click="storeCityname(spi.region_name,spi.region_id)">{{spi.region_name}}</li>
				</ul>
			</div>
		</div>
		<div class="areaBoxwrap" v-show="!this.$store.state.isAllcityshow">
			<div class="allCity" @click="storeBrandname('所有品牌','')" :brand_id="''">所有品牌</div>
			<div class="areaBox" v-for="val in this.$store.state.brand_list">
				<div class="choice">{{val.first_name}}</div>
				<ul class="choiceArea">
					<li v-for="spi in val.child" :brand_id="spi.brand_id"
					@click="storeBrandname(spi.brand_name,spi.brand_id)">{{spi.brand_name}}</li>
				</ul>
			</div>
		</div>
	</div>
	
</template>

<script>
	import Vue from "vue";
	import axios from "axios";
	export default{
		data(){
			return {
				list:[],
				store_list:[]
			}
		},
	  methods:{
	  	storeCityname(str,region_id){
	  		this.$store.commit("changeCityname",str);
	  		this.$store.commit("changeShopshow",true);
	  		this.$store.commit("changeRegionId",region_id);
	  		console.log(this.$store.state.region_id,this.$store.state.brand_id,this.$store.state.is_bespeak);
	  		axios.get("http://api.restful.5lux.com.cn/good/storelist?&region_id="+this.$store.state.region_id+"&brand_id="+this.$store.state.brand_id+"&is_bespeak="+this.$store.state.is_bespeak)
	      	.then((res)=>{
		      	this.store_list=res.data.data.store_list;
			    this.$store.commit("changeStorelist",this.store_list);
			    
	      	});
	  		
	  	},
	  	storeBrandname(str,brand_id){
	  		this.$store.commit("changeBrandname",str);
	  		this.$store.commit("changeShopshow",true);
	  		this.$store.commit("changeBrandId",brand_id);
	  		axios.get("http://api.restful.5lux.com.cn/good/storelist?&region_id="+this.$store.state.region_id+"&brand_id="+this.$store.state.brand_id+"&is_bespeak="+this.$store.state.is_bespeak)
	      	.then((res)=>{
		      	this.store_list=res.data.data.store_list;
			    this.$store.commit("changeStorelist",this.store_list);
			    
	      	});
	  	}
	  }
	}
</script>

<style lang="scss">
	
</style>