module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-scss',
		'stylelint-config-recommended-vue',
	],
	rules: {
		// Add or customize rules as needed
	},
	overrides: [
		{
			files: ['*.vue'],
			customSyntax: 'postcss-html',
		},
	],
}
