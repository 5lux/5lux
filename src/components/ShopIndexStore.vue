<template lang="html">
	<div class="shopIndexStore">
		<img src="../assets/images/Star_Ring_loading-01-05.png" class="loading"  v-if="isFinished"/>
		<div class="shop-index-banner" v-show="!isFinished">
			<mt-swipe :auto="4000">
			  <mt-swipe-item v-for="img in imgs">
			  	
			  		<img v-lazy="img"/>
			  
			  </mt-swipe-item>
			  
			  
			  
			</mt-swipe>
		</div>
		<div class="shop-index-sort">
			<ul>
				<li>
					<i class="iconfont">&#xe65a;</i>
					<div>
						分类
					</div>
				</li>
				<li>
					<i class="iconfont">&#xe60e;</i>
					<div>
						专柜自提
					</div>
				</li>
				<li>
					<i class="iconfont">&#xe613;</i>
					<div>
						会员特权
					</div>
					</li>
				<li>
					<i class="iconfont">&#xe623;</i>
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
		
	</div>
</template>

<script>
	import Vue from 'vue';
	import axios from 'axios';
	import { Swipe, SwipeItem } from 'mint-ui';
	import fashionShop from './FashionShop.vue';
	
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	export default {
		data(){
			return {
				dataList: [],
				dataPro: [],
				index: 1,
				isFinished: true,
				imgs: ["http://img550.5lux.com.cn/2017/10/19/bc/150838149832_1440x520.jpg","http://img550.5lux.com.cn/2017/10/18/de/150829035724_1440x520.jpg","http://img550.5lux.com.cn/2017/10/17/wx/150822739672_1440x520.jpg","http://img550.5lux.com.cn/2017/10/16/pq/150812239219_1440x520.jpg","http://img550.5lux.com.cn/2017/10/12/de/150777952298_1440x520.jpg","http://img550.5lux.com.cn/2017/10/11/hi/150769006089_1440x520.jpg","http://img550.5lux.com.cn/2017/04/18/ef/149247926655_1440x520.jpg"]
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
		    fashionShop
//		    shopFashion
		},
		mounted() {
		    axios.get('http://api.restful.5lux.com.cn/shop/get_flagship_recommend')
		    .then((res)=>{
		        const data = res.data.data
		        this.dataList = data
		        this.dataPro = data[this.index-1].store_infos
		        this.isFinished = false
		    })
		}
	}
</script>

<style type="css" scoped>
	.loading{
        width:0.8rem;
        height:0.8rem;
        animation:mymove 1s linear infinite;
        margin-left: 35%; 
        margin-top: 60%;
    }
    @keyframes mymove{
        from {transform:rotate(0deg)}
        to {transform:rotate(360deg)}
    }
</style>
