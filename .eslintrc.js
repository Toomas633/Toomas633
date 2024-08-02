module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'plugin:prettier/recommended',
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
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'warn'
    },
	overrides: [
		{
			files: ['src/**/*.{ts,js,jsx}', 'backend/**/*.{ts,js,jsx}'],
			parserOptions: {
				ecmaFeatures: {
					jsx: true,
				},
			},
		},
	],
}
