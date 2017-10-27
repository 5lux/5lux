<template lang="html">
	<div class="shop-m-index">
		<div class="shop-index-head" v-if="isShow">
			<my-search></my-search>
		</div>
		<div class="shop-index-nav">
			<ul>
				<router-link :to="{path: type.path}" v-for="(type,index) in types" tag='li' :id="dataList[index]['cata_id']" :ref="dataList[index]['cata_id']" @click.native="sendId(dataList[index]['cata_id'], index)" :class="{isSelect: isSelected[index]}">{{type.name}}</router-link>
			</ul>
		</div>
		<img src="../assets/images/Star_Ring_loading-01-05.png" class="loading"  v-if="isFinished"/>
		<section @scroll="handleScroll" ref="scroll" v-show="!isFinished">
			
			<router-view :msg="data" :sortdata="sortData" :productdata="productData" v-show="!isFinished"></router-view>
			
		</section>
	</div>
</template>

<script>
	import Vue from "vue";
	import mySearch from "./mySearch.vue";
  	import axios from "axios";
  	import { Swipe, SwipeItem } from 'mint-ui';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	import { Lazyload } from 'mint-ui';
	Vue.use(Lazyload)
	
	export default {
		data() {
			return {
				types: [{'name':'首页', 'path':'/shopIndexFashion'}, {'name':'箱包', 'path':'/shopSpecial'}, {'name':'美妆', 'path':'/shopSpecial'},{'name':'服装','path':'/shopSpecial'},{'name':'腕表','path':'/shopSpecial'},{'name':'配饰','path':'/shopSpecial'},{'name':'鞋靴','path':'/shopSpecial'},{'name':'母婴','path':'/shopSpecial'},{'name':'美酒','path':'/shopSpecial'},{'name':'美食','path':'/shopSpecial'},{'name':'家居','path':'/shopSpecial'},{'name':'电子','path':'/shopSpecial'},{'name':'办公','path':'/shopSpecial'}],
				isShow: true,
				dataList: [],
				data: [],
				sortData: [],
				productData: [],
				isSelected:[],
				isFinished: true
			}
		},
		methods: {
			handleScroll () {
				var section = this.$refs['scroll']
			    this.isShow = section.scrollTop <= 0;
			},
			sendId(id,index){
				for(var i=0; i<this.types.length; i++){
					this.isSelected[i] = false
				}
				this.isSelected[index] = true
				axios.get("http://api.restful.5lux.com.cn/shop/cata_recommend?cata_id="+id)
			    .then((res)=>{
			    	this.data = res.data.data;
						    					axios.get(`http://api.restful.5lux.com.cn/good/shop_cata_filter?id=${this.data.cata_id}&total=`)
				    .then((res)=>{
				    	this.sortData = res.data.data
		    		}),
		    		
					axios.get(`http://api.restful.5lux.com.cn/good/cata_goods_list?id=${this.data.cata_id}&sort=&page=&order=&is_self=&price=&location_id=&cata_id=&attr=`)
				    .then((res)=>{
				    	this.productData = res.data.data.goods_list
				    	
		    		})
		    
				})
			}
		},    
		mounted() {
			for(var i=0; i<this.types.length; i++){
				this.isSelected[i] = false
			}
			this.isSelected[0] = true
		    axios.get('http://api.restful.5lux.com.cn/shop/catalist')
		    .then((res)=>{
		        const data = res.data.data
		        this.dataList = data
		        this.isFinished = false
		    })
		    
		},
		components: {
		    mySearch
		}
	}
</script>

<style scoped>
	.myHeader{
		position: relative;
		top: 0;
		color: white;
		
	}
	.isSelect{
		color: black;
		border-bottom: 2px solid black;
	}

	.loading{
        width:0.8rem;
        height:0.8rem;
        animation:mymove 1s linear infinite;
        margin: 2rem auto;
    }
    @keyframes mymove{
        from {transform:rotate(0deg)}
        to {transform:rotate(360deg)}
    }

</style>