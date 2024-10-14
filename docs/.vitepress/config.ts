import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: 'Strawhouse',
	description: 'Lightweight file store engine',
	themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
			{ text: 'Documentation', link: '/backend/' },
		],
		socialLinks: [
			{ icon: 'github', link: 'https://github.com/strawstacks' },
		],
		sidebar: [
			{
				text: 'Backend',
				link: '/backend/',
				items: [
					{ text: 'Installation', link: '/backend/installation' },
					{ text: 'Configuration', link: '/backend/configuration' },
				],
			},
			{
				text: 'API',
				link: '/api/',
				items: [
					{ text: 'API Reference', link: '/api/reference' },
				],
			},
			{
				text: 'Driver',
				link: '/driver/',
				items: [
					{
						text: 'SDK Reference',
						link: '/driver/reference',
						items: [
							{ text: 'Signature', link: '/driver/reference-signature' },
							{ text: 'Client', link: '/driver/reference-client' },
						],
					},
				],
			},
		],
		search: {
			provider: 'local'
		}
	},
})
