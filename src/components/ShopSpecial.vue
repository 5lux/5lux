<template lang="html">
	<div class="shopSpecial">
		<img :src="msg.ads_list[0].ad_code"/>
		<ul class="shopSortTitle">
			<li>综合</li>
			<li v-on:click="select('brand')">品牌</li>
			<li v-on:click="select('sort')">分类</li>
			<li v-on:click="select('filter')">筛选</li>
		</ul>
		<div class="shopSortShadow" v-if="isShow">
			<div class="shopSortShadowLeft">
				
			</div>
			<div class="shopSortShadowRight">
				<div class="shopbackbutton" @click="back"></div>
				<shop-sort-selector :num="name">
					<div class="shopSortBrand" slot="brand">
						<p>品牌</p>
						<ul class="todiffer">
							<li :class="{isactive: gots}"  v-on:click="got">热门品牌</li>
							<li :class="{isactive: !gots}" v-on:click="got">所有品牌</li>
						</ul>
						<section>
							<div v-if="gots" class="shopFirstDiv">
								<ul>
									<li  v-for="word in sortdata.brands_info.recomment_brand">{{word.brand_name}}</li>
									
								</ul>
							</div>
							<div v-if="!gots">
								<ul v-for="word in sortdata.brands_info.all_brand">
									<li>{{word.first_name}}</li>
									<li v-for="value in word.child">{{value.brand_name}}</li>
								</ul>
							</div>
						</section>
					</div>
					
					<div class="shopSortSort" slot="sort">
						<p>分类</p>
						<div class="shopSortType">
							<span>{{sortdata.all_cate[0].pname}}</span>
						</div>
						<ul>
							<li v-for="value in sortdata.all_cate[0].children_name">{{value}}</li>
						</ul>
					</div>
					
					<div class="shopSortFilter" slot="filter">
						<ul>
							<li>
								<span>配送方式</span>
								<span>
									全部
								</span>
								<ul>
									<li><p @click="selected">{{sortdata.express_info[0].name}}</p></li>
								</ul>
							</li>
							<li>
								<span>价格</span>
								<span>
									全部
								</span>
								<ul>
									<li v-for="type in sortdata.between"><p @click="selected">{{type.value}}</p></li>
								</ul>
							</li>
							<li>
								<span>发货地</span>
								<span>
									全部
								</span>
								<ul>
									<li v-for="(type,index) in sortdata.location" v-if="index<3"><p @click="selected">{{type.address}}</p></li>
								</ul>
							</li>
							<li>
								<span>分类</span>
								<span @click="gotoSort">
									全部
								</span>
								<ul height="0"></ul>
							</li>
							<li>
								<span>品牌</span>
								<span @click="gotoBrand">
									全部
								</span>
								<ul>
									<li v-for="type in sortdata.brands_info.recomment_brand"><p @click="selected">{{type.brand_name}}</p></li>
								</ul>
							</li>
							<li style="display:none">
								<ul style="display:none">
									<li style="display:none"></li>
								</ul>
							</li>
						</ul>
						<div class="shopBtns">
							<div class="shopResetBtn">重置</div>
							<div class="shopCheckBtn" @click="back">
								确认
							</div>
						</div>
					</div>
				</shop-sort-selector>
			</div>
		</div>
		<shop-product :data="productdata"></shop-product>
	</div>
</template>

<script>
	import Vue from 'vue';
	import axios from 'axios';
	import shopProduct from './ShopSortProduct.vue';
	import shopSortSelector from "./ShopSortSelectors.vue"
	export default {
		data(){
			return {
				data: [],
				isShow: false,
				name: '',
				gots: true,
			}
		},
		props: [
			'msg',
			'sortdata',
			'productdata'
		],
		components: {
			shopProduct,
			shopSortSelector
		},
		mounted() {
			
		    
		},
		watch: {
			data:function newdata(){
				axios.get(`http://api.restful.5lux.com.cn/good/cata_goods_list?id=${this.msg.cata_id}&sort=&page=&order=&is_self=&price=&location_id=&cata_id=&attr=`)
			    .then((res)=>{
			    	this.data = res.data.data.goods_list
			    	
	    		})
		    }
		},
		methods:{
			select(name){
				this.isShow = true
				
				this.$store.dispatch("getAllProducts", this.msg.cata_id)
				this.name = name
			},
			back(){
				this.isShow = false
				this.name = ''
			},
			got(){
				this.gots = !this.gots
			},
			gotoBrand(){
				this.name = 'brand'
			},
			gotoSort(){
				this.name = 'sort'
			},
			selected(){
				
			}
		}
	}
</script>

