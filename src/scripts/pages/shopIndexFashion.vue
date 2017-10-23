<template lang="html">
	<div class="shopFashion">
		<div class="fashion_video">
			<h4>时尚发布厅</h4>
			<h5>—— FASHION&nbsp;TV —— </h5>
			<ul>
				<li v-for="value in dataList">
					<a :href="value.ad_link">
						<img :src="value.ad_code"/>
					</a>
					
					<p>{{value.ad_name}}</p>
				</li>
			</ul>
		</div>
		<div class="sameAsFamous">
			<h4>明星同款</h4>
			<h5>—— STAR&nbsp;OUTFITS —— </h5>
			<a :href="data.star_outfits.list.ad_link">
				<img :src="data.star_outfits.list.ad_code"/></a>
			<p>{{data.star_outfits.list.ad_name}}</p>
		</div>
		<div class="fashion_video">
			<h4>海外馆</h4>
			<h5>—— OVERSEAS —— </h5>
			<ul>
				<li v-for="value in data.oversea_recommend.list">
					<a :href="value.ad_link">
						<img :src="value.ad_code"/>
					</a>
					<p>{{value.ad_name}}</p>
				</li>
			</ul>
		</div>
		<div class="fashion_video">
			<h4>会员专场</h4>
			<h5>—— VIP&nbsp;SPECIAL —— </h5>
			<ul>
				<li v-for="value in data.vip_special.list">
					<a :href="value.ad_link">
						<img :src="value.ad_code"/>
					</a>
					<p>{{value.ad_name}}</p>
				</li>
			</ul>
		</div>
		<div class="fashionLatest">
			<h4>最新上架</h4>
			<h5>—— LATEST —— </h5>
			<ul>
				<li v-for="value in data.new_recommend.list">
					<a :href="value.ad_link">
						<img :src="value.ad_code"/>
					</a>
					<p>{{value.ad_name}}</p>
				</li>
			</ul>
		</div>
		<div class="fashionFlagship">
			<h4>旗舰店</h4>
			<h5>—— FLAGSHIP&nbsp;STORES —— </h5>
			<ul>
				<li v-for="value in data.top5flag.list">
					<a :href="value.ad_link">
						<img :src="value.ad_code"/>
					</a>
					<img :src="value.brand_logo"/>
					<p>{{value.ad_name}}</p>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	export default {
		data(){
			return {
				dataList:[],
				data: []
			}
		},
		mounted() {
		    axios.get('http://api.restful.5lux.com.cn/shop/home_all_info')
		    .then((res)=>{
		    	this.data = res.data.data
		        const data = res.data.data.fashion_video.list
		        this.dataList = data
		    })
		}
	}
</script>
