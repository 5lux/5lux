import shopIndex from './pages/ShopIndex.vue';
import bag from './pages/ShopBag.vue';
import Detail from './pages/Detail.vue';

export default [
	{
		path: '/',
		component: shopIndex,
		children: [
			{
				path: '/shopIndex',
				component: shopIndex
			},
			{
				path: '/shopBag',
				component: bag
			}
		]
	},
	{
		path: '/detail',
		component: Detail
	}
]

