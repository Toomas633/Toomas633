import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import compression from 'vite-plugin-compression'
import zlib from 'zlib'
import viteImagemin from 'vite-plugin-imagemin'
import vueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig({
	plugins: [
		vue({ template: { transformAssetUrls } }),
		vuetify(),
		vueDevTools(),
		compression({
			algorithm: 'brotliCompress',
			ext: '.br',
			threshold: 10240,
			compressionOptions: {
				params: {
					[zlib.constants.BROTLI_PARAM_QUALITY]: 11,
				},
			},
		}),
		viteImagemin({
			gifsicle: { optimizationLevel: 7 },
			svgo: {
				plugins: [
					{ name: 'removeViewBox', active: false },
					{ name: 'removeEmptyAttrs', active: true },
				],
			},
			webp: {
				quality: 100,
				lossless: true,
			},
		}),
	],
	build: {
		sourcemap: true,
		chunkSizeWarningLimit: 1500,
		minify: 'terser',
		terserOptions: {
			compress: { drop_console: true, drop_debugger: true, passes: 2 },
			output: { comments: false },
		},
		rollupOptions: {
			treeshake: true,
		},
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@icons': fileURLToPath(new URL('./icons', import.meta.url)),
			'@public': fileURLToPath(new URL('./public', import.meta.url)),
		},
	},
})
