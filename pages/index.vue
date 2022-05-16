<template>
	<div class="uk-container">
		<h1 class="uk-heading-medium">{{greeting}}</h1>
		<p>
			Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque amet quos repudiandae esse eveniet labore sunt impedit officia, voluptas perferendis nesciunt quia ducimus itaque alias accusantium cum autem ut reprehenderit.
		</p>
		<button class="uk-button uk-button-primary" @click="doSomething">
			Buy Me
		</button>
	</div>
</template>
<script setup>
const greeting = "Hello World!"

function doSomething(){
	useNuxtApp().$uikit.notification({
		message: 'Notification Demo',
		status: 'primary',
		pos: 'bottom-center',
		timeout: 5000
	})
}
</script>