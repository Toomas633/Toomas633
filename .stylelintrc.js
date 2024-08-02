module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-scss',
		'stylelint-config-recommended-vue',
	],
	rules: {},
	overrides: [
		{
			files: ['*.vue'],
			customSyntax: 'postcss-html',
		},
	],
}
