import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineConfig({
	plugins: [vue({ template: { transformAssetUrls } }), vuetify()],
	build: { chunkSizeWarningLimit: 1500 },
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@icons': fileURLToPath(new URL('./icons', import.meta.url)),
			'@public': fileURLToPath(new URL('./public', import.meta.url)),
		},
	},
})
