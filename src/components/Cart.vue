<template>
	<div class="Cart">
		<div class="CartHead">
			购物车
			<span v-if="data.length>0&&isEdit">({{num}})</span>
			<div class="text">
				<span class="back iconfont" @click="back">&#xe61a;</span>
				<span class="edit" @click="edit">{{isEdit?'编辑':'完成'}}</span>
			</div>
		</div>
		<div class="CartCenter">
			<ul class="CartCenterSection">
				<div v-if="isEmpty" class="CartIsEmpty">
					您的购物车还没有商品，快去购物吧~~
				</div>
				<li v-for="(n,i) in data">
					<div class="CartCenterTitle iconfont" v-if="data[i].length">{{n[i].brand}} &#x343c;</div>
					<ul>
						<li v-for="(value,index) in data[i]">
							<div class="singleSelect iconfont" @click="singleSelect(i,index)" :style="{background: isSelect||allSingleSelect[i][index]?'#9b885f':'white'}">&#xe64d;</div>
							<img src="../assets/images/150606971460_750x586.jpg"/>
							<div class="CartCenterimport">
								<p>{{data[i][index].name}}</p>
								<p>{{data[i][index].pname}}</p>
								<p>{{data[i][index].type}}</p>
								<p>¥{{data[i][index].price}}</p>
								<div class="CartTodo" v-if="isEdit">
									<span @click="reduce(i,index)" :style="{color:data[i][index].num>1?'black':'#eee'}">-</span>
									<input type="text" :value="data[i][index].num"/>
									<span @click="add(i,index)">+</span>
								</div>
							</div>
						</li>
					</ul>
				</li>
			</ul>
		</div>
		<div class="CartFooter" v-if="isEdit">
			<div class="select iconfont" :style="{background: isSelect?'#9b885f':'white'}" @click="allSelect">
				&#xe64d;
			</div>
			<span>全选</span>
			<div class="productNum">
				<p>合计¥{{sum}}</p>
				<p>共计{{num}}件商品</p>
			</div>
			<div class="resultBtn">
				去结算
			</div>
		</div>
		<div class="CartFooter" v-if="!isEdit">
			<div class="resultBtn" @click="deletePro">
				删除
			</div>
		</div>
	</div>
</template>

<script>
	import "../assets/iconfont/more/iconfont.ttf";
	import "../assets/iconfont/more/iconfont.woff";
	export default {
		data(){
			return {
				data: '',
				isEdit: true,
				isSelect: true,
				allSingleSelect: [],
				num:0,
				isEmpty: false,
				sum: 0
			}
		},
		mounted(){
			this.data = this.$store.state.cartProduct
			for(var i=0;i<this.data.length;i++){
				this.allSingleSelect[i]=[]
				for(var j=0;j<this.data[i].length;j++){
					this.allSingleSelect[i].push(true)
					this.num += Number(this.data[i][j].num)
					this.sum += Number(this.data[i][j].num) * Number(this.data[i][j].price)
					
				}
			}

		},
		methods:{
			back(){
				this.$router.go(-1)
			},
			edit(){
				this.num = 0
				this.sum = 0
				this.isEdit = !this.isEdit
				if(this.isEdit===false){
					this.isSelect = false
					for(var i=0;i<this.data.length;i++){
						this.allSingleSelect[i]=[]
						for(var j=0;j<this.data[i].length;j++){
							this.allSingleSelect[i][j] = false
						}
					}
				}else{
					this.isSelect = true
					for(var i=0;i<this.data.length;i++){
						this.allSingleSelect[i]=[]
						for(var j=0;j<this.data[i].length;j++){
							this.allSingleSelect[i][j] = true
							this.num += Number(this.data[i][j].num)
							this.sum += Number(this.data[i][j].num) * Number(this.data[i][j].price)
						}
					}
				}
			},
			allSelect(){
				this.num = 0
				this.sum=0
				this.isSelect = !this.isSelect
				if(this.isSelect===true){
					for(var i=0;i<this.data.length;i++){
						this.allSingleSelect[i]=[]
						for(var j=0;j<this.data[i].length;j++){
							this.allSingleSelect[i][j]= true
							this.num += Number(this.data[i][j].num)
							this.sum += Number(this.data[i][j].num) * Number(this.data[i][j].price)
						}
					}
				}else{
					for(var i=0;i<this.data.length;i++){
						this.allSingleSelect[i]=[]
						for(var j=0;j<this.data[i].length;j++){
							this.allSingleSelect[i][j]=false
						}
					}
				}
			},
			singleSelect(i,index){
				this.num = 0
				this.sum = 0
				this.allSingleSelect[i][index] = !this.allSingleSelect[i][index]
				
				var flag = true
				
				for(var i=0;i<this.data.length;i++){
					for(var j=0;j<this.data[i].length;j++){
						if(this.allSingleSelect[i][j]===false){
							flag = false
						}else{
							
							this.num += Number(this.data[i][j].num)
							this.sum += Number(this.data[i][j].num) * Number(this.data[i][j].price)
						}
						
					}
				}
				this.isSelect = flag
				this.isSelect = !this.isSelect
				this.isSelect = !this.isSelect
			},
			reduce(i,j){
				if(Number(this.data[i][j].num)<=1){
					return 
				}else{
					this.data[i][j].num--
					this.sum -= Number(this.data[i][j].price)
				}
				this.isSelect = !this.isSelect
				this.isSelect = !this.isSelect
			},
			add(i,j){
				this.data[i][j].num++
				this.sum += Number(this.data[i][j].price)
				this.isSelect = !this.isSelect
				this.isSelect = !this.isSelect
			},
			deletePro(){
				this.sum = 0
				var length = 0
				for(var i=0;i<this.data.length;i++){
					length = this.data[i].length
					for(var j=0;j<length;j++){
						if(this.allSingleSelect[i][j]===true){
							this.data[i].splice(j,1)
							
							this.allSingleSelect[i].splice(j,1)
							j--
						}
					}
				}
				for(var i=0;i<this.data.length;i++){
					length = this.data[i].length
					for(var j=0;j<this.data[i].length;j++){
						this.allSingleSelect[i][j]=false
						this.sum += Number(this.data[i][j].num)*Number(this.data[i][j].price)
					}
				}
				this.isEmpty = true
				for(var i=0;i<this.data.length;i++){
					if(this.data[i].length>0){
						this.isEmpty = false
					}
				}
				this.isSelect = !this.isSelect
				this.isSelect = !this.isSelect
			}
		}
	}
</script>

<style lang="scss" scoped>
	.back{
		display: inline-block;
		width: .44rem;
		height: .44rem;
		position: absolute;
		top: 0;
		font-size: 16px;
		left: 0;
	}
	.edit{
		position: absolute;
		right: 8px;
		top: 0;
		width: .44rem;
		height: .44rem;
		text-align: center;
		line-height: .44rem;
		font-size: 14px;
	}
	.select{
		float: left;
		width: 22px;
		height: 22px;
		margin: 19px;
		margin-left: 12px;
		border: 1px solid #9b885f;
		border-radius: 50%;
		text-align: center;
		line-height: 22px;
		color: white;
		margin-right: 8px;
	}
</style>