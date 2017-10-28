<template>
	<div class="register">
		
		<div class="mineHead">
			<div class="mineGoback iconfont" @click="goback">&#xe61a;</div>
			<p>用户注册</p>
		</div>
		<div class="reUsername">
			<input type="text" placeholder="请输入手机号"/>
		</div>
		<div class="rePassword">
			<input type="text" placeholder="请输入6-20位数字、字母或符号"/>
		</div>
		<div class="reCheck">
			<input type="text" placeholder="图形验证码"/>
			<div class="checkNum">
				换一换
				<img src="../assets/images/150606971460_750x586.jpg"/>
			</div>
		</div>
		<div class="renextBtn">
			下一步
		</div>
		<p>点击注册，表示同意<span>《第五大道用户服务协议》</span></p>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				
			}
		},
		methods:{
			goback(){
				this.$router.go(-1)
			}
		}
	}
</script>

<style>
</style>