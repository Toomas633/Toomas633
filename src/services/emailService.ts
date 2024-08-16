import { EmailData } from '@/types/email'
import axios from 'axios'

export function sendEmail(data: EmailData) {
	return axios.post('/api/send-email', data)
}
