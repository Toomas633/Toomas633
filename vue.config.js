import { resolve as _resolve } from 'path'

export const transpileDependencies = true
export const productionSourceMap = true
export const publicPath = '/'
export const pluginOptions = { vuetify: {} }
export const configureWebpack = {
	resolve: {
		alias: {
			'@': _resolve(__dirname, 'src'),
			'@icons': _resolve(__dirname, 'icons'),
			'@public': _resolve(__dirname, 'public'),
		},
	},
}
