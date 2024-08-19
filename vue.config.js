/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('path')
const BundleAnalyzerPlugin =
	require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const isProduction = process.env.NODE_ENV === 'production'
const plugins = []

if (!isProduction) {
	plugins.push(new BundleAnalyzerPlugin())
}

module.exports = {
	transpileDependencies: true,
	productionSourceMap: true,
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
		plugins: plugins,
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
				'@icons': path.resolve(__dirname, 'icons'),
			},
		},
	},
}
