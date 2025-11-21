import { defineConfig } from 'vitest/config'

export default defineConfig({
	test: {
		globals: true,
		environment: 'node',
		setupFiles: ['./tests/setup.ts'],
		include: ['tests/**/*.spec.ts', 'tests/**/*.test.ts'],
		env: {
			NODE_ENV: 'test',
		},
		coverage: {
			provider: 'v8',
			reporter: ['text', 'json', 'html', 'lcov'],
			exclude: [
				'node_modules/',
				'dist/',
				'tests/',
				'**/*.spec.ts',
				'**/*.test.ts',
				'**/*.d.ts',
				'src/types/',
			],
		},
	},
})
