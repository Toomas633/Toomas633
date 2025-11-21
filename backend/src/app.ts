import express from 'express'
import bodyParser from 'body-parser'
import type { Application, Request, Response, NextFunction } from 'express'
import { corsMiddleware } from './middleware/cors.js'
import healthRoutes from './routes/health.js'
import emailRoutes from './routes/email.js'
import type { ErrorResponse } from './types/index.js'

const app: Application = express().disable('x-powered-by')

app.use(bodyParser.json())
app.use(corsMiddleware)

app.use('/', healthRoutes)
app.use('/', emailRoutes)

app.use('*', (req: Request, res: Response<ErrorResponse>) => {
	res.status(404).json({
		error: 'Not Found',
		message: `Cannot ${req.method} ${req.originalUrl}`,
	})
})

app.use(
	(
		error: Error,
		req: Request,
		res: Response<ErrorResponse>,
		_next: NextFunction
	) => {
		console.error('Unhandled error:', error)
		res.status(500).json({
			error: 'Internal Server Error',
			message: 'Something went wrong on the server',
		})
	}
)

export default app
