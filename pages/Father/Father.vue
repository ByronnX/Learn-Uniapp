<template>
	<view>
		I am Father
	</view>
	<button @tap="clickToSon">方法一：点击去son</button>
	<navigator open-type="navigate" url="/pages/Son/Son">方法二：点击去Son</navigator>
	<Son></Son>
	<!-- <Daughter></Daughter> -->
	
</template>

<script setup>
	// import Daughter from '@/pages/Daughter/Daughter.vue'
	import Son from '@/pages/Son/Son.vue'
	uni.$on('sonToFather',function(data){
		console.log(data,'sonMsg!!!!!!!!!!!');
	})
	function clickToSon(){
		uni.navigateTo({
			url: '/pages/Son/Son'
		})
	}
</script>

<style>

</style>
