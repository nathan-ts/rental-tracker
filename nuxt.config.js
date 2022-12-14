export default {
  // mode: 'universal',

	/*
	 * Headers of the page
	 */
	head: {
		title: process.env.npm_package_name || '',
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
		],
		link: [
			{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
		]
	},

	/*
	 * Plugins to load before mounting the App
	 */
	plugins: [
		'~/plugins/fontawesome.js',
	],
  

	/*
	 * Nuxt.js dev-modules
	 */
	buildModules: [
		// Doc: https://github.com/nuxt-community/nuxt-tailwindcss
		// '@nuxtjs/tailwindcss',
		'@nuxtjs/fontawesome'
	],

	/*
	 * Nuxt.js modules
	 */
	modules: ['@nuxtjs/tailwindcss'],

	/*
	 * Build configuration
	 */
	build: {
		/*
		 * You can extend webpack config here
		 */
		extend (config, ctx) {
		}
	},

  // Auto import components
	components: true,
}