<template lang="html">
	<div class="shopIndexStore">
		<div class="shop-index-banner">
			<mt-swipe :auto="2000">
			  <mt-swipe-item>
			  	<a href="#">
			  		<img src="http://img550.5lux.com.cn/2017/10/19/bc/150838149832_1440x520.jpg"/>
			  	</a>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<a href="#">
			  		<img src="http://img550.5lux.com.cn/2017/10/18/de/150829035724_1440x520.jpg"/>
			  	</a>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<a href="#">
			  		<img src="http://img550.5lux.com.cn/2017/10/17/wx/150822739672_1440x520.jpg" alt="" />
			  	</a>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<a href="#">
			  		<img src="http://img550.5lux.com.cn/2017/10/16/pq/150812239219_1440x520.jpg"/>
			  	</a>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<a href="#">
			  		<img src="http://img550.5lux.com.cn/2017/10/12/de/150777952298_1440x520.jpg"/>
			  	</a>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<a href="#">
			  		<img src="http://img550.5lux.com.cn/2017/10/11/hi/150769006089_1440x520.jpg"/>
			  	</a>
			  </mt-swipe-item>
			  <mt-swipe-item>
			  	<a href="#">
			  		<img src="http://img550.5lux.com.cn/2017/04/18/ef/149247926655_1440x520.jpg"/>
			  	</a>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="shop-index-sort">
			<ul>
				<li>
					<i class="yo-ico">&#xe65a;</i>
					<div>
						分类
					</div>
				</li>
				<li>
					<i class="yo-ico">&#xe60e;</i>
					<div>
						专柜自提
					</div>
				</li>
				<li>
					<i class="yo-ico">&#xe613;</i>
					<div>
						会员特权
					</div>
					</li>
				<li>
					<i class="yo-ico">&#xe623;</i>
					<div>
						礼品
					</div>
					</li>
			</ul>
		</div>
		<div class="sisBanner">
			<mt-swipe :auto="0">
			  <mt-swipe-item v-for="(imgs,i) in dataList" @touchend.native='changePro(i)' :ref="i+1">
			  	<img :src="imgs.img_url"/>
			  	<p>{{imgs.title}}</p>
			  </mt-swipe-item>
			</mt-swipe>
		</div>
		<fashionShop :message="dataPro"></fashionShop>
		<div class="sisBtn"><p>查看所有旗舰店></p></div>
		<shop-fashion></shop-fashion>
	</div>
</template>

<script>
	import axios from 'axios';
	import 'mint-ui/lib/style.css';
	import fashion from './ShopIndexFashion.vue';
	import Vue from 'vue';
	import { Swipe, SwipeItem } from 'mint-ui';
	import fashionShop from './FashionShop.vue';
	import shopFashion from './ShopIndexFashion';
	
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	export default {
		data(){
			return {
				dataList: [],
				dataPro: [],
				index: 1,
			}
		},
		methods: {
			changePro(index) {
				setTimeout(function(){
					
					this.index = index
					var pre = (/is-active/).test(this.$refs[index%this.dataList.length?index%this.dataList.length:this.dataList.length][0].$el.className)
					
					var next = (/is-active/).test(this.$refs[(index+2)%this.dataList.length?(index+2)%this.dataList.length:this.dataList.length][0].$el.className)
					
					var now = (/is-active/).test(this.$refs[(index+1)%this.dataList.length?(index+1)%this.dataList.length:this.dataList.length][0].$el.className)
					if(now){
						this.dataPro = this.dataList[index%this.dataList.length].store_infos
					}else{
						if(pre){
							if(index-1<0){
								index = 4
							}
							this.dataPro = this.dataList[(index-1)%this.dataList.length].store_infos
						}else{
						
							this.dataPro = this.dataList[(index+1)%this.dataList.length].store_infos
						}
					}
				}.bind(this),400)


			}
		},
		components: {
		    fashionShop,
		    shopFashion
		},
		mounted() {
		    axios.get('/abc')
		    .then((res)=>{
		        const data = res.data.data
		        this.dataList = data
		        this.dataPro = data[this.index-1].store_infos
		    })
		}
	}
</script>


