<template>
	<div class="register">
		
		<div class="mineHead">
			<div class="mineGoback iconfont" @click="goback">&#xe61a;</div>
			<p>用户注册</p>
		</div>
		<div class="reUsername">
			<input type="text" placeholder="请输入手机号" v-model="user" @keyup="username"/>
		</div>
		<div class="erroruser" v-if="isUser">
			用户名格式有误，请重新输入
		</div>
		<div class="rePassword">
			<input type="text" placeholder="请输入6-20位数字、字母或符号" v-model="pass" @keyup="password"/>
		</div>
		<div class="erroepass" v-if="isPass">
			密码格式有误，请重新输入
		</div>
		<div class="reCheck">
			<input type="text" placeholder="图形验证码" v-model="check"  @keyup="checked"/>
			<div class="checkNum" @click="change">
				换一换
				<img src="../assets/images/check/1799.png" v-if="i==0"/>
				<img src="../assets/images/check/38R9.png" v-if="i==1"/>
				<img src="../assets/images/check/476N.png" v-if="i==2"/>
				<img src="../assets/images/check/5US8.png" v-if="i==3"/>
				<img src="../assets/images/check/BDK4.png" v-if="i==4"/>
			</div>
		</div>
		<div class="errorCheck" v-if="isCheck">
			验证码有误，请重新输入
		</div>
		<div class="renextBtn" @click="next" :style="{background: cango?'red':'#ccc'}">
			下一步
		</div>
		<p>点击注册，表示同意<span>《第五大道用户服务协议》</span></p>
	</div>
</template>

<script>
	export default{
		data(){
			return {
				user: '',
				pass: '',
				check: '',
				isUser: false,
				isPass: false,
				isCheck: false,
				checknum: ['1799','38R9','476N','5US8','BDK4'],
				i: 0,
				cango: false
			}
		},
		methods:{
			goback(){
				this.$router.push('/Mine')
			},
			username(){
				if(/^1[3|5|7|8][0-9]{9}$/.test(this.user)){
					this.isUser = false
				}else{
					this.isUser = true 
				}
				if(this.user!= ''
				&&this.pass!= ''
				&&this.check!= ''){
					this.cango = true
				}
			},
			password(){
				if(/[0-9a-zA-Z]{6,20}/.test(this.pass)){
					this.isPass = false
				}else{
					this.isPass = true 
				}
				if(this.user!= ''
				&&this.pass!= ''
				&&this.check!= ''){
					this.cango = true
				}
			},
			change(){
				this.i++
				this.i=this.i%this.checknum.length
			},
			checked(){
				if(this.checknum[this.i]==this.check){
					this.isCheck = false
				}else{
					this.isCheck = true
				}
				if(this.user!= ''
				&&this.pass!= ''
				&&this.check!= ''){
					this.cango = true
				}
			},
			next(){
				if(this.check!=''&&this.user!=''&&this.pass!=''&&this.isCheck == false&&this.isPass == false&&this.isUser == false){
					var date = new Date();
					date.setDate(date.getDate() + 7);
					document.cookie = 'name' + "=" + this.user + ";" + "expires=" + date + ";" + "path=" + "/;"
					
					this.$store.state.correctUser.push(this.user)
					this.$store.state.correctPass.push(this.pass)
					this.$router.push('/myInfo')
				}
			}
		}
	}
</script>

<style lang="scss" scoped>
	.erroruser{
		margin-left: 40px;
		font-size: 12px;
		color: red;
	}
	.erroepass{
		margin-left: 40px;
		font-size: 12px;
		color: red;
	}
	.errorCheck{
		margin-left: 40px;
		font-size: 12px;
		color: red;
	}
</style>