<template>
	<div class="myFaction">
		<ul>
			<li>值得买</li>
			<li>直播</li>
			<li>视频</li>
			<li>活动</li>
		</ul>
		<div class="myFactioncenter">
			<ul>
				<li v-for="value in data">
					<div class="title">
						<img :src="value.publiser.url"/>
						{{value.publiser.nickname}}
						<div class="focus">
							+关注
						</div>
					</div>
					<img :src="value.thumb_info.thumb"/>
					<div class="shareTitle">
						<dl>
							<dt>
								{{value.share_content}}
							</dt>
							<dd>
								{{value.thumb_info.content}}
							</dd>
						</dl>
						
					</div>
					<ul>
						<li>
							<i class="iconfont">&#xe60a;</i>
							<span>{{value.liked_count}}</span>
						</li>
						<li>
							<i class="iconfont">&#xe601;</i>
							<span>{{value.views}}</span>
						</li>
						<li>
							<i class="iconfont">&#xe694;</i>
							<span>{{value.tag_count}}</span>
						</li>
					</ul>
					
					
				</li>
				<li></li>
			</ul>
		</div>
	</div>
</template>

<script>
	import "../assets/iconfont/myFaction/iconfont.ttf";
	import "../assets/iconfont/myFaction/iconfont.woff";
	import axios from 'axios';
	import Vue from 'vue';
	export default{
		data(){
			return {
				data: []
			}
		},
		mounted(){
			axios.get('http://api.restful.5lux.com.cn/fashion/worthbuy_list?mtoken=&page=1')
		    .then((res)=>{
		    	this.data= res.data.data.list
		    })
		}
	}
</script>