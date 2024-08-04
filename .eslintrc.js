module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
	},
	extends: [
		'plugin:vue/vue3-recommended',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'plugin:prettier/recommended',
	],
	plugins: [
		'vue',
		'@typescript-eslint',
	],
	parserOptions: {
		ecmaVersion: 2020,
		sourceType: 'module',
	},
	rules: {
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
			files: ['src/**/*', 'backend/**/*'],
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	],
}
