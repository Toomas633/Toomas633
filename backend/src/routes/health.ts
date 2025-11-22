import { Router } from 'express'
import type { Request, Response } from 'express'
import {
	createTransporter,
	verifyEmailConnection,
} from '../services/emailService.js'
import { healthRateLimiter } from '../middleware/rateLimiter.js'

interface HealthResponse {
	status: 'healthy' | 'unhealthy'
	timestamp: string
	email: {
		status: 'connected' | 'disconnected'
		responseTime?: string
		error?: string
	}
}

const router = Router()

router.get(
	'/health',
	healthRateLimiter,
	async (_req: Request, res: Response<HealthResponse>) => {
		const timestamp = new Date().toISOString()

		try {
			const transporter = createTransporter()
			const emailCheckDuration = await verifyEmailConnection(transporter)

			res.status(200).json({
				status: 'healthy',
				timestamp,
				email: {
					status: 'connected',
					responseTime: `${emailCheckDuration}ms`,
				},
			})
		} catch (error) {
			const errorMessage =
				error instanceof Error ? error.message : 'Unknown error'
			res.status(503).json({
				status: 'unhealthy',
				timestamp,
				email: {
					status: 'disconnected',
					error: errorMessage,
				},
			})
		}
	}
)

export default router
