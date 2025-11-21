import js from '@eslint/js'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'

export default [
	js.configs.recommended,
	{
		files: ['src/**/*.mjs', 'src/**/*.js'],
		languageOptions: {
			globals: {
				...globals.node,
			},
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
		plugins: {
			prettier,
		},
		rules: {
			// Node.js best practices
			'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
			'no-debugger': 'warn',
			'no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
			'prefer-const': 'error',
			'no-var': 'error',
			// Prettier integration
			'prettier/prettier': [
				'error',
				{
					singleQuote: true,
					semi: false,
					tabWidth: 2,
					useTabs: true,
					trailingComma: 'es5',
				},
			],
		},
	},
]
