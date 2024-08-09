import express from 'express'
import nodemailer from 'nodemailer'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

dotenv.config()

const { BACKEND_PORT, EMAIL_HOST, EMAIL_USER, EMAIL_PASS, EMAIL_TO } =
	process.env

const app = express().disable('x-powered-by')

const corsOptions = {
	methods: ['POST'],
	allowedHeaders: ['Content-Type'],
}

app.use(bodyParser.json())
app.use(cors(corsOptions))

const createTransporter = () => {
	return nodemailer.createTransport({
		host: EMAIL_HOST,
		secure: true,
		auth: {
			user: EMAIL_USER,
			pass: EMAIL_PASS,
		},
	})
}

app.post('/send-email', async (req, res) => {
	const { from, message, project } = req.body
	const transporter = createTransporter()

	try {
		await transporter.verify()

		const mailOptions = {
			from,
			to: EMAIL_TO,
			subject: project,
			text: message,
		}

		const info = await transporter.sendMail(mailOptions)
		res.status(200).json({ success: true, info })
	} catch (error) {
		res.status(500).json({
			success: false,
			message: 'Error sending email',
			stack: objectToString(error),
			debug: process.env,
		})
	}
})

function objectToString(obj) {
	return Object.entries(obj)
		.map(([key, value]) => `${key}: ${value}`)
		.join(',')
}

app.listen(BACKEND_PORT, () => {
	console.log(`Server running on http://localhost:${BACKEND_PORT}`)
})
