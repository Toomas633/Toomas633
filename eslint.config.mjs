import { defineConfig } from 'eslint/config'
import vue from 'eslint-plugin-vue'
import typescriptEslint from '@typescript-eslint/eslint-plugin'
import vuetify from 'eslint-plugin-vuetify'
import prettier from 'eslint-plugin-prettier'
import globals from 'globals'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import js from '@eslint/js'
import { FlatCompat } from '@eslint/eslintrc'
import vueEslintParser from 'vue-eslint-parser'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const compat = new FlatCompat({
	baseDirectory: __dirname,
	recommendedConfig: js.configs.recommended,
	allConfig: js.configs.all,
})

export default defineConfig([
	...vue.configs['flat/recommended'],
	{
		extends: compat.extends(
			'eslint:recommended',
			'plugin:@typescript-eslint/recommended',
			'plugin:prettier/recommended',
			'plugin:vuetify/recommended'
		),

		plugins: { vue, '@typescript-eslint': typescriptEslint, vuetify, prettier },

		languageOptions: {
			globals: { ...globals.node, ...globals.browser },
			ecmaVersion: 'latest',
			parser: vueEslintParser,
			parserOptions: {
				parser: '@typescript-eslint/parser',
				ecmaVersion: 'latest',
				ecmaFeatures: { jsx: true },
			},
		},

		rules: {
			// TypeScript adjustments
			'@typescript-eslint/explicit-module-boundary-types': 'off',
			'@typescript-eslint/no-explicit-any': 'warn',
			'@typescript-eslint/no-unused-vars': [
				'error',
				{ argsIgnorePattern: '^_' },
			],
			// Vuetify deprecation awareness
			'vuetify/no-deprecated-classes': 'warn',
			'vuetify/no-deprecated-props': 'warn',
			'vuetify/no-deprecated-colors': 'off',
			// General JS rules
			'no-console': ['error', { allow: ['info', 'warn', 'error'] }],
			'no-debugger': 'warn',
			// Prettier integration
			'prettier/prettier': ['error', { singleQuote: true, semi: false }],
		},
	},
])
