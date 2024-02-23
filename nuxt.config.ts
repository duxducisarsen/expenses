export default defineNuxtConfig({

	srcDir: './',

	devtools: { enabled: false },

	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "~/assets/_colors.scss" as *;'
				}
			}
		},
		vue: {
			customElement: true
		}
	},

	modules: [
		// 'commons_front',
		'@nuxt/ui',
		'@pinia/nuxt',
		'@pinia-plugin-persistedstate/nuxt',
		'dayjs-nuxt',
		'@vite-pwa/nuxt',
		'@nuxtjs/tailwindcss'
	],

	tailwindcss: {
		viewer: true,
		
		cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }],
		configPath: '~/tailwind.config.js',
		exposeConfig: {
			level: 2
		},
		config: {}
	},

	css: [
		'/assets/css/main.css',
	],

	build: {
	},

	// Variables por entorno
	$production: {
		// appId: 8
	//   routeRules: {
	// '/**': { isr: true }
	//   }
	},
	$development: {
	
	},


	//  Variables public se mestra, las demás quedan en backend
	
	runtimeConfig: {
		// The private keys which are only available server-side
		//   apiSecret: '123',
		// Keys within public are also exposed client-side
		public: {
			appBase: process.env.APP_URL,
			apiBase: process.env.API_URL,
		}
	},
	// ,

	// imports: {
	// 	presets: [
	// 		{
	// 			from: 'commons_front',
	// 			imports: ['useStoreAdvices']
	// 		}
	// 	]
	// }

	pwa: {
		client: {
			installPrompt: true
		}
	}
})
