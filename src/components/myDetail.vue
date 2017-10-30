<template>
	<div class="detailWrap">
		<!--未加载出来之前块-->
		<div class="bacImg" v-if="isBacshow"><img src="../assets/images/Star_Ring_loading-01-05.png" /></div>
		<!--加载出来之后块-->
		<div class="posShow" v-if="!isBacshow">
			<div class="detailHeader detailHeader1">
				<div class="backLeft" @click="backToform">←</div>
				<ul class="topMenu">
					<li class="toRight">商品</li>
					<li>详情</li>
					<li>推荐</li>
				</ul>
			</div>
			<div class="detailPosout">
				<div class="detailPosinner">
					<!--轮播图-->
					<mt-swipe :auto="20000" :show-indicators="false" @change="handleChange">
					  <mt-swipe-item v-for="(swiimg,index) in swiperList"><img   v-lazy="swiimg.filepath" /></mt-swipe-item>
					  
					</mt-swipe>
					<div class="swiperPos">{{swiperIndex}}/{{swiperNum}}</div>
					<div class="detailInfo">
						<div class="infoPrice">
							<div class="price1"><span>￥</span>{{goods_info.product_price}}</div>
							<div class="price2">￥{{goods_info.market_price}}</div>
							<div class="price3">红卡价></div>
						</div>
						<div class="infoStore">
							<div class="div1">{{goods_info.good_name}}</div>
							<div class="div2">
								<p class="p1">3-5个工作日</p>
								<p class="p2">{{goods_info.mbpage_title}}发货</p>
							</div>
						</div>
					</div>
					<div class="serverInfo">
						<div class="server1">
							<div class="div1">满赠</div>
							<div class="div2">订单满9999元送价值1199元时尚管家</div>
						</div>
						<ul class="serverList">
							<li><img src="../assets/images/choice.png" />正品保证</li>
							<li><img src="../assets/images/choice.png" />包邮</li>
							<li><img src="../assets/images/choice.png" />7天退换货</li>
							<li><img src="../assets/images/choice.png" />慢必赔</li>
							<li><img src="../assets/images/choice.png" />售后服务</li>	
						</ul>
						
					</div>
					<div class="stateInfo">
						<div class="div1" @click="changesheetVisible"><p class="p1">产品参数</p><p class="p2">></p></div>
						<div class="div2" @click="changecolorVisible">
							<p class="p1">选择:<span>颜色/尺码</span></p>
							<p class="p2">></p>
						</div>
					</div>
					<div class='picInfo' v-for="val in banner_adv_info">
						<img v-lazy="val.silde_original" />
					</div>
					<!--品牌介绍开始-->
					<div class="productJie">
						<img v-lazy="brand_info.brand_img_url" />
						<div class="div1">{{brand_info.brand_title}}</div>
						<div class="div2">{{brand_info.brand_content}}</div>
					</div>
					<!--品牌介绍结束-->
					<!--猜你喜欢和推荐块-->
					<div class="guessInfo">
						<p class="pTop">猜你喜欢</p>
						<ul class="list">
							<li v-for="val in you_like">
								<img v-lazy="val.thumb" />
								<p class="p1">{{val.sku_title}}</p>
								<p class="p2">￥{{val.product_price}}</p>
							</li>
						</ul>
					</div>
					<div class="recommendationInfo">
						<p class="pTop">精品推荐</p>
						<ul class="list">
							<li v-for="val in recommend">
								<img v-lazy="val.thumb" />
								<p class="p1">{{val.sku_title}}</p>
								<p class="p2">￥{{val.product_price}}</p>
							</li>
						</ul>
					</div>
					<!--猜你喜欢和推荐块结束-->
					<!--产品参数弹出框开始-->
					<div class="mint-actionsheet mint-actionsheet1" style="z-index: 2003;" v-show="sheetVisible">
						<ul class="mint-actionsheet-list" >
							<li class="mint-actionsheet-listitem" v-for="(val,index) in para_arr"><p>{{val}}</p></li>
							
						</ul> 
						<a class="mint-actionsheet-button" @click="changesheetVisible">确定</a>
					</div>
					<div class="v-modal" style="z-index: 2000" v-show="sheetVisible"></div>
					<!--产品参数弹出框结束-->
					<!--选择颜色弹出框开始-->
					<div class="mint-actionsheet mint-actionsheet2" style="z-index: 2003;" v-show="colorsizeVisible">
							<div class="picInfo">
								<div class="divLeft"><img v-lazy="swiperList[0].filepath"/></div>
								<div class="divRight">
									<p class="p1">{{goods_info.good_name}}</p>
									<p class="p2">￥{{goods_info.product_price}}x{{good_num}}</p>
									<p class="p3"><span v-for="val in sku_all">{{val.attr_name}}:{{val.attr_val[0].attr_value}}</span></p>
								</div>
							</div>
							<div class="colorInfo" v-if="isSkushow" v-for="val in sku_all">
								<p>{{val.attr_name}}</p>
								<ul>
									<li class="isColoractive" v-for="spi in val.attr_val">{{spi.attr_value}}</li>
									
								</ul>
							</div>
							<div class="numInfo">
								<p class="numTop">数量</p>
								<div class="numChange">
									<span class="numMinus" @click="numMinus">-</span>
									<input type="text" v-model="good_num" />
									<span class="numAdd" @click="numAdd">+</span>
								</div>
							</div>
						<a class="mint-actionsheet-button" @click="joinShopcar" @mouseup="changecolorVisible" >加入购物车</a>
					</div>
					<div class="v-modal" style="z-index: 2000" v-show="colorsizeVisible"></div>
					<!--选择颜色弹出框结束-->
				</div>
			</div>
			
		</div>
		<!--底部加入购物车开始-->
		<div class="foot" v-if="!isBacshow">
			<div class="div1">
				<img src="../assets/images/ke.png" />
				<p>客服</p>
			</div>
			<div class="div2">
				<i class="iconfont">&#xe60c;</i>
				<p>购物袋</p>
			</div>
			<div class="shopCar">加入购物袋</div>
			<div class="buyNow">立即购买</div>
		</div>
		<!--底部加入购物车结束-->
	</div>
</template>

<script>
	import Vue from "vue";
	import axios from "axios";
	import { Lazyload } from 'mint-ui';
	Vue.use(Lazyload);
	import { Swipe, SwipeItem } from 'mint-ui';
	Vue.component(Swipe.name, Swipe);
	Vue.component(SwipeItem.name, SwipeItem);
	import { Actionsheet } from 'mint-ui';
	Vue.component(Actionsheet.name, Actionsheet);
	export default{
		data(){
			return {
				para_arr:[],
				swiperList:[],
				isBacshow:true,
				swiperNum:"",
				swiperIndex:1,
				sheetVisible:false,
				colorsizeVisible:false,
				goods_info:[],
				banner_adv_info:[],
				brand_info:[],
				you_like:[],
				recommend:[],
				isarrActive:[],
				sku_all:[],
				isSkushow:false,
				good_num:1
			}
		},
		methods:{
			
				set(name, value, d, path) {
					var date = new Date();
					date.setDate(date.getDate() + d);
					document.cookie = name + "=" + value + ";" + "expires=" + date + ";" + "path=" + path + ";"
				},
				get(name) {
					var list = document.cookie.split("; ");
					for(var i = 0; i < list.length; i++) {
						var cooklist = list[i].split("=");
						if(name == cooklist[0]) {
							return cooklist[1];
						}
					}
					return null;
				}
			,

			handleChange(index){
				this.swiperIndex=index+1;
			},
			changesheetVisible(){
				this.sheetVisible=!this.sheetVisible;
			},
			changecolorVisible(){
				this.colorsizeVisible=!this.colorsizeVisible;
				
			},
			backToform(){
				this.$router.go(-1);
			},
			numMinus(){
				if(this.good_num>=2){
					this.good_num--;
				}
			},
			numAdd(){
				this.good_num++;
			},
			joinShopcar(){
				var goods_str="";
				
				if(this.get("goods_str")!==null){
					goods_str=this.get("goods_str");
					var shopCar_goods=JSON.parse(goods_str);
				}else{
					var shopCar_goods=[];
				}
				var that=this;
//				加入购物车点击,向cookie中存信息
				var arr=[];
				if(this.sku_all.length!=0){
					for(var i=0;i<that.sku_all.length;i++){
						var name1="parameter"+(i+1)+"_name";
						var good1=that.sku_all[i].attr_name;
						var name2="parameter"+(i+1)+"_info";
						var good2=that.sku_all[i].attr_val[0].attr_value;
						var goods_obj={};
						goods_obj.name1=good1;
						goods_obj.name2=good2;
						arr.push(goods_obj);
					}
				}
				var goods_infomation=[		
						{brand_name:that.goods_info.mbpage_title},
						{good_img:that.swiperList[0].filepath},
						{good_name:that.goods_info.good_name},
						{good_price:that.goods_info.product_price},
						{good_number:that.good_num}					
				];
				var newArr=goods_infomation.concat(arr);
//				console.log(newArr);
//				console.log(shopCar_goods.length);
				if(shopCar_goods.length!=0){
//					shopCar_goods.push(newArr);
					var index=0;
					for(var j=0;j<shopCar_goods.length;j++){
						if(newArr[3].good_price==shopCar_goods[j][3].good_price){
							var newNum=shopCar_goods[j][4].good_number;
							newNum+=Number(newArr[4].good_number);
							shopCar_goods[j][4].good_number=newNum;
							break;
						}else{
							index++;
							if(index==shopCar_goods.length){
								shopCar_goods.push(newArr);
							}
						}
						
					}
					
				}else{
					shopCar_goods.push(newArr);
				}
				goods_str=JSON.stringify(shopCar_goods);
				this.set("goods_str",goods_str,30,"/");
				console.log(JSON.parse(this.get("goods_str")));
			}
		},
		mounted(){
			axios.get("http://api.restful.5lux.com.cn/good/goodsdetail/?id="+this.$route.query.product_id)
			.then((res)=>{
				this.isBacshow=false;
				this.swiperList=res.data.data.goods_gallery;
				this.swiperNum=res.data.data.goods_gallery.length;
				this.goods_info=res.data.data.goods_info;	
//				console.log(res.data.data);
				this.para_arr=res.data.data.para_arr;
				if(res.data.data.sku.length!=0){
					this.sku_all=res.data.data.sku.all;
					this.isSkushow=true;
					console.log(res.data.data.sku.all);
				}
			});
			axios.get("http://api.restful.5lux.com.cn/good/goodsdetail_bannerads?brand_id=28&cata_id=74&product_id="+this.$route.query.product_id)
			.then((res)=>{
				this.banner_adv_info=res.data.data.banner_adv_info;
				
			});
			axios.get("http://api.restful.5lux.com.cn/index.php/good/goodsdetail_desc/?goods_id="+this.$route.query.product_id)
			.then((res)=>{
				this.brand_info=res.data.data.goods_detail_desc.brand_info[0];
				
			});

			axios.get("http://api.restful.5lux.com.cn/good/goodsdetail_recommend/?product_id="+this.$route.query.product_id)
			.then((res)=>{
				this.you_like=res.data.data.you_like;
				this.recommend=res.data.data.recommend;
				
			});
			
		}
	}
</script>

<style lang="scss">
	.bacImg{
		width:100%;
		height:100%;
		text-align: center;
		/*line-height:100%;*/
		padding-top:2.4rem;
		font-size:14px;
		img{
            width:0.8rem;
            height:0.8rem;
            animation:mymove 1s linear infinite;
        }
        @keyframes mymove{
            from {transform:rotate(0deg)}
            to {transform:rotate(360deg)}
        }
	}
	.isColoractive{
		border:1px solid #9b885f !important;
		color:#9b885f !important;
	}
	
</style>