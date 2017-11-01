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
		mounted(){
			var list = document.cookie.split("; ");
			var cooklist;
			for(var i = 0; i < list.length; i++) {
				cooklist = list[i].split("=");
				for(var j=0;j<this.$store.state.correctUser.length;j++){
					
					if('name' === cooklist[0]&&cooklist[1]==this.$store.state.correctUser[j]) {
						this.$router.push("/myInfo")
					}
				}
			}
		},
		methods:{
			goback(){
				this.$router.push('/')
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
				this.userIsCorrect= false
				this.passIsCorrect= false
				var j;
				if(this.username!=''||this.passwords!=''){
					this.notLogin = false
					for(var i=0;i<this.$store.state.correctUser.length;i++){
						if(this.username!=this.$store.state.correctUser[i]){
							this.userIsCorrect = true
						}else{
							this.userIsCorrect = false
							if(this.passwords!=this.$store.state.correctPass[i]){
								this.passIsCorrect = true
							}else{
								this.passIsCorrect = false
								j=i
								break
							}
						}
					}
				}
				if(this.userIsCorrect==false&&this.userIsCorrect==false){
					var date = new Date();
					date.setDate(date.getDate() + 7);
					document.cookie = 'name' + "=" + this.$store.state.correctUser[j] + ";" + "expires=" + date + ";" + "path=" + "/;"
					this.$router.push('/myInfo')
				}
			}
		}
	}
</script>

<style>
</style>