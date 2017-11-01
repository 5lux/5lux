<template>
	<div class="selectors">
		<slot :name="num">
			
		</slot>
	</div>
</template>

<script>
	export default {
		props:[
			'num'
		]
	}
</script>

<style>
</style>