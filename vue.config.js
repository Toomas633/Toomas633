/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path')
const BundleAnalyzerPlugin =
	require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
	transpileDependencies: true,
	publicPath: '/',

	pluginOptions: {
		vuetify: {},
	},

	chainWebpack: (config) => {
		config.plugin('html').tap((args) => {
			args[0].title = "Toomas633's Dungeon"
			return args
		})
	},

	configureWebpack: {
		plugins: [new BundleAnalyzerPlugin()],
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
				'@icons': path.resolve(__dirname, 'icons'),
			},
		},
	},
}
