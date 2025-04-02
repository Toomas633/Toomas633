/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path')

module.exports = {
	transpileDependencies: true,
	productionSourceMap: true,
	publicPath: '/',

	pluginOptions: { vuetify: {} },

	configureWebpack: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
				'@icons': path.resolve(__dirname, 'icons'),
				'@public': path.resolve(__dirname, 'public'),
			},
		},
	},
}
