import nodemailer from 'nodemailer'
import type { Transporter, SentMessageInfo } from 'nodemailer'
import { config } from '../config/env.js'

export const createTransporter = (): Transporter => {
	return nodemailer.createTransport({
		host: config.email.host,
		port: config.email.port,
		requireTLS: config.email.requireTLS,
		auth: {
			user: config.email.user,
			pass: config.email.password,
		},
	})
}

export const verifyEmailConnection = async (
	transporter: Transporter
): Promise<number> => {
	const start = Date.now()
	await transporter.verify()
	return Date.now() - start
}

interface SendEmailParams {
	from: string
	message: string
	project: string
}

export const sendEmail = async ({
	from,
	message,
	project,
}: SendEmailParams): Promise<SentMessageInfo> => {
	const transporter = createTransporter()
	await transporter.verify()

	const mailOptions = {
		from: config.email.user,
		to: config.email.to,
		subject: project,
		text: message,
		replyTo: from,
	}

	return await transporter.sendMail(mailOptions)
}
