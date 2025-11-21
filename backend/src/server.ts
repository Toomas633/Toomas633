import app from './app.js'
import { config } from './config/env.js'
import {
	createTransporter,
	verifyEmailConnection,
} from './services/emailService.js'
import { logWithTimestamp, objectToString } from './utils/helpers.js'
import type { Server } from 'node:http'

const startServer = async (): Promise<void> => {
	try {
		logWithTimestamp('info', 'Verifying email server connection...')
		const transporter = createTransporter()
		const duration = await verifyEmailConnection(transporter)
		logWithTimestamp('warn', 'Email server connection verified', duration)

		const server: Server = app.listen(config.server.port, () => {
			logWithTimestamp(
				'info',
				`Backend listening on port ${config.server.port}`
			)
		})

		const gracefulShutdown = (signal: string): void => {
			logWithTimestamp('info', `${signal} received, shutting down gracefully`)
			server.close(() => {
				logWithTimestamp('info', 'Server closed')
				process.exit(0)
			})
		}

		process.on('SIGTERM', () => gracefulShutdown('SIGTERM'))
		process.on('SIGINT', () => gracefulShutdown('SIGINT'))
	} catch (err) {
		logWithTimestamp(
			'error',
			'Failed to verify email server connection at startup'
		)
		const errorInfo =
			err instanceof Error
				? objectToString({
						name: err.name,
						message: err.message,
						stack: err.stack,
					})
				: 'Unknown error'
		console.error(errorInfo)
		process.exit(1)
	}
}

startServer()
