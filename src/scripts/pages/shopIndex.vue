<template lang='html'>
	<div class="shop-m-index">
		<div class="shop-index-head" v-if="isShow">
			
		</div>
		<div class="shop-index-nav">
			<ul>
				<router-link :to="{path: type.path}" v-for="(type,index) in types" tag='li' :id="dataList[index].cata_id" :ref="dataList[index].cata_id" @click.native="sendId(dataList[index].cata_id)">{{type.name}}</router-link>
			</ul>
		</div>
		<section @scroll="handleScroll" ref="scroll">
			
			<router-view :msg="data"></router-view>
			
		</section>
		<div class="shop-index-foot">
			
		</div>
	</div>
</template>

<script>
	import Vue from 'vue';
	import VueRouter from 'vue-router';
	import axios from 'axios';
	
	import { Loadmore } from 'mint-ui';

	Vue.component(Loadmore.name, Loadmore);
	export default {
		data() {
			return {
				types: [{'name':'首页', 'path':'/shopIndexFashion'}, {'name':'箱包', 'path':'/shopSpecial'}, {'name':'美妆', 'path':'/shopSpecial'},{'name':'服装','path':'/shopSpecial'},{'name':'腕表','path':'/shopSpecial'},{'name':'配饰','path':'/shopSpecial'},{'name':'鞋靴','path':'/shopSpecial'},{'name':'母婴','path':'/shopSpecial'},{'name':'美酒','path':'/shopSpecial'},{'name':'美食','path':'/shopSpecial'},{'name':'家居','path':'/shopSpecial'},{'name':'电子','path':'/shopSpecial'},{'name':'办公','path':'/shopSpecial'}],
				isShow: true,
				dataList: [],
				data: []
			}
		},
		methods: {
			handleScroll () {
				var section = this.$refs['scroll']
			    this.isShow = section.scrollTop <= 0;
			},
			sendId(id){
//				console.log(this.$refs[id][0].$el)
//				this.$refs[id][0].$el.style="color: black;border-bottom: 2px solid black;"
				axios.get("http://api.restful.5lux.com.cn/shop/cata_recommend?cata_id="+id)
			    .then((res)=>{
			    	
			    	this.data = res.data.data
			    })
			}
		},
		mounted() {
		    axios.get('http://api.restful.5lux.com.cn/shop/catalist')
		    .then((res)=>{
		        const data = res.data.data
		        this.dataList = data
		    })
		    
		},
		components: {
		    
		}
	}
</script>

<style type="scss">
		
</style>
