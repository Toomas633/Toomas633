module.exports = {
	extends: [
		'stylelint-config-standard',
		'stylelint-scss',
		'stylelint-config-recommended-vue',
		'stylelint-config-recommended-scss',
	],
	rules: {
		'at-rule-no-unknown': null,
		'scss/at-rule-no-unknown': true,
		'block-no-empty': true,
		'color-no-invalid-hex': true,
		'comment-no-empty': true,
		'declaration-block-no-duplicate-properties': true,
		'no-duplicate-selectors': true,
		'property-no-unknown': true,
		'selector-pseudo-class-no-unknown': [
			true,
			{ ignorePseudoClasses: ['global'] },
		],
		'selector-type-no-unknown': [true, { ignoreTypes: ['/^v-/'] }],
		'unit-no-unknown': true,
	},
	overrides: [{ files: ['*.vue'], customSyntax: 'postcss-html' }],
	ignoreFiles: ['node_modules/**/*'],
}
