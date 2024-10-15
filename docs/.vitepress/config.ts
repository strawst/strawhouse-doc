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
			{
				text: 'Command Line',
				link: '/command/',
				items: [
					{
						text: 'Installation',
						link: '/command/installation',
					},
					{
						text: 'Command Reference',
						link: '/command/reference',
						items: [
							{ text: 'Config', link: '/command/reference-config' },
							{ text: 'Sign', link: '/command/reference-sign' },
							{ text: 'Directory List', link: '/command/reference-directory-list' },
							{ text: 'Feed Upload', link: '/command/reference-feed-upload' },
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
