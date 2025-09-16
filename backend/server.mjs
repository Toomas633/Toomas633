import express from 'express'
import nodemailer from 'nodemailer'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import rateLimit from 'express-rate-limit'

dotenv.config()

const { EMAIL_HOST, EMAIL_USER, EMAIL_PASS, EMAIL_TO, ALLOWED_ORIGINS } =
	process.env

const requiredEnvVars = {
	EMAIL_HOST,
	EMAIL_USER,
	EMAIL_PASS,
	EMAIL_TO,
	ALLOWED_ORIGINS,
}

for (const [key, value] of Object.entries(requiredEnvVars)) {
	if (value === undefined) {
		console.error(`Missing required environment variable: ${key}`)
		process.exit(1)
	}
}

const app = express().disable('x-powered-by')

const corsOptions = {
	methods: ['POST'],
	allowedHeaders: ['Content-Type'],
	origin: (origin, callback) => {
		const allowedOrigins = ALLOWED_ORIGINS.split(',')
		if (allowedOrigins.includes(origin) || !origin) {
			callback(null, true)
		} else {
			callback(new Error(`Not allowed by CORS from origin ${origin}`))
		}
	},
}

const emailRateLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	max: 10,
	message:
		'Too many emails sent from this IP, please try again after 15 minutes',
	standardHeaders: true,
	legacyHeaders: false,
})

app.use(bodyParser.json())
app.use(cors(corsOptions))

const createTransporter = () =>
	nodemailer.createTransport({
		host: EMAIL_HOST,
		port: 587,
		requireTLS: true,
		secure: false,
		auth: {
			user: EMAIL_USER,
			pass: EMAIL_PASS,
		},
	})

app.post('/send-email', emailRateLimiter, async (req, res) => {
	const { from, message, project } = req.body
	const transporter = createTransporter()
	try {
		await transporter.verify()
		const mailOptions = {
			from: EMAIL_USER,
			to: EMAIL_TO,
			subject: project,
			text: message,
			replyTo: from,
		}
		const info = await transporter.sendMail(mailOptions)
		res.status(200).json({ success: true, info })
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Error sending email',
			stack: objectToString(error),
		})
	}
})

function objectToString(obj) {
	return Object.entries(obj)
		.map(([key, value]) => `${key}: ${value}`)
		.join(',')
}

;(async () => {
	const transporter = createTransporter()
	try {
		console.info('Verifying email server connection...')
		const start = Date.now()
		await transporter.verify()
		console.warn(`Email server connection verified in ${Date.now() - start}ms`)
	} catch (err) {
		console.error('Failed to verify email server connection at startup.')
		console.error(objectToString(err))
		process.exit(1)
	}

	app.listen(3000, () => {
		console.info(`Backend listening on port ${3000}`)
	})
})()
