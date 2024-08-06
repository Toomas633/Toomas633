const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()

const port = process.env.BACKEND_PORT

const email = {
	service: process.env.EMAIL_SERVICE,
	user: process.env.EMAIL_USER,
	pass: process.env.EMAIL_PASS,
	to: process.env.EMAIL_TO,
}

const app = express().disable('x-powered-by')

app.use(bodyParser.json())

const corsOptions = {
	origin: process.env.CORS_ORIGIN,
}
app.use(cors(corsOptions))

app.post('/send-email', (req, res) => {
	const { from, message, project } = req.body

	const transporter = nodemailer.createTransport({
		service: email.service,
		auth: {
			user: email.user,
			pass: email.pass,
		},
		secure: true,
	})

	transporter.verify((error) => {
		if (error) {
			return res.status(500).json({ success: false, error })
		}
	})

	const mailOptions = {
		from: from,
		to: email.to,
		subject: `${project}`,
		text: message,
	}

	transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return res.status(500).json({ success: false, error })
		}
		res.status(200).json({ success: true, info })
	})
})

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`)
})
