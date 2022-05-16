import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	head : {
		meta: [
		{ charset: 'utf-8' },
		{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
		{ hid: 'description', name: 'description', content: '' }
		],
		link: [
		{ rel: 'icon', type: 'image/png', href: '/favicon.png' }
		]
	},
	css: ["@/assets/scss/app.scss"],
	vite: {
		css: {
			preprocessorOptions: {
				scss: {},
			},
		},
	},
})
