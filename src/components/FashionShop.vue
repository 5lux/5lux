<template>
	<div class="shProUL">
		<ul>
			<li v-for="value in message">
				<img v-lazy="value.store_thumb"/>
				<p>{{value.store_title}}</p>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		props: ['message']
	}
</script>

<style style="css" scoped>
	ul{
		position: relative;
	}
	p{
		position: absolute;
		bottom: 2px;
		width: 121px;
		text-align: center;
		color: white;
		font-size: 13px;
	}
</style>