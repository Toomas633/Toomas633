// Global test setup for backend
import { beforeAll, afterAll } from 'vitest'

beforeAll(() => {
	// Setup code before all tests
	process.env.NODE_ENV = 'test'

	// Set mock environment variables for tests
	process.env.EMAIL_HOST = 'smtp.test.com'
	process.env.EMAIL_USER = 'test@example.com'
	process.env.EMAIL_PASS = 'test-password'
	process.env.EMAIL_TO = 'recipient@example.com'
	process.env.ALLOWED_ORIGINS = 'http://localhost:5173'
})

afterAll(() => {
	// Cleanup code after all tests
})
