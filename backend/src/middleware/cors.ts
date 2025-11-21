import cors from 'cors'
import type { CorsOptions } from 'cors'
import { config } from '../config/env.js'

const corsOptions: CorsOptions = {
	methods: ['GET', 'POST'],
	allowedHeaders: ['Content-Type'],
	origin: (origin, callback) => {
		if (config.allowedOrigins.origins.includes(origin || '') || !origin) {
			callback(null, true)
		} else {
			callback(new Error(`Not allowed by CORS from origin ${origin}`))
		}
	},
}

export const corsMiddleware = cors(corsOptions)
