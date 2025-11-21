import rateLimit from 'express-rate-limit'
import { rateLimitConfig } from '../config/env.js'

export const emailRateLimiter = rateLimit({
	windowMs: rateLimitConfig.windowMs,
	max: rateLimitConfig.max,
	message: rateLimitConfig.message,
	standardHeaders: true,
	legacyHeaders: false,
})
