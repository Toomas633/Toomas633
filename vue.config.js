/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path')

module.exports = {
	transpileDependencies: true,
	publicPath: '/',

	pluginOptions: {
		vuetify: {},
	},

	configureWebpack: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
				'@icons': path.resolve(__dirname, 'icons'),
			},
		},
	},
}
