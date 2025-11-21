import { describe, it, expect, beforeEach, vi } from 'vitest'
import request from 'supertest'
import express from 'express'
import { emailRateLimiter } from '../../src/middleware/rateLimiter'

describe('Rate Limiter Middleware', () => {
	let app: express.Application

	beforeEach(() => {
		app = express()
		app.use('/api/email', emailRateLimiter)
		app.post('/api/email', (_req, res) => {
			res.json({ success: true })
		})
		vi.clearAllMocks()
	})

	it('should allow requests within the rate limit', async () => {
		const response = await request(app).post('/api/email')

		expect(response.status).toBe(200)
		expect(response.body).toEqual({ success: true })
	})

	it('should set rate limit headers', async () => {
		const response = await request(app).post('/api/email')

		expect(response.headers).toHaveProperty('ratelimit-limit')
		expect(response.headers).toHaveProperty('ratelimit-remaining')
		expect(response.headers).toHaveProperty('ratelimit-reset')
	})

	it('should track remaining requests', async () => {
		const response1 = await request(app).post('/api/email')
		const response2 = await request(app).post('/api/email')

		const remaining1 = Number.parseInt(
			response1.headers['ratelimit-remaining'] as string
		)
		const remaining2 = Number.parseInt(
			response2.headers['ratelimit-remaining'] as string
		)

		expect(remaining2).toBeLessThan(remaining1)
	})

	it('should block requests exceeding the rate limit', async () => {
		// Make maximum allowed requests (10)
		for (let i = 0; i < 10; i++) {
			await request(app).post('/api/email')
		}

		// This request should be rate limited
		const response = await request(app).post('/api/email')

		expect(response.status).toBe(429)
		expect(response.text).toContain('Too many emails sent')
	})

	it('should return custom rate limit message', async () => {
		// Exhaust the rate limit
		for (let i = 0; i < 10; i++) {
			await request(app).post('/api/email')
		}

		const response = await request(app).post('/api/email')

		expect(response.status).toBe(429)
		expect(response.text).toContain('Too many emails sent')
		expect(response.text).toContain('15 minutes')
	})

	it('should use standard headers', async () => {
		const response = await request(app).post('/api/email')

		expect(response.headers).toHaveProperty('ratelimit-limit')
		expect(response.headers).not.toHaveProperty('x-ratelimit-limit')
	})

	it('should have correct rate limit maximum', async () => {
		const response = await request(app).post('/api/email')

		expect(response.headers['ratelimit-limit']).toBe('10')
	})

	it('should provide reset timestamp', async () => {
		const response = await request(app).post('/api/email')

		const resetTime = Number.parseInt(
			response.headers['ratelimit-reset'] as string
		)

		// Reset time is in seconds, should be a reasonable value (within 15 minutes from now in seconds)
		expect(resetTime).toBeGreaterThan(0)
		expect(resetTime).toBeLessThanOrEqual(15 * 60) // Should be at most 900 seconds
	})

	it('should only apply to /api/email route', async () => {
		app.post('/api/other', (_req, res) => {
			res.json({ success: true })
		})

		const response = await request(app).post('/api/other')

		expect(response.status).toBe(200)
		expect(response.headers).not.toHaveProperty('ratelimit-limit')
	})

	it('should track requests per IP address', async () => {
		// First request from IP
		const response1 = await request(app).post('/api/email')
		const remaining1 = Number.parseInt(
			response1.headers['ratelimit-remaining'] as string
		)

		// Second request from same IP
		const response2 = await request(app).post('/api/email')
		const remaining2 = Number.parseInt(
			response2.headers['ratelimit-remaining'] as string
		)

		// Second request should have same or fewer remaining requests
		expect(remaining2).toBeLessThanOrEqual(remaining1)
		// Both should be valid numbers
		expect(remaining1).toBeGreaterThanOrEqual(0)
		expect(remaining2).toBeGreaterThanOrEqual(0)
	})
})
