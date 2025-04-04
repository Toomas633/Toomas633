import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import compression from 'vite-plugin-compression'
import zlib from 'zlib'
import viteImagemin from 'vite-plugin-imagemin'
import purgecss from 'vite-plugin-purgecss'

export default defineConfig({
	plugins: [
		vue({ template: { transformAssetUrls } }),
		vuetify(),
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
		purgecss({
			content: ['./src/**/*.html', './src/**/*.vue', './src/**/*.ts'],
			extractors: [
				{
					extractor: (content) => content.match(/[A-Za-z0-9-_:/]+/g) || [],
					extensions: ['html', 'vue', 'ts'],
				},
			],
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
