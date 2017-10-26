<template lang="html">
	<div class="posContainer">
		<!--下拉刷新-->
		<div id="pullDown">
            <span class="pullDownIcon"></span><span class="pullDownLabel">下拉刷新...</span>
        </div>
        <!--下拉刷新结束-->
		<!--<my-search></my-search>-->
		<div class="swiper-container">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="(swiimg,index) in dataList"><img :src="swiimg.silde_original" /></div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination" ></div>
		</div>
		<!--轮播图下方的菜单导航-->
		<ul class="menuList">
			<li>
				<i class="iconfont">&#xe63f;</i>
				<span>上新</span>
			</li>
			<li>
				<i class="iconfont">&#xe66f;</i>
				<span>海外馆</span>
			</li>
			<li>
				<i class="iconfont">&#xe60c;</i>
				<span>值得买</span>
			</li>
			<li>
				<i class="iconfont">&#xe61a;</i>
				<span>闪购</span>
			</li>
			<li>
				<i class="iconfont">&#xe604;</i>
				<span>品牌</span>
			</li>
		</ul>
		<ul class="memberList">
			<li v-for="val in memberList"><img :src="val.ad_code" alt="" /></li>
		</ul>
		<!--会员尊享-->
		<div class="shareList">
			<div class="bigShare"><a href="#"><img :src="shareImg" /></a></div>
			<ul class="sLists">
				<li v-for="val in shareList"><a href="#"><img :src="val.ad_code" /></a></li>
			</ul>
		</div>
		<!--第五大道8年0假货及下方一张图片-->
		<div class="imgA"><img :src="imgA" /></div>
		<div class="imgB"><img :src="imgB" /></div>
		<!--article_list块-->
		<div class="article_list">
			<div class="articleImg">
				<img src="http://img550.5lux.com.cn/2017/10/20/vw/150850049258_750x586.jpg" />
				<span></span>
			</div>
			<div class="article_box">
				<p class="p1">毛绒绒Fendi怪兽 开启你的趣味之旅</p>
				<p class="p2">2017年秋冬新品已经全面上市啦，唯独有Fendi引起了小编的注意，毛绒绒的钥匙扣和倒“F”包包都是玩味十足。</p>
			</div>
			<div class="articleBorder"></div>
			<div class="argoodsBox">
				<ul class="argoodsList">
					<li v-for="val in 10">
						<img src="http://img550.5lux.com.cn/2017/09/08/de/150482786180_1320x1320_800x800_350x350.jpg" />
						<span class="span1">Fendi芬迪</span>
						<span class="span2">￥14428</span>
					</li>
				</ul>
			</div>
			
		</div>
		<!--上拉加载-->
		<div id="pullUp">
            <span class="pullUpIcon"></span><span class="pullUpLabel">上拉加载更多...</span>
        </div>
		<!--上拉加载结束-->
	</div>
</template>

<script>
	import mySearch from "./mySearch.vue";
  
	export default {
		data(){
			return {
				dataList:[],
				memberList:[],
				shareList:[],
				shareImg:"",
				imgA:"",
				imgB:"",
				article_list:[]
			}
		},
		components:{
			mySearch:mySearch
		},
		mounted() {
//			轮播图
	    	axios.get('http://api.restful.5lux.com.cn/index/index_slider')
		    	.then((res)=>{
		      	const dataList = res.data.data;
		        this.dataList = dataList;
	//	        this.isShowloading = false
	      	});
//	      	四张小图
	      axios.get('http://api.restful.5lux.com.cn/index/columu_recommend')
	      	.then((res)=>{
		        const memberData = res.data.data;
		        this.memberList = memberData;
	//	        this.isShowloading = false
	      	});
//	      	会员尊享及下方四张小图片
	      	axios.get('http://api.restful.5lux.com.cn/index/other_advert')
	      	.then((res)=>{
		    	const thisList=res.data.data.vip_member;
		    	this.shareImg=thisList[0].ad_code;
		    	this.shareList=thisList.slice(1);
		    	console.log(res);
		    	this.imgA=res.data.data.buy_list[0].ad_code;
		    	this.imgB=res.data.data.current_topic[0].ad_code;
//		    	商品描述列表等页面块
				this.article_list=res.data.data.article_list;
				
	//	        this.isShowloading = false
	      	});
//	      	下拉刷新函数
	      	function pullDown(){
	      		
	      	}
	 },
	 updated(){
	 	//	初始化swiper
		var mySwiper = new Swiper ('.swiper-container', {
		    pagination: '.swiper-pagination',
        	paginationClickable: true,
        	loop:true,
        	autoplay:2000
		});  
		var myScroll=new IScroll('.banner', {
			scrollY: true,
			scrollbars:true,
			fadeScrollbars:true,
			shrinkScrollbars:"scale"
		});
		myScroll.on("scroll",function(){
			console.log("滚动条滚动了");
		});
		myScroll.on("scrollEnd",function(){
			console.log("滚动条滚动结束");
		});
	 }
	}
</script>

<style lang="scss">
	#pullDown{
		width:100%;
		height:30px;
		text-align: center;
		line-height:30px;
	}
</style>