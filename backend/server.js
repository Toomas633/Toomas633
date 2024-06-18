const express = require('express')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')
const cors = require('cors')
const { Pool } = require('pg')

const app = express()
const port = 3000

const pool = new Pool({
	user: 'your_postgres_user',
	host: 'localhost',
	database: 'commentsdb',
	password: 'your_postgres_password',
	port: 5432,
})

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

const comments = []

app.get('/api/comments', async (req, res) => {
	try {
		const result = await pool.query('SELECT * FROM comments')
		res.status(200).json(result.rows)
	} catch (error) {
		console.error('Error fetching comments:', error)
		res.status(500).json({ error: 'Internal Server Error' })
	}
})

app.post('/comments', async (req, res) => {
	const { author, comment, timestamp } = req.body
	try {
		const result = await pool.query(
			'INSERT INTO comments (author, comment, timestamp) VALUES ($1, $2, $3) RETURNING *',
			[author, comment, timestamp]
		)
		res.status(201).json(result.rows[0])
	} catch (error) {
		console.error('Error saving comment:', error)
		res.status(500).json({ error: 'Internal Server Error' })
	}
})

app.listen(port, () => {
	console.log(`Server running on http://localhost:${port}`)
})
