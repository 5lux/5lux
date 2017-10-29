<template>
	<div class="login">
		<header>
			<img src="../assets/images/timg.jpg"/>
			<img src="../assets/images/touxiang.jpg"/>
			<i class="iconfont" @click="signout">&#xe7a0;</i>
			<i class="iconfont">&#xe603;</i>
			<div class="loginedUer">
				用户名:{{user}}
			</div>
		</header>
		<section>
			<dl>
				<dt>
					<div class="mymoreHead">我的订单</div>
					<div class="myMore iconfont">查看全部&#x343c;</div>
				</dt>
				<dd>
					<ul>
						<li>
							<i class="iconfont">&#xe62c;</i>
							<p>待付款</p>
						</li>
						<li>
							<i class="iconfont">&#xe617;</i>
							<p>代收货</p>
						</li>
					</ul>
				</dd>
			</dl>
			<dl>
				<dt>
					<div class="mymoreHead">我的资产</div>
					<div class="myMore iconfont">查看全部&#x343c;</div>
				</dt>
				<dd>
					<ul>
						<li>
							<i class="iconfont">&#xe782;</i>
							<p>优惠券</p>
						</li>
						
					</ul>
				</dd>
			</dl>
			<div class="tel">
				客服电话：<span>400-867-6738</span>
			</div>
		</section>
		<footer>
			<ul>
				<router-link to="/myPosition" tag="li">
					<i class="iconfont">&#xe606;</i>
					<span>首页</span>
				</router-link>
				<router-link to="/ShopIndexFashion" tag="li">
					<i class="iconfont">&#xe629;</i>
					<span>商城</span>
				</router-link>
				<router-link to="/myGoshop" tag="li">
					<i class="iconfont">&#xe60a;</i>
					<span>到店</span>
				</router-link>
				<router-link to="/myFaction" tag="li">
					<i class="iconfont">&#xe61d;</i>
					<span>时尚圈</span>
				</router-link>
				<router-link to="/Mine" tag="li" style="color: white;">
					<i class="iconfont" >&#xe61e;</i>
					<span>我的</span>
				</router-link>
			</ul>
		</footer>
	</div>
</template>

<script>
	import "../assets/iconfont/addMore/iconfont.ttf";
	import "../assets/iconfont/addMore/iconfont.woff";
	import "../assets/iconfont/more/iconfont.ttf";
	import "../assets/iconfont/more/iconfont.woff";
	export default{
		data(){
			return {
				user: ''
			}
		},
		mounted(){
			
			var list = document.cookie.split("; ");
			var cooklist;
			for(var i = 0; i < list.length; i++) {
				cooklist = list[i].split("=");
				if('name' === cooklist[0]) {
					this.user = cooklist[1]
				}
			}
		},
		methods:{
			signout(){
				var date = new Date();
				date.setDate(date.getDate() + 7);
				document.cookie = 'name' + "=" + '' + ";" + "expires=" + date + ";" + "path=" + "/;"
				this.$router.push('/Mine')
			}
		}
	}
</script>

<style lang="scss" scoped>
	.login{
		width: 100%;
		height: 100%;
		
		header{
			width: 100%;
			height: 192px;
			position: relative;
			img:nth-child(1){
				width: 100%;
				height: 192px;
			}
			img:nth-child(2){
				width: 60px;
				height: 60px;
				border-radius: 50%;
				position: absolute;
				top: 80px;
				left: 15px;
			}
			i:nth-child(3){
				float: left;
				position: absolute;
				top: 10px;
				left: 20px;
				font-size: 24px;
				color: white;
			}
			i:nth-child(4){
				float: right;
				position: absolute;
				top: 10px;
				right: 20px;
				font-size: 24px;
				color: white;
			}
			.loginedUer{
				position: absolute;
				left: 90px;
				top: 100px;
				font-size: 20px;
				color: white;
			}

		}
		section{
			dl{
				width: 100%;
				height: 108px;
				background: white;
				dt{
					width: 100%;
					height: 44px;
					padding: 0 15px;
				
					border-bottom:1px #eee solid;
					.mymoreHead{
						float: left;
						width: 100px;
						height: 44px;
						font-size: 14px;
						line-height: 44px;
					}
					.myMore{
						float: right;
						width: 75px;
						height: 44px;
						font-size: 14px;
						line-height: 44px;
					}
				}
				dd{
					padding: 0 15px;
					width: 100%;
					height: 64px;
					li{
						width: 75px;
						height: 40px;
						margin: auto 0;
						float: left;
						font-size: 16px;
						
						text-align: center;
						i{
							font-size: 24px;
						}
						p{
							font-size: 14px;
						}
					}
				}
			}
			dl:nth-child(2){
				margin-top: 10px;
			}
			.tel{
				margin-top: 10px;
				height: 44px;
				width: 100%;
				background: white;
				font-size: 14px;
				line-height: 44px;
				padding-left: 15px;
				span{
					color: #9b885f;
				}
			}
		}
		footer{
            height:44px;
            width:100%;
            overflow: hidden;
            background: #000;
            font-size:12px;
            position: absolute;
            bottom: 0;
                ul{
                    width:100%;
                    height:100%;
                    display: flex;
                    li{
                        flex: 1;
                        height:100%;
                        color:white;
                        text-align: center;
                        color:#7e8c8d;
                        span{
                        	display: block;
                        }
                        .router-link-active i,
                        .router-link-active span{
                            color:#fff;
                        }
                    }
                }
            
        }
	}
</style>