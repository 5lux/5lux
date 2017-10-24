<template>
	<div class="shopSpecial">
		<img :src=""/>
	</div>
</template>

<script>
	import Vue from 'vue';
	import axios from 'axios';
	export default {
		props: [
			'msg'
		],
		data() {
			return {
				
			}
		},
		mounted() {
		    console.log(this.msg)
		}
	}
</script>

<style>
</style>