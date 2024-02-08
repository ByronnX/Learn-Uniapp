<template>
	<view id="app">
		我是Index
	</view>
<Father></Father>
<uni-test2></uni-test2>
<uni-test3></uni-test3>
<swiper >
	<swiper-item style="width: 100vw;height: 200px;">
		<view>A</view>
	</swiper-item>
	<swiper-item style="width: 100vw;height: 200px;">B</swiper-item>
	<swiper-item style="width: 100vw;height: 200px;">C</swiper-item>
</swiper>
<scroll-view style="height: 200px;" scroll-y="true">
	<view style="width: 100vw;height: 200px;background-color: rebeccapurple;">A</view>
	<view style="width: 100vw;height: 200px;background-color: cadetblue;">B</view>
	<view style="width: 100vw;height: 200px;background-color: aqua;">C</view>
</scroll-view>
<button @tap="scanCode">11111111111</button>
</template>


<script setup>

import Father from '@/pages/Father/Father.vue'
// import uniTest from '@/pages/uni-test/uni-test.vue'
	
function chooseImg(){
	uni.chooseImage({
		success(data){
			console.log(data)
		}
	})
}
function scanCode(){
	uni.scanCode({
		success(data){
			console.log(data)
		}
	})
}
</script>

<style>
	@import "./index.css"
</style>