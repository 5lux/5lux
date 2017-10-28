<template>
	<div class="mineWrap">
		<div class="mineHead">
			<div class="mineGoback iconfont" @click="goback">&#xe61a;</div>
			<p>登录第五大道</p>
		</div>
		<section>
			<div class="user">
				
				<input type="text" placeholder="请输入手机号/邮箱/用户名" v-model="username" @keyup="judge"/>
			</div>
			<div class="errorUsername" v-if="userIsCorrect">
				用户名输入错误
			</div>
			<div class="password">
				
				<input :type="passShow?'password':'text'" placeholder="请输入密码" v-model="passwords" @keyup="judge"/>
				<div class="errorPassword" v-if="passIsCorrect">
					密码输入错误
				</div>
				<div class="passShow" @click="passShowChange">{{passShow?'显示':'隐藏'}}</div>
			</div>
			<div class="loginBtn" @click="login" :style="{background: notLogin?'#7e8c8d':'#ccb27f'}">登录</div>
			<dir class="findPassword" @click="forgetPass">忘记密码？</dir>
			<div class="register" @click="register">用户注册</div>
		</section>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				passShow: true,
				username: '',
				passwords:'',
				notLogin: true,
				
				userIsCorrect: false,
				passIsCorrect: false
			}
		},
		methods:{
			goback(){
				this.$router.go(-1)
			},
			passShowChange(){
				this.passShow = !this.passShow
			},
			register(){
				this.$router.push("/register")
			},
			forgetPass(){
				
			},
			judge(){
				if(this.username===''||this.passwords===''){
					this.notLogin = true
				}else{
					this.notLogin = false
				}
			},
			login(){
				if(this.username!=''||this.passwords!=''){
					this.notLogin = false
					if(this.username!=this.$store.state.correctUser){
						this.userIsCorrect = true
					}else{
						this.userIsCorrect = false
					}
					if(this.passwords!=this.$store.state.correctPass){
						this.passIsCorrect = true
					}else{
						this.passIsCorrect = false
					}
				}
				if(this.userIsCorrect==false&&this.userIsCorrect==false){
					console.log('login success')
					this.$router.push('/myInfo')
				}
			}
		}
	}
</script>

<style>
</style>