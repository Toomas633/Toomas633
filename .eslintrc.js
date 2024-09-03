module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
	},
	extends: [
		'eslint:recommended',
		'plugin:vue/vue3-recommended',
		'plugin:@typescript-eslint/recommended',
		'@vue/typescript/recommended',
		'plugin:prettier/recommended',
		'plugin:vuetify/recommended',
	],
	plugins: [
		'vue',
		'@typescript-eslint',
		'vuetify',
		'prettier'
	],
	parserOptions: {
		ecmaVersion: 2020,
		parser: '@typescript-eslint/parser',
		sourceType: 'module',
	},
	rules: {
		'vue/no-multiple-template-root': 'off',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'@typescript-eslint/no-explicit-any': 'warn',
		'vuetify/no-deprecated-classes': 'warn',
		'vuetify/no-deprecated-props': 'warn',
		'vuetify/no-deprecated-colors': 'off',
        'no-console': [
            process.env.NODE_ENV === 'production' ? 'error' : 'warn',
            {
                allow: ['warn', 'error']
            }
        ],
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn',
		'@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: false,
			},
		],
    },
	overrides: [
		{
			files: ['*.vue'],
			rules: {
			  'vue/script-setup-uses-vars': 'error',
			},
		  },
		{
			files: ['src/**/*', 'backend/**/*', 'public/**/*', 'scripts/**/*'],
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	],
}
