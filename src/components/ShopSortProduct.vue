<template lang="html">
	<div>
		<ul class="shopSortProduct">
			<li v-for="value in data">
				<img v-lazy="value.product_img"/>
				<div class="shopSortProductDetail">
					
					<p>{{value.brand_en_name}}</p>
					<p>{{value.name}}</p>
					<p>¥{{value.product_price}}<span>¥{{value.promote_price}}</span></p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props:[
			'data'
		],
		mounted(){
		}
	}
</script>

<style lang="css" scoped>
	span:nth-of-type(1){
		text-decoration:line-through;
	}
	
	img[lazy=loading] {
	    width: 100%;
	    height: 1.6rem;
	    background:url(../assets/images/good_load.gif) ;
	    background-size:100% 100% ;
	}
	img[lazy=error] {
	    width: 100%;
	    height: 1.6rem;
	    background:url(../assets/images/good_load.gif) ;
	    background-size:100% 100% ;
	}
</style>