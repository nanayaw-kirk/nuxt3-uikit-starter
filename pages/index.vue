<template>
	<div class="uk-container">
		<h1>{{greeting}}</h1>
		<p>
			This is a Nuxt 3 minimal starter template showing how to use Nuxt 3 with the Uikit Framework. 
		</p>

		<ul>
			<li>Nuxt 3</li>
			<li>Vue 3</li>
			<li>Uikit 3</li>
			<li>Vite</li>
			<li>Sass</li>
		</ul>
		<button class="uk-button uk-button-primary" @click="testNotification">
			Test Notification
		</button>
	</div>
</template>
<script setup>

const greeting = "Hello"

function testNotification(){
	useNuxtApp().$uikit.notification({
		message: 'Notification Demo',
		status: 'primary',
		pos: 'bottom-center',
		timeout: 5000
	})
}
</script>