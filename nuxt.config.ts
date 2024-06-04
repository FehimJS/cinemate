// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	modules: ["@nuxtjs/tailwindcss", "@vueuse/nuxt"],
	app: {
		head: {
			title:'Film ve diziler - sinemaizle',
			link: [
				{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
			{
				rel: "icon",
				type: "image/png",
				sizes: "16x16",
				href: "/favicon-16x16.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "32x32",
				href: "/favicon-32x32.png",
			},
			{
				rel: "apple-touch-icon",
				sizes: "180x180",
				href: "/apple-touch-icon.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "192x192",
				href: "/android-chrome-192x192.png",
			},
			{
				rel: "icon",
				type: "image/png",
				sizes: "512x512",
				href: "/android-chrome-512x512.png",
			},
				{ rel: "manifest", href: "/site.webmanifest" },
				{
					rel: "stylesheet",
					href: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.css",
				},
			],
			script: [
				{
					src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/2.3.0/flowbite.min.js",
				},
			],
			// ************************************
		
		meta: [
			{},
			{ name: "msapplication-TileColor", content: "#2d89ef" },
			{ name: "theme-color", content: "#ffffff" },
		],
	
			// ************************************
		},
	},
	runtimeConfig: {
		ACCESS_TOKEN: process.env.ACCESS_TOKEN,
		API_KEY: process.env.API_KEY,
		public:{
			baseURL:process.env.BASE_URL || 'http://localhost:3000'
		}
	},
});
