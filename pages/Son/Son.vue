<template>
	<view>
		I am Son
	</view>
	<button @tap="clickBack">点击去上一层</button>
	<navigator open-type="navigateBack">方法二：点击返回</navigator>
</template>

<script setup>
	let msg = 'this is a son msg!'
	uni.$emit('sonToFather',msg)
	function clickBack(){
		console.log('点击返回');
		uni.navigateBack()
	}
</script>

<style>

</style>
