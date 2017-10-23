import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import shopIndex from '../scripts/pages/ShopIndex.vue';
import bag from '../scripts/pages/ShopBag.vue';
import Detail from '../scripts/pages/Detail.vue';
import shopIndexStore from '../scripts/pages/ShopIndexStore.vue';
import beauty from '../scripts/pages/ShopBeauty.vue';
import page404 from '../scripts/pages/404.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
		path: '/',
		component: shopIndex,
		redirect: '/shopIndexFashion',
		children: [
			{
				path: '/shopIndexFashion',
				component: shopIndexStore
			},
			{
				path: '/shopBag',
				component: bag
			},
			{
				path: '/shopBeauty',
				component: beauty
			}
		]
	},
	{
		path: '/detail',
		component: Detail
	},
	{
		path: '*',
		component: page404
	}
  ]
})
