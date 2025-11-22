import { EmailData } from '@/types/email'
import { API_URL } from '@/constants/env'
import axios from 'axios'

export function sendEmail(data: EmailData) {
	return axios.post(`${API_URL}/send-email`, data)
}
