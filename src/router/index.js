import Vue from 'vue';
import VueRouter from "vue-router";
import Index from "../App.vue";
import myMall from "../components/myMall.vue";
import myFaction from "../components/myFaction.vue";
import myGoshop from "../components/myGoshop.vue";
import Mine from "../components/Mine.vue";
import myDetail from "../components/myDetail.vue";
import myPosition from "../components/myPosition.vue";
import Errorpage from "../components/Errorpage";
import ShopIndexFashion from "../components/ShopIndexFashion.vue";
import ShopSpecial from "../components/ShopSpecial.vue";

import Cart from "../components/Cart.vue";
Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    {
			path:"/",
			component:Index,
			redirect:"/myPosition",
			children:[
				{
					path:"/myPosition",
					component:myPosition
				},{
					path:"/myMall",
					component:myMall,
					redirect:"/ShopIndexFashion",
					children:[
						{
							path:"/ShopIndexFashion",
							component:ShopIndexFashion 
						},
						{
							path:"/ShopSpecial",
							component:ShopSpecial 
						}
					]
				},{
					path:"/myFaction",
					component:myFaction
				},{
					path:"/myGoshop",
					component:myGoshop
				}
			]
		},{
			path:"/myDetail/:id",
			component:myDetail,
			name:"myDetail"
		},{
			path:"/Mine",
			component:Mine,
			name:"Mine"
		},{
			path:"/cart",
			component:Cart
		},{
			path:"/*",
			component:Errorpage
		}
  ]
})
