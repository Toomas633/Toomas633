import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import compression from 'vite-plugin-compression'
import zlib from 'zlib'
import viteImagemin from 'vite-plugin-imagemin'
import vueDevTools from 'vite-plugin-vue-devtools'
import Components from 'unplugin-vue-components/vite'
import pkg from './package.json'

interface PkgJson {
	version?: string
}

export default defineConfig((): import('vite').UserConfig => {
	const version = (pkg as PkgJson).version || '0.0.0'
	const vueVersion = (pkg.dependencies?.vue ?? '').replace('^', '')
	const vuetifyVersion = (pkg.dependencies?.vuetify ?? '').replace('^', '')
	return {
		define: {
			__VUE_VERSION__: JSON.stringify(vueVersion),
			__VUETIFY_VERSION__: JSON.stringify(vuetifyVersion),
			__APP_VERSION__: JSON.stringify(version),
		},
		plugins: [
			vue({ template: { transformAssetUrls } }),
			vuetify(),
			vueDevTools(),
			Components(),
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
		optimizeDeps: {
			exclude: [
				'vuetify',
				'vue-router',
			],
		},
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
	}
})
