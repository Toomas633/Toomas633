const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const port = 3000

app.use(bodyParser.json())
app.use(cors())

app.post('/send-email', (req, res) => {
	const { email, message, project } = req.body

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			user: 'your-email@gmail.com',
			pass: 'your-email-password',
		},
	})

	const mailOptions = {
		from: email,
		to: 'info@toomas633.com',
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
