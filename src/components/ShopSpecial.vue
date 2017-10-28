<template lang="html">
	<div class="shopSpecial">
		<img :src="msg.ads_list[0].ad_code"/>
		<ul class="shopSortTitle">
			<li v-on:click="sortOrder()">综合</li>
			<div class="shopSortOrderBy" v-if="isOrderShow">
					<ul class="sortBy">
						<li @click="sortSel('', '')" :style="{color: order===''?'#9b885f':'black'}">综合</li>
						<li @click="sortSel('salenum', '')" :style="{color: order==='salenum'?'#9b885f':'black'}">销量优先</li>
						<li @click="sortSel('product_price', 'ASC')" :style="{color: order==='product_priceASC'?'#9b885f':'black'}">价格由低到高</li>
						<li @click="sortSel('product_price', 'DESC')" :style="{color: order==='product_priceDESC'?'#9b885f':'black'}">价格由高到低</li>
						<li @click="sortSel('inputtime', 'DESC')" :style="{color: order==='inputtimeDESC'?'#9b885f':'black'}">新品优先</li>
						<li @click="sortSel('super_number', 'DESC')" :style="{color: order==='super_numberDESC'?'#9b885f':'black'}">人气优先</li>
					</ul>
			</div>
			<li v-on:click="select('brand')">品牌</li>
			<li v-on:click="select('sort')">分类</li>
			<li v-on:click="select('filter')">筛选</li>
		</ul>
		<div class="shopSortShadow" v-if="isShow">
			<div class="shopSortShadowLeft">
				
			</div>
			<div class="shopSortShadowRight">
				<div class="shopbackbutton iconfont" @click="back">&#xe61a;</div>
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
									<li v-for="(value, index) in word.child" @click="brandTypeSelect(value.brand_name, index)" :class="{isActivity: brandSelect === value.brand_name}">{{value.brand_name}}<span :style="{color: brandSelect === value.brand_name?'red':'white'}">selected</span></li>
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
							<li v-for="(value,index) in sortdata.all_cate[0].children_name" @click="sortSelect(value, index)" :style="{color: value===sortType?'#9b885f':'black'}">{{value}}</li>
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
									<li><p @click="selected( sortdata.express_info[0].name)" :class="{isAct: sortdata.express_info[0].name === brand}">{{sortdata.express_info[0].name}}</p></li>
								</ul>
							</li>
							<li>
								<span>价格</span>
								<span>
									全部
								</span>
								<ul>
									<li v-for="(type,index) in sortdata.between"><p @click="priceSelected(type.value, index)" :class="{isAct: price=== type.value}">{{type.value}}</p></li>
								</ul>
							</li>
							<li>
								<span>发货地</span>
								<span @click="more">
									全部
								</span>
								<ul>
									<li v-for="(type,index) in sortdata.location" v-if="index<num"><p @click="locateSelected(type.address, index)" :class="{isAct: locate=== type.address}">{{type.address}}</p></li>
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
									<li v-for="(type,index) in sortdata.brands_info.recomment_brand"><p @click="brandSelected(type.brand_name, index)" :class="{isAct: brandname=== type.brand_name}">{{type.brand_name}}</p></li>
								</ul>
							</li>
							<li style="display:none">
								<ul style="display:none">
									<li style="display:none"></li>
								</ul>
							</li>
						</ul>
						<div class="shopBtns">
							<div class="shopResetBtn" @click="reset">重置</div>
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
	import shopSortSelector from "./ShopSortSelectors.vue";
	import "../assets/iconfont/more/iconfont.ttf";
	import "../assets/iconfont/more/iconfont.woff";
	export default {
		data(){
			return {
				
				isShow: false,
				name: '',
				gots: true,
				num: 3,
				brand: '',
				brandNum: false,
				price: '',
				locate: '',
				locateNum: '',
				brandname: '',
				brandnameNum: '',
				brandSelect: '',
				brandSelectNum: '',
				sortType: '',
				sortTypeNum: '',
				isOrderShow : false,
				order: '',
				orderBy: ''
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
			this.brand= ''
			this.brandNum= false
			this.price= ''
			this.locate= ''
			this.locateNum= ''
			this.brandname= ''
			this.brandnameNum= ''
			this.brandSelect= ''
			this.brandSelectNum= ''
			this.sortType= ''
			this.sortTypeNum= ''
		    
		},
		watch: {
//			data:function newdata(){
//				axios.get(`http://api.restful.5lux.com.cn/good/cata_goods_list?id=${this.msg.cata_id}&sort=&page=&order=&is_self=&price=&location_id=&cata_id=&attr=`)
//			    .then((res)=>{
//			    	this.data = res.data.data.goods_list
//			    	
//	    		})
//		    }
		},
		methods:{
			reset(){
				//数据存在store里
				this.brand= ''
				this.brandNum= false
				this.price= ''
				this.locate= ''
				this.locateNum= ''
				this.brandname= ''
				this.brandnameNum= ''
				this.brandSelect= ''
				this.brandSelectNum= ''
				this.sortType= ''
				this.sortTypeNum= ''
				axios.get(`http://api.restful.5lux.com.cn/good/cata_goods_list?id=${this.msg.cata_id}&sort=${this.sortTypeNum}&page=${this.brandnameNum}&order=&is_self=${this.brandNum?1:0}&price=${this.price}&location_id=${this.locateNum}&cata_id=&attr=`)
			    .then((res)=>{
			    	this.productdata = res.data.data.goods_list
	    		})
			},
			sortOrder(){
				this.isOrderShow = !this.isOrderShow
			},
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
			selected(name){
				this.brand = name
				
				this.brandNum = this.brandNum?1:0
				this.$store.state.products.is_self = index
				axios.get(`http://api.restful.5lux.com.cn/good/cata_goods_list?id=${this.msg.cata_id}&sort=${this.sortTypeNum}&page=${this.brandnameNum}&order=&is_self=${this.brandNum?1:0}&price=${this.price}&location_id=${this.locateNum}&cata_id=&attr=`)
			    .then((res)=>{
			    	this.productdata = res.data.data.goods_list
	    		})
			},
			priceSelected(name, index){
				this.price = name
				this.$store.state.products.price = name
				axios.get(`http://api.restful.5lux.com.cn/good/cata_goods_list?id=${this.msg.cata_id}&sort=${this.sortTypeNum}&page=${this.brandnameNum}&order=&is_self=${this.brandNum?1:0}&price=${this.price}&location_id=${this.locateNum}&cata_id=&attr=`)
			    .then((res)=>{
			    	this.productdata = res.data.data.goods_list
			    	console.log(this.productdata)
	    		})
			},
			locateSelected(name, index){
				this.locate = name
				this.locateNum = index
				this.$store.state.products.location_id = index
				axios.get(`http://api.restful.5lux.com.cn/good/cata_goods_list?id=${this.msg.cata_id}&sort=${this.sortTypeNum}&page=${this.brandnameNum}&order=&is_self=${this.brandNum?1:0}&price=${this.price}&location_id=${this.locateNum}&cata_id=&attr=`)
			    .then((res)=>{
			    	this.productdata = res.data.data.goods_list
	    		})
			},
			brandSelected(name, index){
				this.brandname = name
				this.brandnameNum = index 
				this.brandSelect = name
				this.brandSelectNum = index
				this.$store.state.products.is_self = index
				axios.get(`http://api.restful.5lux.com.cn/good/cata_goods_list?id=${this.msg.cata_id}&sort=${this.sortTypeNum}&page=${this.brandnameNum}&order=&is_self=${this.brandNum?1:0}&price=${this.price}&location_id=${this.locateNum}&cata_id=&attr=`)
			    .then((res)=>{
			    	this.productdata = res.data.data.goods_list
	    		})
			},
			brandTypeSelect(name, index){
				this.brandname = name
				this.brandnameNum = index 
				this.brandSelect = name
				this.brandSelectNum = index
				this.$store.state.products.is_self = index
				axios.get(`http://api.restful.5lux.com.cn/good/cata_goods_list?id=${this.msg.cata_id}&sort=${this.sortTypeNum}&page=${this.brandnameNum}&order=&is_self=${this.brandNum?1:0}&price=${this.price}&location_id=${this.locateNum}&cata_id=&attr=`)
			    .then((res)=>{
			    	this.productdata = res.data.data.goods_list
	    		})
			},
			sortSelect(name, index){
				this.sortType = name
				this.sortTypeNum = index
				this.$store.state.products.sort = index
				axios.get(`http://api.restful.5lux.com.cn/good/cata_goods_list?id=${this.msg.cata_id}&sort=${this.sortTypeNum}&page=${this.brandnameNum}&order=&is_self=${this.brandNum?1:0}&price=${this.price}&location_id=${this.locateNum}&cata_id=&attr=`)
			    .then((res)=>{
			    	this.productdata = res.data.data.goods_list
	    		})
			},
			more(){
				if(this.num === 3){
					
					this.num = this.sortdata.location.length
				}else{
					this.num = 3
				}
			},
			sortSel(type, orderBy){
				this.isOrderShow = false
				this.order = type + orderBy
				this.orderBy = orderBy
				this.sortTypeNum = type
				this.$store.state.products.sort = type
				this.$store.state.products.order = orderBy
				this.$store.dispatch('getorder')
//				console.log(type, orderBy)
				axios.get(`http://api.restful.5lux.com.cn/good/cata_goods_list?id=${this.msg.cata_id}&sort=${type}&page=${this.brandnameNum}&order=${orderBy}&is_self=${this.brandNum?1:0}&price=${this.price}&location_id=${this.locateNum}&cata_id=&attr=`)
			    .then((res)=>{
			    	this.productdata = res.data.data.goods_list
			    	console.log(this.productdata)
	    		})
			}
		}
	}
</script>

<style lang="scss" scoped>
	.isAct{
		color: #9b885f;
		border: 1px solid #9b885f;
	}
	.shopSortOrderBy{
		position: absolute;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.3);
		/*z-index: 105;*/
		top: 83px;
	}
	.sortBy{
		width: 100%;
		height: 228px;
		padding: 6px 27px;
		background: white;
		li{
			width: 100%;
			height: 36px;
			color: #999;
			text-align: left;
		}
	}
</style>